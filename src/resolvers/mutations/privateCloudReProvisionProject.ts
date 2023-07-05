import {
  MutationResolvers,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudReProvisionProjectArgs,
  Cluster
} from "../../__generated__/resolvers-types.js";
import { Prisma, PrivateCloudRequest } from "@prisma/client";
import sendNatsMessage from "../../nats/sendNatsMessage.js";

const privateCloudReProvisionProject: MutationResolvers = async (
  _,
  args: MutationPrivateCloudReProvisionProjectArgs,
  { authEmail, prisma, authRoles }
) => {
  // TODO: Add types
  // See this for prisma types with relations:
  // https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types

  let reProvisionRequest;

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

    const project = await prisma.privateCloudProject.findUnique({
      where: {
        id: args.projectId
      },
      include: {
        projectOwner: true,
        primaryTechnicalLead: true,
        secondaryTechnicalLead: true
      }
    });

    const requestedProject = {
      name: project.name,
      description: project.description,
      cluster: project.cluster,
      ministry: project.ministry,
      status: project.status,
      licencePlate: project.licencePlate,
      commonComponents: project.commonComponents,
      productionQuota: project.productionQuota,
      testQuota: project.testQuota,
      toolsQuota: project.toolsQuota,
      developmentQuota: project.developmentQuota,
      profileId: project.profileId || null,
      created: project.created,
      projectOwner: {
        connectOrCreate: {
          where: {
            email: project.projectOwner.email
          },
          create: project.projectOwner
        }
      },
      primaryTechnicalLead: {
        connectOrCreate: {
          where: {
            email: project.primaryTechnicalLead.email
          },
          create: project.primaryTechnicalLead
        }
      },
      secondaryTechnicalLead: project.secondaryTechnicalLead
        ? {
            connectOrCreate: {
              where: {
                email: project.secondaryTechnicalLead.email
              },
              create: project.secondaryTechnicalLead
            }
          }
        : undefined
    };

    reProvisionRequest = await prisma.privateCloudRequest.create({
      data: {
        type: RequestType.Edit,
        decisionStatus: DecisionStatus.Approved,
        active: true,
        createdByEmail: authEmail,
        licencePlate: project.licencePlate,
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
      if (e.code === "P2002") {
        throw new Error("There is already an active request for this project.");
      }
    }
    throw e;
  }

  await sendNatsMessage(
    reProvisionRequest.type,
    reProvisionRequest.requestedProject,
    reProvisionRequest.id
  );

  if (reProvisionRequest.requestedProject.cluster === Cluster.Gold) {
    const goldDrRequest = { ...reProvisionRequest };
    goldDrRequest.requestedProject.cluster = Cluster.Golddr;
    await sendNatsMessage(goldDrRequest.type, goldDrRequest.requestedProject,goldDrRequest.id);
  }

  return reProvisionRequest;
};

export default privateCloudReProvisionProject;
