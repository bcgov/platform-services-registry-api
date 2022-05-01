function createUser(_, { input }, { dataSources: { users } }) {
  // Need to verify that input.email does not already exist
  return users.create({
    ...input,
    archived: false,
    created: new Date(),
    projectOwnerPrivateCloud: [],
    technicalLeadPrivateCloud: [],
    projectOwnerPublicCloud: [],
    technicalLeadPublicCloud: [],
    lastSeen: new Date(),
  });
}

export default createUser;
