import {
  MutationResolvers,
  ProjectStatus,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectDeleteRequestArgs
} from "../../__generated__/resolvers-types.js";
import { Prisma } from "@prisma/client";
import { sendDeleteRequestEmails } from "../../ches/emailHandlers.js";
import openshiftDeletionCheck, {
  DeletableField
} from "../../scripts/deletioncheck.js";

const privateCloudProjectDeleteRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudProjectDeleteRequestArgs,
  { authRoles, authEmail, prisma }
) => {
  let createRequest;

  try {
    const { id, ...project } =
      await prisma.privateCloudProject.findUniqueOrThrow({
        where: {
          id: args.projectId,
          licencePlate: args.licencePlate,
          status: ProjectStatus.Active
        }
      });

    const projects = await prisma.privateCloudProject.findMany({
      where: {
        licencePlate: args.licencePlate
      }
    });

    if (projects.length > 1) {
      throw new Error(
        "There are multiple projects with this licence plate. This is an error."
      );
    }

    const projectOwner = await prisma.user.findUnique({
      where: {
        id: project.projectOwnerId
      }
    });

    if (args.projectOwnerEmail !== projectOwner.email) {
      throw new Error(
        "The project owner email does not match the email of the project owner."
      );
    }

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

    const deleteCheckList: DeletableField = await openshiftDeletionCheck(
      project.licencePlate,
      project.clusterName
    );

    if (!Object.values(deleteCheckList).every((field) => field)) {
      throw new Error(
        "This project is not deletable as it is not empty. Please delete all resources before deleting the project."
      );
    }

    console.log(deleteCheckList);

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
    console.log(e);
    throw new Error("This project did not pass the deletion checks. " + e);
  }

  sendDeleteRequestEmails(createRequest.project);

  return createRequest;
};

export default privateCloudProjectDeleteRequest;
