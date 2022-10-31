import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";
import generateNamespacePrefix from "../../../helpers/generateNamespacePrefix";
import swig from "swig";

async function customPrivateCloudProjectRequest(
  _,
  {
    metaData,
    commonComponents,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota,
  },
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
    ![
      metaData.projectOwner,
      metaData.primaryTechnicalLead,
      metaData.secondaryTechnicalLead,
    ].includes(email)
  ) {
    throw new Error(
      "User must assign themselves as a project owner or technical lead"
    );
  }

  const [projectOwner] = await users.findByFields({
    email: metaData.projectOwner,
  });

  if (!projectOwner) throw new Error("Project owner not found");

  // const technicalLeads = await users.findManyByFieldValues(
  //   "email",
  //   metaData.technicalLeads
  // );

  const [primaryTechnicalLead] = await users.findByFields({
    email: metaData.primaryTechnicalLead,
  });

  if (!primaryTechnicalLead)
    throw new Error("Primary technical lead not found");

  const [secondaryTechnicalLead] = await users.findByFields({
    email: metaData.secondaryTechnicalLead,
  });

 
  if (!secondaryTechnicalLead)
    throw new Error("Secondary technical lead not found");

  // Make sure that duplicate technical leads do not exist

  // if (primaryTechnicalLead === secondaryTechnicalLead)
  //   throw new Error("Primary and secondary technical leads cannot be the same");

   // if (
  //   new Set(metaData.technicalLeads).size !== metaData.technicalLeads.length
  // ) {
  //   throw new Error("Duplicate technical leads found");
  // }


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
    snapshotCount: 5,
  };

  const requestedProject = await privateCloudRequestedProjects.create({
    ...metaData,
    commonComponents,
    projectOwner: projectOwner._id,
    // technicalLeads: technicalLeads.map(({ _id }) => _id),
    primaryTechnicalLead: primaryTechnicalLead._id,
    secondaryTechnicalLead: secondaryTechnicalLead._id,
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
    decisionMaker: null,
  });

  await users.addElementToManyDocumentsArray(
    [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].map(
      ({ _id }) => _id
    ),
    {
      privateCloudActiveRequests: request._id,
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
          technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead],
          setCluster: metaData.cluster,
          licensePlate: requestedProject.licensePlate,
          showStandardFooterMessage: true, // if false, shows  the  "love, Platform services" one from request-approval
        }
      ),
      to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].map(
        ({ email }) => email
      ),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `**profile.name** OCP 4 Project Set`,
    });
  } catch (error) {
    console.log("CHES Error: ", error);
  }

  return request;
}

export default customPrivateCloudProjectRequest;
