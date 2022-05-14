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
    privateCloudRequests.updateFieldsById(input.request, {
      status: RequestStatus.REJECTED,
      decisionDate: new Date(),
      active: false,
      decisionMaker: user._id
    });
  } else if (input.RequestDecision === RequestDecision.APPROVE) {
    privateCloudRequests.updateFieldsById(input.request, {
      status: RequestStatus.PROVISIONING,
      decisionDate: new Date(),
      decisionMaker: user._id
    });

    // provision requested project, the provision controller will create the project and set the requeted project
    // to the project in the request

    return {};
  }
}

export default makePrivateCloudRequestDecision;
