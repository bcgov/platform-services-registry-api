const Request = {
  project: async (request, _, { prisma }) =>
    prisma.privateCloudProject.findUnique({
      where: {
        id: request.projectId
      }
    })
};

export default Request;
