async function createUser(_, { input }, { dataSources: { users } }) {
  const [user] = await users.findByFields({ email: input.email });

  if (user) {
    throw new Error("User already exists");
  }

  return users.create({
    ...input,
    archived: false,
    lastSeen: new Date(),
    privateCloudActiveRequests: [],
    privateCloudProjectOwner: [],
    privateCloudPrimaryTechnicalLead: [],
    privateCloudSecondaryTechnicalLead: [],
    created: new Date(),
    ministry: null
  });
}

export default createUser;
