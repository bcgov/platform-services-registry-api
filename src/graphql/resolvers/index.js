import { GraphQLDateTime } from "graphql-scalars";
import * as userQueries from "./Query/Users";
import * as projectQueries from "./Query/Projects";
import * as requestQueries from "./Query/Requests";
import customPrivateCloudProjectRequest from "./Mutation/CustomPrivateCloudProjectRequest";
import privateCloudProjectRequest from "./Mutation/PrivateCloudProjectRequest";
import user from "./Mutation/User";
import signUp from "./Mutation/SignUp";
import customPrivateCloudProjectEditRequest from "./Mutation/CustomPrivateCloudProjectEditRequest";
import privateCloudProjectEditRequest from "./Mutation/PrivateCloudProjectEditRequest"
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
    ...userQueries,
    ...projectQueries,
    ...requestQueries,
  },
  Mutation: {
    signUp,
    user,
    privateCloudProjectRequest,
    customPrivateCloudProjectRequest,
    privateCloudProjectEditRequest,
    customPrivateCloudProjectEditRequest,
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
