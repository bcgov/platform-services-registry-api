export const privateCloudActiveRequests = async (_, __, { prisma }) =>
  await prisma.privateCloudRequest.findMany({
    where: {
      active: true
    }
  });

export const userPrivateCloudRequests = async (_, __, { prisma, authEmail }) =>
  await prisma.privateCloudRequest.findMany({
    where: {
      user: { email: authEmail }
    }
  });
