const { Pool } = require("pg");
const { ObjectId } = require("mongodb");
const { writeFileSync } = require("fs");

const pool = new Pool({
  host: "localhost",
  user: "okanji",
  password: "",
  port: 5432,
  database: "new_registry"
});

async function getPsqlUserData() {
  let userData;
  try {
    const { rows } = await pool.query(
      `
      SELECT * FROM contact
      `
    );
    userData = rows;
  } catch (err) {
    console.log(err);
  }

  return userData;
}

async function getPsqlContactProfileData() {
  let userData;
  try {
    const { rows } = await pool.query(
      `
      SELECT * FROM profile_contact
      `
    );
    userData = rows;
  } catch (err) {
    console.log(err);
  }

  return userData;
}

async function getPsqlProjectData() {
  let psqlData;
  try {
    const { rows } = await pool.query(
      `
      SELECT *, namespace.name AS namespace_name FROM namespace
      JOIN cluster_namespace ON cluster_namespace.namespace_id = namespace.id
      JOIN profile ON profile.id = namespace.profile_id;
      `
    );

    psqlData = rows;
  } catch (err) {
    console.log(err);
  }

  return psqlData;
}

function generateProjectData(projectData) {
  const activeProjects = projectData.filter(
    ({ archived, provisioned }) => !archived && provisioned
  );

  // Group all projects with the same namespace
  const oldRegistryProjects = activeProjects.reduce((acc, obj) => {
    let key = obj["namespace_prefix"];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});

  const newRegistryProjects = [];

  // Transform to form of Projects in MongoDb schema
  for (let proj of Object.entries(oldRegistryProjects)) {
    const [licencePlate, projects] = proj;

    const { name, id, created_at, description, cluster_id, bus_org_id } =
      projects[0];

    const namespaces = {};

    for (let namespaceName of ["dev", "prod", "tools", "test"]) {
      const {
        quota_cpu_size,
        quota_memory_size,
        quota_storage_size,
        quota_snapshot_size
      } = projects.find(
        (proj) => proj.namespace_name === `${licencePlate}-${namespaceName}`
      );

      const defaultQuota = {
        cpuRequests: 0.5,
        cpuLimits: 1.5,
        memoryRequests: 2,
        memoryLimits: 4,
        storageBlock: 1,
        storageFile: 512,
        storageBackup: 1,
        storageCapacity: 1,
        storagePvcCount: 60,
        snapshotCount: 5
      };

      namespaces[namespaceName] = {
        ...defaultQuota,
        cpuRequests: parseFloat(quota_cpu_size.split("-")[2]),
        cpuLimits: parseFloat(quota_cpu_size.split("-")[4]),
        memoryRequests: parseInt(quota_memory_size.split("-")[2]),
        memoryLimits: parseInt(quota_memory_size.split("-")[4]),
        storageFile: parseInt(quota_storage_size.split("-")[1]),
        snapshotCount: parseInt(quota_snapshot_size.split("-")[1])
      };
    }

    const newRegistryProject = {
      _id: { $oid: ObjectId() },
      licencePlate,
      name,
      created: created_at,
      description,
      cluster: cluster_id,
      ministry: bus_org_id,
      archived: false,
      status: "active",
      requestHistory: [],
      projectOwner: "",
      primaryTechnicalLead: "",
      secondaryTechnicalLead: "",
      productionQuota: namespaces.prod,
      developmentQuota: namespaces.dev,
      toolsQuota: namespaces.tools,
      testQuota: namespaces.test,
      activeEditRequest: null,
      commonComponents: {},
      profileId: id // Will keep the profile ID from the psql db for reference
    };

    newRegistryProjects.push(newRegistryProject);
  }

  return newRegistryProjects;
}

function generateUsersPerProject(userData, contatctProfileData) {
  const activeUsers = userData.filter(({ archived }) => !archived);

  const usersPerProject = contatctProfileData.reduce((acc, obj) => {
    let key = obj["profile_id"];
    if (!acc[key]) {
      acc[key] = [];
    }

    const contactId = obj["contact_id"];
    const contact = activeUsers.find(({ id }) => id === contactId);
    obj = { ...obj, ...contact };

    acc[key].push(obj);
    return acc;
  }, {});

  return usersPerProject;
}

(async function () {
  const projectData = await getPsqlProjectData();
  const userData = await getPsqlUserData();
  const contatctProfileData = await getPsqlContactProfileData();

  const newRegistryProjectData = generateProjectData(projectData);
  const usersPerProject = generateUsersPerProject(
    userData,
    contatctProfileData
  );

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const uniqueUsers = getUniqueListBy(userData, "email");
  const mongoUsers = uniqueUsers.map(
    ({ first_name, last_name, email, github_id, created_at }) => ({
      _id: { $oid: ObjectId() },
      githubId: github_id,
      firstName: first_name,
      lastName: last_name,
      email,
      archived: false,
      created: created_at,
      privateCloudProjectOwner: [],
      privateCloudPrimaryTechnicalLead: [],
      privateCloudSecondaryTechnicalLead: [],
      privateCloudActiveRequests: [],
      lastSeen: new Date()
    })
  );

  const mongoProjects = newRegistryProjectData.map((project) => {
    const { profileId } = project;

    const projectUsers = usersPerProject[profileId];

    const projectOwnerEmail = projectUsers.find(({ role_id }) => role_id === 1)[
      "email"
    ];

    const technicalLeadsEmails = projectUsers
      .filter(({ role_id }) => role_id === 2)
      .map(({ email }) => email);

    const { _id: projectOwnerMongoId } = mongoUsers.find(
      ({ email }) => email === projectOwnerEmail
    );
    const technicalLeadsMongoIds = mongoUsers
      .filter(({ email }) => technicalLeadsEmails.includes(email))
      .map(({ _id }) => _id);

    // project.technicalLeads = technicalLeadsMongoIds;
    project.primaryTechnicalLead = technicalLeadsMongoIds[0];
    project.secondaryTechnicalLead = technicalLeadsMongoIds[1];
    project.projectOwner = projectOwnerMongoId;
    project.createdBy = projectOwnerMongoId;

    return project;
  });

  mongoProjects.forEach((project, i) => {
    const { projectOwner, primaryTechnicalLead, secondaryTechnicalLead, _id } =
      project;

    const projectOwnerUserIndex = mongoUsers.findIndex(
      ({ _id }) => _id === projectOwner
    );

    if (projectOwnerUserIndex !== -1) {
      mongoUsers[projectOwnerUserIndex]["privateCloudProjectOwner"].push(_id);
    }

    const primaryTechnicalLeadUserIndex = mongoUsers.findIndex(
      ({ _id }) => _id === primaryTechnicalLead
    );

    if (primaryTechnicalLeadUserIndex !== -1) {
      mongoUsers[primaryTechnicalLeadUserIndex][
        "privateCloudPrimaryTechnicalLead"
      ].push(_id);
    }

    const secondaryTechnicalLeadUserIndex = mongoUsers.findIndex(
      ({ _id }) => _id === secondaryTechnicalLead
    );

    if (secondaryTechnicalLeadUserIndex !== -1) {
      mongoUsers[secondaryTechnicalLeadUserIndex][
        "privateCloudSecondaryTechnicalLead"
      ].push(_id);
    }
  });

  try {
    console.log(
      `Writing ${mongoUsers.length} mongoDb documents to mongoUsers.json`
    );
    console.log(
      `Writing ${mongoProjects.length} mongoDb documents to mongoProjects.json`
    );

    writeFileSync("./mongoUsers.json", JSON.stringify(mongoUsers), "utf8");
    writeFileSync(
      "./mongoProjects.json",
      JSON.stringify(mongoProjects),
      "utf8"
    );

    console.log("Data successfully saved to disk");
  } catch (error) {
    console.log("An error has occurred ", error);
  }

  pool.end();
})();
