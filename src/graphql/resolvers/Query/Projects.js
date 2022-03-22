function projects(_, __, { dataSources: { projects } }) {
  return projects.getAll();
}

function project(_, { id }, { dataSources: { projects } }) {
  return projects.getById(id)
}

export { projects, project };
