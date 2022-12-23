import RequestDecision from "../../enum/RequestDecision";
import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import sendNatsMessage from "../../../../nats/SendNatsMessage";
import swig from "swig";
import { clusterNames } from "../../../../ches/emailConstants"

async function makePrivateCloudRequestDecision(_, args, context) {
  const { requestId, decision } = args;
  const {
    dataSources: {
      privateCloudArchivedRequests,
      privateCloudActiveRequests,
      privateCloudProjects,
      privateCloudActiveRequestedProjects,
      privateCloudArchivedRequestedProjects,
      users
    },
    kauth,
    chesService
  } = context;

  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  if (!user)
    throw new Error("User not found, please create a user for yourself");

  const request = await privateCloudActiveRequests.findOneById(requestId);

  if (!request) {
    throw Error("active request does not exist");
  }

  if (request.status !== RequestStatus.PENDING_DECISION) {
    throw Error("A decision has already been made for this request");
  }

  const requestedProject =
    await privateCloudActiveRequestedProjects.findOneById(
      request.requestedProject
    );

  const {
    projectOwner: projectOwnerId,
    primaryTechnicalLead: primaryTechnicalLeadId,
    secondaryTechnicalLead: secondaryTechnicalLeadId
  } = requestedProject;

  const projectOwner = await users.findOneById(projectOwnerId);
  const primaryTechnicalLead = await users.findOneById(primaryTechnicalLeadId);
  const secondaryTechnicalLead = await users.findOneById(
    secondaryTechnicalLeadId
  );

  console.log(decision, decision === RequestDecision.REJECT)
  if (decision === RequestDecision.REJECT) {
    // Move request to archived requests collection
    await privateCloudActiveRequests.removeDocument(request._id);
    const rejectedRequest = await privateCloudArchivedRequests.create({
      ...request,
      ...{
        status: RequestStatus.REJECTED,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id
      }
    });

    // Move requested project to archived requested projects
    await privateCloudActiveRequestedProjects.removeDocument(
      requestedProject._id
    );
    await privateCloudArchivedRequestedProjects.create({
      ...requestedProject,
      active: false
    });

    // Add request to the projects request history
    if (request.type !== RequestType.CREATE) {
      await privateCloudProjects.addElementToDocumentArray(request.project, {
        requestHistory: rejectedRequest._id
      });

      // Set activeEditRequest property to null
      await privateCloudProjects.updateFieldsById(request.project, {
        activeEditRequest: null
      });
    }

    // remove active request for PO and TLs
    await users.removeElementFromManyDocumentsArray(
      [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
        .filter(Boolean)
        .map(({ _id }) => _id),
      { privateCloudActiveRequests: request._id }
    );

    try {
        chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/request-denial-email.html",
          {
            requestType: request.type === RequestType.CREATE ? "Provisioning" : "Edit",
            humanActionComment: requestedProject.humanActionComment || null,
            isProvisioningRequest: request.type === RequestType.CREATE,
            isQuotaRequest: request.type === RequestType.EDIT,
            consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
            isProductionQuotaChanged: null,
            productionQuotaCPURequested: null,
            productionQuotaMemoryRequested: null,
            productionQuotaStorageRequested: null,
            isDevelopmentQuotaChanged: null,
            consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
            developmentQuotaCPURequested: null,
            developmentQuotaMemoryRequested: null,
            developmentQuotaStorageRequested: null,
            isTestQuotaChanged: null,
            consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
            testQuotaCPURequested: null,
            testQuotaMemoryRequested: null,
            testQuotaStorageRequested: null,
            isToolsQuotaChanged: null,
            consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
            toolsQuotaCPURequested: null,
            toolsQuotaMemoryRequested: null,
            toolsQuotaStorageRequested: null,
            productionQuotaCPUCurrent: null,
            productionQuotaMemoryCurrent: null,
            productionQuotaStorageCurrent: null,
            developmentQuotaCPUCurrent: null,
            developmentQuotaMemoryCurrent: null,
            developmentQuotaStorageCurrent: null,
            testQuotaCPUCurrent: null,
            testQuotaMemoryCurrent: null,
            testQuotaStorageCurrent: null,
            toolsQuotaCPUCurrent: null,
            toolsQuotaMemoryCurrent: null,
            toolsQuotaStorageCurrent: null,
            productDescription: requestedProject.description,
            productMinistry: requestedProject.ministry,
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
            setCluster: clusterNames.filter(item => item.name ===  "silver")[0].humanFriendlyName,
            licencePlate: requestedProject.licencePlate,
          }
        ),
        // to all project contacts when any request (quota, provisioning, or deletion) is denied.
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
          ({ email }) => email
        ),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: ` ${request.type === RequestType.CREATE ? "Provisioning" : "Edit"} request has been rejected`,
      });


      request.type !== RequestType.CREATE && chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/templates/request-rejected.html", {
          humanActionComment: "",
          projectName: requestedProject.name,
          POName: projectOwner.firstName + " " + projectOwner.lastName,
          POEmail: projectOwner.email,
          technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean),
          showStandardFooterMessage: true,
        }),
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} OCP 4 Project Rejected`,
        // subject: `${profile.name} OCP 4 Project Set`,
      });
    } catch (error) {
      console.log(error);
    }
    return RequestStatus.REJECTED;
  } else if (decision === RequestDecision.APPROVE) {
    const { acknowledged } = await privateCloudActiveRequests.updateFieldsById(
      request._id,
      {
        status: RequestStatus.APPROVED,
        decisionDate: new Date(),
        decisionMaker: user._id
      }
    );

    if (!acknowledged) {
      throw new Error("Unable to update request");
    }

    try {
      console.log(request.type, request.type === RequestType.CREATE)
      if (request.type === RequestType.CREATE) chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/provisioning-request-completion-email.html",
          {
            consoleURL: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/`,
            humanActionComment: requestedProject.humanActionComment || null,
            projectName: requestedProject.name,
            POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
            POEmail: projectOwner.email,
            PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
            PriTLEmail: primaryTechnicalLead.email,
            PriTLGitHubOrIDIR: primaryTechnicalLead.POIDIR ? primaryTechnicalLead.POIDIR : primaryTechnicalLead.githubId,
            SecTLName: secondaryTechnicalLead ? `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}` : null,
            SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead.email : null,
            SecTLGitHubOrIDIR: secondaryTechnicalLead ? secondaryTechnicalLead.POIDIR ? secondaryTechnicalLead.POIDIR : secondaryTechnicalLead.githubId : null,
            setCluster: clusterNames.filter(item => item.name ===  "silver")[0].humanFriendlyName,
            licencePlate: requestedProject.licencePlate,
          }
        ),
        //For all project contacts. Sent when the provisioner application has finished provisioning the new namespaces for a product.
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
          ({ email }) => email
        ),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: 'Your provisioning request for Private Cloud OpenShift Platform has been completed',
      });


      if (request.type !== RequestType.CREATE)  chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/templates/provisioning-request-done.html", {
          projectName: requestedProject.name,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          TCName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
          TCEmail: primaryTechnicalLead.email,
          setCluster: clusterNames.filter(item => item.name ===  "silver")[0].humanFriendlyName,
          licencePlate: requestedProject.licencePlate,
          showStandardFooterMessage: false, // show "love, Platform services" instead
          productMinistry: "PRODUCT MINISTRY",
          productDescription: "Product DESCRIPTION"
        }),
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} OCP 4 Project Approved`,
        // subject: `${profile.name} OCP 4 Project Set`,
      });


    } catch (error) {
      console.log(error);
    }

    await sendNatsMessage(
      request.type,
      projectOwner,
      primaryTechnicalLead,
      secondaryTechnicalLead,
      requestedProject
    );

    return RequestStatus.APPROVED;
  }
}

export default makePrivateCloudRequestDecision;
