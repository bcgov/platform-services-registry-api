import {
  MutationPrivateCloudRequestDecisionArgs,
  MutationResolvers
} from "__generated__/resolvers-types";
import { RequestDecision, RequestStatus } from "../enum.js";
import { Prisma as PrismaType } from "@prisma/client";

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
      }
    });
  } catch (e) {
    if (e instanceof PrismaType.PrismaClientKnownRequestError) {
      if (e.code === "P2025") {
        throw new Error("Request not found or already has a decision.");
      }
    }
    throw e;
  }

  if (request.status === RequestDecision.APPROVED) {
    // Ches emails
    // Nats message
  }

  if (request.status === RequestDecision.REJECTED) {
    // Ches emails
  }

  return request;
};

export default privateCloudRequestDecision;
