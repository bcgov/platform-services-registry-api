import {
  QueryResolvers,
  MutationResolvers,
  Resolvers
} from "../__generated__/resolvers-types";
import * as userMutations from "./mutations/users.js";
import privateCloudProjectRequest from "./mutations/privateCloudProjectRequest.js";
import privateCloudRequestDecision from "./mutations/privateCloudRequestDecision.js";
import * as userQueries from "./queries/users.js";
import * as requestQueries from "./queries/requests.js";
import User from "./user.js";
import PrivateCloudRequest from "./request.js";
import PrivateCloudProject from "./project.js";
import * as enums from "./enum.js";

const mutations: MutationResolvers = {
  Mutation: {
    ...userMutations,
    privateCloudProjectRequest,
    privateCloudRequestDecision
  }
};

const queries: QueryResolvers = {
  Query: { ...userQueries, ...requestQueries }
};

const resolvers: Resolvers = {
  ...mutations,
  ...queries,
  ...enums,
  User,
  PrivateCloudRequest,
  PrivateCloudProject
};

export default resolvers;
