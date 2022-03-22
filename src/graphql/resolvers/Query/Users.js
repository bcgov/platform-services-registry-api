function users(_, __, { dataSources: { users } }) {
  return users.getAll();
}

function user(_, { id }, { dataSources: { users } }) {
  return users.getById(id)
}

function usersByIds(_, {ids}, { dataSources: { users } }) {
  return users.getByIds(ids)
}

export { users, usersByIds, user };
