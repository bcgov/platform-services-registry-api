async function signUp(_, { input }, { dataSources: { users }, kauth }) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  if (user !== undefined) {
    throw new Error("User already exists");
  }

  return users.create({
    ...input,
    email: email,
    archived: false,
    created: new Date(),
    projectOwner: [],
    technicalLead: [],
    projectRequests: [],
    lastSeen: new Date(),
  });
}

export default signUp;
