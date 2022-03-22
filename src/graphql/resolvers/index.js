import { GraphQLDateTime } from "graphql-scalars";
import {users, user, usersByIds} from "./Query/Users"
import {project, projects} from "./Query/Projects"
import createProject from "./Mutation/CreateProject";
import createUser from "./Mutation/CreateUser"
import Project from "./Project";
import User from "./User"
import Ministry from "./scalar/Ministry";
import Environment from "./scalar/Environment";
import ProjectStatus from "./scalar/ProjectStatus";

const resolvers = {
  Query: {
    users,
    user,
    usersByIds,
    project,
    projects
  },
  Mutation: {
    createUser,
    createProject
  },
  Project,
  User,
  DateTime: GraphQLDateTime,
  ProjectStatus,
  Ministry,
  Environment
};

export default resolvers;
