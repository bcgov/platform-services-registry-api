import {
  MutationPrivateCloudRequestDecisionArgs,
  MutationResolvers
} from "__generated__/resolvers-types";
import { RequestDecision, RequestStatus } from "../enum.js";
import { Prisma } from "@prisma/client";
import sendNatsMessage from "../../nats/sendNatsMessage.js";

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
        status: RequestStatus.PENDING
      },
      data: {
        status: decision,
        active: decision === RequestDecision.APPROVED,
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

  // const { projectOwner, primaryTechnicalLead, secondaryTechnicalLead } =
  //   request.requestedProject;

  if (request.status === RequestDecision.APPROVED) {
    // Ches emails
    // Nats message
    await sendNatsMessage(request.type, request.requestedProject);
  }

  if (request.status === RequestDecision.REJECTED) {
    // Ches emails
  }

  return request;
};

export default privateCloudRequestDecision;
