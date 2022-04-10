import { GraphQLDateTime } from "graphql-scalars";
import { users, user, usersByIds } from "./Query/Users";
import {
  privateCloudProjects,
  privateCloudProject,
  publicCloudProjects,
  publicCloudProject,
  projects,
} from "./Query/Projects";
import {
  privateCloudRequests,
  privateCloudRequest,
  publicCloudRequests,
  publicCloudRequest,
  requests,
} from "./Query/Requests";
import createPrivateCloudProject from "./Mutation/CreatePrivateCloudProject";
import createUser from "./Mutation/CreateUser";
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

const resolvers = {
  Query: {
    users,
    user,
    usersByIds,
    privateCloudProjects,
    privateCloudProject,
    publicCloudProjects,
    publicCloudProject,
    projects,
    privateCloudRequests,
    privateCloudRequest,
    publicCloudRequests,
    publicCloudRequest,
    requests,
  },
  Mutation: {
    createUser,
    createPrivateCloudProject,
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
  Platform
};

export default resolvers;
