import { gql } from "apollo-server-express";

const typeDefs = gql`
  scalar DateTime
  scalar EmailAddress

  enum ProjectStatus {
    CREATE_REQUEST
    ACTIVE
    INACTIVE
  }

  enum RequestStatus {
    PENDING_DECISION
    APPROVED
    REJECTED
  }

  enum RequestDecision {
    APPROVE
    REJECT
  }

  enum RequestType {
    CREATE
    EDIT
    DELETE
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
    PRODUCTION
    TEST
    DEVELOPMENT
    TOOLS
  }

  enum Platform {
    PRIVATE_CLOUD
    PUBLIC_CLOUD
  }

  enum PublicCloudPlatform {
    GOOGLE
    AWS
  }

  type Namespace {
    cpuQuota: String!
    memoryQuota: String!
    storageQuota: String!
    snapshotQuota: String!
  }

  interface Project {
    id: ID!
    name: String!
    archived: Boolean!
    created: DateTime!
    createdBy: User!
    description: String!
    status: ProjectStatus!
    projectOwner: User!
    technicalLeads: [User]!
    ministry: Ministry!
    requestHistory: [Request]
  }

  # NOTE!!: It is very possible that PublicCloudProject is too general,
  # May need to create a new project type for each platform e.g
  # GoogleCloudProject, AWSProject e.t.c (implements Project)
  type PublicCloudProject implements Project {
    id: ID!
    name: String!
    archived: Boolean!
    created: DateTime!
    createdBy: User!
    description: String!
    status: ProjectStatus!
    projectOwner: User!
    technicalLeads: [User]!
    ministry: Ministry!
    PublicCloudPlatform: PublicCloudPlatform!
    requestHistory: [Request]
  }

  type PrivateCloudProject implements Project {
    id: ID!
    name: String!
    archived: Boolean!
    created: DateTime!
    createdBy: User!
    description: String!
    status: ProjectStatus!
    projectOwner: User!
    technicalLeads: [User]!
    ministry: Ministry!
    cluster: Cluster!
    productionNamespace: Namespace!
    testNamespace: Namespace!
    developmentNamespace: Namespace!
    toolsNamespace: Namespace!
    requestHistory: [Request]!
  }

  # createdBy: ID! # maybe id OR email, BETTER: should get user id from auth token, then remove form here

  input CreatePrivateCloudProjectInput {
    name: String!
    description: String!
    projectOwner: EmailAddress!
    technicalLeads: [EmailAddress!]!
    ministry: Ministry!
    cluster: Cluster!
    productionCpuQuota: String = "test-cpu-quota"
    productionMemoryQuota: String = "test-memory-quota"
    productionStorageQuota: String = "test-storage-quota"
    productionSnapshotQuota: String = "test-snapshot-quota"
    testCpuQuota: String = "test-cpu-quota"
    testMemoryQuota: String = "test-memory-quota"
    testStorageQuota: String = "test-storage-quota"
    testSnapshotQuota: String = "test-snapshot-quota"
    developmentCpuQuota: String = "test-cpu-quota"
    developmentMemoryQuota: String = "test-memory-quota"
    developmentStorageQuota: String
    "test-storage-quota"
    developmentSnapshotQuota: String = "test-snapshot-quota"
    toolsCpuQuota: String = "test-cpu-quota"
    toolsnMemoryQuota: String = "test-memory-quota"
    toolsStorageQuota: String = "test-storage-quota"
    toolsSnapshotQuota: String = "test-snapshot-quota"
  }

  input UpdatePrivateCloudProjectMetaDataInput {
    name: String
    description: String
    projectOwner: EmailAddress
    technicalLeads: [EmailAddress!]
    ministry: Ministry
  }

  input UpdatePrivateCloudProjectQuotaInput {
    cluster: Cluster
    productionCpuQuota: String
    productionMemoryQuota: String
    productionStorageQuota: String
    productionSnapshotQuota: String
    testCpuQuota: String
    testMemoryQuota: String
    testStorageQuota: String
    testSnapshotQuota: String
    developmenCpuQuota: String
    developmenMemoryQuota: String
    developmenStorageQuota: String
    developmenSnapshotQuota: String
    toolsCpuQuota: String
    toolsnMemoryQuota: String
    toolsStorageQuota: String
    toolsSnapshotQuota: String
  }

  type Request {
    id: ID!
    createdBy: User!
    decisionMaker: User
    type: RequestType!
    status: RequestStatus!
    active: Boolean!
    created: DateTime!
    decisionDate: DateTime
    project: Project
    requestedProject: Project!
  }

  input MakeRequestDecisionInput {
    decision: RequestDecision!
    request: ID!
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: EmailAddress!
    archived: Boolean!
    lastSeen: DateTime
    projectRequests: [Request]!
    projectOwner: [Project]!
    technicalLead: [Project]!
    created: DateTime!
    ministry: Ministry
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: EmailAddress!
    ministry: Ministry
  }

  input SignUpInput {
    firstName: String!
    lastName: String!
    ministry: Ministry
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: EmailAddress
    archived: Boolean
    lastSeen: DateTime
    projectOwner: [ID!]
    technicalLead: [ID!]
  }

  type Query {
    users: [User!]! @auth
    user(id: ID!): User
    usersByIds(ids: [ID!]!): [User!]!
    me: User @auth

    # This should all require admin privileges
    projects: [Project!]!
    privateCloudProjects: [PrivateCloudProject!]!
    privateCloudProject(projectId: ID!): PrivateCloudProject!
    publicCloudProjects: [PublicCloudProject!]!
    publicCloudProject(projectId: ID!): PublicCloudProject

    requests: [Request!]!
    privateCloudRequests: [Request!]!
    privateCloudRequest(requestId: ID!): Request!
    publicCloudRequests: [Request!]!
    publicCloudRequest(requestId: ID!): Request!

    # Need to implement the above but for a user
    userProjects: [Project!]!
    userPrivateCloudProjects: [PrivateCloudProject!]!
    userPrivateCloudProject(projectId: ID!): PrivateCloudProject!

    userRequests: [Request!]!
    userPrivateCloudRequests: [Request!]!
    userPrivateCloudRequest(requestId: ID!): Request!

    # Can also implement the above for a particular field, like ministry.. Could have a ministry admin role
  }

  type Mutation {
    signUp(input: SignUpInput!): User! @auth
    # userUpdateSelf()

    createUser(input: CreateUserInput!): User!
    updateUser(input: UpdateUserInput!): User!

    createPrivateCloudProjectRequest(input: CreatePrivateCloudProjectInput!): Request! @auth
    createPrivateCloudProjectEditRequest(
      id: ID!
      metaData: UpdatePrivateCloudProjectMetaDataInput
      quota: UpdatePrivateCloudProjectQuotaInput!
    ): Request!
    makePrivateCloudRequestDecision(input: MakeRequestDecisionInput!): Request!
  }
`;

export default typeDefs;
