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

      const createQuotaString = (quota) =>
        quota.replace(/\./g, "_").replace(/\-/g, "_").toUpperCase();

      namespaces[namespaceName] = {
        cpu: createQuotaString(quota_cpu_size),
        memory: createQuotaString(quota_memory_size),
        storage: createQuotaString(quota_storage_size)
      };
    }

    const defaultCommonComponents = {
      addressAndGeolocation: null,
      workflowManagement: null,
      formDesignAndSubmission: null,
      identityManagement: null,
      paymentServices: null,
      documentManagement: null,
      endUserNotificationAndSubscription: null,
      publishing: null,
      businessIntelligence: null,
      other: null,
      noServices: true
    };

    const clusterLookup = {
      1: "CLAB",
      2: "KLAB",
      3: "SILVER",
      4: "GOLD",
      5: "GOLDDR",
      6: "ARO",
      7: "KLAB2",
      8: "EMERALD"
    };

    const newRegistryProject = {
      _id: { $oid: ObjectId() },
      licencePlate,
      name,
      description,
      status: "ACTIVE",
      created: created_at,
      projectOwnerId: "",
      primaryTechnicalLeadId: "",
      secondaryTechnicalLeadId: "",
      ministry: bus_org_id,
      cluster: clusterLookup[cluster_id],
      productionQuota: namespaces.prod,
      testQuota: namespaces.test,
      developmentQuota: namespaces.dev,
      toolsQuota: namespaces.tools,
      commonComponents: defaultCommonComponents,
      profileId: id + "" // Will keep the profile ID from the psql db for reference
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
    ({ first_name, last_name, email, created_at }) => ({
      _id: { $oid: ObjectId() },
      firstName: first_name,
      lastName: last_name,
      email,
      ministry: null,
      archived: false,
      created: created_at,
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
    project.primaryTechnicalLeadId = technicalLeadsMongoIds[0];
    project.secondaryTechnicalLeadId = technicalLeadsMongoIds[1] || null;
    project.projectOwnerId = projectOwnerMongoId;

    return project;
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
