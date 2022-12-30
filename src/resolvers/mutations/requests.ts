import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  CreateUserInput
} from "__generated__/resolvers-types";
import { RequestType, RequestStatus } from "../enum.js";
import generateLicensePlate from "../../utils/generateLicencePlate.js";
import defaultQuota from "../../utils/defaultQuota.js";

interface argsValue {
  metaData: ProjectMetaDataInput;
  commonComponents: CommonComponentsInput;
  projectOwner: CreateUserInput;
  primaryTechnicalLead: CreateUserInput;
  secondaryTechnicalLead: CreateUserInput;
}

export const privateCloudProjectRequest: MutationResolvers = async (
  _,
  args: argsValue,
  { kauth, prisma, roles, authEmail }
) => {
  const {
    metaData,
    commonComponents,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead
  } = args;

  const {
    projectOwnerEmail,
    primaryTechnicalLeadEmail,
    secondaryTechnicalLeadEmail
  } = metaData;

  if (
    ![
      projectOwnerEmail,
      primaryTechnicalLeadEmail,
      secondaryTechnicalLeadEmail
    ].includes(authEmail) &&
    !roles.includes("admin")
  ) {
    throw new Error(
      "You must assign yourself as a project owner or technical lead to create a project request."
    );
  }

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
