import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  CreateUserInput,
  QuotaInput
} from "__generated__/resolvers-types";
import { RequestType, RequestStatus } from "../enum.js";

interface argsValue {
  metaData: ProjectMetaDataInput;
  commonComponents: CommonComponentsInput;
  projectOwner: CreateUserInput;
  primaryTechnicalLead: CreateUserInput;
  secondaryTechnicalLead: CreateUserInput;
  productionQuota: QuotaInput;
  testQuota: QuotaInput;
  toolsQuota: QuotaInput;
  developmentQuota: QuotaInput;
}

const privateCloudProjectEditRequest: MutationResolvers = async (
  _,
  args,
  { authEmail, prisma }
) => {
  const existingRequest = await prisma.privateCloudRequest.findFirst({
    where: {
      AND: [
        {
          id: args.requestId
        },
        {
          status: RequestStatus.APPROVED
        },
        {
          active: true
        }
      ]
    }
  });

  if (existingRequest !== null) {
    throw new Error("There is already an active request for this project.");
  }

  const users = [
    args.projectOwner,
    args.primaryTechnicalLead,
    args.secondaryTechnicalLead
  ].filter(Boolean);

  // Create users if they don't exist
  if (users.length > 0) {
    try {
      await prisma.user.createMany({
        data: users
      });
    } catch (e) {
      console.log(e);
    }
  }

  const {
    id,
    projectOwnerId,
    primaryTechnicalLeadId,
    secondaryTechnicalLeadId,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead,
    ...project
  } = await prisma.privateCloudProject.findUnique({
    where: {
      id: args.projectId
    },
    include: {
      projectOwner: true,
      primaryTechnicalLead: true,
      secondaryTechnicalLead: true
    }
  });

  const requestedProject = { ...project, ...args.metaData };

  if (args.commonComponents) {
    requestedProject.commonComponents = args.commonComponents;
  }

  if (args.productionQuota) {
    requestedProject.productionQuota = {
      ...project.productionQuota,
      ...args.productionQuota.cpu,
      ...args.productionQuota.memory,
      ...args.productionQuota.storage
    };
  }

  if (args.testQuota) {
    requestedProject.testQuota = {
      ...project.testQuota,
      ...args.testQuota.cpu,
      ...args.testQuota.memory,
      ...args.testQuota.storage
    };
  }

  if (args.toolsQuota) {
    requestedProject.toolsQuota = {
      ...project.toolsQuota,
      ...args.toolsQuota.cpu,
      ...args.toolsQuota.memory,
      ...args.toolsQuota.storage
    };
  }

  if (args.developmentQuota) {
    requestedProject.developmentQuota = {
      ...project.developmentQuota,
      ...args.developmentQuota.cpu,
      ...args.developmentQuota.memory,
      ...args.developmentQuota.storage
    };
  }

  requestedProject.projectOwnerEmail = args.projectOwner
    ? args.projectOwner.email
    : projectOwner.email;

  requestedProject.primaryTechnicalLeadEmail = args.primaryTechnicalLead
    ? args.primaryTechnicalLead.email
    : primaryTechnicalLead.email;

  requestedProject.secondaryTechnicalLeadEmail = args.secondaryTechnicalLead
    ? args.secondaryTechnicalLead.email
    : secondaryTechnicalLead.email;

  const editRequest = await prisma.privateCloudRequest.create({
    data: {
      type: RequestType.EDIT,
      status: RequestStatus.PENDING,
      active: true,
      createdByEmail: authEmail,
      project: {
        connect: {
          id: args.projectId
        }
      },
      projectOwner: {
        connect: {
          id: projectOwnerId
        }
      },
      primaryTechnicalLead: {
        connect: {
          id: primaryTechnicalLeadId
        }
      },
      secondaryTechnicalLead: secondaryTechnicalLeadId
        ? {
            connect: {
              id: secondaryTechnicalLeadId
            }
          }
        : undefined,
      requestedProject: requestedProject
    }
  });

  return editRequest;
};

export default privateCloudProjectEditRequest;
