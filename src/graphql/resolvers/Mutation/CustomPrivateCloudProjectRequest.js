import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";
import generateNamespacePrefix from "../../../helpers/generateNamespacePrefix"
import swig from "swig";

async function customPrivateCloudProjectRequest(
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

  const licencePlate = generateNamespacePrefix()

  const defaultQuota = {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5,
  }

  const requestedProject = await privateCloudRequestedProjects.create({
    ...metaData,
    licencePlate,
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
    decisionMaker: null
  });

  await users.addElementToManyDocumentsArray(
    [projectOwner, ...technicalLeads].map(({ _id }) => _id),
    {
      privateCloudActiveRequests: request._id,
    }
  );

  chesService.send({
    bodyType: "html",
    body:
      swig.renderFile('./src/ches/templates/provisioning-request-done.html', {
        // consoleButtons : '<div>CONSOLE BUTTONS GO HERE</div>',
        // humanActionComment: 'HUMAN ACTION COMMENT HERE',
        projectName: metaData.name,
        POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
        POEmail: projectOwner.email,
        TCName: `${metaData.technicalLeads[0].firstName} ${metaData.technicalLeads[0].lastName}`,
        TCEmail: metaData.technicalLeads[0].email,
        setCluster: metaData.cluster,
        licensePlate: requestedProject.licensePlate,
        showStandardFooterMessage: true,
      }),
    to: [projectOwner, ...technicalLeads].map(({ email }) => email),
    from: "Registry <PlatformServicesTeam@gov.bc.ca>",
    subject: `**profile.name** OCP 4 Project Set`,
    // subject: `${profile.name} OCP 4 Project Set`,
  });

  return request;
}

export default customPrivateCloudProjectRequest;
