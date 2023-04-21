import { prisma } from "../index.js";
import message from "../natsPubSub/privateCloud/message.js";
import { RequestType } from "../__generated__/resolvers-types.js";

const getReProvisionNatsMessage = async (req, res) => {
  try {
    const { profile_id: profileId } = req.params;

    if (!profileId) {
      res.status(400).json({ error: "Profile ID is missing or undefined." });
      return;
    }

    const project = await prisma.privateCloudProject.findUnique({
      where: {
        id: profileId,
      },
      include: {
        projectOwner: true,
        primaryTechnicalLead: true,
        secondaryTechnicalLead: true,
      },
    });

    // For example:
    const result = await message(RequestType.Edit, project);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "An error occurred while processing the request: " + error,
    });
  }
};

export default getReProvisionNatsMessage;
