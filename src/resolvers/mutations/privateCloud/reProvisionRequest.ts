import {
  MutationPrivateCloudReProvisionRequestArgs,
  MutationResolvers,
  RequestDecision,
  Cluster,
  PrivateCloudRequest,
} from '../../../__generated__/resolvers-types.js';
import { sendPrivateCloudNatsMessage } from '../../../natsPubSub/index.js';

const privateCloudReProvisionRequest: MutationResolvers['privateCloudReProvisionRequest'] =
  async (
    _,
    args: MutationPrivateCloudReProvisionRequestArgs,
    { authRoles, prisma }
  ) => {
    const { requestId } = args;

    if (!authRoles.includes('admin')) {
      throw new Error('You must be an admin to re provision a request.');
    }

    const request = await prisma.privateCloudRequest.findUnique({
      where: {
        id: requestId,
        active: true,
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

    const { decisionStatus, active } = request;

    if (decisionStatus !== RequestDecision.Approved || !active) {
      throw new Error('Request must be active and approved.');
    }

    if (request.decisionStatus === RequestDecision.Approved) {
      await sendPrivateCloudNatsMessage(request.type, request.requestedProject);

      if (request.requestedProject.cluster === Cluster.Gold) {
        const goldDrRequest = { ...request };
        goldDrRequest.requestedProject.cluster = Cluster.Golddr;
        await sendPrivateCloudNatsMessage(
          request.type,
          request.requestedProject
        );
      }
    }

    return request.id;
  };

export default privateCloudReProvisionRequest;
