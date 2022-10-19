import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";
import generateNamespacePrefix from "../../../helpers/generateNamespacePrefix";
import swig from "swig";
import Cluster from "../enum/Cluster";

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

  if (!projectOwner) throw new Error("Project owner not found");

  const technicalLeads = await users.findManyByFieldValues(
    "email",
    metaData.technicalLeads
  );

  if (
    new Set(metaData.technicalLeads).size !== metaData.technicalLeads.length
  ) {
    throw new Error("Duplicate technical leads found");
  }

  if (technicalLeads.length !== metaData.technicalLeads.length) {
    throw new Error("One or more technical leads not found");
  }

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
    decisionMaker: null,
  });

  await users.addElementToManyDocumentsArray(
    [projectOwner, ...technicalLeads].map(({ _id }) => _id),
    {
      privateCloudActiveRequests: request._id,
    }
  );

  try {
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/templates/request-approval.html",
        {
          // consoleButtons : '<div>CONSOLE BUTTONS GO HERE</div>',
          // humanActionComment: 'HUMAN ACTION COMMENT HERE',
          projectName: metaData.name,
          POName: projectOwner.firstName + " " + projectOwner.lastName,
          POEmail: projectOwner.email,
          POGitHub: projectOwner.githubId,
          technicalLeads: technicalLeads,
          setCluster: Object.entries(Cluster).filter(item => item[1] === metaData.cluster)[0][0],
          productMinistry:requestedProject.ministry,
          productDescription:requestedProject.description,
          licencePlate: requestedProject.licencePlate,
          showStandardFooterMessage: false, // if false, shows  the  "love, Platform services" one from request-approval
        }
      ),
      to: [projectOwner, ...technicalLeads].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${metaData.name} OCP 4 Project Set`,
      // subject: `${profile.name} OCP 4 Project Set`,
    });
  } catch (error) {
    console.log("CHES Error: ", error);
  }

  return request;
}

export default customPrivateCloudProjectRequest;
