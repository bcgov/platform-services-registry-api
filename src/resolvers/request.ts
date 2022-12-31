const Request = {
  createdBy: (request, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        email: request.createdByEmail
      }
    }),

  project: (request, _, { prisma }) =>
    prisma.privateCloudProject.findUnique({
      where: {
        id: request.projectId
      }
    })
};

export default Request;
