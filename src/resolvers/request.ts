const Request = {
  createdBy: (request, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        email: request.createdByEmail
      }
    }),

  decisionMaker: (request, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        email: request.decisionMakerEmail
      }
    }),

  project: async (request, _, { prisma }) =>
    request.projectId === null
      ? null
      : prisma.privateCloudProject.findUnique({
          where: {
            id: request.projectId
          }
        }),

  requestedProject: async (request, _, { prisma }) =>
    request.requestedProjectId === null
      ? null
      : prisma.privateCloudRequestedProject.findUnique({
          where: {
            id: request.requestedProjectId
          }
        })
};

export default Request;
