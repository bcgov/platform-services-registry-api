import {
  MutationMakePrivateCloudRequestCreateDecisionArgs,
  MutationResolvers
} from "__generated__/resolvers-types";
import { RequestDecision } from "../enum.js";

const makePrivateCloudRequestCreateDecision: MutationResolvers = async (
  _,
  args: MutationMakePrivateCloudRequestCreateDecisionArgs,
  { authRoles, authEmail, prisma }
) => {
  const { requestId, decision } = args;

  if (!authRoles.includes("admin")) {
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
      decisionMakerEmail: authEmail
    }
  });

  return request;
};

export default makePrivateCloudRequestCreateDecision;
