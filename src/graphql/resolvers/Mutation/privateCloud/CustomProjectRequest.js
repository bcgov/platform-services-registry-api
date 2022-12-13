import ProjectStatus from "../../enum/ProjectStatus";
import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import Platform from "../../enum/Platform";
import generateNamespacePrefix from "../../../../helpers/generateNamespacePrefix";
import swig from "swig";
import { adminEmails, clusterNames } from "../../../../ches/emailConstants"


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

  // try {
  //   console.log(requestedProject, metaData,projectOwner, primaryTechnicalLead, secondaryTechnicalLead)
  //   chesService.send({
  //     bodyType: "html",
  //     body: swig.renderFile(
  //       "./src/ches/templates/provisioning-request-done.html",
  //       {
  //         // consoleButtons : '<div>CONSOLE BUTTONS GO HERE</div>',
  //         // humanActionComment: 'HUMAN ACTION COMMENT HERE',
  //         projectName: metaData.name,
  //         POName: projectOwner.firstName + " " + projectOwner.lastName,
  //         POEmail: projectOwner.email,
  //         technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean),
  //         setCluster: Object.entries(Cluster).filter(item => item[1] === metaData.cluster)[0][0],
  //         licencePlate: requestedProject.licencePlate,
  //         showStandardFooterMessage: true, // if false, shows  the  "love, Platform services" one from request-approval
  //       }
  //     ),
  //     to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
  //       .filter(Boolean)
  //       .map(({ email }) => email),
  //     from: "Registry <PlatformServicesTeam@gov.bc.ca>",
  //     subject: `${metaData.name} OCP 4 Project Requested`,
  //   });
  // } catch (error) {
  //   console.log("CHES Error: ", error);
  // }

  try {
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/super-admin-request-email.html",
        {
          requestType: 'Provisioning',
          isProvisioningRequest: true,
          isQuotaRequest: false,
          consoleURLProdNameSpace: `https://console.apps.${clusterNames[requestedProject.cluster].name}.devops.gov.bc.ca/topology/ns/ggg554-prod`,
          isProductionQuotaChanged: false,
          projectName: requestedProject.name,
          productDescription: requestedProject.description,
          productMinistry: requestedProject.ministry,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          POGitHub: projectOwner.githubId,
          POIDIR: projectOwner.POIDIR || null,
          PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
          PriTLEmail: primaryTechnicalLead.email,
          PriTLGitHub: primaryTechnicalLead.githubId,
          PriTLIDIR: primaryTechnicalLead.POIDIR || null,
          SecTLName: `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}` || null,
          SecTLEmail: secondaryTechnicalLead.email|| null,
          SecTLGitHub: secondaryTechnicalLead.githubId|| null,
          SecTLIDIR: secondaryTechnicalLead.POIDIR || null,
          setCluster: clusterNames[requestedProject.cluster].humanFriendlyName,
          licencePlate: requestedProject.licencePlate,
        }
      ),
      //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
      to: adminEmails,
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `New Create Product request in Registry waiting for your approval`,
    });

    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/provisioning-request-received-email.html",
        {
          projectName: requestedProject.name,
          productDescription: requestedProject.description,
          productMinistry: requestedProject.ministry,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          POGitHub: projectOwner.githubId,
          POIDIR: projectOwner.POIDIR || null,
          PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
          PriTLEmail: primaryTechnicalLead.email,
          PriTLGitHub: primaryTechnicalLead.githubId,
          PriTLIDIR: primaryTechnicalLead.POIDIR || null,
          SecTLName: `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}` || null,
          SecTLEmail: secondaryTechnicalLead.email|| null,
          SecTLGitHub: secondaryTechnicalLead.githubId|| null,
          SecTLIDIR: secondaryTechnicalLead.POIDIR || null,
          setCluster: clusterNames[requestedProject.cluster].humanFriendlyName,
        }
      ),
      // To all project contacts. Sent when a new provisioning request has been submitted successfully.
      to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `ProjectName provisioning request received`,
    });
  } catch (error) {
    console.log(error);
  }

  return request;
}

export default customPrivateCloudProjectRequest;