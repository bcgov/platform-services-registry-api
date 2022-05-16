import RequestDecision from "../enum/RequestDecision";
import RequestStatus from "../enum/RequestStatus";

async function makePrivateCloudRequestDecision(
  _,
  { input },
  {
    dataSources: { privateCloudRequests, privateCloudActiveRequests, users },
    kauth,
  }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  if (input.RequestDecision === RequestDecision.REJECT) {
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

    return updatedRequest;
  } else if (input.RequestDecision === RequestDecision.APPROVE) {
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
