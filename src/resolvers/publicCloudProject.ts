const Project = {
  projectOwner: async (project, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        id: project.projectOwnerId,
      },
    }),
  technicalLeads: async (project, _, { prisma }) =>
    prisma.user.findMany({
      where: {
        id: {
          in: project.technicalLeadIds,
        },
      },
    }),
  activeEditRequest: async (project, _, { prisma }) =>
    prisma.publicCloudRequest.findFirst({
      where: {
        projectId: project.id,
        active: true,
      },
    }),
  requestHistory: async (project, _, { prisma }) =>
    prisma.publicCloudRequest.findMany({
      where: {
        projectId: project.id,
      },
    }),
};

export default Project;
