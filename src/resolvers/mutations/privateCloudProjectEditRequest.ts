import {
  ProjectMetaDataInput,
  CommonComponentsInput,
  MutationResolvers,
  CreateUserInput,
  QuotaInput
} from "__generated__/resolvers-types";
import { RequestType, RequestStatus } from "../enum.js";
import mergeProjects from "../helpers/mergeProjects.js";

interface argsValue {
  metaData: ProjectMetaDataInput;
  commonComponents: CommonComponentsInput;
  projectOwner: CreateUserInput;
  primaryTechnicalLead: CreateUserInput;
  secondaryTechnicalLead: CreateUserInput;
  productionQuota: QuotaInput;
  testQuota: QuotaInput;
  toolsQuota: QuotaInput;
  developmentQuota: QuotaInput;
}

const privateCloudProjectEditRequest: MutationResolvers = async (
  _,
  args,
  { authEmail, prisma }
) => {
  const existingRequest = await prisma.privateCloudRequest.findFirst({
    where: {
      AND: [
        { id: args.requestId },
        { status: RequestStatus.APPROVED },
        { active: true }
      ]
    }
  });

  if (existingRequest !== null) {
    throw new Error("There is already an active request for this project.");
  }

  const users = [
    args.projectOwner,
    args.primaryTechnicalLead,
    args.secondaryTechnicalLead
  ].filter(Boolean);

  // Create users if they don't exist
  if (users.length > 0) {
    try {
      await prisma.user.createMany({
        data: users
      });
    } catch (e) {
      console.log(e);
    }
  }

  const {
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead,
    ...project
  } = await prisma.privateCloudProject.findUnique({
    where: {
      id: args.projectId
    },
    include: {
      projectOwner: true,
      primaryTechnicalLead: true,
      secondaryTechnicalLead: true
    }
  });

  const requestedProject = mergeProjects(project, args, {
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead
  });

  const editRequest = await prisma.privateCloudRequest.create({
    data: {
      type: RequestType.EDIT,
      status: RequestStatus.PENDING,
      active: true,
      createdByEmail: authEmail,
      project: {
        connect: {
          id: args.projectId
        }
      },
      projectOwner: {
        connect: {
          id: project.projectOwnerId
        }
      },
      primaryTechnicalLead: {
        connect: {
          id: project.primaryTechnicalLeadId
        }
      },
      secondaryTechnicalLead: project.secondaryTechnicalLeadId
        ? {
            connect: {
              id: project.secondaryTechnicalLeadId
            }
          }
        : undefined,
      requestedProject: requestedProject
    }
  });

  return editRequest;
};

export default privateCloudProjectEditRequest;
