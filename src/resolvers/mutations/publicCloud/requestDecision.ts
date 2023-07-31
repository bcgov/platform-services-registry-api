import {
  MutationPublicCloudRequestDecisionArgs,
  DecisionStatus,
  RequestDecision,
  RequestType,
  Cluster,
} from '../../../__generated__/resolvers-types.js';
import { Prisma } from '@prisma/client';
import { sendPublicCloudNatsMessage } from '../../../natsPubSub/index.js';
import { sendRejectEmail } from '../../../ches/emailHandlers.js';

const publicCloudRequestDecision = async (
  _,
  args: MutationPublicCloudRequestDecisionArgs,
  { authRoles, authEmail, prisma }
) => {
  const { requestId, decision, humanComment } = args;

  if (!authRoles.includes('admin')) {
    throw new Error('You must be an admin to make a request decision.');
  }

  type PublicCloudRequest = Prisma.PublicCloudRequestGetPayload<{
    include: {
      requestedProject: {
        include: {
          projectOwner: true;
          primaryTechnicalLead: true;
          secondaryTechnicalLead: true;
        };
      };
    };
  }>;

  type PublicCloudProject = Prisma.PublicCloudProjectGetPayload<{
    include: {
      projectOwner: true;
      primaryTechnicalLead: true;
      secondaryTechnicalLead: true;
    };
  }>;

  let request: PublicCloudRequest;
  let project: PublicCloudProject | null;

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

    if (request.type !== 'CREATE') {
      project = await prisma.publicCloudProject.findFirst({
        where: {
          id: request.projectId,
        },
        include: {
          projectOwner: true,
          primaryTechnicalLead: true,
          secondaryTechnicalLead: true,
        },
      });
    }
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2025') {
        throw new Error('Request not found or already has a decision.');
      }
    }
    throw e;
  }

  if (request.decisionStatus === RequestDecision.Approved) {
    await sendPublicCloudNatsMessage(
      request.type,
      request.requestedProject,
      project
    );
  }

  if (request.decisionStatus === RequestDecision.Rejected) {
    sendRejectEmail(request);
  }

  return request;
};

export default publicCloudRequestDecision;
