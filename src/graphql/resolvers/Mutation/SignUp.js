function signUp (_, { input }, { dataSources: { users }, kauth }) {

  const { email } = kauth.accessToken.content;
  
  return users.create({
    ...input,
    email: email,
    archived: false,
    created: new Date(),
    projectOwnerPrivateCloud: [],
    technicalLeadPrivateCloud: [],
    projectOwnerPublicCloud: [],
    technicalLeadPublicCloud: [],
    lastSeen: new Date(),
  });
}

export default signUp;
