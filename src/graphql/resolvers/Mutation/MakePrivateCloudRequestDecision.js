import RequestDecision from "../enum/RequestDecision";
import RequestStatus from "../enum/RequestStatus";

function makePrivateCloudRequestDecision(
  _,
  { input },
  { dataSources: { privateCloudRequests, privateCloudRequestedProjects } }
) {

  if (input.RequestDecision === RequestDecision.REJECT) {
    privateCloudRequests.updateFieldsById(input.request, {
      status: RequestStatus.REJECTED,
      updated: new Date(),
      active: false
    });
  } else if(input.RequestDecision === RequestDecision.APPROVE) {
    privateCloudRequests.updateFieldsById(input.request, {
      status: RequestStatus.PROVISIONING,
      updated: new Date(),
    });

    const request = privateCloudRequests.findOneById(input.request)
    const requestedProject = privateCloudRequestedProjects.findOneById(request.requestedProject)

    //provision requested project

    return {}
  }
}

export default makePrivateCloudRequestDecision;
