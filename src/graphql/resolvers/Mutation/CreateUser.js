function createUser(_, { input }, { dataSources: { users } }) {
  return users.create({ ...input, archived: false, created: new Date() });
}

export default createUser;
