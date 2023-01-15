const User = {
  privateCloudProjectOwner: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .privateCloudProjectOwner(),
  privateCloudProjectPrimaryTechnicalLead: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .privateCloudProjectPrimaryTechnicalLead(),
  privateCloudProjectSecondaryTechnicalLead: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .privateCloudProjectSecondaryTechnicalLead(),
  privateCloudActiveRquests: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .privateCloudRequests({
        where: {
          active: true
        }
      })
};

export default User;
