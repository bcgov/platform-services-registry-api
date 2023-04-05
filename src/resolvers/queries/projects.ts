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

  search = search === null ? undefined : search;
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = page > 0 ? (page - 1) * pageSize : 0;

  // const rawMngo = await prisma.privateCloudProject.findRaw({
  //   filter: { name: {$regex: 'OpenShift 201 Test Project 1' } },
  // })

  // console.log(rawMngo)

  const projectsTest = await prisma.privateCloudProject.aggregateRaw({
    pipeline: [
      {
        $project: {
          "id": {
            $toString: "$_id"
          },
          "name": 1,
          "licencePlate": 1,
          "archived": 1,
          "created": 1,
          "description": 1,
          "status": 1,
          "projectOwnerId": {
            $toString: "$projectOwnerId"
          },
          "secondaryTechnicalLeadId": {
            $toString: "$secondaryTechnicalLeadId"
          },
          "primaryTechnicalLeadId": {
            $toString: "$primaryTechnicalLeadId"
          },
          "ministry": 1,
          "cluster": 1,
          "productionQuota": 1,
          "testQuota": 1,
          "developmentQuota": 1,
          "toolsQuota": 1,
          "requestHistory": 1,
          "activeEditRequest": 1,
          "count": 1,
          "commonComponents": 1,
          "lowerName": {
            "$toLower": "$name"
          }
        }
      },
      // {
      //   $lookup:
      //   {
      //     from: "User",
      //     localField: "projectOwnerId",
      //     foreignField: "_id",
      //     as: "projectOwner"
      //   }
      // },
      // {
      //   $unwind: {
      //     path: '$projectOwner',
      //   },
      // },
          {
        $lookup:
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
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup:
        {
          from: "User",
          localField: "primaryTechnicalLeadId",
          foreignField: "_id",
          as: "primaryTechnicalLead"
        }
      },
      {
        $unwind: {
          path: '$primaryTechnicalLead',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $match: {
          status: { $regex: "ACTIVE" },
          $and: [
            {
              $or: [
                {
                  'projectOwner.email': { $regex: search ? search : '' },
                },
                {
                  'projectOwner.firstName': { $regex: search ? search : '' },
                },
                {
                  'projectOwner.lastName': { $regex: search ? search : '' },
                },
                {
                  'primaryTechnicalLead.email': { $regex: search ? search : '' },
                },
                {
                  'primaryTechnicalLead.firstName': { $regex: search ? search : '' },
                },
                {
                  'primaryTechnicalLead.lastName': { $regex: search ? search : '' },
                },
                {
                  'secondaryTechnicalLead.email': { $regex: search ? search : '' },
                },
                {
                  'secondaryTechnicalLead.firstName': { $regex: search ? search : '' },
                },
                {
                  'secondaryTechnicalLead.lastName': { $regex: search ? search : '' },
                },
                {
                  name: { $regex: search ? search : '' },
                },
                {
                  description: { $regex: search ? search : '' },
                },
                {
                  licencePlate: { $regex: search ? search : '' },
                },
              ]
            }
          ],
        }
      },
      {
        $sort: { lowerName: 1 }
      },
      {
        $skip: offset,
      },
      {
        $limit: pageSize,
      }
    ],
  })
  // console.log(rawMongoAgg)

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
  // console.log(projects.slice(0, 1))
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
