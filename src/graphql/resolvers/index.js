import { GraphQLDateTime } from "graphql-scalars";
import * as userQueries from "./Query/Users";
import * as projectQueries from "./Query/Projects";
import * as requestQueries from "./Query/Requests";
import customPrivateCloudProjectRequest from "./Mutation/privateCloud/CustomProjectRequest";
import privateCloudProjectRequest from "./Mutation/privateCloud/ProjectRequest";
import createUser from "./Mutation/CreateUser";
import signUp from "./Mutation/SignUp";
import customPrivateCloudProjectEditRequest from "./Mutation/privateCloud/CustomProjectEditRequest";
import privateCloudProjectEditRequest from "./Mutation/privateCloud/ProjectEditRequest";
import makePrivateCloudRequestDecision from "./Mutation/privateCloud/MakeRequestDecision";
import privateCloudProjectDeleteRequest from "./Mutation/privateCloud/DeleteRequest";
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
  DefaultStorageOptions
} from "./enum/QuotaOptions";
import Cluster from "./enum/Cluster";
import SortOrder from "./enum/SortOrder";

const resolvers = {
  Query: {
    ...userQueries,
    ...projectQueries,
    ...requestQueries
  },
  Mutation: {
    signUp,
    createUser,
    privateCloudProjectRequest,
    customPrivateCloudProjectRequest,
    privateCloudProjectEditRequest,
    customPrivateCloudProjectEditRequest,
    makePrivateCloudRequestDecision,
    privateCloudProjectDeleteRequest
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
  SortOrder,
  RequestDecision,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions
};

export default resolvers;
