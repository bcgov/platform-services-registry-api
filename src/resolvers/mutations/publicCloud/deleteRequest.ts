import {
  MutationResolvers,
  ProjectStatus,
  RequestType,
  DecisionStatus,
  MutationPublicCloudProjectDeleteRequestArgs,
} from '../../../__generated__/resolvers-types.js';
import { sendDeleteRequestEmails } from '../../../ches/emailHandlersPublic.js';
import { Prisma, PublicCloudProject } from '@prisma/client';
import { sendPublicCloudNatsMessage } from '../../../natsPubSub/index.js';

const publicCloudProjectDeleteRequest: MutationResolvers = async (
  _,
  args: MutationPublicCloudProjectDeleteRequestArgs,
  { authRoles, authEmail, prisma }
) => {
  let deleteRequest;

  try {
    // Check if the user has inputed the correct arguments to delete a project
    const { id, ...project }: PublicCloudProject =
      await prisma.publicCloudProject.findUniqueOrThrow({
        where: {
          id: args.projectId,
          licencePlate: args.licencePlate,
          status: ProjectStatus.Active,
        },
      });

    // Make sure there are no other projects with the same licence plate
    const projects = await prisma.publicCloudProject.findMany({
      where: {
        licencePlate: args.licencePlate,
      },
    });

    if (projects.length > 1) {
      throw new Error(
        'There are multiple projects with this licence plate. This is an error.'
      );
    }

    // Check if the user inputed the correct project owner email in the delete form
    const projectOwner = await prisma.user.findUnique({
      where: {
        id: project.projectOwnerId,
      },
    });

    if (args.projectOwnerEmail !== projectOwner.email) {
      throw new Error(
        'The project owner email does not match the email of the project owner.'
      );
    }

    // Check if the user is allowed to delete the project
    const users = await prisma.user.findMany({
      where: {
        id: {
          in: [
            project.projectOwnerId,
            project.primaryTechnicalLeadId,
            project.secondaryTechnicalLeadId,
          ].filter(Boolean),
        },
      },
      select: {
        email: true,
      },
    });

    if (
      !users.map((user) => user.email).includes(authEmail) &&
      !authRoles.includes('admin')
    ) {
      throw new Error(
        'You need to be a contact on this project in order to delete it.'
      );
    }

    project.status = ProjectStatus.Inactive;

    deleteRequest = await prisma.publicCloudRequest.create({
      data: {
        type: RequestType.Delete,
        decisionStatus: DecisionStatus.Approved,
        active: true,
        createdByEmail: authEmail,
        licencePlate: project.licencePlate,
        requestedProject: {
          create: project,
        },
        userRequestedProject: {
          create: project,
        },
        project: {
          connect: {
            id: args.projectId,
          },
        },
      },
      include: {
        project: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true,
          },
        },
      },
    });
    await sendPublicCloudNatsMessage(
      deleteRequest.type,
      deleteRequest.project,
      deleteRequest.project
    );
    sendDeleteRequestEmails(deleteRequest.project);
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        throw new Error('There is already an active request for this project.');
      }
    }
    console.log(e);
    throw new Error('This project did not pass the deletion checks. ' + e);
  }

  return deleteRequest;
};

export default publicCloudProjectDeleteRequest;
