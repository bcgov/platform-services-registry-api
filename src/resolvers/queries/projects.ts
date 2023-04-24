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
  let { search, filter = {}, page, pageSize, sortOrder = -1 } = args;
  let { ministry, cluster } = filter;

  search = search === null ? undefined : search.toLowerCase();
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = page > 0 ? (page - 1) * pageSize : 0;

  const projects = await prisma.privateCloudProject.aggregateRaw({
    pipeline: [
      {
        $project: {
          "id": {
            $toString: "$_id"
          },
          "name": 1,
          "licencePlate": 1,
          "archived": 1,
          "created": {
            $toString: "$created"
          },
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
          "projectOwnerIdSearch": {
            $toObjectId: "$projectOwnerId"
          },
          "primaryTechnicalLeadIdSearch": {
            $toObjectId: "$primaryTechnicalLeadId"
          },
          "secondaryTechnicalLeadIdSearch": {
            $toObjectId: "$secondaryTechnicalLeadId"
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
          "lowerDescription": {
            "$toLower": "$description"
          },
          "lowerName": {
            "$toLower": "$name"
          },
        }
      },
      {
        $lookup:
        {
          from: "User",
          localField: "projectOwnerIdSearch",
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
        $lookup:
        {
          from: "User",
          localField: "secondaryTechnicalLeadIdSearch",
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
          localField: "primaryTechnicalLeadIdSearch",
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
        "$addFields": {
          "projectOwnerEmail": { "$toLower": "$projectOwner.email" },
          "projectOwnerFirstName": { "$toLower": "$projectOwner.firstName" },
          "projectOwnerLastName": { "$toLower": "$projectOwner.lastName" },
          "primaryTechnicalLeadEmail": { "$toLower": "$primaryTechnicalLead.email" },
          "primaryTechnicalLeadFirstName": { "$toLower": "$primaryTechnicalLead.firstName" },
          "primaryTechnicalLeadLastName": { "$toLower": "$primaryTechnicalLead.lastName" },
          "secondaryTechnicalLeadEmail": { "$toLower": "$secondaryTechnicalLead.email" },
          "secondaryTechnicalLeadFirstName": { "$toLower": "$secondaryTechnicalLead.firstName" },
          "secondaryTechnicalLeadLastName": { "$toLower": "$secondaryTechnicalLead.lastName" },
        }
      },
      {
        $match: { $and:[{cluster: cluster}, {ministry:ministry}]  }
      },
      {
        $match: {
          status: { $regex: "ACTIVE" },
          $and: [
            {
              $or: [
                {
                  'projectOwnerEmail': { $regex: search ? search : '' },
                },
                {
                  'projectOwnerFirstName': { $regex: search ? search : '' },
                },
                {
                  'projectOwnerLastName': { $regex: search ? search : '' },
                },
                {
                  'primaryTechnicalLeadEmail': { $regex: search ? search : '' },
                },
                {
                  'primaryTechnicalLeadFirstName': { $regex: search ? search : '' },
                },
                {
                  'primaryTechnicalLeadLastName': { $regex: search ? search : '' },
                },
                {
                  'secondaryTechnicalLeadEmail': { $regex: search ? search : '' },
                },
                {
                  'secondaryTechnicalLeadFirstName': { $regex: search ? search : '' },
                },
                {
                  'secondaryTechnicalLeadLastName': { $regex: search ? search : '' },
                },
                {
                  lowerName: { $regex: search ? search : '' },
                },
                {
                  lowerDescription: { $regex: search ? search : '' },
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
        $sort: { lowerName: sortOrder }
      },
      {
        $skip: offset,
      },
      {
        $limit: pageSize,
      }
    ],
  })

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
