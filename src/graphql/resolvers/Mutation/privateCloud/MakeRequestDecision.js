import RequestDecision from "../../enum/RequestDecision";
import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import sendNatsMessage from "../../../../nats/SendNatsMessage";
import swig from "swig";

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

    chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/templates/request-rejected.html", {
        humanActionComment: "HUMAN ACTION COMMENT HERE",
        projectName: requestedProject.name,
        POName: projectOwner.firstName + " " + projectOwner.lastName,
        POEmail: projectOwner.email,
        technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead]
          .filter(Boolean)
          .map(({ email }) => email),
        showStandardFooterMessage: true
      }),
      to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `**profile.name** OCP 4 Project Set`
      // subject: `${profile.name} OCP 4 Project Set`,
    });

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
      chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/templates/request-approval.html", {
          projectName: requestedProject.name,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          TCName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
          TCEmail: primaryTechnicalLead.email,
          setCluster: requestedProject.cluster,
          licensePlate: requestedProject.licensePlate,
          showStandardFooterMessage: false, // show "love, Platform services" instead
          productMinistry: "PRODUCT MINISTRY",
          productDescription: "Product DESCRIPTION"
        }),
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `**profile.name** OCP 4 Project Set`
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
