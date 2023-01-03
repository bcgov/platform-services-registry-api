export const privateCloudProjects = (_, __, { prisma }) =>
  prisma.privateCloudProject.findMany();

export const userPrivateCloudProjects = (_, __, { prisma, user, authEmail }) =>
  prisma.privateCloudProject.findMany({
    where: {
      OR: [
        { projectOwner: { email: authEmail } },
        { primaryTechnicalLead: { email: authEmail } },
        { secondaryTechnicalLead: { email: authEmail } }
      ]
    }
  });

export const privateCloudProjectsPaginated = async (_, args, { prisma }) => {
  let { search, filter = {}, page, pageSize } = args;
  let { ministry, cluster } = filter;

  search = search === null ? undefined : search;
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = (page - 1) * pageSize;
  const projects = await prisma.privateCloudProject.findMany({
    where: {
      AND: [
        {
          OR: [
            { name: { contains: search } },
            {
              projectOwner: {
                email: { contains: search },
                firstName: { contains: search },
                lastName: { contains: search },
                githubId: { contains: search }
              }
            },
            {
              primaryTechnicalLead: {
                email: { contains: search },
                firstName: { contains: search },
                lastName: { contains: search },
                githubId: { contains: search }
              }
            },
            {
              secondaryTechnicalLead: {
                email: { contains: search },
                firstName: { contains: search },
                lastName: { contains: search },
                githubId: { contains: search }
              }
            },
            { licencePlate: { contains: search } },
            { ministry: { contains: search } },
            { cluster: { contains: search } },
            { description: { contains: search } }
          ]
        },
        {
          OR: [
            { ministry: { contains: ministry } },
            { cluster: { contains: cluster } }
          ]
        }
      ]
    },
    skip: offset,
    take: pageSize
  });
  const total = await prisma.privateCloudProject.count({
    where: {
      AND: [
        {
          OR: [
            { name: { contains: search } },
            {
              projectOwner: {
                email: { contains: search },
                firstName: { contains: search },
                lastName: { contains: search },
                githubId: { contains: search }
              }
            },
            {
              primaryTechnicalLead: {
                email: { contains: search },
                firstName: { contains: search },
                lastName: { contains: search },
                githubId: { contains: search }
              }
            },
            {
              secondaryTechnicalLead: {
                email: { contains: search },
                firstName: { contains: search },
                lastName: { contains: search },
                githubId: { contains: search }
              }
            },
            { licencePlate: { contains: search } },
            { ministry: { contains: search } },
            { cluster: { contains: search } },
            { description: { contains: search } }
          ]
        },
        {
          OR: [
            { ministry: { contains: ministry } },
            { cluster: { contains: cluster } }
          ]
        }
      ]
    }
  });

  return {
    projects,
    total: 4
  };
};
