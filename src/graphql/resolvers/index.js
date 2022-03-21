import { GraphQLDateTime } from "graphql-scalars";
import {users, user} from "./Query/Users"
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
    user
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
