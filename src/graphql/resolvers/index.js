import { GraphQLDateTime } from "graphql-scalars";
import { users, user, usersByIds, me } from "./Query/Users";
import {
  privateCloudProjects,
  privateCloudProject,
} from "./Query/Projects";
import {
  privateCloudRequests,
  privateCloudActiveRequest,
  privateCloudActiveRequests,
  privateCloudArchivedRequest,
} from "./Query/Requests";
import createCustomPrivateCloudProjectRequest from "./Mutation/CreateCustomPrivateCloudProjectRequest";
import createPrivateCloudProjectRequest from "./Mutation/CreatePrivateCloudProjectRequest"
import createUser from "./Mutation/CreateUser";
import signUp from "./Mutation/SignUp";
import createCustomPrivateCloudProjectEditRequest from "./Mutation/CreateCustomPrivateCloudProjectEditRequest";
import makePrivateCloudRequestDecision from "./Mutation/MakePrivateCloudRequestDecision";
import PrivateCloudProject from "./PrivateCloudProject";
import User from "./User";
import Project from "./Project";
import Request from "./Request";
import Environment from "./enum/Environment";
import RequestStatus from "./enum/RequestStatus";
import ProjectStatus from "./enum/ProjectStatus";
import RequestType from "./enum/RequestType";
import PublicCloudPlatform from "./enum/PublicCloudPlatform";
import Platform from "./enum/Platform";
import RequestDecision from "./enum/RequestDecision";
import {
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions,
} from "./enum/QuotaOptions";
import Cluster from "./enum/Cluster";

const resolvers = {
  Query: {
    users,
    user,
    usersByIds,
    me,
    privateCloudProjects,
    privateCloudProject,
    privateCloudRequests,
    privateCloudActiveRequest,
    privateCloudActiveRequests,
    privateCloudArchivedRequest,
  },
  Mutation: {
    signUp,
    createUser,
    createPrivateCloudProjectRequest,
    createCustomPrivateCloudProjectRequest,
    createCustomPrivateCloudProjectEditRequest,
    makePrivateCloudRequestDecision,
  },
  PrivateCloudProject,
  User,
  DateTime: GraphQLDateTime,
  ProjectStatus,
  Project,
  Request,
  RequestStatus,
  RequestType,
  Environment,
  PublicCloudPlatform,
  Platform,
  Cluster,
  RequestDecision,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions,
};

export default resolvers;
