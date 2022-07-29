async function signUp(_, { input }, { dataSources: { users }, kauth }) {
  const { email, given_name: firstName, family_name: lastName } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });g 

  if (user !== undefined) {
    //throw new Error("User already exists");
    return user
  }

  return users.create({
    ...input,
    firstName,
    lastName,
    email,
    archived: false,
    created: new Date(),
    privateCloudProjectOwner: [],
    privateCloudTechnicalLead: [],
    privateCloudActiveRequests: [],
    lastSeen: new Date(),
  })
}

export default signUp;
