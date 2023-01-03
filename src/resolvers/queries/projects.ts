export const privateCloudProjects = (_, __, { prisma }) =>
  prisma.privateCloudProject.findMany();

// export const privateCloudProjectsPaginated = async (_, args, { prisma }) => {
//   const { page, pageSize } = args;
//   const offset = (page - 1) * pageSize;
//   const projects = await prisma.privateCloudProject.findMany({
//     skip: offset,
//     take: pageSize
//   });
//   const total = await prisma.privateCloudProject.count();
//   return {
//     projects,
//     total
//   };
// };

// export const privateCloudProjectSearch = async (_, args, { prisma }) => {
//   const { search } = args;
//   const projects = await prisma.privateCloudProject.findMany({
//     where: {
//       OR: [
//         { projectName: { contains: search } },
//         { projectOwnerEmail: { contains: search } },
//         { primaryTechnicalLeadEmail: { contains: search } },
//         { secondaryTechnicalLeadEmail: { contains: search } },
//         { licencePlate: { contains: search } },
//         { status: { contains: search } },
//         { commonComponents: { contains: search } },
//         { description: { contains: search } }
//       ]
//     }
//   });
//   return projects;
// };

export const privateCloudProjectsPaginated = async (
  _,
  args,
  { prisma }
) => {
  const { search, page, pageSize } = args;
  const offset = (page - 1) * pageSize;
  const projects = await prisma.privateCloudProject.findMany({
    where: {
      OR: [
        { projectName: { contains: search } },
        { projectOwnerEmail: { contains: search } },
        { primaryTechnicalLeadEmail: { contains: search } },
        { secondaryTechnicalLeadEmail: { contains: search } },
        { licencePlate: { contains: search } },
        { status: { contains: search } },
        { commonComponents: { contains: search } },
        { description: { contains: search } }
      ]
    },
    skip: offset,
    take: pageSize
  });
  const total = await prisma.privateCloudProject.count({
    where: {
      OR: [
        { projectName: { contains: search } },
        { projectOwnerEmail: { contains: search } },
        { primaryTechnicalLeadEmail: { contains: search } },
        { secondaryTechnicalLeadEmail: { contains: search } },
        { licencePlate: { contains: search } },
        { status: { contains: search } },
        { commonComponents: { contains: search } },
        { description: { contains: search } }
      ]
    }
  });
  return {
    projects,
    total
  };
};
