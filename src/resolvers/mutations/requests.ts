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

  const createRequest = await prisma.privateCloudRequest.create({
    data: {
      type: RequestType.CREATE,
      status: RequestStatus.PENDING_DECISION,
      commonComponents,
      projectOwner: {
        connectOrCreate: {
          where: {
            email: metaData.projectOwner
          },
          create: {
            ...projectOwner
          }
        }
      },
      primaryTechnicalLead: {
        connectOrCreate: {
          where: {
            email: metaData.primaryTechnicalLead
          },
          create: {
            ...primaryTechnicalLead
          }
        }
      },
      secondaryTechnicalLead: {
        connectOrCreate: {
          where: {
            email: metaData.secondaryTechnicalLead
          },
          create: {
            ...secondaryTechnicalLead
          }
        }
      },
      createdBy: {
        connect: {
          email: authEmail
        }
      },
      requestedProject: {
        create: {
          ...metaData,
          commonComponents,
          licensePlate: "ABC123",
          createdBy: authEmail
        }
      }
    }
  });

  return createRequest;
};
