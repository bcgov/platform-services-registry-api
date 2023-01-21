import {
  MutationPrivateCloudRequestDecisionArgs,
  MutationResolvers,
  DecisionStatus,
  RequestDecision
} from "../../__generated__/resolvers-types.js";
import { Prisma } from "@prisma/client";
import sendNatsMessage from "../../nats/sendNatsMessage.js";
import { sendMakeDecisionEmails } from "../../ches/emailHandlers.js";

const privateCloudRequestDecision: MutationResolvers = async (
  _,
  args: MutationPrivateCloudRequestDecisionArgs,
  { authRoles, authEmail, prisma }
) => {
  const { requestId, decision } = args;

  if (!authRoles.includes("admin")) {
    throw new Error("You must be an admin to make a request decision.");
  }

  let request;

  try {
    request = await prisma.privateCloudRequest.update({
      where: {
        id: requestId,
        decisionStatus: DecisionStatus.Pending
      },
      data: {
        decisionStatus: decision,
        active: decision === RequestDecision.Approved,
        decisionDate: new Date(),
        decisionMakerEmail: authEmail
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
      if (e.code === "P2025") {
        throw new Error("Request not found or already has a decision.");
      }
    }
    throw e;
  }

  if (request.decisionStatus === RequestDecision.Approved) {
    console.log("Sending nats message");
    await sendNatsMessage(request.type, request.requestedProject);
  }

  // sendMakeDecisionEmails(request);

  return request;
};

export default privateCloudRequestDecision;
