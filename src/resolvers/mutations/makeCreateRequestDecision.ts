import {
  MutationMakePrivateCloudRequestCreateDecisionArgs,
  MutationResolvers
} from "__generated__/resolvers-types";
import { RequestDecision } from "../enum.js";

export const privateCloudProjectRequest: MutationResolvers = async (
  _,
  args: MutationMakePrivateCloudRequestCreateDecisionArgs,
  { roles, authEmail, prisma }
) => {
  const { requestId, decision } = args;
  const user = await prisma.user.findUnique({
    where: {
      email: authEmail
    }
  });

  if (!roles.includes("admin")) {
    throw new Error("You must be an admin to make a request decision.");
  }

  const request = await prisma.privateCloudRequest.update({
    where: {
      id: requestId
    },
    data: {
      status: decision,
      active: decision === RequestDecision.APPROVED,
      decisionDate: new Date(),
      decisoinMaker: user.id
    }
  });

  return request;
};
