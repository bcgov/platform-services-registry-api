import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType"
import Platform from "../enum/Platform";

const { ObjectId } = require("mongodb");

async function createPrivateCloudProject(
  _,
  { input },
  { dataSources: { users, privateCloudProjects, privateCloudRequests } }
) {

  // TODO: Configure mongo to either accept or reject all of the following writes
  // (so that partial writes are avoided in case of an error). Then return error stating
  // that project creation was rejected. (Might need to do sequentially as create project needs
  // to be done first)

  // Create Project
  const project = await privateCloudProjects.create({
    createdBy: ObjectId("6252a2cf0398c45563421354"), // Get user ID from auth header
    archived: false,
    created: new Date(),
    requestHistory: [],
    status: ProjectStatus.CREATE_REQUEST,
    ...input,
  });

  // Find project owner and add the project id
  await users.addElementToDocumentArray(ObjectId(input.projectOwner), {
    projectOwner: project._id,
  });

  // Find technical leads and add the project id
  await users.addElementToManyDocumentsArray(
    input.technicalLeads.map((id) => ObjectId(id)),
    {
      technicalLead: project._id,
    }
  );

  // Create Request
  const request = await privateCloudRequests.create({
    createdBy: project.createdBy,
    status: RequestStatus.SUBMITTED,
    type: RequestType.CREATE,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: project.created,
    updated: null,
    project: project._id,
    requestedProject: project._id
  })

  return request;
}

export default createPrivateCloudProject;
