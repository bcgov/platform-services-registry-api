async function createUser(_, { input }, { dataSources: { users } }) {

  const [user] = await users.findByFields({ email: input.email });

  if (user) {
    throw new Error("User already exists");
  }

  return users.create({
    ...input,
    archived: false,
    created: new Date(),
    projectOwner: [],
    privateCloudProjectOwner: [],
    privateCloudTechnicalLead: [],
    lastSeen: new Date(),
  });
}

export default createUser;
