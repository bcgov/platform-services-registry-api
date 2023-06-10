// import { collections } from "../../db.js";

import { user } from "./users";

// // Convert document from MongoDB fromat to a format that Apollo Server can understand
// function transformDocument(doc) {
//   const transformedDoc = { ...doc };

//   // Convert ObjectId to a string for required properties
//   transformedDoc.id = transformedDoc._id.toString();
//   transformedDoc.projectOwnerId = transformedDoc.projectOwnerId.toString();
//   transformedDoc.primaryTechnicalLeadId =
//     transformedDoc.primaryTechnicalLeadId.toString();

//   if (transformedDoc.secondaryTechnicalLeadId) {
//     transformedDoc.secondaryTechnicalLeadId =
//       transformedDoc.secondaryTechnicalLeadId.toString();
//   }

//   // Remove the '_id' property from the new object
//   delete transformedDoc._id;

//   return transformedDoc;
// }

// function sortObjectsByName(objects, sortOrder) {
//   objects.sort(function (a, b) {
//     var nameA = a.name.toUpperCase(); // ignore upper and lowercase
//     var nameB = b.name.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1 * sortOrder;
//     }
//     if (nameA > nameB) {
//       return 1 * sortOrder;
//     }
//     // names must be equal
//     return 0;
//   });
//   return objects;
// }

// // // Testing out full text search, does not work yet. To discuss with Zahhan
// export const privateCloudProjectsPaginated = async (_, args, { prisma }) => {
//   let { search, filter = {}, page, pageSize, sortOrder = -1 } = args;
//   let { ministry, cluster } = filter;

//   search = search === null ? undefined : search.toLowerCase();
//   ministry = ministry === null ? undefined : ministry;
//   cluster = cluster === null ? undefined : cluster;

//   const offset = page > 0 ? (page - 1) * pageSize : 0;

//   // Find all projects that match the search criteria

//   const query = {
//     ...(search && { $text: { $search: `"${search}"` } }),
//     ...(ministry && { ministry }),
//     ...(cluster && { cluster }),
//     status: "ACTIVE",
//   };

//   const rawProjects = await collections.privateCloudProjects
//     .find(query)
//     .skip(offset)
//     .limit(pageSize)
//     .sort({ name: sortOrder })
//     .toArray();

//   const projects = rawProjects.map((project) => transformDocument(project));

//   const total = await collections.privateCloudProjects.countDocuments(query);

//   return {
//     projects,
//     total,
//   };
// };

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

export const privateCloudProjectsPaginated = async (
  _,
  args,
  { prisma, authEmail }
) => {
  let {
    search,
    filter = {},
    page,
    pageSize,
    sortOrder = -1,
    userId = ""
  } = args;
  let { ministry, cluster } = filter;

  search = search === null ? undefined : search.toLowerCase();
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = page > 0 ? (page - 1) * pageSize : 0;

  const projects = await prisma.privateCloudProject.aggregateRaw({
    pipeline: [
      {
        $project: {
          id: {
            $toString: "$_id"
          },
          name: 1,
          licencePlate: 1,
          archived: 1,
          created: {
            $toString: "$created"
          },
          description: 1,
          status: 1,
          projectOwnerId: {
            $toString: "$projectOwnerId"
          },
          secondaryTechnicalLeadId: {
            $toString: "$secondaryTechnicalLeadId"
          },
          primaryTechnicalLeadId: {
            $toString: "$primaryTechnicalLeadId"
          },
          projectOwnerIdSearch: {
            $toObjectId: "$projectOwnerId"
          },
          primaryTechnicalLeadIdSearch: {
            $toObjectId: "$primaryTechnicalLeadId"
          },
          secondaryTechnicalLeadIdSearch: {
            $toObjectId: "$secondaryTechnicalLeadId"
          },
          ministry: 1,
          cluster: 1,
          productionQuota: 1,
          testQuota: 1,
          developmentQuota: 1,
          toolsQuota: 1,
          requestHistory: 1,
          activeEditRequest: 1,
          count: 1,
          commonComponents: 1,
          lowerDescription: {
            $toLower: "$description"
          },
          lowerName: {
            $toLower: "$name"
          }
        }
      },
      {
        $lookup: {
          from: "User",
          localField: "projectOwnerIdSearch",
          foreignField: "_id",
          as: "projectOwner"
        }
      },
      {
        $unwind: {
          path: "$projectOwner"
        }
      },
      {
        $lookup: {
          from: "User",
          localField: "secondaryTechnicalLeadIdSearch",
          foreignField: "_id",
          as: "secondaryTechnicalLead"
        }
      },
      {
        $unwind: {
          path: "$secondaryTechnicalLead",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: "User",
          localField: "primaryTechnicalLeadIdSearch",
          foreignField: "_id",
          as: "primaryTechnicalLead"
        }
      },
      {
        $unwind: {
          path: "$primaryTechnicalLead",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $addFields: {
          projectOwnerEmail: { $toLower: "$projectOwner.email" },
          projectOwnerName: {
            $concat: [
              { $toLower: "$projectOwner.firstName" },
              " ",
              { $toLower: "$projectOwner.lastName" }
            ]
          },
          primaryTechnicalLeadEmail: {
            $toLower: "$primaryTechnicalLead.email"
          },
          primaryTechnicalLeadName: {
            $concat: [
              { $toLower: "$primaryTechnicalLead.firstName" },
              " ",
              { $toLower: "$primaryTechnicalLead.lastName" }
            ]
          },
          secondaryTechnicalLeadName: {
            $concat: [
              { $toLower: "$secondaryTechnicalLead.firstName" },
              " ",
              { $toLower: "$secondaryTechnicalLead.lastName" }
            ]
          },
          secondaryTechnicalLeadEmail: {
            $toLower: "$secondaryTechnicalLead.email"
          }
        }
      },
      {
        $match: {
          status: { $regex: "ACTIVE" },
          $and: [
            {
              $or: [
                { projectOwnerId: { $regex: userId } },
                { primaryTechnicalLeadId: { $regex: userId } },
                { secondaryTechnicalLeadId: { $regex: userId } }
              ]
            },
            {
              cluster: cluster,
              ministry: ministry,
              $or: [
                {
                  projectOwnerEmail: { $regex: search ? search : "" }
                },
                {
                  projectOwnerName: { $regex: search ? search : "" }
                },
                {
                  primaryTechnicalLeadEmail: { $regex: search ? search : "" }
                },
                {
                  primaryTechnicalLeadName: { $regex: search ? search : "" }
                },
                {
                  secondaryTechnicalLeadEmail: { $regex: search ? search : "" }
                },
                {
                  secondaryTechnicalLeadName: { $regex: search ? search : "" }
                },
                {
                  lowerName: { $regex: search ? search : "" }
                },
                {
                  lowerDescription: { $regex: search ? search : "" }
                },
                {
                  licencePlate: { $regex: search ? search : "" }
                }
              ]
            }
          ]
        }
      },
      {
        $sort: { lowerName: sortOrder }
      },
      {
        $skip: offset
      },
      {
        $limit: pageSize
      }
    ]
  });

  const totalTmp = await prisma.privateCloudProject.aggregateRaw({
    pipeline: [
      {
        $project: {
          id: {
            $toString: "$_id"
          },
          name: 1,
          licencePlate: 1,
          archived: 1,
          created: {
            $toString: "$created"
          },
          description: 1,
          status: 1,
          projectOwnerId: {
            $toString: "$projectOwnerId"
          },
          secondaryTechnicalLeadId: {
            $toString: "$secondaryTechnicalLeadId"
          },
          primaryTechnicalLeadId: {
            $toString: "$primaryTechnicalLeadId"
          },
          projectOwnerIdSearch: {
            $toObjectId: "$projectOwnerId"
          },
          primaryTechnicalLeadIdSearch: {
            $toObjectId: "$primaryTechnicalLeadId"
          },
          secondaryTechnicalLeadIdSearch: {
            $toObjectId: "$secondaryTechnicalLeadId"
          },
          ministry: 1,
          cluster: 1,
          productionQuota: 1,
          testQuota: 1,
          developmentQuota: 1,
          toolsQuota: 1,
          requestHistory: 1,
          activeEditRequest: 1,
          count: 1,
          commonComponents: 1,
          lowerDescription: {
            $toLower: "$description"
          },
          lowerName: {
            $toLower: "$name"
          }
        }
      },
      {
        $lookup: {
          from: "User",
          localField: "projectOwnerIdSearch",
          foreignField: "_id",
          as: "projectOwner"
        }
      },
      {
        $unwind: {
          path: "$projectOwner"
        }
      },
      {
        $lookup: {
          from: "User",
          localField: "secondaryTechnicalLeadIdSearch",
          foreignField: "_id",
          as: "secondaryTechnicalLead"
        }
      },
      {
        $unwind: {
          path: "$secondaryTechnicalLead",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $lookup: {
          from: "User",
          localField: "primaryTechnicalLeadIdSearch",
          foreignField: "_id",
          as: "primaryTechnicalLead"
        }
      },
      {
        $unwind: {
          path: "$primaryTechnicalLead",
          preserveNullAndEmptyArrays: true
        }
      },
      {
        $addFields: {
          projectOwnerEmail: { $toLower: "$projectOwner.email" },
          projectOwnerName: {
            $concat: [
              { $toLower: "$projectOwner.firstName" },
              " ",
              { $toLower: "$projectOwner.lastName" }
            ]
          },
          primaryTechnicalLeadEmail: {
            $toLower: "$primaryTechnicalLead.email"
          },
          primaryTechnicalLeadName: {
            $concat: [
              { $toLower: "$primaryTechnicalLead.firstName" },
              " ",
              { $toLower: "$primaryTechnicalLead.lastName" }
            ]
          },
          secondaryTechnicalLeadName: {
            $concat: [
              { $toLower: "$secondaryTechnicalLead.firstName" },
              " ",
              { $toLower: "$secondaryTechnicalLead.lastName" }
            ]
          },
          secondaryTechnicalLeadEmail: {
            $toLower: "$secondaryTechnicalLead.email"
          }
        }
      },
      {
        $match: {
          status: { $regex: "ACTIVE" },
          $and: [
            {
              $or: [
                { projectOwnerId: { $regex: userId } },
                { primaryTechnicalLeadId: { $regex: userId } },
                { secondaryTechnicalLeadId: { $regex: userId } }
              ]
            },
            {
              cluster: cluster,
              ministry: ministry,
              $or: [
                {
                  projectOwnerEmail: { $regex: search ? search : "" }
                },
                {
                  projectOwnerName: { $regex: search ? search : "" }
                },
                {
                  primaryTechnicalLeadEmail: { $regex: search ? search : "" }
                },
                {
                  primaryTechnicalLeadName: { $regex: search ? search : "" }
                },
                {
                  secondaryTechnicalLeadEmail: { $regex: search ? search : "" }
                },
                {
                  secondaryTechnicalLeadName: { $regex: search ? search : "" }
                },
                {
                  lowerName: { $regex: search ? search : "" }
                },
                {
                  lowerDescription: { $regex: search ? search : "" }
                },
                {
                  licencePlate: { $regex: search ? search : "" }
                }
              ]
            }
          ]
        }
      },
      {
        $count: "count"
      }
    ]
  });

  const total = totalTmp.length > 0 ? totalTmp[0].count : 0;

  return {
    projects,
    total
  };
};

export const userPrivateCloudProjectsPaginated = async (
  _,
  args,
  { prisma, authEmail }
) => {
  let { search, filter = {}, page, pageSize, sortOrder = -1, userId } = args;
  let { ministry, cluster } = filter;

  search = search === null ? undefined : search.toLowerCase();
  ministry = ministry === null ? undefined : ministry;
  cluster = cluster === null ? undefined : cluster;

  const offset = page > 0 ? (page - 1) * pageSize : 0;

  try {
    const projects = await prisma.privateCloudProject.aggregateRaw({
      pipeline: [
        {
          $project: {
            id: {
              $toString: "$_id"
            },
            name: 1,
            licencePlate: 1,
            archived: 1,
            created: {
              $toString: "$created"
            },
            description: 1,
            status: 1,
            projectOwnerId: {
              $toString: "$projectOwnerId"
            },
            secondaryTechnicalLeadId: {
              $toString: "$secondaryTechnicalLeadId"
            },
            primaryTechnicalLeadId: {
              $toString: "$primaryTechnicalLeadId"
            },
            projectOwnerIdSearch: {
              $toObjectId: "$projectOwnerId"
            },
            primaryTechnicalLeadIdSearch: {
              $toObjectId: "$primaryTechnicalLeadId"
            },
            secondaryTechnicalLeadIdSearch: {
              $toObjectId: "$secondaryTechnicalLeadId"
            },
            ministry: 1,
            cluster: 1,
            productionQuota: 1,
            testQuota: 1,
            developmentQuota: 1,
            toolsQuota: 1,
            requestHistory: 1,
            activeEditRequest: 1,
            count: 1,
            commonComponents: 1,
            lowerDescription: {
              $toLower: "$description"
            },
            lowerName: {
              $toLower: "$name"
            }
          }
        },
        {
          $lookup: {
            from: "User",
            localField: "projectOwnerIdSearch",
            foreignField: "_id",
            as: "projectOwner"
          }
        },
        {
          $unwind: {
            path: "$projectOwner"
          }
        },
        {
          $lookup: {
            from: "User",
            localField: "secondaryTechnicalLeadIdSearch",
            foreignField: "_id",
            as: "secondaryTechnicalLead"
          }
        },
        {
          $unwind: {
            path: "$secondaryTechnicalLead",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "User",
            localField: "primaryTechnicalLeadIdSearch",
            foreignField: "_id",
            as: "primaryTechnicalLead"
          }
        },
        {
          $unwind: {
            path: "$primaryTechnicalLead",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $addFields: {
            projectOwnerEmail: { $toLower: "$projectOwner.email" },
            projectOwnerName: {
              $concat: [
                { $toLower: "$projectOwner.firstName" },
                " ",
                { $toLower: "$projectOwner.lastName" }
              ]
            },
            primaryTechnicalLeadEmail: {
              $toLower: "$primaryTechnicalLead.email"
            },
            primaryTechnicalLeadName: {
              $concat: [
                { $toLower: "$primaryTechnicalLead.firstName" },
                " ",
                { $toLower: "$primaryTechnicalLead.lastName" }
              ]
            },
            secondaryTechnicalLeadName: {
              $concat: [
                { $toLower: "$secondaryTechnicalLead.firstName" },
                " ",
                { $toLower: "$secondaryTechnicalLead.lastName" }
              ]
            },
            secondaryTechnicalLeadEmail: {
              $toLower: "$secondaryTechnicalLead.email"
            }
          }
        },
        {
          $match: {
            status: { $regex: "ACTIVE" },
            $and: [
              {
                $or: [
                  { projectOwnerId: { $regex: userId } },
                  { primaryTechnicalLeadId: { $regex: userId } },
                  { secondaryTechnicalLeadId: { $regex: userId } }
                ]
              },
              {
                cluster: cluster,
                ministry: ministry,
                $or: [
                  {
                    projectOwnerEmail: { $regex: search ? search : "" }
                  },
                  {
                    projectOwnerName: { $regex: search ? search : "" }
                  },
                  {
                    primaryTechnicalLeadEmail: { $regex: search ? search : "" }
                  },
                  {
                    primaryTechnicalLeadName: { $regex: search ? search : "" }
                  },
                  {
                    secondaryTechnicalLeadEmail: {
                      $regex: search ? search : ""
                    }
                  },
                  {
                    secondaryTechnicalLeadName: { $regex: search ? search : "" }
                  },
                  {
                    lowerName: { $regex: search ? search : "" }
                  },
                  {
                    lowerDescription: { $regex: search ? search : "" }
                  },
                  {
                    licencePlate: { $regex: search ? search : "" }
                  }
                ]
              }
            ]
          }
        },
        {
          $sort: { lowerName: sortOrder }
        },
        {
          $skip: offset
        },
        {
          $limit: pageSize
        }
      ]
    });

    const totalTmp = await prisma.privateCloudProject.aggregateRaw({
      pipeline: [
        {
          $project: {
            id: {
              $toString: "$_id"
            },
            name: 1,
            licencePlate: 1,
            archived: 1,
            created: {
              $toString: "$created"
            },
            description: 1,
            status: 1,
            projectOwnerId: {
              $toString: "$projectOwnerId"
            },
            secondaryTechnicalLeadId: {
              $toString: "$secondaryTechnicalLeadId"
            },
            primaryTechnicalLeadId: {
              $toString: "$primaryTechnicalLeadId"
            },
            projectOwnerIdSearch: {
              $toObjectId: "$projectOwnerId"
            },
            primaryTechnicalLeadIdSearch: {
              $toObjectId: "$primaryTechnicalLeadId"
            },
            secondaryTechnicalLeadIdSearch: {
              $toObjectId: "$secondaryTechnicalLeadId"
            },
            ministry: 1,
            cluster: 1,
            productionQuota: 1,
            testQuota: 1,
            developmentQuota: 1,
            toolsQuota: 1,
            requestHistory: 1,
            activeEditRequest: 1,
            count: 1,
            commonComponents: 1,
            lowerDescription: {
              $toLower: "$description"
            },
            lowerName: {
              $toLower: "$name"
            }
          }
        },
        {
          $lookup: {
            from: "User",
            localField: "projectOwnerIdSearch",
            foreignField: "_id",
            as: "projectOwner"
          }
        },
        {
          $unwind: {
            path: "$projectOwner"
          }
        },
        {
          $lookup: {
            from: "User",
            localField: "secondaryTechnicalLeadIdSearch",
            foreignField: "_id",
            as: "secondaryTechnicalLead"
          }
        },
        {
          $unwind: {
            path: "$secondaryTechnicalLead",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $lookup: {
            from: "User",
            localField: "primaryTechnicalLeadIdSearch",
            foreignField: "_id",
            as: "primaryTechnicalLead"
          }
        },
        {
          $unwind: {
            path: "$primaryTechnicalLead",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $addFields: {
            projectOwnerEmail: { $toLower: "$projectOwner.email" },
            projectOwnerName: {
              $concat: [
                { $toLower: "$projectOwner.firstName" },
                " ",
                { $toLower: "$projectOwner.lastName" }
              ]
            },
            primaryTechnicalLeadEmail: {
              $toLower: "$primaryTechnicalLead.email"
            },
            primaryTechnicalLeadName: {
              $concat: [
                { $toLower: "$primaryTechnicalLead.firstName" },
                " ",
                { $toLower: "$primaryTechnicalLead.lastName" }
              ]
            },
            secondaryTechnicalLeadName: {
              $concat: [
                { $toLower: "$secondaryTechnicalLead.firstName" },
                " ",
                { $toLower: "$secondaryTechnicalLead.lastName" }
              ]
            },
            // secondaryTechnicalLeadEmail: {
            //   $toLower: "$secondaryTechnicalLead.email"
            // },
            secondaryTechnicalLeadEmail: {
              $cond: [
                { $ifNull: ["$secondaryTechnicalLead", false] }, // condition
                { $toLower: "$secondaryTechnicalLead.email" }, // then (if secondaryTechnicalLead exists)
                "" // else (if secondaryTechnicalLead is null or undefined)
              ]
            }
          }
        },
        {
          $match: {
            status: { $regex: "ACTIVE" },
            $and: [
              {
                $or: [
                  { projectOwnerId: { $regex: userId } },
                  { primaryTechnicalLeadId: { $regex: userId } },
                  { secondaryTechnicalLeadId: { $regex: userId } }
                ]
              },
              {
                cluster: cluster,
                ministry: ministry,
                $or: [
                  {
                    projectOwnerEmail: { $regex: search ? search : "" }
                  },
                  {
                    projectOwnerName: { $regex: search ? search : "" }
                  },
                  {
                    primaryTechnicalLeadEmail: { $regex: search ? search : "" }
                  },
                  {
                    primaryTechnicalLeadName: { $regex: search ? search : "" }
                  },
                  {
                    secondaryTechnicalLeadEmail: {
                      $regex: search ? search : ""
                    }
                  },
                  {
                    secondaryTechnicalLeadName: { $regex: search ? search : "" }
                  },
                  {
                    lowerName: { $regex: search ? search : "" }
                  },
                  {
                    lowerDescription: { $regex: search ? search : "" }
                  },
                  {
                    licencePlate: { $regex: search ? search : "" }
                  }
                ]
              }
            ]
          }
        },
        {
          $count: "count"
        }
      ]
    });

    // console.log("totalTmp", totalTmp.length > 0 ? totalTmp[0].count : 0);

    // const userProjects = projects.filter(
    //   ({ projectOwner, primaryTechicalLead, secondaryTechnicalLead }) =>
    //     authEmail === projectOwner.email ||
    //     authEmail === primaryTechicalLead.email ||
    //     authEmail === secondaryTechnicalLead?.email
    // );

    // const total = await prisma.privateCloudProject.count({
    //   where: {
    //     OR: [
    //       {
    //         projectOwner: {
    //           email: authEmail
    //         }
    //       },
    //       {
    //         primaryTechnicalLead: {
    //           email: authEmail
    //         }
    //       },
    //       {
    //         secondaryTechnicalLead: {
    //           email: authEmail
    //         }
    //       }
    //     ]
    //   }
    // });

    // console.log("total", total);

    return {
      projects,
      total: totalTmp.length > 0 ? totalTmp[0].count : 0
    };
  } catch (err) {
    console.log("err", err);
  }
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
