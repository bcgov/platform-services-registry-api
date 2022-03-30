import { GraphQLDateTime } from "graphql-scalars";
import {users, user, usersByIds} from "./Query/Users"
import {privateCloudProjects, privateCloudProject, publicCloudProjects, publicCloudProject, projects} from "./Query/Projects"
import createPrivateCloudProject from "./Mutation/CreatePrivateCloudProject";
import createUser from "./Mutation/CreateUser"
import PrivateCloudProject from "./PrivateCloudProject";
import User from "./User"
import Project from "./Project"
import Ministry from "./scalar/Ministry";
import Environment from "./scalar/Environment";
import ProjectStatus from "./scalar/ProjectStatus";
import Platform from "./scalar/Platform"

const resolvers = {
  Query: {
    users,
    user,
    usersByIds,
    privateCloudProjects,
    privateCloudProject,
    publicCloudProjects,
    publicCloudProject,
    projects
  },
  Mutation: {
    createUser,
    createPrivateCloudProject
  },
  PrivateCloudProject,
  User,
  DateTime: GraphQLDateTime,
  ProjectStatus,
  Project,
  Ministry,
  Environment,
  Platform
};

export default resolvers;
