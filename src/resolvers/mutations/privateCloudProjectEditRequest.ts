import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  CreateUserInput,
  QuotaInput,
  Quota
} from "__generated__/resolvers-types";
import { Prisma } from "@prisma/client";
import { RequestType, RequestStatus } from "../enum.js";
import {
  PrivateCloudProject,
  PrivateCloudRequest,
  PrivateCloudRequestedProject
} from "@prisma/client";
import sendNatsMessage from "../../nats/sendNatsMessage.js";

interface argsValue {
  projectId: string;
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

const mergeQuotas = (incoming, existing: Quota): Quota => ({
  ...existing,
  ...incoming?.cpu,
  ...incoming?.memory,
  ...incoming?.storage
});

const privateCloudProjectEditRequest: MutationResolvers = async (
  _,
  args: argsValue,
  { authEmail, prisma }
) => {
  const existingRequest: PrivateCloudRequest =
    await prisma.privateCloudRequest.findFirst({
      where: {
        AND: [
          { projectId: args.projectId },
          { status: RequestStatus.APPROVED },
          { active: true }
        ]
      }
    });

  if (existingRequest !== null) {
    throw new Error(
      "This project already has an active request or it does not exist."
    );
  }

  const project: PrivateCloudProject =
    await prisma.privateCloudProject.findUnique({
      where: {
        id: args.projectId
      }
    });

  const {
    id,
    projectOwnerId,
    primaryTechnicalLeadId,
    secondaryTechnicalLeadId,
    productionQuota,
    testQuota,
    toolsQuota,
    developmentQuota,
    ...rest
  } = project;

  const requestedProject = {
    ...rest,
    ...args.metaData,
    toolsQuota: mergeQuotas(args.toolsQuota, project.toolsQuota),
    productionQuota: mergeQuotas(args.productionQuota, project.productionQuota),
    testQuota: mergeQuotas(args.testQuota, project.testQuota),
    developmentQuota: mergeQuotas(
      args.developmentQuota,
      project.developmentQuota
    ),
    projectOwner: args.projectOwner
      ? {
          connectOrCreate: {
            where: {
              email: args.projectOwner.email
            },
            create: args.projectOwner
          }
        }
      : {
          connect: {
            id: projectOwnerId
          }
        },
    primaryTechnicalLead: args.primaryTechnicalLead
      ? {
          connectOrCreate: {
            where: {
              email: args.primaryTechnicalLead.email
            },
            create: args.primaryTechnicalLead
          }
        }
      : {
          connect: {
            id: primaryTechnicalLeadId
          }
        },
    secondaryTechnicalLead: args.secondaryTechnicalLead
      ? {
          connectOrCreate: {
            where: {
              email: args.secondaryTechnicalLead.email
            },
            create: args.secondaryTechnicalLead
          }
        }
      : secondaryTechnicalLeadId
      ? {
          connect: {
            id: secondaryTechnicalLeadId
          }
        }
      : undefined
  };

  // Quota changes require approval
  let requestStatus = RequestStatus.APPROVED;
  let editRequest;

  try {
    if (
      "toolsQuota" in args ||
      "developmentQuota" in args ||
      "testQuota" in args ||
      "productionQuota" in args
    ) {
      requestStatus = RequestStatus.PENDING;
    }

    editRequest = await prisma.privateCloudRequest.create({
      data: {
        type: RequestType.EDIT,
        status: requestStatus,
        active: true,
        createdByEmail: authEmail,
        requestedProject: {
          create: requestedProject
        },
        project: {
          connect: {
            id: args.projectId
          }
        }
      },
      include: {
        project: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true
          }
        },
        requestedProject: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true
          }
        }
      }
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(e.message);
    }
    throw e;
  }

  if (requestStatus === RequestStatus.APPROVED) {
    await sendNatsMessage("edit", editRequest.requestedProject);
  }

  return editRequest;
};

export default privateCloudProjectEditRequest;
