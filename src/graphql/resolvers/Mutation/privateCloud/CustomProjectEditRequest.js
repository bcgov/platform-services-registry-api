import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import Platform from "../../enum/Platform";
import sendNatsMessage from "../../../../nats/SendNatsMessage";
import { ObjectId } from "mongodb";
import swig from "swig";
import { adminEmails, clusterNames } from "../../../../ches/emailConstants"

async function customPrivateCloudProjectEditRequest(_, args, context) {
  const {
    projectId,
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
      privateCloudActiveRequestedProjects,
      privateCloudActiveRequests,
      privateCloudProjects
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

  const { _id, ...project } =
    (await privateCloudProjects.findOneById(projectId)) || {};

  if (_id === undefined) {
    throw Error("Project does not exist");
  }

  if ("activeEditRequest" in project && project.activeEditRequest) {
    throw Error("There already exists an active request for this project");
  }

  if (
    ![
      project.projectOwner,
      project.primaryTechnicalLead,
      project.secondaryTechnicalLead
    ].includes(user._id) &&
    !roles.includes("admin")
  ) {
    throw new Error(
      "User must either be a project owner or technical lead on this project in order to edit it"
    );
  }

  const projectOwner = await users.findOneById(project.projectOwner);
  const primaryTechnicalLead = await users.findOneById(
    project.primaryTechnicalLead
  );
  const secondaryTechnicalLead = await users.findOneById(
    project.secondaryTechnicalLead
  );



  let requestedProjectOwner;
  let requestedPrimaryTechnicalLead;
  let requestedSecondaryTechnicalLead;

  if (metaData) {
    // Only an Admin or the PO can request to change the PO
    if (
      "projectOwner" in metaData &&
      !roles.includes("admin") &&
      project.projectOwner !== user._id
    ) {
      throw Error("Only the project owner can set a new project owner");
    }

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

    [requestedProjectOwner] = await users.findByFields({
      email: metaData.projectOwner
    });

    if ("projectOwner" in metaData && !requestedProjectOwner)
      throw new Error("Project owner not found");

    [requestedPrimaryTechnicalLead] = await users.findByFields({
      email: metaData.primaryTechnicalLead
    });

    if ("primaryTechnicalLead" in metaData && !requestedPrimaryTechnicalLead)
      throw new Error("Primary technical lead not found");

    [requestedSecondaryTechnicalLead] = await users.findByFields({
      email: metaData.secondaryTechnicalLead
    });

    if (
      "secondaryTechnicalLead" in metaData &&
      !requestedSecondaryTechnicalLead
    )
      throw new Error("Secondary technical lead not found");
  }



  const requestedProject = await privateCloudActiveRequestedProjects.create({
    ...project,
    ...metaData,
    commonComponents: { ...project.commonComponents, ...commonComponents },
    projectOwner: requestedProjectOwner
      ? requestedProjectOwner._id
      : project.projectOwner,
    primaryTechnicalLead: requestedPrimaryTechnicalLead
      ? requestedPrimaryTechnicalLead._id
      : project.primaryTechnicalLead,
    secondaryTechnicalLead: requestedSecondaryTechnicalLead
      ? requestedSecondaryTechnicalLead._id
      : project.secondaryTechnicalLead,
    productionQuota: { ...project.productionQuota, ...productionQuota },
    developmentQuota: { ...project.developmentQuota, ...developmentQuota },
    testQuota: { ...project.testQuota, ...testQuota },
    toolsQuota: { ...project.toolsQuota, ...toolsQuota }
  });


  const projectData = await privateCloudProjects.findByFields({ name: requestedProject.name })

  const requestBody = {
    createdBy: user._id,
    status: RequestStatus.PENDING_DECISION,
    type: RequestType.EDIT,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: new Date(),
    decisionDate: null,
    project: ObjectId(projectId),
    requestedProject: requestedProject._id
  };

  // If there is no requested quota change, we do not need admin approval and can proceed to provision
  if (
    productionQuota === undefined &&
    developmentQuota == undefined &&
    testQuota == undefined &&
    toolsQuota === undefined
  ) {
    requestBody.status = RequestStatus.APPROVED;

    await sendNatsMessage(
      requestBody.type,
      projectOwner,
      requestedPrimaryTechnicalLead || primaryTechnicalLead,
      requestedSecondaryTechnicalLead || secondaryTechnicalLead,
      requestedProject
    );
  } else {
    requestBody.status = RequestStatus.PENDING_DECISION;
  }

  const request = await privateCloudActiveRequests.create(requestBody);

  await users.addElementToManyDocumentsArray(
    [
      projectOwner,
      primaryTechnicalLead,
      secondaryTechnicalLead,
      requestedPrimaryTechnicalLead,
      requestedSecondaryTechnicalLead
    ]
      .filter(Boolean)
      .map(({ _id }) => _id),
    {
      privateCloudActiveRequests: request._id
    }
  );

  await privateCloudProjects.updateFieldsById(_id, {
    activeEditRequest: request._id
  });

  try {
    // const isProductionQuotaChanged = (JSON.stringify(projectData[0].productionQuota) !== JSON.stringify(requestedProject.productionQuota)) ||
    //   (JSON.stringify(projectData[0].developmentQuota) !== JSON.stringify(requestedProject.developmentQuota)) ||
    //   (JSON.stringify(projectData[0].testQuota) !== JSON.stringify(requestedProject.testQuota)) ||
    //   (JSON.stringify(projectData[0].toolsQuota) !== JSON.stringify(requestedProject.toolsQuota))
 
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/quota-request-received-email.html",
        {
          consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
          isProductionQuotaChanged: JSON.stringify(projectData[0].productionQuota) !== JSON.stringify(requestedProject.productionQuota),
          productionQuotaCPURequested: requestedProject.productionQuota.cpuRequests !== projectData[0].productionQuota.cpuRequests ? requestedProject.productionQuota.cpuRequests : null,
          productionQuotaMemoryRequested: requestedProject.productionQuota.memoryRequests !== projectData[0].productionQuota.memoryRequests ? requestedProject.productionQuota.memoryRequests : null,
          productionQuotaStorageRequested: requestedProject.productionQuota.storageBlock !== projectData[0].productionQuota.storageBlock ? requestedProject.productionQuota.storageBlock : null,
          isDevelopmentQuotaChanged: JSON.stringify(projectData[0].developmentQuota) !== JSON.stringify(requestedProject.developmentQuota),
          consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
          developmentQuotaCPURequested: requestedProject.developmentQuota.cpuRequests !== projectData[0].developmentQuota.cpuRequests ? requestedProject.developmentQuota.cpuRequests : null,
          developmentQuotaMemoryRequested: requestedProject.developmentQuota.memoryRequests !== projectData[0].developmentQuota.memoryRequests ? requestedProject.developmentQuota.memoryRequests : null,
          developmentQuotaStorageRequested: requestedProject.developmentQuota.storageBlock !== projectData[0].developmentQuota.storageBlock ? requestedProject.developmentQuota.storageBlock : null,
          isTestQuotaChanged: JSON.stringify(projectData[0].testQuota) !== JSON.stringify(requestedProject.testQuota),
          consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
          testQuotaCPURequested: requestedProject.testQuota.cpuRequests !== projectData[0].testQuota.cpuRequests ? requestedProject.testQuota.cpuRequests : null,
          testQuotaMemoryRequested: requestedProject.testQuota.memoryRequests !== projectData[0].testQuota.memoryRequests ? requestedProject.testQuota.memoryRequests : null,
          testQuotaStorageRequested: requestedProject.testQuota.storageBlock !== projectData[0].testQuota.memoryRequests ? requestedProject.testQuota.memoryRequests : null,
          isToolsQuotaChanged: JSON.stringify(projectData[0].toolsQuota) !== JSON.stringify(requestedProject.toolsQuota),
          consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
          toolsQuotaCPURequested: requestedProject.toolsQuota.cpuRequests !== projectData[0].toolsQuota.cpuRequests ? requestedProject.toolsQuota.cpuRequests : null,
          toolsQuotaMemoryRequested: requestedProject.toolsQuota.memoryRequests !== projectData[0].toolsQuota.memoryRequests ? requestedProject.toolsQuota.memoryRequests : null,
          toolsQuotaStorageRequested: requestedProject.toolsQuota.storageBlock !== projectData[0].toolsQuota.storageBlock ? requestedProject.toolsQuota.storageBlock : null,
          productionQuotaCPUCurrent: projectData[0].productionQuota.cpuRequests,
          productionQuotaMemoryCurrent: projectData[0].productionQuota.memoryRequests,
          productionQuotaStorageCurrent: projectData[0].productionQuota.storageBlock,
          developmentQuotaCPUCurrent: projectData[0].developmentQuota.cpuRequests,
          developmentQuotaMemoryCurrent: projectData[0].developmentQuota.memoryRequests,
          developmentQuotaStorageCurrent: projectData[0].developmentQuota.storageBlock,
          testQuotaCPUCurrent: projectData[0].testQuota.cpuRequests,
          testQuotaMemoryCurrent: projectData[0].testQuota.memoryRequests,
          testQuotaStorageCurrent: projectData[0].testQuota.storageBlock,
          toolsQuotaCPUCurrent: projectData[0].toolsQuota.cpuRequests,
          toolsQuotaMemoryCurrent: projectData[0].toolsQuota.memoryRequests,
          toolsQuotaStorageCurrent: projectData[0].toolsQuota.storageBlock,
          licencePlate: requestedProject.licencePlate,
          projectName: requestedProject.name,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          POGitHubOrIDIR: projectOwner.POIDIR ? projectOwner.POIDIR : projectOwner.githubId,
          PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
          PriTLEmail: primaryTechnicalLead.email,
          PriTLGitHubOrIDIR: primaryTechnicalLead.POIDIR ? primaryTechnicalLead.POIDIR : primaryTechnicalLead.githubId,
          SecTLName: secondaryTechnicalLead ? `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}` : null,
          SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead.email : null,
          SecTLGitHubOrIDIR: secondaryTechnicalLead ? secondaryTechnicalLead.POIDIR ? secondaryTechnicalLead.POIDIR : secondaryTechnicalLead.githubId : null,
          setCluster: clusterNames.filter(item => item.name === "silver")[0].humanFriendlyName,
        }
      ),
      // For all project contacts. Sent when a new quota edit request is submitted successfully.
      to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
        ({ email }) => email
      ),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${requestedProject.name} quota change request received`,
    });


    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/super-admin-request-email.html",
        {
          requestType: 'Quota editing',
          isProvisioningRequest: false,
          isQuotaRequest: true,
          consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
          isProductionQuotaChanged: JSON.stringify(projectData[0].productionQuota) !== JSON.stringify(requestedProject.productionQuota),
          productionQuotaCPURequested: requestedProject.productionQuota.cpuRequests !== projectData[0].productionQuota.cpuRequests ? requestedProject.productionQuota.cpuRequests : null,
          productionQuotaMemoryRequested: requestedProject.productionQuota.memoryRequests !== projectData[0].productionQuota.memoryRequests ? requestedProject.productionQuota.memoryRequests : null,
          productionQuotaStorageRequested: requestedProject.productionQuota.storageBlock !== projectData[0].productionQuota.storageBlock ? requestedProject.productionQuota.storageBlock : null,
          isDevelopmentQuotaChanged: JSON.stringify(projectData[0].developmentQuota) !== JSON.stringify(requestedProject.developmentQuota),
          consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
          developmentQuotaCPURequested: requestedProject.developmentQuota.cpuRequests !== projectData[0].developmentQuota.cpuRequests ? requestedProject.developmentQuota.cpuRequests : null,
          developmentQuotaMemoryRequested: requestedProject.developmentQuota.memoryRequests !== projectData[0].developmentQuota.memoryRequests ? requestedProject.developmentQuota.memoryRequests : null,
          developmentQuotaStorageRequested: requestedProject.developmentQuota.storageBlock !== projectData[0].developmentQuota.storageBlock ? requestedProject.developmentQuota.storageBlock : null,
          isTestQuotaChanged: JSON.stringify(projectData[0].testQuota) !== JSON.stringify(requestedProject.testQuota),
          consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
          testQuotaCPURequested: requestedProject.testQuota.cpuRequests !== projectData[0].testQuota.cpuRequests ? requestedProject.testQuota.cpuRequests : null,
          testQuotaMemoryRequested: requestedProject.testQuota.memoryRequests !== projectData[0].testQuota.memoryRequests ? requestedProject.testQuota.memoryRequests : null,
          testQuotaStorageRequested: requestedProject.testQuota.storageBlock !== projectData[0].testQuota.memoryRequests ? requestedProject.testQuota.memoryRequests : null,
          isToolsQuotaChanged: JSON.stringify(projectData[0].toolsQuota) !== JSON.stringify(requestedProject.toolsQuota),
          consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
          toolsQuotaCPURequested: requestedProject.toolsQuota.cpuRequests !== projectData[0].toolsQuota.cpuRequests ? requestedProject.toolsQuota.cpuRequests : null,
          toolsQuotaMemoryRequested: requestedProject.toolsQuota.memoryRequests !== projectData[0].toolsQuota.memoryRequests ? requestedProject.toolsQuota.memoryRequests : null,
          toolsQuotaStorageRequested: requestedProject.toolsQuota.storageBlock !== projectData[0].toolsQuota.storageBlock ? requestedProject.toolsQuota.storageBlock : null,
          productionQuotaCPUCurrent: projectData[0].productionQuota.cpuRequests,
          productionQuotaMemoryCurrent: projectData[0].productionQuota.memoryRequests,
          productionQuotaStorageCurrent: projectData[0].productionQuota.storageBlock,
          developmentQuotaCPUCurrent: projectData[0].developmentQuota.cpuRequests,
          developmentQuotaMemoryCurrent: projectData[0].developmentQuota.memoryRequests,
          developmentQuotaStorageCurrent: projectData[0].developmentQuota.storageBlock,
          testQuotaCPUCurrent: projectData[0].testQuota.cpuRequests,
          testQuotaMemoryCurrent: projectData[0].testQuota.memoryRequests,
          testQuotaStorageCurrent: projectData[0].testQuota.storageBlock,
          toolsQuotaCPUCurrent: projectData[0].toolsQuota.cpuRequests,
          toolsQuotaMemoryCurrent: projectData[0].toolsQuota.memoryRequests,
          toolsQuotaStorageCurrent: projectData[0].toolsQuota.storageBlock,
          licencePlate: requestedProject.licencePlate,
          projectName: requestedProject.name,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          POGitHubOrIDIR: projectOwner.POIDIR ? projectOwner.POIDIR : projectOwner.githubId,
          PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
          PriTLEmail: primaryTechnicalLead.email,
          PriTLGitHubOrIDIR: primaryTechnicalLead.POIDIR ? primaryTechnicalLead.POIDIR : primaryTechnicalLead.githubId,
          SecTLName: secondaryTechnicalLead ? `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}` : null,
          SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead.email : null,
          SecTLGitHubOrIDIR: secondaryTechnicalLead ? secondaryTechnicalLead.POIDIR ? secondaryTechnicalLead.POIDIR : secondaryTechnicalLead.githubId : null,
          setCluster: clusterNames.filter(item => item.name === "silver")[0].humanFriendlyName,
               }
      ),
      //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
      to: adminEmails,
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `New Quota editing request in Registry waiting for your approval`,
    });


    // chesService.send({
    //   bodyType: "html",
    //   body: swig.renderFile("./src/ches/templates/edit-request-received.html", {
    //     projectName: requestedProject.name,
    //     POName: projectOwner.firstName + " " + projectOwner.lastName,
    //     POEmail: projectOwner.email,
    //     technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean),
    //     setCluster: clusterNames.filter(item => item.name === "silver")[0].humanFriendlyName,
    //     licencePlate: requestedProject.licencePlate,
    //     showStandardFooterMessage: false, // show "love, Platform services" instead
    //     // productMinistry: "PRODUCT MINISTRY",
    //     // productDescription: "Product DESCRIPTION",
    //   }),
    //   to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(({ email }) => email),
    //   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
    //   subject: `${metaData.name} OCP 4 Project Set`
    // });



  }  catch (error) {
    console.log(error);
  }
  return request;
}

export default customPrivateCloudProjectEditRequest;


