export const privateCloudActiveRequests = async (_, __, { prisma }) =>
  await prisma.privateCloudRequest.findMany({
    where: {
      active: true
    }
  });

export const userPrivateCloudActiveRequests = async (
  _,
  __,
  { prisma, authEmail }
) =>
  await prisma.privateCloudRequest.findMany({
    where: {
      user: { email: authEmail },
      active: true
    }
  });

export const userPrivateCloudActiveRequestById = async (
  _,
  { requestId },
  { prisma, authEmail }
) =>
  await prisma.privateCloudRequest.findFirst({
    where: {
      user: { email: authEmail },
      id: requestId,
      active: true
    }
  });

export const userPrivateCloudActiveRequestsByIds = async (
  _,
  { requestIds },
  { prisma, authEmail }
) =>
  await prisma.privateCloudRequest.findMany({
    where: {
      user: { email: authEmail },
      id: { in: requestIds },
      active: true
    }
  });
