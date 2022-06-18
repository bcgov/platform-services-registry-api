import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";

async function createCustomPrivateCloudProjectRequest(
  _,
  { metaData, productionQuota, developmentQuota, testQuota, toolsQuota },
  {
    dataSources: {
      users,
      privateCloudRequestedProjects,
      privateCloudActiveRequests,
    },
    kauth,
    chesService,
  }
) {
  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
    roles: [],
  };
  const [user] = await users.findByFields({ email });

  if (
    !roles.includes("admin") &&
    ![metaData.projectOwner, ...metaData.technicalLeads].includes(email)
  ) {
    throw new Error(
      "User must assign themselves as a project owner or technical lead"
    );
  }

  const [projectOwner] = await users.findByFields({
    email: metaData.projectOwner,
  });
  const technicalLeads = await users.findManyByFieldValues(
    "email",
    metaData.technicalLeads
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

  const requestedProject = await privateCloudRequestedProjects.create({
    ...metaData,
    productionQuota: {...defaultQuota, ...productionQuota},
    developmentQuota: {...defaultQuota, ...developmentQuota},
    testQuota: {...defaultQuota, ...testQuota},
    toolsQuota: {...defaultQuota, ...toolsQuota},
    createdBy: user._id,
    archived: false,
    created: new Date(),
    requestHistory: [],
    status: ProjectStatus.CREATE_REQUEST,
    projectOwner: projectOwner._id,
    technicalLeads: technicalLeads.map(({ _id }) => _id),
  });

  const request = await privateCloudActiveRequests.create({
    createdBy: requestedProject.createdBy,
    status: RequestStatus.PENDING_DECISION,
    type: RequestType.CREATE,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: requestedProject.created,
    decisionDate: null,
    project: null,
    requestedProject: requestedProject._id,
  });

  await users.addElementToManyDocumentsArray(
    [projectOwner, ...technicalLeads].map(({ _id }) => _id),
    {
      activeRequests: request._id,
    }
  );

  chesService.send({
    bodyType: "html",
    body: `<div style="color: blue" >Project Created</div>`,
    to: [projectOwner, ...technicalLeads].map(({ email }) => email),
    from: "Registry <PlatformServicesTeam@gov.bc.ca>",
    subject: `**profile.name** OCP 4 Project Set`,
    // subject: `${profile.name} OCP 4 Project Set`,
  });

  return request;
}

export default createCustomPrivateCloudProjectRequest;
