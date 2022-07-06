function privateCloudProjects(
  _,
  __,
  { dataSources: { privateCloudProjects } }
) {
  return privateCloudProjects.getAll();
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
  const { privateCloudTechnicalLead, privateCloudProjectOwner } =
    await users.findByFields({ email })[0];

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
  const user = await users.findByFields({ email })[0];

  const project = privateCloudProjects.findOneById(projectId);

  const { technicalLeads, projectOwner } = project;
  return [...technicalLeads, projectOwner].includes(user._id)
    ? project
    : undefined;
}

async function userPrivateCloudProjectsById(
  _,
  { projectIds },
  { dataSources: { privateCloudProjects, users }, kauth }
) {
  const { email } = kauth.accessToken.content;
  const user = await users.findByFields({ email })[0];

  const projects = privateCloudProjects.findManyByIds(projectIds);

  projects.every(({ projectOwner, technicalLeads }) =>
    [projectOwner, ...technicalLeads].includes(user._id)
  )
    ? projects
    : [];
}

export {
  privateCloudProjects,
  privateCloudProject,
  privateCloudProjectsById,
  userPrivateCloudProjects,
  userPrivateCloudProjectsById,
  userPrivateCloudProject,
};
