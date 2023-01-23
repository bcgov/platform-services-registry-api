import { prisma } from "../index.js";

import { DecisionStatus } from "../__generated__/resolvers-types.js";

const provisionerCallbackHandler = async (req, res) => {
  try {
    const { prefix: licencePlate } = req.body;

    console.log("** Request Body **")
    console.log(req.body);

    const { id, ...requestedProject } =
      await prisma.privateCloudRequestedProject.findFirst({
        where: {
          licencePlate: licencePlate
        }
      });

    console.log("** Requested Project **")
    console.log(requestedProject);

    const updateRequest = prisma.privateCloudRequest.update({
      where: {
        requestedProjectId: id
      },
      data: {
        decisionStatus: DecisionStatus.Approved,
        active: false
      }
    });

    console.log("** Update Request **")
    console.log(updateRequest);

    const upsertProject = prisma.privateCloudProject.upsert({
      where: {
        licencePlate: licencePlate
      },
      update: requestedProject,
      create: requestedProject
    });

    console.log("** Upsert Project **")
    console.log(upsertProject);

    await prisma.$transaction([updateRequest, upsertProject]);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

  res.status(200).end();
};

export default provisionerCallbackHandler;
