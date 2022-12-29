import { User } from "__generated__/resolvers-types";

const User = {
  posts: async (user, _, { prisma }) => {
    return await prisma.post.findMany({
      where: {
        authorId: user.id
      }
    });
  }
};

export default User;
