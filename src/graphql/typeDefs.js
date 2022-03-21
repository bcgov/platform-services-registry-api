import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar DateTime
  scalar EmailAddress

  enum ProjectStatus {
    DRAFT
    SUBMITTED
    PENDING_APROVAL
    PROVISIONING
    PROVISIONED
    REJECTED
  }

  enum Ministry {
    AGRICULTURE
    HEALTH
  }

  enum Cluster {
    SILVER
    GOLD
  }

  enum Environment {
    PROD
    TEST
    DEV
    TOOLS
  }

  enum RequestType {
    CREATE
    EDIT
    DELETE
  }

  type Namespace {
    name: String!
    environment: Environment!
    cpuQuota: String!
    memoryQuota: String!
    storageQuota: String!
    snapshotQuota: String!
  }

  type Project {
    id: ID!
    name: String!
    archived: Boolean!
    created: DateTime!
    description: String!
    status: ProjectStatus!
    productOwner: User!
    technicalLeads: [User]!
    ministry: Ministry!
    cluster: Cluster!
    productionNamespace: Namespace!
    testNamespace: Namespace!
    developmentNamespace: Namespace!
    toolsNamespace: Namespace!
    requestHistory: [Request]!
  }

  input CreateProjectInput {
    name: String!
    description: String!
    productOwner: ID!
    technicalLeads: [ID!]!
    ministry: Ministry!
    cluster: Cluster!
  }

  input RequestedProjectChangeInput {
    name: String
    description: String
    status: ProjectStatus!
    productOwner: ID!
    technicalLeads: [ID]
    ministry: Ministry
    cluster: Cluster
    productionNamespace: Namespace
    testNamespace: Namespace
    developmentNamespace: Namespace
    toolsNamespace: Namespace
  }

  type Request {
    id: ID!
    creator: User!
    type: RequestType!
    active: Boolean!
    created: DateTime!
    updated: DateTime
    project: Project!
    requestHistory: [Request]!
    requestedProject: Project!
  }

  type Profile {
    email: String
    id: ID!
    user: User!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: EmailAddress!
    archived: Boolean!
    lastSeen: DateTime
    projects: [Project!]
    created: DateTime!
    ministry: Ministry
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: EmailAddress!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: EmailAddress
    archived: Boolean
    lastSeen: DateTime
  }

  type Query {
    hello: String
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!
    createProject(input: CreateProjectInput!): Project!
  }
`;

export default typeDefs;
