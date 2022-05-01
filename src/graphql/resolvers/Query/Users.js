function users(_, __, { dataSources: { users } }) {
  return users.getAll();
}

function user(_, { id }, { dataSources: { users } }) {
  return users.findOneById(id);
}

function usersByIds(_, { ids }, { dataSources: { users } }) {
  return users.findManyByIds(ids);
}

function me(_, __, { dataSources: { users }, kauth }) {
  const { email } = kauth.accessToken.content;
  return users.findByFields({ email })[0];
}

export { users, usersByIds, user, me };
