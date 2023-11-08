import {
  MutationResolvers,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectEditRequestArgs,
  Cluster,
} from '../../../__generated__/resolvers-types.js';
import { Prisma, PrivateCloudRequest } from '@prisma/client';
import { sendPrivateCloudNatsMessage } from '../../../natsPubSub/index.js';
import { sendEditRequestEmails } from '../../../ches/emailHandlersPrivate.js';
import { subscribeUserToMessages } from '../../../mautic/index.js';
import { transformCommonComponents } from '../../../utils/transformCommonComponents.js';

const privateCloudProjectEditRequest: MutationResolvers['privateCloudProjectEditRequest'] =
  async (
    _,
    args: MutationPrivateCloudProjectEditRequestArgs,
    { authEmail, prisma, authRoles }
  ) => {
    // TODO: Add types
    // See this for prisma types with relations:
    // https://www.prisma.io/docs/concepts/components/prisma-client/advanced-type-safety/operating-against-partial-structures-of-model-types
    let editRequest;
    let decisionStatus: DecisionStatus;

    try {
      // Check if the project already has an active request
      const existingRequest: PrivateCloudRequest =
        await prisma.privateCloudRequest.findFirst({
          where: {
            AND: [{ projectId: args.projectId }, { active: true }],
          },
        });

      if (existingRequest !== null) {
        throw new Error(
          'This project already has an active request or it does not exist.'
        );
      }

      const project = await prisma.privateCloudProject.findUnique({
        where: {
          id: args.projectId,
        },
        include: {
          projectOwner: true,
          primaryTechnicalLead: true,
          secondaryTechnicalLead: true,
        },
      });

      // Check if the user is allowed to edit the project
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

      const requestedProject: Prisma.PrivateCloudRequestedProjectCreateInput = {
        name: args.name,
        description: args.description,
        cluster: project.cluster,
        ministry: args.ministry,
        status: project.status,
        licencePlate: project.licencePlate,
        commonComponents: transformCommonComponents(args.commonComponents),
        productionQuota: args.productionQuota,
        testQuota: args.testQuota,
        toolsQuota: args.toolsQuota,
        developmentQuota: args.developmentQuota,
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

      const isQuotaChanged = !(
        JSON.stringify(args.productionQuota) ===
          JSON.stringify(project.productionQuota) &&
        JSON.stringify(args.testQuota) === JSON.stringify(project.testQuota) &&
        JSON.stringify(args.developmentQuota) ===
          JSON.stringify(project.developmentQuota) &&
        JSON.stringify(args.toolsQuota) === JSON.stringify(project.toolsQuota)
      );

      // If any of the quotas are being changed, the request needs admin approval
      if (isQuotaChanged) {
        decisionStatus = DecisionStatus.Pending;
      } else {
        decisionStatus = DecisionStatus.Approved;
      }

      editRequest = await prisma.privateCloudRequest.create({
        data: {
          type: RequestType.Edit,
          decisionStatus: decisionStatus,
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
        },
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

      await sendEditRequestEmails(
        editRequest.project,
        editRequest.requestedProject
      );

      if (decisionStatus === DecisionStatus.Approved) {
        const users = [
          args.projectOwner,
          args.primaryTechnicalLead,
          args?.secondaryTechnicalLead,
        ].filter(Boolean);

        Promise.all(
          users.map((user) =>
            subscribeUserToMessages(user, requestedProject.cluster, 'Private')
          )
        );

        await sendPrivateCloudNatsMessage(
          editRequest.type,
          editRequest.requestedProject,
          editRequest.id,
          project
        );

        if (editRequest.requestedProject.cluster === Cluster.Gold) {
          const goldDrRequest = { ...editRequest };
          goldDrRequest.requestedProject.cluster = Cluster.Golddr;
          await sendPrivateCloudNatsMessage(
            goldDrRequest.type,
            goldDrRequest.requestedProject,
            goldDrRequest.id,
            project
          );
        }
      }
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new Error(
            'There is already an active request for this project.'
          );
        }
      }
      throw e;
    }

    return editRequest;
  };

export default privateCloudProjectEditRequest;
