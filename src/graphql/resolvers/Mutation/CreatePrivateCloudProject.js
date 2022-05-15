import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";

async function createPrivateCloudProject(
  _,
  { input },
  {
    dataSources: { users, privateCloudRequestedProjects, privateCloudActiveRequests },
    kauth,
  }
) {

  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access[process.env.AUTH_RESOURCE];
  const [user] = await users.findByFields({ email });

  if (
    !roles.includes("admin") &&
    ![input.projectOwner, ...input.technicalLeads].includes(email)
  ) {
    throw new Error(
      "User must assing themselves as a project owner or technical lead "
    );
  }

  const [projectOwner] = await users.findByFields({ email: input.projectOwner });
  const technicalLeads = await users.findManyByFieldValues("email",  input.technicalLeads);

  const requestedProject = await privateCloudRequestedProjects.create({
    ...input,
    createdBy: user._id,
    archived: false,
    created: new Date(),
    requestHistory: [],
    status: ProjectStatus.CREATE_REQUEST,
    projectOwner: projectOwner._id,
    technicalLeads: technicalLeads.map(({ _id }) => _id),
  });

  // Find project owner and add the project id
  await users.addElementToDocumentArray(projectOwner._id, {
    projectOwner: requestedProject._id,
  });

  // Find technical leads and add the project id
  if (input?.technicalLeads) {
    await users.addElementToManyDocumentsArray(
      technicalLeads.map(({ _id }) => _id),
      {
        technicalLead: requestedProject._id,
      }
    );
  }

  const request = await privateCloudActiveRequests.create({
    createdBy: requestedProject.createdBy,
    status: RequestStatus.PENDING_DECISION,
    type: RequestType.CREATE,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: requestedProject.created,
    decisionDate: null,
    project: null,
    requestedProject: requestedProject._id,
  });

  return request;
}

export default createPrivateCloudProject;
