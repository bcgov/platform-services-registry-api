import {
  CreateUserInput,
  MutationResolvers
} from "__generated__/resolvers-types";

export const createUser: MutationResolvers = (
  _,
  { input }: { input: CreateUserInput },
  { prisma }
) =>
  prisma.user.create({
    data: {
      email: input.email,
      ...input
    }
  });
