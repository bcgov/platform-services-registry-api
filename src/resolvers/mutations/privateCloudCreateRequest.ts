import {
  MutationResolvers,
  ProjectStatus,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectRequestArgs
} from "../../__generated__/resolvers-types.js";
import generateLicensePlate from "../../utils/generateLicencePlate.js";
import { defaultQuota } from "../../utils/defaultQuota.js";
import { Prisma } from "@prisma/client";
import { sendCreateRequestEmails } from "../../ches/emailHandlers.js";

const privateCloudProjectRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudProjectRequestArgs,
  { authRoles, authEmail, prisma }
) => {
  if (
    ![
      args.projectOwner.email,
      args.primaryTechnicalLead.email,
      args.secondaryTechnicalLead?.email
    ].includes(authEmail) &&
    !authRoles.includes("admin")
  ) {
    throw new Error(
      "You need to assign yourself to this project in order to create it."
    );
  }

  const licencePlate = generateLicensePlate();

  let createRequest;

  try {
    createRequest = await prisma.privateCloudRequest.create({
      data: {
        type: RequestType.Create,
        decisionStatus: DecisionStatus.Pending,
        active: true,
        createdByEmail: authEmail,
        requestedProject: {
          create: {
            name: args.name,
            description: args.description,
            cluster: args.cluster,
            ministry: args.ministry,
            status: ProjectStatus.Active,
            licencePlate: licencePlate,
            commonComponents: args.commonComponents,
            productionQuota: defaultQuota,
            testQuota: defaultQuota,
            toolsQuota: defaultQuota,
            developmentQuota: defaultQuota,
            projectOwner: {
              connectOrCreate: {
                where: {
                  email: args.projectOwner.email
                },
                create: args.projectOwner
              }
            },
            primaryTechnicalLead: {
              connectOrCreate: {
                where: {
                  email: args.primaryTechnicalLead.email
                },
                create: args.primaryTechnicalLead
              }
            },
            secondaryTechnicalLead: args.secondaryTechnicalLead
              ? {
                  connectOrCreate: {
                    where: {
                      email: args.secondaryTechnicalLead.email
                    },
                    create: args.secondaryTechnicalLead
                  }
                }
              : undefined
          }
        }
      },
      include: {
        requestedProject: {
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
      throw new Error(e.message);
    }
    throw e;
  }

  // sendCreateRequestEmails(createRequest.requestedProject);

  return createRequest;
};

export default privateCloudProjectRequest;
