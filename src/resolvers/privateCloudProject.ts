import { revertCommonComponents } from '../utils/transformCommonComponents.js';

const Project = {
  projectOwner: async (project, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        id: project.projectOwnerId,
      },
    }),
  primaryTechnicalLead: async (project, _, { prisma }) =>
    prisma.user.findUnique({
      where: {
        id: project.primaryTechnicalLeadId,
      },
    }),
  secondaryTechnicalLead: async (project, _, { prisma }) =>
    project.secondaryTechnicalLeadId == null
      ? null
      : prisma.user.findUnique({
          where: {
            id: project.secondaryTechnicalLeadId,
          },
        }),
  activeEditRequest: async (project, _, { prisma }) =>
    prisma.privateCloudRequest.findFirst({
      where: {
        projectId: project.id,
        active: true,
      },
    }),
  requestHistory: async (project, _, { prisma }) =>
    prisma.privateCloudRequest.findMany({
      where: {
        projectId: project.id,
      },
    }),
  commonComponents: async (project) =>
    revertCommonComponents(project.commonComponents),
};

export default Project;
