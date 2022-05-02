import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";

async function createPrivateCloudProject(
  _,
  { input },
  {
    dataSources: { users, privateCloudRequestedProjects, privateCloudRequests },
    kauth,
  }
) {
  // TODO: Configure mongo to either accept or reject all of the following writes
  // (so that partial writes are avoided in case of an error). Then return error stating
  // that project creation was rejected. (Might need to do sequentially as create project needs
  // to be done first)

  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access[process.env.AUTH_RESOURCE];

  if (
    !roles.includes("admin") &&
    ![input.projectOwner, ...input.technicalLeads].includes(email)
  ) {
    throw new Error(
      "User must assign themselves as the project owner or a technical lead"
    );
  }

  const [user] = await users.findByFields({ email });
  const [projectOwner] = await users.findByFields({ email: input.projectOwner });
  const technicalLeads = await users.findManyByFieldValues("email",  input.technicalLeads);

  // Create Project
  const project = await privateCloudRequestedProjects.create({
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
    projectOwner: project._id,
  });

  // Find technical leads and add the project id
  if (input?.technicalLeads) {
    await users.addElementToManyDocumentsArray(
      technicalLeads.map(({ _id }) => _id),
      {
        technicalLead: project._id,
      }
    );
  }

  // Create Request
  const request = await privateCloudRequests.create({
    createdBy: project.createdBy,
    status: RequestStatus.SUBMITTED,
    type: RequestType.CREATE,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: project.created,
    updated: null,
    project: null,
    requestedProject: project._id,
  });

  return request;
}

export default createPrivateCloudProject;
