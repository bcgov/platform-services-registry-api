import ProjectStatus from "../../enum/ProjectStatus";
import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import Platform from "../../enum/Platform";
import generateNamespacePrefix from "../../../../helpers/generateNamespacePrefix";
import swig from "swig";

async function customPrivateCloudProjectRequest(_, args, context) {
  const {
    metaData,
    commonComponents,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota
  } = args;

  const {
    dataSources: {
      users,
      privateCloudRequestedProjects,
      privateCloudActiveRequests
    },
    kauth,
    chesService
  } = context;

  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
    roles: []
  };
  const [user] = await users.findByFields({ email });

  if (!user)
    throw new Error("User not found, please create a user for yourself");

  if (
    !roles.includes("admin") &&
    ![
      metaData.projectOwner,
      metaData.primaryTechnicalLead,
      metaData.secondaryTechnicalLead
    ].includes(email)
  ) {
    throw new Error(
      "User must assign themselves as a project owner or technical lead"
    );
  }

  const [projectOwner] = await users.findByFields({
    email: metaData.projectOwner
  });

  if (!projectOwner) throw new Error("Project owner not found");

  const [primaryTechnicalLead] = await users.findByFields({
    email: metaData.primaryTechnicalLead
  });

  if (!primaryTechnicalLead)
    throw new Error("Primary technical lead not found");

  const [secondaryTechnicalLead] = await users.findByFields({
    email: metaData.secondaryTechnicalLead
  });

  // Make sure that duplicate technical leads do not exist
  if (primaryTechnicalLead._id === secondaryTechnicalLead?._id)
    throw new Error("Primary and secondary technical leads cannot be the same");

  const licencePlate = generateNamespacePrefix();

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
    snapshotCount: 5
  };

  const requestedProject = await privateCloudRequestedProjects.create({
    ...metaData,
    commonComponents,
    projectOwner: projectOwner._id,
    primaryTechnicalLead: primaryTechnicalLead._id,
    secondaryTechnicalLead: secondaryTechnicalLead?._id,
    licencePlate,
    productionQuota: { ...defaultQuota, ...productionQuota },
    developmentQuota: { ...defaultQuota, ...developmentQuota },
    testQuota: { ...defaultQuota, ...testQuota },
    toolsQuota: { ...defaultQuota, ...toolsQuota },
    createdBy: user._id,
    archived: false,
    created: new Date(),
    requestHistory: [],
    status: ProjectStatus.CREATE_REQUEST,
    activeEditRequest: null
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
    [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
      .filter(Boolean)
      .map(({ _id }) => _id),
    {
      privateCloudActiveRequests: request._id
    }
  );

  try {
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/templates/provisioning-request-done.html",
        {
          // consoleButtons : '<div>CONSOLE BUTTONS GO HERE</div>',
          // humanActionComment: 'HUMAN ACTION COMMENT HERE',
          projectName: metaData.name,
          POName: projectOwner.firstName + " " + projectOwner.lastName,
          POEmail: projectOwner.email,
          technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead].filter(
            Boolean
          ),
          setCluster: metaData.cluster,
          licensePlate: requestedProject.licensePlate,
          showStandardFooterMessage: true // if false, shows  the  "love, Platform services" one from request-approval
        }
      ),
      to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `**profile.name** OCP 4 Project Set`
    });
  } catch (error) {
    console.log("CHES Error: ", error);
  }

  return request;
}

export default customPrivateCloudProjectRequest;
