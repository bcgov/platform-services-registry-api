import {
  QueryResolvers,
  UserResolvers,
  User
} from "__generated__/resolvers-types";

export const users: UserResolvers = async (_, __, { prisma }) => {
  console.log(await prisma.user.findMany())
  return await prisma.user.findMany();
};
