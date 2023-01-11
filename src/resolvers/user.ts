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
  privateCloudRequestProjectOwner: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .privateCloudRequestedProjectOwner(),
  privateCloudRequestPrimaryTechnicalLead: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .privateCloudRequestedProjectPrimaryTechnicalLead(),
  privateCloudRequestSecondaryTechnicalLead: (user, _, { prisma }) =>
    prisma.user
      .findUnique({
        where: {
          id: user.id
        }
      })
      .privateCloudRequestedProjectSecondaryTechnicalLead()
};

export default User;
