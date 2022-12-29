import { MutationResolvers } from "__generated__/resolvers-types";

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  Mutation: {
    // Below, we mock adding a new book. Our data set is static for this
    // example, so we won't actually modify our data.
    createUser: async (_, input, { prisma }) => {
      const { name, email, posts } = input.data;
      const postData = posts?.map((post) => {
        return { title: post.title, content: post.content || undefined }
      })
      console.log(posts)
      const result = await prisma.user.create({
        data: {
          name,
          email,
          posts: {
            create: postData
          }
        }
      });

      console.log(result)
      return result;
    }
  }
};

export default mutations;
