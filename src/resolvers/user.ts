import { User } from "__generated__/resolvers-types";

const User = {
  privateCloudProjectOwner: async (user, _, { prisma }) => {
    return await prisma.privateCloudProject.findMany({
      where: {
        projectOwnerId: user.id
      }
    });
  },
  privateCloudProjectPrimaryTechnicalLead: async (user, _, { prisma }) => {
    return await prisma.privateCloudProject.findMany({
      where: {
        primaryTechnicalLeadId: user.id
      }
    });
  },
  privateCloudProjectSecondaryTechnicalLead: async (user, _, { prisma }) => {
    return await prisma.privateCloudProject.findMany({
      where: {
        secondaryTechnicalLeadId: user.id
      }
    });
  },
  privateCloudRequestProjectOwner: async (user, _, { prisma }) => {
    return await prisma.privateCloudRequest.findMany({
      where: {
       projectOwnerId: user.id
      }
    });
  },
  privateCloudRequestPrimaryTechnicalLead: async (user, _, { prisma }) => {
    return await prisma.privateCloudRequest.findMany({
      where: {
        primaryTechnicalLeadId: user.id
      }
    });
  },
  privateCloudRequestSecondaryTechnicalLead: async (user, _, { prisma }) => {
    return await prisma.privateCloudRequest.findMany({
      where: {
        secondaryTechnicalLeadId: user.id
      }
    });
  }
};

export default User;
