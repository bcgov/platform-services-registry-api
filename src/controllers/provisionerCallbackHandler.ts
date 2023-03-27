import { prisma } from "../index.js";

import { DecisionStatus } from "../__generated__/resolvers-types.js";
import { sendMakeDecisionEmails } from "../ches/emailHandlers.js";

const provisionerCallbackHandler = async (req, res) => {
  try {
    const { prefix: licencePlate, cluster } = req.body;

    const request = await prisma.privateCloudRequest.findFirst({
      where: {
        licencePlate: licencePlate,
        active: true,
        decisionStatus: DecisionStatus.Approved,
        requestedProject: {
          cluster: cluster
        }
      }
    });


    if (!request) {
      console.log("No provision request found for project: " + licencePlate);
      res.status(400).end();
      return;
    }

    const { id, ...requestedProject } =
      await prisma.privateCloudRequestedProject.findFirst({
        where: {
          id: request.requestedProjectId
        }
      });

    const updateRequest = prisma.privateCloudRequest.update({
      where: {
        requestedProjectId: id
      },
      data: {
        decisionStatus: DecisionStatus.Provisioned,
        active: false
      }
    });

    const upsertProject = prisma.privateCloudProject.upsert({
      where: {
        licencePlate: licencePlate
      },
      update: requestedProject,
      create: requestedProject
    });

    const emailRequest = await prisma.privateCloudRequest.findUnique({
      where: {
        id: request.id,
        decisionStatus: DecisionStatus.Approved,
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
    })

    sendMakeDecisionEmails(emailRequest)

    await prisma.$transaction([updateRequest, upsertProject]);

    console.log("Provisioned project: " + licencePlate);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

  res.status(200).end();
};

export default provisionerCallbackHandler;
