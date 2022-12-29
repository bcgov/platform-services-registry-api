import {
  QueryResolvers,
  UserResolvers,
  User
} from "__generated__/resolvers-types";

export const users: UserResolvers = (_, __, { prisma }) =>
  prisma.user.findMany();
