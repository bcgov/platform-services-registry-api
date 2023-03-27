import { prisma } from "../index.js";
import message from "../nats/message.js";
import { RequestType } from "../__generated__/resolvers-types.js";

const getReProvisionNatsMessage = async (req, res) => {
  try {
    const { profileId: id } = req.params;
    const project = await prisma.privateCloudProject.findFirst({
      where: {
        id: id
      },
      include: {
        projectOwner: true,
        primaryTechnicalLead: true,
        secondaryTechnicalLead: true
      }
    });

    // For example:
    const result = await message(RequestType.Edit, project);
    console.log(result);
    res.json(result);
  } catch (error) {
    res.status(400).end(); // Pass the error to the error handling middleware
  }
};

export default getReProvisionNatsMessage;
