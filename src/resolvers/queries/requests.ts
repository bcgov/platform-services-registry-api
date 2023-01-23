export const privateCloudActiveRequests = async (_, __, { prisma }) =>
  await prisma.privateCloudRequest.findMany({
    where: {
      active: true
    }
  });

export const privateCloudActiveRequestById = async (
  _,
  { requestId },
  { prisma }
) =>
  await prisma.privateCloudRequest.findUnique({
    where: {
      id: requestId,
      active: true
    }
  });

export const userPrivateCloudActiveRequests = (
  _,
  request,
  { prisma, authEmail }
) =>
  prisma.privateCloudRequest.findMany({
    where: {
      active: true,
      OR: [
        {
          requestedProject: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } }
            ]
          }
        },
        {
          project: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } }
            ]
          }
        }
      ]
    }
  });

export const userPrivateCloudActiveRequestById = async (
  _,
  { requestId },
  { prisma, authEmail }
) =>
  await prisma.privateCloudRequest.findUnique({
    where: {
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
