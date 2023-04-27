import { collections } from '../../../db.js';

// // Testing out full text search, does not work yet. To discuss with Zhanna
export const publicCloudProjectsPaginated = async (_, args, { prisma }) => {
  let { search, filter = {}, page, pageSize, sortOrder = -1 } = args;
  let { ministry, cluster } = filter;

  search = search === null ? undefined : search.toLowerCase();
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = page > 0 ? (page - 1) * pageSize : 0;

  // Find all projects that match the search criteria

  const query = {
    ...(search && { $text: { $search: `"${search}"` } }),
    ...(ministry && { ministry }),
    ...(cluster && { cluster }),
    status: 'ACTIVE',
  };

  const rawProjects = await collections.publicCloudProjects
    .find(query)
    .skip(offset)
    .limit(pageSize)
    .sort({ name: sortOrder })
    .toArray();

  const projects = rawProjects.map((project) => transformDocument(project));

  const total = await collections.publicCloudProjects.countDocuments(query);

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
