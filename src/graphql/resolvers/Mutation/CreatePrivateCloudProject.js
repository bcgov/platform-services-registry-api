import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";

const { ObjectId } = require("mongodb");

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

  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  // Create Project
  const project = await privateCloudRequestedProjects.create({
    createdBy: user._id,
    archived: false,
    created: new Date(),
    requestHistory: [],
    status: ProjectStatus.CREATE_REQUEST,
    ...input,
  });

  // Find project owner and add the project id
  await users.addElementToDocumentArray(ObjectId(input.projectOwner), {
    projectOwnerPrivateCloud: project._id,
  });

  // Find technical leads and add the project id
  if (input?.technicalLeads) {
    await users.addElementToManyDocumentsArray(
      input.technicalLeads.map((id) => ObjectId(id)),
      {
        technicalLeadPrivateCloud: project._id,
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
