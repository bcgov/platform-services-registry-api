import {
  MutationResolvers,
  RequestType,
  DecisionStatus,
  MutationPublicCloudProjectEditRequestArgs,
} from '../../../__generated__/resolvers-types.js';
import { Prisma, PublicCloudRequest } from '@prisma/client';
import { sendPublicCloudNatsMessage } from '../../../natsPubSub/index.js';
import { sendEditRequestEmails } from '../../../ches/emailHandlersPublic.js';
import { checkIfProjectChanged } from '../../../ches/emailHelpers.js';
import { subscribeUserToMessages } from '../../../mautic/index.js';

const publicCloudProjectEditRequest = async (
  _,
  args: MutationPublicCloudProjectEditRequestArgs,
  { authEmail, prisma, authRoles }
) => {
  type PublicCloudEditRequest = Prisma.PublicCloudRequestGetPayload<{
    include: {
      project: {
        include: {
          projectOwner: true;
          primaryTechnicalLead: true;
          secondaryTechnicalLead: true;
        };
      };
      requestedProject: {
        include: {
          projectOwner: true;
          primaryTechnicalLead: true;
          secondaryTechnicalLead: true;
        };
      };
    };
  }>;

  type PublicCloudProject = Prisma.PublicCloudProjectGetPayload<{
    include: {
      projectOwner: true;
      primaryTechnicalLead: true;
      secondaryTechnicalLead: true;
    };
  }>;

  const existingRequest: PublicCloudRequest =
    await prisma.publicCloudRequest.findFirst({
      where: {
        AND: [{ projectId: args.projectId }, { active: true }],
      },
    });

  if (existingRequest !== null) {
    throw new Error(
      'This project already has an active request or it does not exist.'
    );
  }

  const project: PublicCloudProject =
    await prisma.publicCloudProject.findUnique({
      where: {
        id: args.projectId,
      },
      include: {
        projectOwner: true,
        primaryTechnicalLead: true,
        secondaryTechnicalLead: true,
      },
    });

  if (
    ![
      project.projectOwner.email,
      project.primaryTechnicalLead.email,
      project?.secondaryTechnicalLead?.email,
    ].includes(authEmail) &&
    !authRoles.includes('admin')
  ) {
    throw new Error(
      'You need to be a contact on this project or an administrator in order to edit it.'
    );
  }

  const requestedProject: Prisma.PublicCloudRequestedProjectCreateInput = {
    name: args.name,
    description: args.description,
    provider: project.provider,
    budget: args.budget,
    ministry: args.ministry,
    status: project.status,
    licencePlate: project.licencePlate,
    accountCoding: args.accountCoding,
    created: project.created,
    projectOwner: {
      connectOrCreate: {
        where: {
          email: args.projectOwner.email,
        },
        create: args.projectOwner,
      },
    },
    primaryTechnicalLead: {
      connectOrCreate: {
        where: {
          email: args.primaryTechnicalLead.email,
        },
        create: args.primaryTechnicalLead,
      },
    },
    secondaryTechnicalLead: args.secondaryTechnicalLead
      ? {
          connectOrCreate: {
            where: {
              email: args.secondaryTechnicalLead.email,
            },
            create: args.secondaryTechnicalLead,
          },
        }
      : undefined,
  };

  const request: Prisma.PublicCloudRequestCreateInput = {
    type: RequestType.Edit,
    decisionStatus: DecisionStatus.Approved, // All public cloud edit requests are automatically approved
    active: true,
    createdByEmail: authEmail,
    licencePlate: project.licencePlate,
    requestedProject: {
      create: requestedProject,
    },
    project: {
      connect: {
        id: args.projectId,
      },
    },
    userRequestedProject: {
      create: requestedProject,
    },
  };

  let editRequest: PublicCloudEditRequest;

  try {
    editRequest = await prisma.publicCloudRequest.create({
      data: request,
      include: {
        project: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true,
          },
        },
        requestedProject: {
          include: {
            projectOwner: true,
            primaryTechnicalLead: true,
            secondaryTechnicalLead: true,
          },
        },
      },
    });

    if (
      checkIfProjectChanged(editRequest.project, editRequest.requestedProject)
    )
      await sendEditRequestEmails(editRequest);

    const users = [
      args.projectOwner,
      args.primaryTechnicalLead,
      args?.secondaryTechnicalLead,
    ].filter(Boolean);

    Promise.all(
      users.map((user) => subscribeUserToMessages(user, 'AWS', 'Public'))
    );
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        throw new Error('There is already an active request for this project.');
      }
    }
    throw e;
  }

  await sendPublicCloudNatsMessage(
    editRequest.type,
    editRequest.requestedProject,
    project
  );

  return editRequest;
};

export default publicCloudProjectEditRequest;
