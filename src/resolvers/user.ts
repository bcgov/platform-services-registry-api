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
    const result = await prisma.user.findUnique({
      where: {
        email: user.email,
      },
      include: {
        privateCloudProjectOwner: true,
        privateCloudProjectPrimaryTechnicalLead: true,
        privateCloudProjectSecondaryTechnicalLead: true,
        publicCloudProjectOwner: true,
        publicCloudProjectPrimaryTechnicalLead: true,
        publicCloudProjectSecondaryTechnicalLead: true,
      },
    });

    return {
      private:(
      result.privateCloudProjectOwner.length > 0 ||
      result.privateCloudProjectPrimaryTechnicalLead.length > 0 ||
      result.privateCloudProjectSecondaryTechnicalLead.length > 0
    ), 
    public:(
      result.publicCloudProjectOwner.length > 0 ||
      result.publicCloudProjectPrimaryTechnicalLead.length > 0 ||
      result.publicCloudProjectSecondaryTechnicalLead.length > 0
    )};
  },
};

export default User;
