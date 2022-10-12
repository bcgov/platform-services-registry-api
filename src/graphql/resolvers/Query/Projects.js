const { Parser } = require('json2csv');

function privateCloudProjects(
  _,
  __,
  { dataSources: { privateCloudProjects } }
) {
  return privateCloudProjects.getAll();
}

function privateCloudProjectsPaginated(
  _,
  { offset, limit, ministry, cluster, search, sortField, sortOrder },
  { dataSources: { privateCloudProjects } }
) {

  const count = async function () {
    const limit = await privateCloudProjects.collection.find().count()
    const serachArr = await privateCloudProjects.getAllPaginated(0, limit, ministry, cluster, search)
    return serachArr.length
  }()

  return {
    count: ministry || cluster || search ? count : privateCloudProjects.collection.find().count(),
    projects: privateCloudProjects.getAllPaginated(
      offset,
      limit,
      ministry,
      cluster,
      search,
      sortField,
      sortOrder
    ),
  };
}

function privateCloudProjectsCSV(
  _,
  { fields = ['name'], ministry, cluster, search},
  { dataSources: { privateCloudProjects } }
) {

  const opts = { fields };
  const csvFile = async function () {
    const serachArr = await privateCloudProjects.getProjectsFiltered( ministry, cluster, search)
    const parser = new Parser(opts);
    const csv = await parser.parse(serachArr) 
    return csv
  }()

  return {
    csv: csvFile,
    projects: privateCloudProjects.getProjectsFiltered(
      ministry,
      cluster,
      search,
    ),
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
  privateCloudProjectsCSV
};
