import {
  QueryResolvers,
  MutationResolvers,
  Resolvers
} from "../__generated__/resolvers-types";
import * as userMutations from "./mutations/users.js";
import { privateCloudProjectRequest } from "./mutations/privateCloudProjectRequest.js";
import * as userQueries from "./queries/users.js";
import * as requestQueries from "./queries/requests.js";
import User from "./user.js";
import PrivateCloudRequest from "./request.js";
import * as enums from "./enum.js";

const mutations: MutationResolvers = {
  Mutation: {
    ...userMutations,
    privateCloudProjectRequest
  }
};

const queries: QueryResolvers = {
  Query: { ...userQueries, ...requestQueries }
};

const resolvers: Resolvers = { ...mutations, ...queries, ...enums, User, PrivateCloudRequest };

export default resolvers;
