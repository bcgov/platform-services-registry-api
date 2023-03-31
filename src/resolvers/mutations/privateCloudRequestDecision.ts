import {
  MutationPrivateCloudRequestDecisionArgs,
  MutationResolvers,
  DecisionStatus,
  RequestDecision,
  Cluster,
} from "../../__generated__/resolvers-types.js";
import { Prisma } from "@prisma/client";
import sendNatsMessage from "../../nats/sendNatsMessage.js";

const privateCloudRequestDecision: MutationResolvers = async (
  _,
  args: MutationPrivateCloudRequestDecisionArgs,
  { authRoles, authEmail, prisma }
) => {
  const { requestId, decision, humanComment } = args;

  if (!authRoles.includes("admin")) {
    throw new Error("You must be an admin to make a request decision.");
  }

  let request;

  try {
    request = await prisma.privateCloudRequest.update({
      where: {
        id: requestId,
        decisionStatus: DecisionStatus.Pending,
      },
      data: {
        decisionStatus: decision,
        humanComment: humanComment,
        active: decision === RequestDecision.Approved,
        decisionDate: new Date(),
        decisionMakerEmail: authEmail,
      },
      include: {
        project: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true,
          },
        },
        requestedProject: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true,
          },
        },
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2025") {
        throw new Error("Request not found or already has a decision.");
      }
    }
    throw e;
  }

  if (request.decisionStatus === RequestDecision.Approved) {
    await sendNatsMessage(request.type, request.requestedProject);

    if (request.requestedProject.cluster === Cluster.Gold) {
      const goldDrRequest = { ...request };
      goldDrRequest.requestedProject.cluster = Cluster.Golddr;
      await sendNatsMessage(request.type, request.requestedProject);
    }
  }
  return request;
};

export default privateCloudRequestDecision;
