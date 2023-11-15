import {
  MutationResolvers,
  Mutation,
  ProjectStatus,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectRequestArgs,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions,
} from '../../../__generated__/resolvers-types.js';
import generateLicensePlate from '../../../utils/generateLicencePlate.js';
import { Prisma } from '@prisma/client';
import { sendCreateRequestEmails } from '../../../ches/emailHandlersPrivate.js';
import { transformCommonComponents } from '../../../utils/transformCommonComponents.js';

const privateCloudProjectRequest: MutationResolvers['privateCloudProjectRequest'] =
  async (
    _,
    args: MutationPrivateCloudProjectRequestArgs,
    { authRoles, authEmail, prisma }
  ) => {
    // Check if the user is allowed to create a project
    if (
      ![
        args.projectOwner.email,
        args.primaryTechnicalLead.email,
        args.secondaryTechnicalLead?.email,
      ].includes(authEmail) &&
      !authRoles.includes('admin')
    ) {
      throw new Error(
        'You need to assign yourself to this project in order to create it.'
      );
    }

    const licencePlate = generateLicensePlate();

    const defaultQuota = {
      cpu: DefaultCpuOptions.CpuRequest_0_5Limit_1_5,
      memory: DefaultMemoryOptions.MemoryRequest_2Limit_4,
      storage: DefaultStorageOptions.Storage_1,
    };

    let createRequest;

    const requestedProject = {
      name: args.name,
      description: args.description,
      cluster: args.cluster,
      ministry: args.ministry,
      status: ProjectStatus.Active,
      licencePlate: licencePlate,
      commonComponents: transformCommonComponents(args.commonComponents),
      productionQuota: defaultQuota,
      testQuota: defaultQuota,
      toolsQuota: defaultQuota,
      developmentQuota: defaultQuota,
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

    try {
      createRequest = await prisma.privateCloudRequest.create({
        data: {
          type: RequestType.Create,
          decisionStatus: DecisionStatus.Pending,
          active: true,
          createdByEmail: authEmail,
          licencePlate,
          userRequestedProject: {
            create: {
              ...requestedProject,
            },
          },
          requestedProject: {
            create: {
              ...requestedProject,
            },
          },
        },
        include: {
          requestedProject: {
            include: {
              projectOwner: true,
              primaryTechnicalLead: true,
              secondaryTechnicalLead: true,
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

    sendCreateRequestEmails(createRequest.requestedProject);

    return createRequest;
  };

export default privateCloudProjectRequest;
