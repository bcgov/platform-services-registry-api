import {
  MutationResolvers,
  RequestType,
  DecisionStatus,
  MutationPublicCloudProjectEditRequestArgs,
} from '../../../__generated__/resolvers-types.js';
import {
  Prisma,
  PublicCloudRequest,
  CommonComponents as CommonComponentsPrisma,
} from '@prisma/client';
import { sendPublicCloudNatsMessage } from '../../../natsPubSub/index.js';
import { sendEditRequestEmails } from '../../../ches/emailHandlers.js';

const publicCloudProjectEditRequest = async (
  _,
  args: MutationPublicCloudProjectEditRequestArgs,
  { authEmail, prisma, authRoles }
) => {
  type PublicCloudEditRequest = Prisma.PublicCloudRequestGetPayload<{
    include: {
      requestedProject: {
        include: {
          projectOwner: true;
          technicalLeads: true;
        };
      };
    };
  }>;

  type PublicCloudProject = Prisma.PublicCloudProjectGetPayload<{
    include: {
      projectOwner: true;
      technicalLeads: true;
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
        technicalLeads: true,
      },
    });

  if (
    ![args.projectOwner, ...args.technicalLeads]
      .map((user) => user.email)
      .includes(authEmail) &&
    !authRoles.includes('admin')
  ) {
    throw new Error(
      'You need to be a contact on this project or an administrator in order to edit it.'
    );
  }

  const requestedProject: Prisma.PublicCloudRequestedProjectCreateInput = {
    name: args.name,
    description: args.description,
    provider: args.provider,
    budget: args.budget,
    ministry: args.ministry,
    status: project.status,
    licencePlate: project.licencePlate,
    billingGroup: project.billingGroup,
    commonComponents: args.commonComponents as CommonComponentsPrisma,
    created: project.created,
    projectOwner: {
      connectOrCreate: {
        where: {
          email: args.projectOwner.email,
        },
        create: args.projectOwner,
      },
    },
    technicalLeads: {
      connectOrCreate: args.technicalLeads.map((user) => ({
        where: {
          email: user.email,
        },
        create: user,
      })),
    },
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

    // await sendPublicCloudEditRequestEmails(
    //   editRequest.project,
    //   editRequest.requestedProject
    // );
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
    editRequest.requestedProject
  );

  return editRequest;
};

export default publicCloudProjectEditRequest;
