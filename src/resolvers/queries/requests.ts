export const privateCloudActiveRequests = async (_, __, { prisma }) =>
  await prisma.privateCloudRequest.findMany({
    where: {
      active: true
    }
  });
