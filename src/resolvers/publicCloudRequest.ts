const Request = {
  createdBy: (request, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        email: request.createdByEmail,
      },
    }),

  decisionMaker: (request, _, { prisma }) =>
    request.decisionMakerEmail === null
      ? null
      : prisma.user.findUnique({
          where: {
            email: request.decisionMakerEmail,
          },
        }),

  project: async (request, _, { prisma }) =>
    request.projectId === null
      ? null
      : prisma.publicCloudProject.findUnique({
          where: {
            id: request.projectId,
          },
        }),

  requestedProject: async (request, _, { prisma }) => {
    return prisma.publicCloudRequestedProject.findUnique({
      where: {
        id: request.requestedProjectId,
      },
    });
  },
};

export default Request;