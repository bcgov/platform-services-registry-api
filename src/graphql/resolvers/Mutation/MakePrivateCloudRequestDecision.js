import RequestDecision from "../enum/RequestDecision";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import sendNatsMessage from "../../../nats/SendNatsMessage";
import swig from "swig";
import Cluster from "../enum/Cluster";

async function makePrivateCloudRequestDecision(
  _,
  { requestId, decision },
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

  const request = await privateCloudActiveRequests.findOneById(requestId);

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

  const { projectOwner: projectOwnerId, technicalLeads: technicalLeadsIds } =
    requestedProject;

  const projectOwner = await users.findOneById(projectOwnerId);
  const technicalLeads = await users.findManyByIds(technicalLeadsIds);

  if (decision === RequestDecision.REJECT) {
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
      { privateCloudActiveRequests: request._id }
    );

    try{
      chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/templates/request-rejected.html", {
        humanActionComment: "",
        projectName: requestedProject.name,
        POName: projectOwner.firstName + " " + projectOwner.lastName,
        POEmail: projectOwner.email,
        technicalLeads: technicalLeads,
        showStandardFooterMessage: true,
      }),
      to: [projectOwner, ...technicalLeads].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${requestedProject.name} OCP 4 Project Rejected`,
      // subject: `${profile.name} OCP 4 Project Set`,
    });
  } catch (error) {
    console.log(error);
  }
    return RequestStatus.REJECTED;
  } else if (decision === RequestDecision.APPROVE) {
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

    try {
      chesService.send({
        bodyType: "html",
        body: swig.renderFile("./src/ches/templates/provisioning-request-done.html", {
          projectName: requestedProject.name,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          technicalLeads: technicalLeads,
          setCluster: Object.entries(Cluster).filter(item => item[1] === requestedProject.cluster)[0][0],
          licencePlate: requestedProject.licencePlate,
          showStandardFooterMessage: true, // show "love, Platform services" instead
          // productMinistry: "PRODUCT MINISTRY",
          // productDescription: "Product DESCRIPTION",
          humanActionComment:''
        }),
        to: [projectOwner, ...technicalLeads].map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} OCP 4 Project Approved`,
        // subject: `${profile.name} OCP 4 Project Set`,
      });
    } catch (error) {
      console.log(error);
    }

    await sendNatsMessage(
      request.type,
      projectOwner.email,
      technicalLeads.map(({ email }) => email),
      requestedProject
    );

    return RequestStatus.APPROVED;
  }
}

export default makePrivateCloudRequestDecision;
