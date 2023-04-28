import { prisma } from '../index.js';
import { DecisionStatus } from '../__generated__/resolvers-types.js';
import { sendProvisionedEmails } from '../ches/emailHandlers.js';

const provisionerCallbackHandler = async (req, res) => {
  const { prefix: licencePlate, cluster } = req.body;

  if (!licencePlate || !cluster) {
    return res.status(400).json({
      error: true,
      message: 'licencePlate and cluster are required',
    });
  }
  try {
    const request = await prisma.privateCloudRequest.findFirst({
      where: {
        licencePlate: licencePlate,
        active: true,
        decisionStatus: DecisionStatus.Approved,
        requestedProject: {
          cluster: cluster,
        },
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

    if (!request) {
      console.log('No provision request found for project: ' + licencePlate);
      res.status(400).end();
      return;
    }

    const { id, ...requestedProject } =
      await prisma.privateCloudRequestedProject.findFirst({
        where: {
          id: request.requestedProjectId,
        },
      });

    await prisma.$transaction(async (prisma) => {
      const upsertProject = await prisma.privateCloudProject.upsert({
        where: {
          licencePlate: licencePlate,
        },
        update: requestedProject,
        create: requestedProject,
      });

      const updateRequest = await prisma.privateCloudRequest.update({
        where: {
          requestedProjectId: id,
        },
        data: {
          decisionStatus: DecisionStatus.Provisioned,
          active: false,
          projectId: upsertProject.id, // Set the ID incase it is a create request
        },
      });

      return updateRequest;
    });

    sendProvisionedEmails(request);
    console.log(`Provisioned project: ${licencePlate}`);
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
      message: 'An error occurred while processing the request',
    });
  }
};

export default provisionerCallbackHandler;
