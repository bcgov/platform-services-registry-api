function privateCloudProjects(_, __, { dataSources: { privateCloudProjects } }) {
  return privateCloudProjects.getAll();
}

function privateCloudProject(_, { id }, { dataSources: { privateCloudProjects } }) {
  return privateCloudProjects.findOneById(id)
}

function publicCloudProjects(_, __, { dataSources: { publicCloudProjects } }) {
  return publicCloudProjects.getAll();
}

function publicCloudProject(_, { id }, { dataSources: { publicCloudProjects } }) {
  return publicCloudProjects.findOneById(id)
}

async function projects(_, __, { dataSources: { publicCloudProjects, privateCloudProjects } }) {
  return [...await privateCloudProjects.getAll(), ...await publicCloudProjects.getAll()]
}

export { privateCloudProjects, privateCloudProject, publicCloudProjects, publicCloudProject, projects };
