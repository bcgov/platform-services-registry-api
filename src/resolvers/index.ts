import {
  QueryResolvers,
  // MutationResolvers,
  Resolvers,
} from '../__generated__/resolvers-types.js';
import Mutation from './mutations/index.js';
import Query from './queries/index.js';
import User from './user.js';
import Request from './request.js';
import PrivateCloudProject from './privateCloudProject.js';
import PublicCloudProject from './publicCloudProject.js';
import * as enums from './enum.js';

const resolvers = {
  ...Mutation,
  ...Query,
  ...enums,
  User,
  PrivateCloudProject: PrivateCloudProject,
  PrivateCloudRequest: Request,
  PublicCloudProject: PublicCloudProject,
  PublicCloudRequest: Request,
};

export default resolvers;
