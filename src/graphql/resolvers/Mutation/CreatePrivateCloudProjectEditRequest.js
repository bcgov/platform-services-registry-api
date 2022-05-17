import RequestStatus from "../enum/RequestStatus";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";

async function createPrivateCloudProjectEditRequest(
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
  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access[process.env.AUTH_RESOURCE];
  const [user] = await users.findByFields({ email });

  const project = await privateCloudProjects.findOneById(id);

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

  if (
    !roles.includes("admin") &&
    "projectOwner" in metaData &&
    metaData.projectOwner !== email
  ) {
    await privateCloudRequests.create({...requestBody, status: RequestStatus.REJECTED});
    throw new Error("Only the project owner can set a new project owner");
  }

  if (
    !roles.includes("admin") &&
    ![project.projectOwner, ...project.technicalLeads].includes(email)
  ) {
    await privateCloudRequests.create({...requestBody, status: RequestStatus.REJECTED});
    throw new Error(
      "User must either be a project owner or technical lead on this project in order to edit it"
    );
  }

  // If there is no requested quota change, we do not need admin approval and can proceed to provision
  if (Object.keys(quota).length === 0) {
    const request = await privateCloudActiveRequests.create({
      ...requestBody,
      status: RequestStatus.APPROVED,
    });

    // *** PROVISON ***
    // request variable from above to provision

    return request;
  } else {
    const request = await privateCloudActiveRequests.create({
      ...requestBody,
      status: RequestStatus.PENDING_DECISION ,
    });

    return request;
  }
}

export default createPrivateCloudProjectEditRequest;
