import ProjectStatus from "../enum/ProjectStatus";
import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";

async function updatePrivateCloudProject(
  _,
  { id, metaData, quota },
  {
    dataSources: {
      users,
      privateCloudRequestedProjects,
      privateCloudRequests,
      privateCloudActiveRequests,
      privateCloudProjects,
    },
    kauth,
  }
) {
  // TODO: Configure mongo to either accept or reject all of the following writes
  // (so that partial writes are avoided in case of an error). Then return error stating
  // that project creation was rejected. (Might need to do sequentially as create project needs
  // to be done first)

  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access[process.env.AUTH_RESOURCE];

  const [user] = await users.findByFields({ email });

  const project = privateCloudProjects.findOneById(id);

  if (project === undefined) {
    throw new Error("Project does not exist");
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

  try {
    if (
      !roles.includes("admin") &&
      "projectOwner" in requestedProjectInput &&
      requestedProjectInput.projectOwner !== email
    ) {
      throw new Error("Only the project owner can set a new project owner");
    }

    if (
      !roles.includes("admin") &&
      ![project.projectOwner, ...project.technicalLeads].includes(email)
    ) {
      throw new Error(
        "User must either be a project owner or technical lead on this project in order to edit it"
      );
    }
  } catch (error) {
    await privateCloudRequests.create({
      ...requestBody,
      ...{ status: RequestStatus.REJECTED },
    });

    throw error;
  }

  if (Object.keys(quota).length === 0) {
    const request = await privateCloudActiveRequests.create({
      ...requestBody,
      ...{ status: RequestStatus.APPROVED },
    });

    return request;

    // *** PROVISON ***
  } else {
    const request = await privateCloudActiveRequests.create({
      ...requestBody,
      ...{ status: RequestStatus.PENDING_DECISION },
    });

    return request;
  }
}

export default updatePrivateCloudProject;
