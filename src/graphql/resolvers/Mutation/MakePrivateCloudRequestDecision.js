import RequestDecision from "../enum/RequestDecision";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import sendNatsMessage from "../../../nats/SendNatsMessage";

async function makePrivateCloudRequestDecision(
  _,
  { input },
  {
    dataSources: {
      privateCloudArchivedRequests,
      privateCloudActiveRequests,
      privateCloudProjects,
      privateCloudRequestedProjects,
      users,
    },
    kauth,
    chesService,
  }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  const request = await privateCloudActiveRequests.findOneById(input.request);

  if (!request) {
    throw Error("active request does not exist");
  }

  if (request.status !== RequestStatus.PENDING_DECISION) {
    throw Error("A decision has already been made for this request");
  }

  const requestedProject =
    request.type === RequestType.CREATE
      ? await privateCloudRequestedProjects.findOneById(
          request.requestedProject
        )
      : await privateCloudProjects.findOneById(request.project);

  const { projectOwner: projectOwnerId, technicalLeads: technicalLeadsIds } = requestedProject;

  const projectOwner = await users.findOneById(projectOwnerId)
  const technicalLeads = await users.findManyByIds(technicalLeadsIds)

  if (input.decision === RequestDecision.REJECT) {
    await privateCloudActiveRequests.removeDocument(request._id);

    // Move request to archived requests collection
    const rejectedRequest = await privateCloudArchivedRequests.create({
      ...request,
      ...{
        status: RequestStatus.REJECTED,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id,
      },
    });

    // Add request to the projects request history
    if (request.type !== RequestType.CREATE) {
      await privateCloudProjects.addElementToDocumentArray(request.project, {
        requestHistory: rejectedRequest._id,
      });
    }

    // remove active request for PO and TLs
    await users.removeElementFromManyDocumentsArray(
      [projectOwner, ...technicalLeads].map(({ _id }) => _id),
      { activeRequests: request._id }
    );

    chesService.send({
      bodyType: "html",
      body: `<div style="color: blue">Request Decision made: ${RequestDecision.REJECT}</div>`,
      to: [projectOwner, ...technicalLeads].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `**profile.name** OCP 4 Project Set`,
      // subject: `${profile.name} OCP 4 Project Set`,
    });

    return RequestStatus.REJECTED;
  } else if (input.decision === RequestDecision.APPROVE) {
    const { acknowledged } = await privateCloudActiveRequests.updateFieldsById(
      request._id,
      {
        status: RequestStatus.APPROVED,
        decisionDate: new Date(),
        decisionMaker: user._id,
      }
    );

    if (!acknowledged) {
      throw new Error("Unable to update request");
    }

    chesService.send({
      bodyType: "html",
      body: `<div style="color: blue" >Project decision made</div>`,
      to: [projectOwner, ...technicalLeads].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `**profile.name** OCP 4 Project Set`,
      // subject: `${profile.name} OCP 4 Project Set`,
    });

    await sendNatsMessage(request.type, projectOwner, technicalLeads, requestedProject);

    return RequestStatus.APPROVED;
  }
}

export default makePrivateCloudRequestDecision;
