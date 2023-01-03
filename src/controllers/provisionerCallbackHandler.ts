import { prisma } from "../index.js";
import { Prisma } from "@prisma/client";
import { RequestStatus, ProjectStatus } from "../resolvers/enum.js";

const provisionerCallbackHandler = async (req, res, next) => {
  try {
    const { prefix: licencePlate } = req.body;

    const request = await prisma.privateCloudRequest.findFirst({
      where: {
        AND: [
          {
            requestedProject: {
              is: {
                licencePlate: licencePlate
              }
            }
          },
          {
            status: RequestStatus.APPROVED
          },
          {
            active: true
          }
        ]
      }
    });

    if (request.status !== RequestStatus.APPROVED) {
      throw new Error("Request not approved.");
    }

    if (request === null) {
      throw new Error("Request not found or not approved.");
    }

    const requestedProject = request.requestedProject;

    const {
      projectOwnerEmail,
      primaryTechnicalLeadEmail,
      secondaryTechnicalLeadEmail,
      ...rest
    } = requestedProject;

    const projectOwner = {
      connect: {
        email: projectOwnerEmail
      }
    };

    const primaryTechnicalLead = {
      connect: {
        email: primaryTechnicalLeadEmail
      }
    };

    const secondaryTechnicalLead = secondaryTechnicalLeadEmail
      ? {
          connect: {
            email: secondaryTechnicalLeadEmail
          }
        }
      : undefined;

    const createProjectQuery: Prisma.PrivateCloudProjectCreateInput = {
      ...rest,
      status: ProjectStatus.ACTIVE,
      projectOwner,
      primaryTechnicalLead,
      secondaryTechnicalLead
    };

    const project = await prisma.privateCloudProject.upsert({
      where: {
        licencePlate: licencePlate
      },
      update: createProjectQuery,
      create: createProjectQuery
    });

    const updateRequest = await prisma.privateCloudRequest.update({
      where: {
        id: request.id
      },
      data: {
        status: RequestStatus.PROVISIONED,
        active: false
      }
    });

    // // Put the above in a transaction

    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};

export default provisionerCallbackHandler;
