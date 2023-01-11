import {
  CommonComponentsInput,
  MutationResolvers,
  CreateUserInput,
  QuotaInput,
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
  let decisionStatus; // Quota changes require approval

  try {
    const existingRequest: PrivateCloudRequest =
      await prisma.privateCloudRequest.findFirst({
        where: {
          AND: [
            { projectId: args.projectId },
            { status: DecisionStatus.Approved },
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

    const users = await prisma.user.findMany({
      where: {
        id: {
          in: [
            project.projectOwnerId,
            project.primaryTechnicalLeadId,
            project.secondaryTechnicalLeadId
          ]
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
        "You need to be a contact on this project in order to delete it."
      );
    }

    const requestedProject = {
      ...rest,
      name: args.name,
      description: args.description,
      toolsQuota: mergeQuotas(args.toolsQuota, project.toolsQuota),
      productionQuota: mergeQuotas(
        args.productionQuota,
        project.productionQuota
      ),
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

    if (
      "toolsQuota" in args ||
      "developmentQuota" in args ||
      "testQuota" in args ||
      "productionQuota" in args
    ) {
      decisionStatus = DecisionStatus.Pending;
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
