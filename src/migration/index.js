const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "postgres",
  port: 5432,
  daatabase: "postgres",
});

async function getPsqlData() {
  let psqlData;
  try {
    await client.connect();
    const { rows } = await client.query(
      `
      SELECT *, namespace.name AS namespace_name FROM namespace
      JOIN cluster_namespace ON cluster_namespace.namespace_id = namespace.id
      JOIN profile ON profile.id = namespace.profile_id;
      `
    );

    psqlData = rows;
  } catch (err) {
    console.log(err);
  } finally {
    client.end();
  }

  return psqlData;
}

(async function () {
  const data = await getPsqlData();
  const activeProjects = data.filter(
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

  const newRegistryProjects = []

  // Transform to form of Projects in MongoDb schema
  for (let proj of Object.entries(oldRegistryProjects)) {
    const [licencePlate, projects] = proj;

    const { name, created_at, description, cluster_id, bus_org_id } =
      projects[0];

    const namespaces = {};

    for (let namespaceName of ["dev", "prod", "tools", "test"]) {
      const {
        quota_cpu_size,
        quota_memory_size,
        quota_storage_size,
        quota_snapshot_size,
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
        snapshotCount: 5,
      }

      namespaces[namespaceName] = {
        ...defaultQuota,
        cpuRequests: quota_cpu_size.split("-")[2],
        cpuLimits:  quota_cpu_size.split("-")[4],
        memoryRequests: quota_memory_size.split("-")[2],
        memoryLimits: quota_memory_size.split("-")[4],
        storageFile: quota_storage_size.split("-")[1],
        snapshotCount: quota_snapshot_size.split("-")[1]
      }
    }

    const mongoDbPRoject = {
      name,
      licencePlate,
      created: created_at,
      description,
      cluster: cluster_id,
      ministry: bus_org_id,
      archived: false,
      status: "active",
      requestHistory: [],
      projectOwner: "",
      technicalLeads: [],
      productionQuota: namespaces.prod,
      developmentQuota: namespaces.dev,
      toolsQuota: namespaces.tools,
      testQuota: namespaces.test,
    };

    newRegistryProjects.push(mongoDbPRoject)
  }

  console.log(newRegistryProjects)
})();
