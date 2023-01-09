import {
  QueryResolvers,
  MutationResolvers,
  Resolvers
} from "../__generated__/resolvers-types.js";
import * as userMutations from "./mutations/users.js";
import privateCloudProjectRequest from "./mutations/privateCloudProjectRequest.js";
import privateCloudRequestDecision from "./mutations/privateCloudRequestDecision.js";
import privateCloudProjectEditRequest from "./mutations/privateCloudProjectEditRequest.js";
import * as userQueries from "./queries/users.js";
import * as requestQueries from "./queries/requests.js";
import * as projectQueries from "./queries/projects.js";
import User from "./user.js";
import PrivateCloudRequest from "./request.js";
import PrivateCloudProject from "./project.js";
import * as enums from "./enum.js";

const mutations: MutationResolvers = {
  Mutation: {
    ...userMutations,
    privateCloudProjectRequest,
    privateCloudRequestDecision,
    privateCloudProjectEditRequest
  }
};

const queries: QueryResolvers = {
  Query: { ...userQueries, ...requestQueries, ...projectQueries }
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