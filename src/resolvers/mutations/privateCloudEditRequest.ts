import {
  MutationResolvers,
  Quota,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectEditRequestArgs
} from "../../__generated__/resolvers-types.js";
import { Prisma } from "@prisma/client";
import { PrivateCloudProject, PrivateCloudRequest } from "@prisma/client";
import sendNatsMessage from "../../nats/sendNatsMessage.js";

const mergeQuotas = (incoming, existing: Quota): Quota => ({
  ...existing,
  ...incoming?.cpu,
  ...incoming?.memory,
  ...incoming?.storage
});

const privateCloudProjectEditRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudProjectEditRequestArgs,
  { authEmail, prisma, authRoles }
) => {
  let editRequest;
  let decisionStatus;

  try {
    const existingRequest: PrivateCloudRequest =
      await prisma.privateCloudRequest.findFirst({
        where: {
          AND: [{ projectId: args.projectId }, { active: true }]
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
      commonComponents,
      ...restProject
    } = project;

    const {
      projectId,
      projectOwner,
      primaryTechnicalLead,
      secondaryTechnicalLead,
      toolsQuota: toolsQuotaFromArgs,
      productionQuota: productionQuotaFromArgs,
      testQuota: testQuotaFromArgs,
      developmentQuota: developmentQuotaFromArgs,
      commonComponents: commonComponentsFromArgs,
      ...restArgs
    } = args;

    const users = await prisma.user.findMany({
      where: {
        id: {
          in: [projectOwnerId, primaryTechnicalLeadId, secondaryTechnicalLeadId]
        }
      },
      select: {
        email: true
      }
    });

    if (
      !users.map((user) => user.email).includes(authEmail) &&
      !authRoles.includes("admin")
    ) {
      throw new Error(
        "You need to be a contact on this project or an administrator in order to delete it."
      );
    }

    // Merge the existing project with the new values from the request arguments
    const requestedProject = {
      ...restProject,
      ...restArgs,
      toolsQuota: mergeQuotas(toolsQuotaFromArgs, toolsQuota),
      productionQuota: mergeQuotas(productionQuotaFromArgs, productionQuota),
      testQuota: mergeQuotas(testQuotaFromArgs, testQuota),
      developmentQuota: mergeQuotas(developmentQuotaFromArgs, developmentQuota),
      commonComponents: { ...commonComponents, ...commonComponentsFromArgs },
      projectOwner: projectOwner
        ? {
            connectOrCreate: {
              where: {
                email: projectOwner.email
              },
              create: projectOwner
            }
          }
        : {
            connect: {
              id: projectOwnerId
            }
          },
      primaryTechnicalLead: primaryTechnicalLead
        ? {
            connectOrCreate: {
              where: {
                email: primaryTechnicalLead.email
              },
              create: primaryTechnicalLead
            }
          }
        : {
            connect: {
              id: primaryTechnicalLeadId
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
        : secondaryTechnicalLeadId
        ? {
            connect: {
              id: secondaryTechnicalLeadId
            }
          }
        : undefined
    };

    // If any of the quotas are being changed, the request needs to be approved
    if (
      "toolsQuota" in args ||
      "developmentQuota" in args ||
      "testQuota" in args ||
      "productionQuota" in args
    ) {
      decisionStatus = DecisionStatus.Pending;
    } else {
      decisionStatus = DecisionStatus.Approved;
    }

    editRequest = await prisma.privateCloudRequest.create({
      data: {
        type: RequestType.Edit,
        decisionStatus: decisionStatus,
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

  if (decisionStatus === DecisionStatus.Approved) {
    await sendNatsMessage(editRequest.type, editRequest.requestedProject);
  }

  return editRequest;
};

export default privateCloudProjectEditRequest;
