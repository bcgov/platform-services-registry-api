import { GraphQLDateTime } from "graphql-scalars";
import { users, user, usersByIds, me } from "./Query/Users";
import {
  privateCloudProjects,
  privateCloudProject,
  projects,
} from "./Query/Projects";
import {
  privateCloudRequests,
  privateCloudActiveRequest,
  privateCloudArchivedRequest,
} from "./Query/Requests";
import createCustomPrivateCloudProjectRequest from "./Mutation/CreateCustomPrivateCloudProjectRequest";
import createPrivateCloudProjectRequest from "./Mutation/CreatePrivateCloudProjectRequest"
import createUser from "./Mutation/CreateUser";
import signUp from "./Mutation/SignUp";
import createPrivateCloudProjectEditRequest from "./Mutation/CreatePrivateCloudProjectEditRequest";
import makePrivateCloudRequestDecision from "./Mutation/MakePrivateCloudRequestDecision";
import PrivateCloudProject from "./PrivateCloudProject";
import User from "./User";
import Project from "./Project";
import Request from "./Request";
import Ministry from "./enum/Ministry";
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

const resolvers = {
  Query: {
    users,
    user,
    usersByIds,
    me,
    privateCloudProjects,
    privateCloudProject,
    projects,
    privateCloudRequests,
    privateCloudActiveRequest,
    privateCloudArchivedRequest,
  },
  Mutation: {
    signUp,
    createUser,
    createPrivateCloudProjectRequest,
    createCustomPrivateCloudProjectRequest,
    createPrivateCloudProjectEditRequest,
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
  Ministry,
  Environment,
  PublicCloudPlatform,
  Platform,
  RequestDecision,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions,
};

export default resolvers;
