export const publicCloudActiveRequests = async (_, __, { prisma }) =>
  await prisma.publicCloudRequest.findMany({
    where: {
      active: true,
    },
  });

export const publicCloudActiveRequestById = async (
  _,
  { requestId },
  { prisma }
) =>
  await prisma.publicCloudRequest.findUnique({
    where: {
      id: requestId,
      active: true,
    },
  });

export const publicCloudRequestById = async (_, { requestId }, { prisma }) =>
  await prisma.publicCloudRequest.findUnique({
    where: {
      id: requestId,
    },
  });

export const userPublicCloudRequestById = async (
  _,
  { requestId },
  { prisma, authEmail }
) =>
  await prisma.publicCloudRequest.findUnique({
    where: {
      id: requestId,
      OR: [
        {
          requestedProject: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } },
            ],
          },
        },
        {
          project: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } },
            ],
          },
        },
      ],
    },
  });

export const userPublicCloudRequests = (_, __, { prisma, authEmail }) => {
  return prisma.publicCloudRequest.findMany({
    where: {
      OR: [
        {
          requestedProject: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } },
            ],
          },
        },
        {
          project: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } },
            ],
          },
        },
      ],
    },
  });
};

export const userPublicCloudActiveRequests = (
  _,
  request,
  { prisma, authEmail }
) =>
  prisma.publicCloudRequest.findMany({
    where: {
      active: true,
      OR: [
        {
          requestedProject: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } },
            ],
          },
        },
        {
          project: {
            OR: [
              { projectOwner: { email: authEmail } },
              { primaryTechnicalLead: { email: authEmail } },
              { secondaryTechnicalLead: { email: authEmail } },
            ],
          },
        },
      ],
    },
  });

export const userPublicCloudActiveRequestById = async (
  _,
  { requestId },
  { prisma, authEmail }
) =>
  await prisma.publicCloudRequest.findUnique({
    where: {
      id: requestId,
      active: true,
    },
  });

export const userPublicCloudActiveRequestsByIds = async (
  _,
  { requestIds },
  { prisma, authEmail }
) =>
  await prisma.publicCloudRequest.findMany({
    where: {
      user: { email: authEmail },
      id: { in: requestIds },
      active: true,
    },
  });
