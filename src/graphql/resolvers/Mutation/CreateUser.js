function createUser(_, { input }, { dataSources: { users } }) {
  return users.create({
    ...input,
    archived: false,
    created: new Date(),
    projectOwner: [],
    technicalLead: [],
    lastSeen: new Date(),
  });
}

export default createUser;
