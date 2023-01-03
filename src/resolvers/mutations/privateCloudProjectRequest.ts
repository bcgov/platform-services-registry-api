import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  CreateUserInput
} from "__generated__/resolvers-types";
import { RequestType, RequestStatus } from "../enum.js";
import generateLicensePlate from "../../utils/generateLicencePlate.js";
import defaultQuota from "../../utils/defaultQuota.js";
import { ProjectStatus } from "../enum.js";

interface argsValue {
  metaData: ProjectMetaDataInput;
  commonComponents: CommonComponentsInput;
  projectOwner: CreateUserInput;
  primaryTechnicalLead: CreateUserInput;
  secondaryTechnicalLead: CreateUserInput;
}

const privateCloudProjectRequest: MutationResolvers = async (
  _,
  args: argsValue,
  { authRoles, authEmail, prisma }
) => {
  const {
    metaData,
    commonComponents,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead
  } = args;

  const licencePlate = generateLicensePlate();

  const createRequest = await prisma.privateCloudRequest.create({
    data: {
      type: RequestType.CREATE,
      status: RequestStatus.PENDING,
      active: true,
      projectOwner: {
        connectOrCreate: {
          where: {
            email: projectOwner.email
          },
          create: projectOwner
        }
      },
      primaryTechnicalLead: {
        connectOrCreate: {
          where: {
            email: primaryTechnicalLead.email
          },
          create: primaryTechnicalLead
        }
      },
      secondaryTechnicalLead: secondaryTechnicalLead
        ? {
            connectOrCreate: {
              where: {
                email: secondaryTechnicalLead.email
              },
              create: secondaryTechnicalLead
            }
          }
        : undefined,
      createdByEmail: authEmail,
      requestedProject: {
        ...metaData,
        projectOwnerEmail: projectOwner.email,
        primaryTechnicalLeadEmail: primaryTechnicalLead.email,
        secondaryTechnicalLeadEmail: secondaryTechnicalLead?.email,
        status: ProjectStatus.ACTIVE,
        licencePlate: licencePlate,
        commonComponents: commonComponents,
        productionQuota: defaultQuota,
        testQuota: defaultQuota,
        toolsQuota: defaultQuota,
        developmentQuota: defaultQuota
      }
    }
  });

  return createRequest;
};

export default privateCloudProjectRequest;
