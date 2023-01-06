const Project = {
  projectOwner: async (project, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        id: project.projectOwnerId
      }
    }),
  primaryTechnicalLead: async (project, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        id: project.primaryTechnicalLeadId
      }
    }),
  secondaryTechnicalLead: async (project, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        id: project.secondaryTechnicalLeadId
      }
    }),
  activeEditRequest: async (project, _, { prisma }) =>
    prisma.privateCloudRequest.findUnique({
      where: {
        projectId: project.id,
        active: true
      }
    }),
  requestHistory: async (project, _, { prisma }) =>
    prisma.privateCloudRequest.findUnique({
      where: {
        projectId: project.id
      }
    })
};

export default Project;
