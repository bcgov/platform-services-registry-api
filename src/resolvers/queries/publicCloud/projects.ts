import { collections } from '../../../db.js';

export const publicCloudProjectsPaginated = async (_, args, { prisma }) => {
  let {
    search,
    filter = {},
    page,
    pageSize,
    sortOrder = -1,
    userId = '',
  } = args;
  let { ministry, provider } = filter;

  search = search === null ? undefined : search.toLowerCase();
  ministry = ministry === null ? undefined : ministry;
  provider = provider === null ? undefined : provider;

  const offset = page > 0 ? (page - 1) * pageSize : 0;

  const projects = await prisma.publicCloudProject.aggregateRaw({
    pipeline: [
      {
        $project: {
          id: {
            $toString: '$_id',
          },
          name: 1,
          licencePlate: 1,
          archived: 1,
          created: {
            $toString: '$created',
          },
          description: 1,
          status: 1,
          projectOwnerId: {
            $toString: '$projectOwnerId',
          },
          secondaryTechnicalLeadId: {
            $toString: '$secondaryTechnicalLeadId',
          },
          primaryTechnicalLeadId: {
            $toString: '$primaryTechnicalLeadId',
          },
          projectOwnerIdSearch: {
            $toObjectId: '$projectOwnerId',
          },
          primaryTechnicalLeadIdSearch: {
            $toObjectId: '$primaryTechnicalLeadId',
          },
          secondaryTechnicalLeadIdSearch: {
            $toObjectId: '$secondaryTechnicalLeadId',
          },
          ministry: 1,
          provider: 1,
          productionQuota: 1,
          testQuota: 1,
          developmentQuota: 1,
          toolsQuota: 1,
          requestHistory: 1,
          activeEditRequest: 1,
          count: 1,
          commonComponents: 1,
          lowerDescription: {
            $toLower: '$description',
          },
          lowerName: {
            $toLower: '$name',
          },
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'projectOwnerIdSearch',
          foreignField: '_id',
          as: 'projectOwner',
        },
      },
      {
        $unwind: {
          path: '$projectOwner',
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'secondaryTechnicalLeadIdSearch',
          foreignField: '_id',
          as: 'secondaryTechnicalLead',
        },
      },
      {
        $unwind: {
          path: '$secondaryTechnicalLead',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'primaryTechnicalLeadIdSearch',
          foreignField: '_id',
          as: 'primaryTechnicalLead',
        },
      },
      {
        $unwind: {
          path: '$primaryTechnicalLead',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          projectOwnerEmail: { $toLower: '$projectOwner.email' },
          projectOwnerName: {
            $concat: [
              { $toLower: '$projectOwner.firstName' },
              ' ',
              { $toLower: '$projectOwner.lastName' },
            ],
          },
          primaryTechnicalLeadEmail: {
            $toLower: '$primaryTechnicalLead.email',
          },
          primaryTechnicalLeadName: {
            $concat: [
              { $toLower: '$primaryTechnicalLead.firstName' },
              ' ',
              { $toLower: '$primaryTechnicalLead.lastName' },
            ],
          },
          secondaryTechnicalLeadName: {
            $concat: [
              { $toLower: '$secondaryTechnicalLead.firstName' },
              ' ',
              { $toLower: '$secondaryTechnicalLead.lastName' },
            ],
          },
          secondaryTechnicalLeadEmail: {
            $toLower: '$secondaryTechnicalLead.email',
          },
        },
      },
      {
        $match: {
          status: { $regex: 'ACTIVE' },
          $and: [
            {
              $or: [
                { projectOwnerId: { $regex: userId } },
                { primaryTechnicalLeadId: { $regex: userId } },
                { secondaryTechnicalLeadId: { $regex: userId } },
              ],
            },
            {
              provider: provider,
              ministry: ministry,
              $or: [
                {
                  projectOwnerEmail: { $regex: search ? search : '' },
                },
                {
                  projectOwnerName: { $regex: search ? search : '' },
                },
                {
                  primaryTechnicalLeadEmail: { $regex: search ? search : '' },
                },
                {
                  primaryTechnicalLeadName: { $regex: search ? search : '' },
                },
                {
                  secondaryTechnicalLeadEmail: { $regex: search ? search : '' },
                },
                {
                  secondaryTechnicalLeadName: { $regex: search ? search : '' },
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
              ],
            },
          ],
        },
      },
      {
        $sort: { lowerName: sortOrder },
      },
      {
        $skip: offset,
      },
      {
        $limit: pageSize,
      },
    ],
  });

  const totalTmp = await prisma.publicCloudProject.aggregateRaw({
    pipeline: [
      {
        $project: {
          id: {
            $toString: '$_id',
          },
          name: 1,
          licencePlate: 1,
          archived: 1,
          created: {
            $toString: '$created',
          },
          description: 1,
          status: 1,
          projectOwnerId: {
            $toString: '$projectOwnerId',
          },
          secondaryTechnicalLeadId: {
            $toString: '$secondaryTechnicalLeadId',
          },
          primaryTechnicalLeadId: {
            $toString: '$primaryTechnicalLeadId',
          },
          projectOwnerIdSearch: {
            $toObjectId: '$projectOwnerId',
          },
          primaryTechnicalLeadIdSearch: {
            $toObjectId: '$primaryTechnicalLeadId',
          },
          secondaryTechnicalLeadIdSearch: {
            $toObjectId: '$secondaryTechnicalLeadId',
          },
          ministry: 1,
          provider: 1,
          productionQuota: 1,
          testQuota: 1,
          developmentQuota: 1,
          toolsQuota: 1,
          requestHistory: 1,
          activeEditRequest: 1,
          count: 1,
          commonComponents: 1,
          lowerDescription: {
            $toLower: '$description',
          },
          lowerName: {
            $toLower: '$name',
          },
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'projectOwnerIdSearch',
          foreignField: '_id',
          as: 'projectOwner',
        },
      },
      {
        $unwind: {
          path: '$projectOwner',
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'secondaryTechnicalLeadIdSearch',
          foreignField: '_id',
          as: 'secondaryTechnicalLead',
        },
      },
      {
        $unwind: {
          path: '$secondaryTechnicalLead',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $lookup: {
          from: 'User',
          localField: 'primaryTechnicalLeadIdSearch',
          foreignField: '_id',
          as: 'primaryTechnicalLead',
        },
      },
      {
        $unwind: {
          path: '$primaryTechnicalLead',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $addFields: {
          projectOwnerEmail: { $toLower: '$projectOwner.email' },
          projectOwnerName: {
            $concat: [
              { $toLower: '$projectOwner.firstName' },
              ' ',
              { $toLower: '$projectOwner.lastName' },
            ],
          },
          primaryTechnicalLeadEmail: {
            $toLower: '$primaryTechnicalLead.email',
          },
          primaryTechnicalLeadName: {
            $concat: [
              { $toLower: '$primaryTechnicalLead.firstName' },
              ' ',
              { $toLower: '$primaryTechnicalLead.lastName' },
            ],
          },
          secondaryTechnicalLeadName: {
            $concat: [
              { $toLower: '$secondaryTechnicalLead.firstName' },
              ' ',
              { $toLower: '$secondaryTechnicalLead.lastName' },
            ],
          },
          secondaryTechnicalLeadEmail: {
            $toLower: '$secondaryTechnicalLead.email',
          },
        },
      },
      {
        $match: {
          status: { $regex: 'ACTIVE' },
          $and: [
            {
              $or: [
                { projectOwnerId: { $regex: userId } },
                { primaryTechnicalLeadId: { $regex: userId } },
                { secondaryTechnicalLeadId: { $regex: userId } },
              ],
            },
            {
              provider: provider,
              ministry: ministry,
              $or: [
                {
                  projectOwnerEmail: { $regex: search ? search : '' },
                },
                {
                  projectOwnerName: { $regex: search ? search : '' },
                },
                {
                  primaryTechnicalLeadEmail: { $regex: search ? search : '' },
                },
                {
                  primaryTechnicalLeadName: { $regex: search ? search : '' },
                },
                {
                  secondaryTechnicalLeadEmail: { $regex: search ? search : '' },
                },
                {
                  secondaryTechnicalLeadName: { $regex: search ? search : '' },
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
              ],
            },
          ],
        },
      },
      {
        $count: 'count',
      },
    ],
  });

  const total = totalTmp.length > 0 ? totalTmp[0].count : 0;

  return {
    projects,
    total,
  };
};

export const publicCloudProjects = (_, __, { prisma }) => {
  return prisma.publicCloudProject.findMany({
    where: {
      status: 'ACTIVE',
    },
  });
};

export const publicCloudProjectById = (_, { projectId }, { prisma }) =>
  prisma.publicCloudProject.findUnique({
    where: {
      id: projectId,
      status: 'ACTIVE',
    },
  });

export const userPublicCloudProjects = (_, __, { prisma, user, authEmail }) =>
  prisma.publicCloudProject.findMany({
    orderBy: {
      name: 'asc',
    },
    where: {
      status: 'ACTIVE',
      OR: [
        { projectOwner: { email: authEmail } },
        { primaryTechnicalLead: { email: authEmail } },
        { secondaryTechnicalLead: { email: authEmail } },
      ],
    },
  });

export const userPublicCloudProjectById = async (
  _,
  { projectId },
  { prisma, user, authEmail }
) =>
  await prisma.publicCloudProject.findUnique({
    where: {
      id: projectId,
      status: 'ACTIVE',
      OR: [
        { projectOwner: { email: authEmail } },
        { primaryTechnicalLead: { email: authEmail } },
        { secondaryTechnicalLead: { email: authEmail } },
      ],
    },
  });

export const userPublicCloudProjectsByIds = async (
  _,
  { projectIds },
  { prisma, user, authEmail }
) =>
  await prisma.publicCloudProject.findMany({
    where: {
      id: { in: projectIds },
      status: 'ACTIVE',
      OR: [
        { projectOwner: { email: authEmail } },
        { primaryTechnicalLead: { email: authEmail } },
        { secondaryTechnicalLead: { email: authEmail } },
      ],
    },
  });

// Convert document from MongoDB fromat to a format that Apollo Server can understand
function transformDocument(doc) {
  const transformedDoc = { ...doc };

  // Convert ObjectId to a string for required properties
  transformedDoc.id = transformedDoc._id.toString();
  transformedDoc.projectOwnerId = transformedDoc.projectOwnerId.toString();
  transformedDoc.primaryTechnicalLeadId =
    transformedDoc.primaryTechnicalLeadId.toString();

  if (transformedDoc.secondaryTechnicalLeadId) {
    transformedDoc.secondaryTechnicalLeadId =
      transformedDoc.secondaryTechnicalLeadId.toString();
  }

  // Remove the '_id' property from the new object
  delete transformedDoc._id;

  return transformedDoc;
}

function sortObjectsByName(objects, sortOrder) {
  objects.sort(function (a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1 * sortOrder;
    }
    if (nameA > nameB) {
      return 1 * sortOrder;
    }
    // names must be equal
    return 0;
  });
  return objects;
}
