function privateCloudProjects(
  _,
  __,
  { dataSources: { privateCloudProjects } }
) {
  return privateCloudProjects.getAll();
}

async function privateCloudProjectsPaginated(
  _,
  { offset, limit, filter, search, sort, sortOrder },
  { dataSources: { privateCloudProjects } }
) {
  const paginatedProjects = await privateCloudProjects.getPaginated(
    offset,
    limit,
    filter,
    search,
    sort,
    sortOrder
  );

  const allProjects = await privateCloudProjects.getFilteredSearchSorted(
    filter,
    search
  );

  return {
    count: allProjects.length,
    projects: paginatedProjects,
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

  const { privateCloudTechnicalLead, privateCloudProjectOwner } = user;

  return privateCloudProjects.findManyByIds([
    ...privateCloudProjectOwner,
    ...privateCloudTechnicalLead,
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

  const { technicalLeads, projectOwner } = project;

  if (
    ![...technicalLeads, projectOwner]
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

  projects.every(({ projectOwner, technicalLeads }) =>
    [projectOwner, ...technicalLeads].includes(user._id)
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
