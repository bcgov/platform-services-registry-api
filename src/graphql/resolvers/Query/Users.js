function users(_, __, { dataSources: { users } }) {
  return users.getAll();
}

function user(_, { id }, { dataSources: { users } }) {
  return users.findOneById(id);
}

function usersByIds(_, { ids }, { dataSources: { users } }) {
  return users.findManyByIds(ids);
}

export { users, usersByIds, user };
