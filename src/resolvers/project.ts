import { selectedDefaultQuota } from "../utils/defaultQuota.js";

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
    project.secondaryTechnicalLeadId == null
      ? null
      : prisma.user.findUnique({
          where: {
            id: project.secondaryTechnicalLeadId
          }
        }),
  activeEditRequest: async (project, _, { prisma }) =>
    prisma.privateCloudRequest.findFirst({
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
    }),
  productionQuotaSelected: (project, _, __) =>
    selectedDefaultQuota(project.productionQuota),
  developmentQuotaSelected: (project, _, __) =>
    selectedDefaultQuota(project.developmentQuota),
  testQuotaSelected: (project, _, __) =>
    selectedDefaultQuota(project.testQuota),
  toolsQuotaSelected: (project, _, __) =>
    selectedDefaultQuota(project.toolsQuota)
};

export default Project;
