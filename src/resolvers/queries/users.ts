export const users = (_, __, { prisma }) => prisma.user.findMany();

export const user = (_, args, { prisma }) =>
  prisma.user.findUnique({
    where: {
      id: args.id
    }
  });

export const usersByIds = (_, args, { prisma }) =>
  prisma.user.findMany({
    where: {
      id: {
        in: args.ids
      }
    }
  });

export const userByEmail = (_, args, { prisma }) =>
  prisma.user.findUnique({
    where: {
      email: args.email
    }
  });
