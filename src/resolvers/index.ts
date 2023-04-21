import {
  QueryResolvers,
  MutationResolvers,
  Resolvers,
} from '../__generated__/resolvers-types.js';
import * as userMutations from './mutations/users.js';
import privateCloudProjectRequest from './mutations/privateCloud/createRequest.js';
import privateCloudRequestDecision from './mutations/privateCloud/requestDecision.js';
import privateCloudProjectEditRequest from './mutations/privateCloud/editRequest.js';
import privateCloudProjectDeleteRequest from './mutations/privateCloud/deleteRequest.js';
import privateCloudReProvisionRequest from './mutations/privateCloud/reProvisionRequest.js';
import privateCloudReProvisionProject from './mutations/privateCloud/reProvisionProject.js';
import * as userQueries from './queries/users.js';
import * as requestQueries from './queries/requests.js';
import * as projectQueries from './queries/privateCloud/projects.js';
import User from './user.js';
import Request from './request.js';
import Project from './project.js';
import * as enums from './enum.js';

const mutations: MutationResolvers = {
  Mutation: {
    ...userMutations,
    privateCloudProjectRequest,
    privateCloudRequestDecision,
    privateCloudProjectEditRequest,
    privateCloudProjectDeleteRequest,
    privateCloudReProvisionRequest,
    privateCloudReProvisionProject,
  },
};

const queries: QueryResolvers = {
  Query: { ...userQueries, ...requestQueries, ...projectQueries },
};

const resolvers: Resolvers = {
  ...mutations,
  ...queries,
  ...enums,
  User,
  PrivateCloudRequest: Request,
  PrivateCloudProject: Project,
  PublicCloudProject: Project,
  PublicCloudRequest: Request,
};

export default resolvers;
