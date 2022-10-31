function privateCloudProjects(
  _,
  __,
  { dataSources: { privateCloudProjects } }
) {
  return privateCloudProjects.getAll();
}

function privateCloudProjectsPaginated(
  _,
  { offset, limit },
  { dataSources: { privateCloudProjects } }
) {
  return {
    count: privateCloudProjects.collection.count(),
    projects: privateCloudProjects.getAllPaginated(offset, limit),
  };
}

function privateCloudProject(
  _,
  { projectId },
  { dataSources: { privateCloudProjects } }
) {
  return privateCloudProjects.findOneById(projectId);
}

function privateCloudProjectsById(
  _,
  { projectIds },
  { dataSources: { privateCloudProjects } }
) {
  return privateCloudProjects.findManyByIds(projectIds);
}

// async function projects(
//   _,
//   __,
//   { dataSources: { publicCloudProjects, privateCloudProjects } }
// ) {
//   return [
//     ...(await privateCloudProjects.getAll()),
//     ...(await publicCloudProjects.getAll()),
//   ];
// }

async function userPrivateCloudProjects(
  _,
  __,
  { dataSources: { privateCloudProjects, users }, kauth }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  const { privateCloudProjectOwner, privateCloudPrimaryTechnicalLead, privateCloudSecondaryTechnicalLead,  } = user;


  return privateCloudProjects.findManyByIds([
    ...privateCloudProjectOwner,
    ...privateCloudPrimaryTechnicalLead,
    ...privateCloudSecondaryTechnicalLead
  ]);
}

async function userPrivateCloudProject(
  _,
  { projectId },
  { dataSources: { privateCloudProjects, users }, kauth }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  const project = await privateCloudProjects.findOneById(projectId);

  const { projectOwner, primaryTechnicalLead, secondaryTechnicalLead } = project;

  if (
    ![ projectOwner, primaryTechnicalLead, secondaryTechnicalLead]
      .map((id) => id.toString())
      .includes(user._id.toString())
  ) {
    throw Error("User is not a member of this project");
  }

  return project;
}

async function userPrivateCloudProjectsById(
  _,
  { projectIds },
  { dataSources: { privateCloudProjects, users }, kauth }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  const projects = privateCloudProjects.findManyByIds(projectIds);

  projects.every(({ projectOwner, primaryTechnicalLead, secondaryTechnicalLead }) =>
    [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].includes(user._id)
  )
    ? projects
    : [];
}

export {
  privateCloudProjects,
  privateCloudProjectsPaginated,
  privateCloudProject,
  privateCloudProjectsById,
  userPrivateCloudProjects,
  userPrivateCloudProjectsById,
  userPrivateCloudProject,
};
