import RequestDecision from "../enum/RequestDecision";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import sendNatsMessage from "../../../scripts/Nats";

async function makePrivateCloudRequestDecision(
  _,
  { input },
  {
    dataSources: {
      privateCloudArchivedRequests,
      privateCloudActiveRequests,
      privateCloudProjects,
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

  if (input.decision === RequestDecision.REJECT) {
    await privateCloudActiveRequests.removeDocument(request._id);

    const rejectedRequest = await privateCloudArchivedRequests.create({
      ...request,
      ...{
        status: RequestStatus.REJECTED,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id,
      },
    });

    if (request.type !== RequestType.CREATE) {
      await privateCloudProjects.addElementToDocumentArray(request.project, {
        requestHistory: rejectedRequest._id,
      });
    }

    // if (input?.technicalLeads) {
    //   await users.addElementToManyDocumentsArray(
    //     technicalLeads.map(({ _id }) => _id),
    //     {
    //       technicalLead: requestedProject._id,
    //     }
    //   );
    // }

    db.profiles.updateOne({ _id: 1 }, { $pull: { votes: { $gte: 6 } } });

    return rejectedRequest;
  } else if (input.decision === RequestDecision.APPROVE) {
    // *** Provision ***
    // wait for nats confirmation acknowledgment, return request if it works otherwise throw error

    await sendNatsMessage();

    // Update successful request after nats such that the request will not be created if nats does not work
    // active private cloud requests
    const { acknowledged } = await privateCloudActiveRequests.updateFieldsById(
      input.request,
      {
        status: RequestStatus.PROVISIONING,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id,
      }
    );

    if (!acknowledged) {
      throw new Error("Unable to update request");
    }

    const request = await privateCloudActiveRequests.findOneById(input.request);

    return request;
  }
}

export default makePrivateCloudRequestDecision;
