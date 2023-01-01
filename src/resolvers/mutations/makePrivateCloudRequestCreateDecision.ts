import {
  MutationMakePrivateCloudRequestCreateDecisionArgs,
  MutationResolvers
} from "__generated__/resolvers-types";
import { RequestDecision, RequestDecisionStatus } from "../enum.js";
import { Prisma as PrismaType } from "@prisma/client";

const makePrivateCloudRequestCreateDecision: MutationResolvers = async (
  _,
  args: MutationMakePrivateCloudRequestCreateDecisionArgs,
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
        status: RequestDecisionStatus.PENDING
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

  return request;
};

export default makePrivateCloudRequestCreateDecision;
