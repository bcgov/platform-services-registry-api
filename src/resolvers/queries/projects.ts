export const privateCloudProjects = (_, __, { prisma }) => {
  return prisma.privateCloudProject.findMany({
    where: {
      status: "ACTIVE"
    }
  });
};

export const privateCloudProjectById = (_, { projectId }, { prisma }) =>
  prisma.privateCloudProject.findUnique({
    where: {
      id: projectId,
      status: "ACTIVE"
    }
  });

export const userPrivateCloudProjects = (_, __, { prisma, user, authEmail }) =>
  prisma.privateCloudProject.findMany({
    orderBy: {
      name: "asc"
    },
    where: {
      status: "ACTIVE",
      OR: [
        { projectOwner: { email: authEmail } },
        { primaryTechnicalLead: { email: authEmail } },
        { secondaryTechnicalLead: { email: authEmail } }
      ]
    }
  });

export const userPrivateCloudProjectById = async (
  _,
  { projectId },
  { prisma, user, authEmail }
) =>
  await prisma.privateCloudProject.findUnique({
    where: {
      id: projectId,
      status: "ACTIVE",
      OR: [
        { projectOwner: { email: authEmail } },
        { primaryTechnicalLead: { email: authEmail } },
        { secondaryTechnicalLead: { email: authEmail } }
      ]
    }
  });

export const userPrivateCloudProjectsByIds = async (
  _,
  { projectIds },
  { prisma, user, authEmail }
) =>
  await prisma.privateCloudProject.findMany({
    where: {
      id: { in: projectIds },
      status: "ACTIVE",
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

  search = search === null ? "Zhanna" : search;
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = (page - 1) * pageSize;

  // const rawMngo = await prisma.privateCloudProject.findRaw({
  //   filter: { name: {$regex: 'OpenShift 201 Test Project 1' } },
  // })

  // console.log(rawMngo)

  const rawMongoAgg = await prisma.privateCloudProject.aggregateRaw({
    pipeline: [
      {
        $project: {
          "name": 1,
          "status": 1,
          "projectOwnerId": 1,
          "secondaryTechnicalLeadId": 1,
          "lowerName": {
            "$toLower": "$name"
          }
        }
      },
      {
        '$lookup':
        {
          from: "User",
          localField: "projectOwnerId",
          foreignField: "_id",
          as: "projectOwner"
        }
      },
      {
        $unwind: {
          path: '$projectOwner',
        },
      },
      {
        '$lookup':
        {
          from: "User",
          localField: "secondaryTechnicalLeadId",
          foreignField: "_id",
          as: "secondaryTechnicalLead"
        }
      },
      {
        $unwind: {
          path: '$secondaryTechnicalLead',
          preserveNullAndEmptyArrays: true ,
        },
      },
      {
        $match: {
          status: { $regex: "ACTIVE" },
          // AND: [
          //   {
          //     // OR: [
          //     //   {
          //     //     $match: {
          //     //       projectOwner: { $regex: search },
          //     //     }
          //     //   }
          //     // ]
          //   }
          // ]
        }
      },
      {
        $sort: { lowerName: 1 }
      }
    ],
  })
  // console.log(rawMongoAgg.slice(0, 7))
  const projects = await prisma.privateCloudProject.findMany({
    orderBy: {
      name: "asc"
    },
    where: {
      status: "ACTIVE",
      AND: [
        {
          OR: [
            { projectOwner: { email: { contains: search } } },
            { projectOwner: { firstName: { contains: search } } },
            { projectOwner: { lastName: { contains: search } } },
            { primaryTechnicalLead: { email: { contains: search } } },
            { primaryTechnicalLead: { firstName: { contains: search } } },
            { primaryTechnicalLead: { lastName: { contains: search } } },
            { secondaryTechnicalLead: { email: { contains: search } } },
            { secondaryTechnicalLead: { firstName: { contains: search } } },
            { secondaryTechnicalLead: { lastName: { contains: search } } },
            { name: { contains: search } },
            { description: { contains: search } },
            { licencePlate: { contains: search } }
          ]
        },
        {
          ministry: {
            in: ministry
          }
        },
        {
          cluster: {
            in: cluster
          }
        }
      ]
    },
    skip: offset,
    take: pageSize
  });

  const total = await prisma.privateCloudProject.count({
    where: {
      status: "ACTIVE",
      AND: [
        {
          OR: [
            { projectOwner: { email: { contains: search } } },
            { projectOwner: { firstName: { contains: search } } },
            { projectOwner: { lastName: { contains: search } } },
            { primaryTechnicalLead: { email: { contains: search } } },
            { primaryTechnicalLead: { firstName: { contains: search } } },
            { primaryTechnicalLead: { lastName: { contains: search } } },
            { secondaryTechnicalLead: { email: { contains: search } } },
            { secondaryTechnicalLead: { firstName: { contains: search } } },
            { secondaryTechnicalLead: { lastName: { contains: search } } },
            { name: { contains: search } },
            { description: { contains: search } },
            { licencePlate: { contains: search } }
          ]
        },
        {
          ministry: {
            in: ministry
          }
        },
        {
          cluster: {
            in: cluster
          }
        }
      ]
    }
  });

  return {
    projects,
    total
  };
};

export const privateCloudProjectsWithFilterSearch = async (
  _,
  args,
  { prisma }
) => {
  let { search, filter = {} } = args;
  let { ministry, cluster } = filter;

  search = search === null ? undefined : search;
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const projects = await prisma.privateCloudProject.findMany({
    orderBy: {
      name: "asc"
    },
    where: {
      status: "ACTIVE",
      AND: [
        {
          OR: [
            { projectOwner: { email: { contains: search } } },
            { projectOwner: { firstName: { contains: search } } },
            { projectOwner: { lastName: { contains: search } } },
            { primaryTechnicalLead: { email: { contains: search } } },
            { primaryTechnicalLead: { firstName: { contains: search } } },
            { primaryTechnicalLead: { lastName: { contains: search } } },
            { secondaryTechnicalLead: { email: { contains: search } } },
            { secondaryTechnicalLead: { firstName: { contains: search } } },
            { secondaryTechnicalLead: { lastName: { contains: search } } },
            { name: { contains: search } },
            { description: { contains: search } },
            { licencePlate: { contains: search } }
          ]
        },
        {
          ministry: {
            in: ministry
          }
        },
        {
          cluster: {
            in: cluster
          }
        }
      ]
    }
  });

  return projects;
};
