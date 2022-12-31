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

  let request;

  request = await prisma.privateCloudRequest.update({
    where: {
      id: requestId
    },
    data: {
      status: decision,
      decisionDate: new Date(),
      decisoinMaker: user.id
    }
  });

  // if (decision === RequestDecision.REJECT) {
  //   request = await prisma.privateCloudRequest.update({

  if (!request) {
    throw new Error("Request not found.");
  }

  return request;
};
