import RequestDecision from "../../enum/RequestDecision";
import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import sendNatsMessage from "../../../../nats/SendNatsMessage";
import swig from "swig";
import { clusterNames, emailData } from "../../../../ches/emailConstants"

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

  const projectData = request.type === RequestType.EDIT ? await privateCloudProjects.findByFields({ name: requestedProject.name }) : null

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
          emailData(requestedProject, projectData[0], projectOwner, primaryTechnicalLead, secondaryTechnicalLead, {
            requestType: request.type === RequestType.CREATE ? "Provisioning" : request.type === RequestType.EDIT ? "Edit" : "Deletion",
            humanActionComment: requestedProject.humanActionComment || null,
            isProvisioningRequest: request.type === RequestType.CREATE,
            isQuotaRequest: request.type === RequestType.EDIT,
          })
        ),
        // to all project contacts when any request (quota, provisioning, or deletion) is denied.
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
          ({ email }) => email
        ),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: ` ${request.type === RequestType.CREATE ? "Provisioning" : request.type === RequestType.EDIT ? "Edit" : "Deletion"} request has been rejected`,
      });


      // request.type !== RequestType.CREATE && chesService.send({
      //   bodyType: "html",
      //   body: swig.renderFile("./src/ches/templates/request-rejected.html", {
      //     humanActionComment: "",
      //     projectName: requestedProject.name,
      //     POName: projectOwner.firstName + " " + projectOwner.lastName,
      //     POEmail: projectOwner.email,
      //     technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean),
      //     showStandardFooterMessage: true,
      //   }),
      //   to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
      //     .filter(Boolean)
      //     .map(({ email }) => email),
      //   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      //   subject: `${requestedProject.name} OCP 4 Project Rejected`,
      //   // subject: `${profile.name} OCP 4 Project Set`,
      // });
    }
    catch (error) {
      console.log(error);
    }
    return RequestStatus.REJECTED;
  } else if (decision === RequestDecision.APPROVE) {
    console.log(decision,request.type)
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
            setCluster: clusterNames.filter(item => item.name === requestedProject.cluster)[0].humanFriendlyName,
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

      if (request.type === RequestType.EDIT) {
        if ((JSON.stringify(projectData[0].productionQuota) !== JSON.stringify(requestedProject.productionQuota)) ||
          (JSON.stringify(projectData[0].developmentQuota) !== JSON.stringify(requestedProject.developmentQuota)) ||
          (JSON.stringify(projectData[0].testQuota) !== JSON.stringify(requestedProject.testQuota)) ||
          (JSON.stringify(projectData[0].toolsQuota) !== JSON.stringify(requestedProject.toolsQuota))) chesService.send({
            bodyType: "html",
            body: swig.renderFile(
              "./src/ches/new-templates/quota-request-completion-email.html",
              emailData(requestedProject, projectData[0], projectOwner, primaryTechnicalLead, secondaryTechnicalLead, {
                consoleURL: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/`,
              })
            ),
            // For all project contacts.
            to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
              ({ email }) => email
            ),
            from: "Registry <PlatformServicesTeam@gov.bc.ca>",
            subject: 'Resource quota for your product in Private Cloud Openshift Platform has changed',
          });
      }

      if (request.type === RequestType.DELETE){
        console.log(RequestType.DELETE)
        chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/deletion-request-completion-email.html",
          {
            projectName: requestedProject.name,
            productDescription: requestedProject.description,
            productMinistry: requestedProject.ministry,
            POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
            POEmail: projectOwner.email,
            POGitHubOrIDIR: projectOwner.POIDIR ? projectOwner.POIDIR : projectOwner.githubId,
            PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
            PriTLEmail: primaryTechnicalLead.email,
            PriTLGitHubOrIDIR: primaryTechnicalLead.POIDIR ? primaryTechnicalLead.POIDIR : primaryTechnicalLead.githubId,
            SecTLName: secondaryTechnicalLead ? `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}` : null,
            SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead.email : null,
            SecTLGitHubOrIDIR: secondaryTechnicalLead ? secondaryTechnicalLead.POIDIR ? secondaryTechnicalLead.POIDIR : secondaryTechnicalLead.githubId : null,
            setCluster: clusterNames.filter(item => item.name === requestedProject.cluster)[0].humanFriendlyName,
            licencePlate: requestedProject.licencePlate,
          }
        ),
        // For all project contacts. Sent when Provisioner processes the project set deletion request in Openshift
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
          ({ email }) => email
        ),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: 'Your product deletion request has been completed',
      });
}

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
