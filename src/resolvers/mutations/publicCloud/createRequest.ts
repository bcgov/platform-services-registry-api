import {
  MutationResolvers,
  ProjectStatus,
  RequestType,
  DecisionStatus,
  MutationPublicCloudProjectRequestArgs,
} from '../../../__generated__/resolvers-types.js';
import generateLicensePlate from '../../../utils/generateLicencePlate.js';
import { Prisma } from '@prisma/client';
import { sendCreateRequestEmails } from '../../../ches/emailHandlers.js';

const publicCloudProjectRequest = async (
  _,
  args: MutationPublicCloudProjectRequestArgs,
  { authRoles, authEmail, prisma }
) => {
  type PublicCloudCreateRequest = Prisma.PublicCloudRequestGetPayload<{
    include: {
      requestedProject: {
        include: {
          projectOwner: true;
          technicalLeads: true;
        };
      };
    };
  }>;

  if (
    ![args.projectOwner, ...args.technicalLeads]
      .map((user) => user.email)
      .includes(authEmail) &&
    !authRoles.includes('admin')
  ) {
    throw new Error(
      'You need to assign yourself to this project in order to create it.'
    );
  }

  const licencePlate = generateLicensePlate();

  const requestedProject: Prisma.PublicCloudRequestedProjectCreateInput = {
    name: args.name,
    description: args.description,
    provider: args.provider,
    budget: args.budget,
    ministry: args.ministry,
    status: ProjectStatus.Active,
    licencePlate: licencePlate,
    billingGroup: args.billingGroup,
    commonComponents: args.commonComponents,
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
    type: RequestType.Create,
    decisionStatus: DecisionStatus.Pending,
    active: true,
    createdByEmail: authEmail,
    licencePlate,
    requestedProject: {
      create: requestedProject,
    },
  };

  let createRequest: PublicCloudCreateRequest;

  try {
    createRequest = await prisma.publicCloudRequest.create({
      data: request,
      include: {
        requestedProject: {
          include: {
            projectOwner: true,
            technicalLeads: true,
          },
        },
      },
    });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      throw new Error(e.message);
    }
    throw e;
  }

  // sendCreateRequestEmails(createRequest.requestedProject);

  return createRequest as PublicCloudCreateRequest;
};

export default publicCloudProjectRequest;
