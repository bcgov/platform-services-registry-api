import {
  MutationPrivateCloudReProvisionRequestArgs,
  MutationResolvers,
  RequestDecision,
  Cluster
} from "../../__generated__/resolvers-types.js";
import sendNatsMessage from "../../nats/sendNatsMessage.js";

const privateCloudReProvisionRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudReProvisionRequestArgs,
  { authRoles, prisma }
) => {
  const { requestId } = args;

  if (!authRoles.includes("admin")) {
    throw new Error("You must be an admin to re provision a request.");
  }

  const request = await prisma.privateCloudRequest.findUnique({
    where: {
      id: requestId,
      active: true
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

  const { decisionStatus, active } = request;

  if (decisionStatus !== RequestDecision.Approved || !active) {
    throw new Error("Request must be active and approved.");
  }

  if (request.decisionStatus === RequestDecision.Approved) {
    await sendNatsMessage(request.type, request.requestedProject, request.id);

    if (request.requestedProject.cluster === Cluster.Gold) {
      const goldDrRequest = { ...request };
      goldDrRequest.requestedProject.cluster = Cluster.Golddr;
      await sendNatsMessage(request.type, request.requestedProject, request.id);
    }
  }

  return request;
};

export default privateCloudReProvisionRequest;
