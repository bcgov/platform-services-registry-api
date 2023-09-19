import {
  QueryResolvers,
  MutationResolvers,
  Resolvers,
} from '../../__generated__/resolvers-types.js';

import privateCloudProjectRequest from './privateCloud/createRequest.js';
import privateCloudRequestDecision from './privateCloud/requestDecision.js';
import privateCloudProjectEditRequest from './privateCloud/editRequest.js';
import privateCloudProjectDeleteRequest from './privateCloud/deleteRequest.js';
import privateCloudReProvisionRequest from './privateCloud/reProvisionRequest.js';
import privateCloudReProvisionProject from './privateCloud/reProvisionProject.js';

import publicCloudProjectRequest from './publicCloud/createRequest.js';
import publicCloudRequestDecision from './publicCloud/requestDecision.js';
import publicCloudProjectEditRequest from './publicCloud/editRequest.js';
import publicCloudProjectDeleteRequest from './publicCloud/deleteRequest.js';

import { createUser } from './users.js';

export default {
  Mutation: {
    privateCloudProjectRequest,
    privateCloudRequestDecision,
    privateCloudProjectEditRequest,
    privateCloudProjectDeleteRequest,
    privateCloudReProvisionRequest,
    privateCloudReProvisionProject,
    publicCloudProjectRequest,
    publicCloudRequestDecision,
    publicCloudProjectEditRequest,
    publicCloudProjectDeleteRequest,
    createUser,
  },
};
