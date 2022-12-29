import {
  QueryResolvers,
  MutationResolvers,
  Resolvers
} from "../__generated__/resolvers-types";
import * as userMutations from "./mutations/users.js";
import * as requestMutations from "./mutations/requests.js";
import * as userQueries from "./queries/users.js";
import User from "./user.js";
import * as enums from "./enum.js";

const mutations: MutationResolvers = {
  Mutation: {
    ...userMutations,
    ...requestMutations
  }
};

const queries: QueryResolvers = {
  Query: { ...userQueries }
};

const resolvers: Resolvers = { ...mutations, ...queries, ...enums, User };

export default resolvers;
