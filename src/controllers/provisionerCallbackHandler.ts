import { prisma } from "../index.js";
import { Prisma } from "@prisma/client";
import { RequestStatus, ProjectStatus } from "../resolvers/enum.js";

const provisionerCallbackHandler = async (req, res, next) => {
  try {
    const { prefix: licencePlate } = req.body;

    const { id, ...requestedProject } =
      await prisma.privateCloudRequestedProject.findFirst({
        where: {
          licencePlate: licencePlate
        }
      });

    const updateRequest = prisma.privateCloudRequest.update({
      where: {
        requestedProjectId: id
      },
      data: {
        status: RequestStatus.PROVISIONED,
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

    await prisma.$transaction([updateRequest, upsertProject]);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }

  res.status(200).end();
};

export default provisionerCallbackHandler;
