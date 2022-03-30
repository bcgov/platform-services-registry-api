function createUser(_, { input }, { dataSources: { users } }) {
  return users.create({
    ...input,
    archived: false,
    created: new Date(),
    projects: [],
  });
}

export default createUser;
