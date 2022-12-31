const User = {
  privateCloudProjectOwner: (user, _, { prisma }) =>
    prisma.privateCloudProject.findMany({
      where: {
        projectOwnerId: user.id
      }
    }),
  privateCloudProjectPrimaryTechnicalLead: (user, _, { prisma }) =>
    prisma.privateCloudProject.findMany({
      where: {
        primaryTechnicalLeadId: user.id
      }
    }),
  privateCloudProjectSecondaryTechnicalLead: (user, _, { prisma }) =>
    prisma.privateCloudProject.findMany({
      where: {
        secondaryTechnicalLeadId: user.id
      }
    }),
  privateCloudRequestProjectOwner: (user, _, { prisma }) =>
    prisma.privateCloudRequest.findMany({
      where: {
        projectOwnerId: user.id
      }
    }),
  privateCloudRequestPrimaryTechnicalLead: (user, _, { prisma }) =>
    prisma.privateCloudRequest.findMany({
      where: {
        primaryTechnicalLeadId: user.id
      }
    }),
  privateCloudRequestSecondaryTechnicalLead: (user, _, { prisma }) =>
    prisma.privateCloudRequest.findMany({
      where: {
        secondaryTechnicalLeadId: user.id
      }
    })
};

export default User;
