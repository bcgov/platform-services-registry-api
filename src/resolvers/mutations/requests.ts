import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  MutationPrivateCloudProjectRequestArgs
} from "__generated__/resolvers-types";
import { RequestType, RequestStatus, ProjectStatus } from "../enum.js";

export const privateCloudProjectRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudProjectRequestArgs,
  { kauth, prisma }
) => {
  const { email: authEmail, resource_access } = kauth.accessToken.content;

  const {
    metaData,
    commonComponents,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead
  } = args;

  const authUser = await prisma.user.findUnique({
    where: {
      email: authEmail
    }
  });
  console.log(authEmail);
  console.log(authUser);

  const createRequest = await prisma.privateCloudRequest.create({
    data: {
      type: RequestType.CREATE,
      status: RequestStatus.PENDING_DECISION,
      projectOwner: {
        connectOrCreate: {
          where: {
            email: metaData.projectOwnerEmail
          },
          create: projectOwner
        }
      },
      primaryTechnicalLead: {
        connectOrCreate: {
          where: {
            email: metaData.primaryTechnicalLeadEmail
          },
          create: primaryTechnicalLead
        }
      },
      secondaryTechnicalLead: {
        connectOrCreate: {
          where: {
            email: metaData.secondaryTechnicalLeadEmail
          },
          create: secondaryTechnicalLead
        }
      },
      createdByEmail: authEmail,
      requestedProject: {
        set: {
          name: "test project",
          licencePlate: "ABC123",
          createdByEmail: authEmail,
          description: "test description",
          cluster: "CLAB",
          ministry: "AGRI",
          projectOwnerEmail: "oamar.kanji@gov.bc.ca",
          primaryTechnicalLeadEmail: "xyz@test.com",
          secondaryTechnicalLeadEmail: "test@test.com",
          // commonComponents: commonComponents,
        }
      }
    }
  });

  return createRequest;
};

// import {
//   ProjectMetaDataInput,
//   CommonComponentsInput,
//   MutationResolvers,
//   MutationPrivateCloudProjectRequestArgs
// } from "__generated__/resolvers-types";
// import { RequestType, RequestStatus, ProjectStatus } from "../enum.js";

// export const privateCloudProjectRequest: MutationResolvers = async (
//   _,
//   args: MutationPrivateCloudProjectRequestArgs,
//   { kauth, prisma }
// ) => {
//   const { email: authEmail, resource_access } = kauth.accessToken.content;
//   console.log(args)
//   const {
//     metaData,
//     commonComponents,
//     projectOwner,
//     primaryTechnicalLead,
//     secondaryTechnicalLead
//   } = args;

//   const createRequest = await prisma.privateCloudRequest.create({
//     data: {
//       type: RequestType.CREATE,
//       status: RequestStatus.PENDING_DECISION,
//       projectOwner: {
//         connectOrCreate: {
//           where: {
//             email: metaData.projectOwner
//           },
//           create: {
//             email: projectOwner.email,
//             firstName: projectOwner.firstName,
//             lastName: projectOwner.lastName,
//             githubId: projectOwner.githubId,
//             ministry: projectOwner.ministry

//             // ...projectOwner
//           }
//         }
//       },
//       primaryTechnicalLead: {
//         connectOrCreate: {
//           where: {
//             email: metaData.primaryTechnicalLead
//           },
//           create: primaryTechnicalLead
//         }
//       },
//       secondaryTechnicalLead: {
//         connectOrCreate: {
//           where: {
//             email: metaData.secondaryTechnicalLead
//           },
//           create: {
//             ...secondaryTechnicalLead
//           }
//         }
//       },
//       createdBy: {
//         connect: {
//           email: authEmail
//         }
//       },
//       requestedProject: {
//         ...metaData,
//         commonComponents,
//         licensePlate: "ABC123",
//         createdBy: authEmail
//       }
//     }
//   });

//   return createRequest;
// };
