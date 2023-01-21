import {
  MutationResolvers,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectEditRequestArgs
} from "../../__generated__/resolvers-types.js";
import {
  Prisma,
  PrivateCloudProject,
  PrivateCloudRequest
} from "@prisma/client";
import sendNatsMessage from "../../nats/sendNatsMessage.js";
import { sendEditRequestEmails } from "../../ches/emailHandlers.js";
import { defaultQuota } from "../../utils/defaultQuota.js";

const privateCloudProjectEditRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudProjectEditRequestArgs,
  { authEmail, prisma, authRoles }
) => {
  // TODO: Add types
  // See this for prisma types with relations:
  // https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types
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

    if (
      ![
        project.projectOwner.email,
        project.primaryTechnicalLead.email,
        project?.secondaryTechnicalLead?.email
      ].includes(authEmail) &&
      !authRoles.includes("admin")
    ) {
      throw new Error(
        "You need to be a contact on this project or an administrator in order to delete it."
      );
    }

    const requestedProject = {
      name: args.name,
      description: args.description,
      cluster: project.cluster,
      ministry: args.ministry,
      status: project.status,
      licencePlate: project.licencePlate,
      commonComponents: args.commonComponents,
      productionQuota: { ...defaultQuota, ...args.productionQuota },
      testQuota: { ...defaultQuota, ...args.testQuota },
      toolsQuota: { ...defaultQuota, ...args.toolsQuota },
      developmentQuota: { ...defaultQuota, ...args.developmentQuota },
      profileId: project.profileId || null,
      created: project.created,
      projectOwner: {
        connectOrCreate: {
          where: {
            email: args.projectOwner.email
          },
          create: args.projectOwner
        }
      },
      primaryTechnicalLead: {
        connectOrCreate: {
          where: {
            email: args.primaryTechnicalLead.email
          },
          create: args.primaryTechnicalLead
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
        : undefined
    };

    const isQuotaChanged = !(
      args.productionQuota === project.productionQuota &&
      args.testQuota === project.testQuota &&
      args.developmentQuota === project.developmentQuota &&
      args.toolsQuota === project.toolsQuota
    );

    // If any of the quotas are being changed, the request needs to be approved
    if (isQuotaChanged) {
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
        users: {
          connect: [
            { email: project.projectOwner.email },
            { email: project.primaryTechnicalLead.email },
            { email: project?.secondaryTechnicalLead?.email }
          ].filter(({ email }) => Boolean(email))
        },
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

  if (decisionStatus === DecisionStatus.Approved) {
    await sendNatsMessage(editRequest.type, editRequest.requestedProject);
  }

  // await sendEditRequestEmails(
  //   editRequest.project,
  //   editRequest.requestedProject
  // );

  return editRequest;
};

export default privateCloudProjectEditRequest;