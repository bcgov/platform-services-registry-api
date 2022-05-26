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
  }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  const request = await privateCloudActiveRequests.findOneById(input.request);

  if (!request) {
    throw Error("active request does not exist");
  }

  // remove active request for PO and TLs
  const { projectOwner, technicalLeads } = RequestType.CREATE
    ? await privateCloudRequestedProjects.findOneById(request.requestedProject)
    : await privateCloudProjects.findOneById(request.project);

  await users.removeElementFromManyDocumentsArray(
    [projectOwner, ...technicalLeads].map(({ _id }) => _id),
    { activeRequests: request._id }
  );

  if (input.decision === RequestDecision.REJECT) {
    await privateCloudActiveRequests.removeDocument(request._id);

    if (request.type !== RequestType.CREATE) {
      const rejectedRequest = await privateCloudArchivedRequests.create({
        ...request,
        ...{
          status: RequestStatus.REJECTED,
          decisionDate: new Date(),
          active: false,
          decisionMaker: user._id,
        },
      });

      await privateCloudProjects.addElementToDocumentArray(request.project, {
        requestHistory: rejectedRequest._id,
      });
    }

    return RequestStatus.REJECTED;
  } else if (input.decision === RequestDecision.APPROVE) {
    const { acknowledged } = await privateCloudActiveRequests.updateFieldsById(
      input.request,
      {
        status: RequestStatus.APPROVED,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id,
      }
    );

    if (!acknowledged) {
      throw new Error("Unable to update request");
    }

    await sendNatsMessage();

    return RequestStatus.APPROVED;
  }
}

export default makePrivateCloudRequestDecision;
