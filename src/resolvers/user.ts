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
  isNew: async (user, _, { prisma }) => {
    await prisma.user.findUnique({
      where: {
        email: user.email,
      },
    });

    return !!user;
  },
};

export default User;
