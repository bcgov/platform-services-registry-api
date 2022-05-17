import RequestDecision from "../enum/RequestDecision";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";

async function makePrivateCloudRequestDecision(
  _,
  { input },
  {
    dataSources: {
      privateCloudRequests,
      privateCloudActiveRequests,
      privateCloudProjects,
      users,
    },
    kauth,
  }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  if (input.decision === RequestDecision.REJECT) {
    const request = await privateCloudActiveRequests.findOneById(input.request);
    const updatedRequest = await privateCloudRequests.create({
      ...request,
      ...{
        status: RequestStatus.REJECTED,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id,
      },
    });
    await privateCloudActiveRequests.removeDocument(input.request);

    if (request.type !== CREATE) {
      await privateCloudProjects.addElementToDocumentArray(request.project, {
        requestHistory: updatedRequest._id,
      });
    }

    return updatedRequest;
  } else if (input.decision === RequestDecision.APPROVE) {
    // *** Provision ***
    // wait for nats confirmation acknowledgment, return request if it works otherwise throw error

    // Update successful request after nats such that the request will not be created if nats does not work
    // active private cloud requests
    const request = await privateCloudActiveRequests.updateFieldsById(
      input.request,
      {
        status: RequestStatus.PROVISIONING,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id,
      }
    );

    return request;
  }
}

export default makePrivateCloudRequestDecision;
