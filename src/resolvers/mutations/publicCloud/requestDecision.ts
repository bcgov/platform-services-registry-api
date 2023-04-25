import {
  MutationPublicCloudRequestDecisionArgs,
  MutationResolvers,
  DecisionStatus,
  RequestDecision,
  Cluster,
} from '../../../__generated__/resolvers-types.js';
import { Prisma } from '@prisma/client';
import { sendPublicCloudNatsMessage } from '../../../natsPubSub/index.js';
import { sendRejectEmail } from '../../../ches/emailHandlers.js';

const publicCloudRequestDecision: MutationResolvers = async (
  _,
  args: MutationPublicCloudRequestDecisionArgs,
  { authRoles, authEmail, prisma }
) => {
  const { requestId, decision, humanComment } = args;

  if (!authRoles.includes('admin')) {
    throw new Error('You must be an admin to make a request decision.');
  }

  let request: Prisma.PublicCloudRequestUpdateInput;

  try {
    request = await prisma.publicCloudRequest.update({
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
      if (e.code === 'P2025') {
        throw new Error('Request not found or already has a decision.');
      }
    }
    throw e;
  }

  if (request.type === 'DELETE') {
    throw Error('Delete is dissabled');
    return;
  }

  if (request.decisionStatus === RequestDecision.Approved) {
    await sendPublicCloudNatsMessage(request.type, request.requestedProject);

    if (request.requestedProject.cluster === Cluster.Gold) {
      const goldDrRequest = { ...request };
      goldDrRequest.requestedProject.cluster = Cluster.Golddr;

      await sendPublicCloudNatsMessage(request.type, request.requestedProject);
    }
  }
  if (request.decisionStatus === RequestDecision.Rejected)
    sendRejectEmail(request);
  return request;
};

export default publicCloudRequestDecision;
