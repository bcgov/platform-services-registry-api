import { QueryResolvers } from "__generated__/resolvers-types";

// Use the generated `QueryResolvers` type to type check our queries!
const queries: QueryResolvers = {
  Query: {
    allUsers: async (_, __, { prisma }) => {
      return await prisma.user.findMany();
    }
  }
};

export default queries;
