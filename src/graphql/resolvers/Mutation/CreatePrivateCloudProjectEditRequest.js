import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";
import sendNatsMessage from "../../../nats/SendNatsMessage";

async function createPrivateCloudProjectEditRequest(
  _,
  { id, metaData, quota },
  {
    dataSources: {
      users,
      privateCloudRequestedProjects,
      privateCloudArchivedRequests,
      privateCloudActiveRequests,
      privateCloudProjects,
    },
    kauth,
  }
) {
  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
    roles: [],
  };  const [user] = await users.findByFields({ email });

  const project = await privateCloudProjects.findOneById(id);

  if (project === undefined) {
    throw new Error("Project does not exist");
  }

  if (metaData === null) {
    metaData = {};
  }

  if (quota === null) {
    quota = {};
  }

  const omitNull = (obj) =>
    Object.keys(obj).forEach((key) => obj[key] == null && delete obj[key]);

  omitNull(metaData);
  omitNull(quota);

  const requestedProject = await privateCloudRequestedProjects.create({
    ...project,
    ...metaData,
    ...quota,
  });

  const requestBody = {
    createdBy: user._id,
    status: RequestStatus.PENDING_DECISION,
    type: RequestType.EDIT,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: new Date(),
    decisionDate: null,
    project: id,
    requestedProject: requestedProject._id,
  };

  // Only an Admin or a PO or TL of this project can request to edit it
  if (
    ![project.projectOwner, ...project.technicalLeads].includes(user._id) &&
    !roles.includes("admin")
  ) {
    requestBody.status = RequestStatus.REJECTED;
    await privateCloudArchivedRequests.create(requestBody);

    throw new Error(
      "User must either be a project owner or technical lead on this project in order to edit it"
    );
  }

  // Only an Admin or the PO can request to change the PO
  if (
    "projectOwner" in metaData &&
    !roles.includes("admin") &&
    project.projectOwner !== user._id
  ) {
    requestBody.status = RequestStatus.REJECTED;
    await privateCloudArchivedRequests.create(requestBody);

    throw new Error("Only the project owner can set a new project owner");
  }

  // If there is no requested quota change, we do not need admin approval and can proceed to provision
  if (Object.keys(quota).length === 0) {
    requestBody.status = RequestStatus.APPROVED;

  //await sendNatsMessage();

  } else {
    requestBody.status = RequestStatus.PENDING_DECISION;
  }

  // Need to add request to users
  const request = await privateCloudActiveRequests.create(requestBody);

  chesService.send({
    bodyType: "html",
    body: `<div style="color: blue">Edit request made: ${RequestDecision.APPROVE}</div>`,
    to: [projectOwner, ...technicalLeads].map(({ email }) => email),
    from: "Registry <PlatformServicesTeam@gov.bc.ca>",
    subject: `**profile.name** OCP 4 Project Set`,
    // subject: `${profile.name} OCP 4 Project Set`,
  })

  return request;
}

export default createPrivateCloudProjectEditRequest;




