import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  MutationPrivateCloudProjectRequestArgs,
  CreateUserInput
} from "__generated__/resolvers-types";
import { RequestType, RequestStatus } from "../enum.js";
import generateLicensePlate from "../../utils/generateLicencePlate.js";
import defaultQuota from "../../utils/defaultQuota.js";

export const privateCloudProjectRequest: MutationResolvers = async (
  _,
  args,
  { kauth, prisma }
) => {
  const { email: authEmail, resource_access } = kauth.accessToken.content;

  const {
    metaData,
    commonComponents,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead
  }: {
    metaData: ProjectMetaDataInput;
    commonComponents: CommonComponentsInput;
    projectOwner: CreateUserInput;
    primaryTechnicalLead: CreateUserInput;
    secondaryTechnicalLead: CreateUserInput;
  } = args;

  const licencePlate = generateLicensePlate();

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
          ...metaData,
          createdByEmail: authEmail,
          licencePlate: licencePlate,
          commonComponents: commonComponents,
          productionQuota: defaultQuota,
          testQuota: defaultQuota,
          toolsQuota: defaultQuota,
          developmentQuota: defaultQuota
        }
      }
    }
  });

  return createRequest;
};
