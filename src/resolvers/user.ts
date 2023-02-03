const User = {
  privateCloudProjectOwner: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .privateCloudProjectOwner(),
  privateCloudProjectPrimaryTechnicalLead: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .privateCloudProjectPrimaryTechnicalLead(),
  privateCloudProjectSecondaryTechnicalLead: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id,
        },
      })
      .privateCloudProjectSecondaryTechnicalLead(),
};

export default User;
