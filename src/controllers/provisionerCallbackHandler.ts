import { prisma } from "../index.js";

import { DecisionStatus, Cluster } from "../__generated__/resolvers-types.js";
import { sendMakeDecisionEmails } from "../ches/emailHandlers.js";

const provisionerCallbackHandler = async (req, res) => {
  try {
    const { prefix: licencePlate, cluster } = req.body;

    if (cluster === Cluster.Golddr) {
      res.status(200).end();
      console.log("Golddr cluster, skipping. Licence plate: " + licencePlate);
      return;
    }

    const request = await prisma.privateCloudRequest.findFirst({
      where: {
        licencePlate: licencePlate,
        active: true
      }
    });
    
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

    prisma.privateCloudRequest.findUnique({
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
    }).then((res) => {
      sendMakeDecisionEmails(res)
    }).catch(error => console.log(error))

    await prisma.$transaction([updateRequest, upsertProject]);
    
    console.log("Provisioned project: " + licencePlate);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

  res.status(200).end();
};

export default provisionerCallbackHandler;
