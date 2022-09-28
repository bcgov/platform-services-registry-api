function users(_, __, { dataSources: { users } }) {
  return users.getAll();
}

function user(_, { id }, { dataSources: { users } }) {
  return users.findOneById(id);
}

function usersByIds(_, { ids }, { dataSources: { users } }) {
  return users.findManyByIds(ids);
}

function usersByFieldValues(_, { field, values }, { dataSources: { users } }) {
  return users.findManyByFieldValues(field, values);
}

function userByEmail(_, { email }, { dataSources: { users } }) {
  return users.collection.findOne({ email });
}

async function me(_, __, { dataSources: { users }, kauth }) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });
  return user;
}

export { users, usersByIds, user, me, userByEmail };
