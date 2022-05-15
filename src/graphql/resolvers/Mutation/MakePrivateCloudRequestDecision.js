import RequestDecision from "../enum/RequestDecision";
import RequestStatus from "../enum/RequestStatus";

function makePrivateCloudRequestDecision(
  _,
  { input },
  {
    dataSources: { privateCloudRequests },
    kauth,
  }
) {

  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  if (input.RequestDecision === RequestDecision.REJECT) {
    // Update fields and move to privateCloudReuests (from activePrivateCloudRequests)
    const request = await privateCloudRequests.updateFieldsById(input.request, {
      status: RequestStatus.REJECTED,
      decisionDate: new Date(),
      active: false,
      decisionMaker: user._id
    });

    return request
  } else if (input.RequestDecision === RequestDecision.APPROVE) {
    // *** Provision ***
    // wait for nats confirmation acknowledgment, return request if it works otherwise throw error 

    // Update successful request after nats such that the request will not be created if nats does not work
    // active private cloud requests
    const request = await privateCloudRequests.updateFieldsById(input.request, {
      status: RequestStatus.PROVISIONING,
      decisionDate: new Date(),
      active: false,
      decisionMaker: user._id
    });

    return request
  }
}

export default makePrivateCloudRequestDecision;
