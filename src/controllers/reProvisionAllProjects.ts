import { prisma } from "../index.js";
import sendNatsMessage from "../nats/sendNatsMessage.js";

import { RequestType } from "../__generated__/resolvers-types.js";

const reprovisionAllProjects = async (req, res) => {
  try {
    // const { prefix: licencePlate, cluster } = req.body;

    // Get all projects
    const projects = await prisma.privateCloudProject.findMany({
      include: {
        projectOwner: true,
        primaryTechnicalLead: true,
        secondaryTechnicalLead: true
      }
    });

    // Loop through projects and reprovision them
    for (const project of projects) {
      await sendNatsMessage(RequestType.Edit, project);
    }
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

  res.status(200).end();
};

export default reprovisionAllProjects;
