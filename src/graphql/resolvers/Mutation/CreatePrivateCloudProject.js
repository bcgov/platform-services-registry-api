import ProjectStatus from "../scalar/ProjectStatus";
import Environment from "../scalar/Environment";
const { ObjectId } = require("mongodb");

async function createPrivateCloudProject(
  _,
  { input },
  { dataSources: { privateCloudProjects, users } }
) {
  const defaultNamespace = {
    cpuQuota: "test-cpu-quota",
    memoryQuota: "test-memory-quota",
    storageQuota: "test-storage-quota",
    snapshotQuota: "test-snapshot-quota",
  };

  const productionNamespace = {
    environment: Environment.PRODUCTION,
    ...defaultNamespace,
  };
  const testNamespace = { environment: Environment.TEST, ...defaultNamespace };

  const developmentNamespace = {
    environment: Environment.DEVELOPMENT,
    ...defaultNamespace,
  };

  const toolsNamespace = {
    environment: Environment.TOOLS,
    ...defaultNamespace,
  };

  const defaultProperties = {
    archived: false,
    created: new Date(),
    productionNamespace,
    testNamespace,
    developmentNamespace,
    toolsNamespace,
    requestHistory: [],
    status: ProjectStatus.SUBMITTED,
  };

  const project = await privateCloudProjects.create({
    ...defaultProperties,
    ...input,
  });

  // Find owner and technical lead user documents and add the project id
  await users.addElementToDocumentArray(ObjectId(input.productOwnerUserId), {
    projectOwner: project._id,
  });

  const result = await users.addElementToManyDocumentsArray(
    input.technicalLeadsUserIds.map((id) => ObjectId(id)),
    {
      technicalLead: project._id,
    }
  );

  return project;
}

export default createPrivateCloudProject;
