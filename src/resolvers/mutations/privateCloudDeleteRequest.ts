import {
  MutationResolvers,
  ProjectStatus,
  RequestType,
  DecisionStatus,
  MutationPrivateCloudProjectDeleteRequestArgs
} from "../../__generated__/resolvers-types.js";

const privateCloudProjectDeleteRequest: MutationResolvers = async (
  _,
  args: MutationPrivateCloudProjectDeleteRequestArgs,
  { authRoles, authEmail, prisma }
) => {
  const project = await prisma.privateCloudProject.findUnique({
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
        ]
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

  const createRequest = await prisma.privateCloudRequest.create({
    data: {
      type: RequestType.Delete,
      decisionStatus: DecisionStatus.Pending,
      active: true,
      createdByEmail: authEmail,
      requestedProject: {
        create: project
      },
      project: {
        connect: {
          id: args.projectId
        }
      }
    }
  });

  return createRequest;
};

export default privateCloudProjectDeleteRequest;
