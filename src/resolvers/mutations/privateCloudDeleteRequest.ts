import {
  MutationResolvers,
  ProjectStatus,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectDeleteRequestArgs
} from "../../__generated__/resolvers-types.js";
import { Prisma } from "@prisma/client";
import { sendDeleteRequestEmails } from "../../ches/emailHandlers.js";

const privateCloudProjectDeleteRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudProjectDeleteRequestArgs,
  { authRoles, authEmail, prisma }
) => {
  let createRequest;

  try {
    const {id, ...project} = await prisma.privateCloudProject.findUnique({
      where: {
        id: args.projectId
      }
    });

    const users = await prisma.user.findMany({
      where: {
        id: {
          in: [
            project.projectOwnerId,
            project.primaryTechnicalLeadId,
            project.secondaryTechnicalLeadId
          ].filter(Boolean)
        }
      },
      select: {
        email: true
      }
    });

    if (
      !users.map((user) => user.email).includes(authEmail) &&
      !authRoles.includes("admin")
    ) {
      throw new Error(
        "You need to be a contact on this project in order to delete it."
      );
    }

    project.status = ProjectStatus.Inactive;

    createRequest = await prisma.privateCloudRequest.create({
      data: {
        type: RequestType.Delete,
        decisionStatus: DecisionStatus.Pending,
        active: true,
        createdByEmail: authEmail,
        licencePlate: project.licencePlate,
        requestedProject: {
          create: project
        },
        project: {
          connect: {
            id: args.projectId
          }
        }
      },
      include: {
        project: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true
          }
        }
      }
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        throw new Error("There is already an active request for this project.");
      }
    }
    throw e;
  }

  sendDeleteRequestEmails(createRequest.project);

  return createRequest;
};

export default privateCloudProjectDeleteRequest;
