export const privateCloudProjects = (_, __, { prisma }) =>
  prisma.privateCloudProject.findMany();
