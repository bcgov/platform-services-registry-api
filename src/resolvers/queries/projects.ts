import { collections } from "../../db.js";

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

export const privateCloudProjectsPaginated = async (_, args, { prisma }) => {
  let { search, filter = {}, page, pageSize, sortOrder = -1 } = args;
  let { ministry, cluster } = filter;

  search = search === null ? undefined : search;
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = page > 0 ? (page - 1) * pageSize : 0;

  // Find all projects that match the search criteria

  if (!search) {
    const query = {
      ...(ministry && { ministry }),
      ...(cluster && { cluster }),
      status: "ACTIVE"
    };

    const rawProjects = await collections.privateCloudProjects
      .find(query)
      .skip(offset)
      .limit(pageSize)
      .sort({ name: sortOrder })
      .toArray();

    const projects = rawProjects.map((project) => transformDocument(project));

    const total = await collections.privateCloudProjects.countDocuments(query);

    return {
      projects,
      total
    };
  } else {
    const query = {
      ...(search && { $text: { $search: `"${search}"` } }),
      ...(ministry && { ministry }),
      ...(cluster && { cluster }),
      status: "ACTIVE"
    };

    const rawProjects = await collections.privateCloudProjects
      .find(query)
      // .skip(offset)
      // .limit(pageSize)
      .sort({ name: sortOrder })
      .toArray();

    // Find all projects that have the searched user as a project owner, primary technical lead, or secondary technical lead

    const rawUsers = await collections.users
      .find({
        $text: {
          $search: `"${search}"`
        }
      })
      .toArray();

    const userIds = rawUsers.map((user) => user._id);

    // find all projects that have the user as a project owner, primary technical lead, or secondary technical lead
    const userProjects = await collections.privateCloudProjects
      .find({
        $or: [
          {
            projectOwnerId: {
              $in: userIds
            }
          },
          {
            primaryTechnicalLeadId: {
              $in: userIds
            }
          },
          {
            secondaryTechnicalLeadId: {
              $in: userIds
            }
          }
        ]
      })
      .toArray();

    const projects = [...userProjects, ...rawProjects].map((project) =>
      transformDocument(project)
    );

    const paginated = projects.slice(offset, offset + pageSize);

    return {
      projects: paginated,
      total: projects.length
    };
  }
};

// export const privateCloudProjectsPaginated = async (_, args, { prisma }) => {
//   let { search, filter = {}, page, pageSize, sortOrder = -1 } = args;
//   let { ministry, cluster } = filter;

//   search = search === null ? undefined : search;
//   ministry = ministry === null ? undefined : ministry;
//   cluster = cluster === null ? undefined : cluster;

//   const offset = page > 0 ? (page - 1) * pageSize : 0;

//   const projects = await prisma.privateCloudProject.aggregateRaw({
//     pipeline: [
//       {
//         $project: {
//           "id": {
//             $toString: "$_id"
//           },
//           "name": 1,
//           "licencePlate": 1,
//           "archived": 1,
//           "created": {
//             $toString: "$created"
//           },
//           "description": 1,
//           "status": 1,
//           "projectOwnerId": {
//             $toString: "$projectOwnerId"
//           },
//           "secondaryTechnicalLeadId": {
//             $toString: "$secondaryTechnicalLeadId"
//           },
//           "primaryTechnicalLeadId": {
//             $toString: "$primaryTechnicalLeadId"
//           },
//           "projectOwnerIdSearch": {
//             $toObjectId: "$projectOwnerId"
//           },
//           "primaryTechnicalLeadIdSearch": {
//             $toObjectId: "$primaryTechnicalLeadId"
//           },
//           "secondaryTechnicalLeadIdSearch": {
//             $toObjectId: "$secondaryTechnicalLeadId"
//           },
//           "ministry": 1,
//           "cluster": 1,
//           "productionQuota": 1,
//           "testQuota": 1,
//           "developmentQuota": 1,
//           "toolsQuota": 1,
//           "requestHistory": 1,
//           "activeEditRequest": 1,
//           "count": 1,
//           "commonComponents": 1,
//           "lowerName": {
//             "$toLower": "$name"
//           }
//         }
//       },
//       {
//         $lookup:
//         {
//           from: "User",
//           localField: "projectOwnerIdSearch",
//           foreignField: "_id",
//           as: "projectOwner"
//         }
//       },
//       {
//         $unwind: {
//           path: '$projectOwner',
//         },
//       },
//           {
//         $lookup:
//         {
//           from: "User",
//           localField: "secondaryTechnicalLeadIdSearch",
//           foreignField: "_id",
//           as: "secondaryTechnicalLead"
//         }
//       },
//       {
//         $unwind: {
//           path: '$secondaryTechnicalLead',
//           preserveNullAndEmptyArrays: true,
//         },
//       },
//       {
//         $lookup:
//         {
//           from: "User",
//           localField: "primaryTechnicalLeadIdSearch",
//           foreignField: "_id",
//           as: "primaryTechnicalLead"
//         }
//       },
//       {
//         $unwind: {
//           path: '$primaryTechnicalLead',
//           preserveNullAndEmptyArrays: true,
//         },
//       },
//       {
//         $match: {
//           status: { $regex: "ACTIVE" },
//           $and: [
//             {
//               $or: [
//                 {
//                   'projectOwner.email': { $regex: search ? search : '' },
//                 },
//                 {
//                   'projectOwner.firstName': { $regex: search ? search : '' },
//                 },
//                 {
//                   'projectOwner.lastName': { $regex: search ? search : '' },
//                 },
//                 {
//                   'primaryTechnicalLead.email': { $regex: search ? search : '' },
//                 },
//                 {
//                   'primaryTechnicalLead.firstName': { $regex: search ? search : '' },
//                 },
//                 {
//                   'primaryTechnicalLead.lastName': { $regex: search ? search : '' },
//                 },
//                 {
//                   'secondaryTechnicalLead.email': { $regex: search ? search : '' },
//                 },
//                 {
//                   'secondaryTechnicalLead.firstName': { $regex: search ? search : '' },
//                 },
//                 {
//                   'secondaryTechnicalLead.lastName': { $regex: search ? search : '' },
//                 },
//                 {
//                   name: { $regex: search ? search : '' },
//                 },
//                 {
//                   description: { $regex: search ? search : '' },
//                 },
//                 {
//                   licencePlate: { $regex: search ? search : '' },
//                 },
//               ]
//             }
//           ],
//         }
//       },
//       {
//         $sort: { lowerName: sortOrder }
//       },
//       {
//         $skip: offset,
//       },
//       {
//         $limit: pageSize,
//       }
//     ],
//   })

//   const total = await prisma.privateCloudProject.count({
//     where: {
//       status: "ACTIVE",
//       AND: [
//         {
//           OR: [
//             { projectOwner: { email: { contains: search } } },
//             { projectOwner: { firstName: { contains: search } } },
//             { projectOwner: { lastName: { contains: search } } },
//             { primaryTechnicalLead: { email: { contains: search } } },
//             { primaryTechnicalLead: { firstName: { contains: search } } },
//             { primaryTechnicalLead: { lastName: { contains: search } } },
//             { secondaryTechnicalLead: { email: { contains: search } } },
//             { secondaryTechnicalLead: { firstName: { contains: search } } },
//             { secondaryTechnicalLead: { lastName: { contains: search } } },
//             { name: { contains: search } },
//             { description: { contains: search } },
//             { licencePlate: { contains: search } }
//           ]
//         },
//         {
//           ministry: {
//             in: ministry
//           }
//         },
//         {
//           cluster: {
//             in: cluster
//           }
//         }
//       ]
//     }
//   });

//   return {
//     projects,
//     total
//   };
// };

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
