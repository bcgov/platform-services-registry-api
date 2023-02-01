import { prisma } from "../index.js";

import { DecisionStatus } from "../__generated__/resolvers-types.js";

const provisionerCallbackHandler = async (req, res) => {
  try {
    const { prefix: licencePlate } = req.body;

    const request = await prisma.privateCloudRequest.findFirst({
      where: {
        licencePlate: licencePlate,
        active: true,
      },
    });

    const { id, ...requestedProject } =
      await prisma.privateCloudRequestedProject.findFirst({
        where: {
          id: request.requestedProjectId,
        },
      });

    const updateRequest = prisma.privateCloudRequest.update({
      where: {
        requestedProjectId: id,
      },
      data: {
        decisionStatus: DecisionStatus.Provisioned,
        active: false,
      },
    });

    const upsertProject = prisma.privateCloudProject.upsert({
      where: {
        licencePlate: licencePlate,
      },
      update: requestedProject,
      create: requestedProject,
    });

    await prisma.$transaction([updateRequest, upsertProject]);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

  res.status(200).end();
};

export default provisionerCallbackHandler;
