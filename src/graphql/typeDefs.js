import { gql } from "apollo-server-express";

const typeDefs = gql`
  directive @nonNullInput on FIELD_DEFINITION

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
    KLAB
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

  enum DefaultCpuOptions {
    CPU_REQUEST_0_5_LIMIT_1_5
    CPU_REQUEST_1_LIMIT_2
    CPU_REQUEST_2_LIMIT_4
    CPU_REQUEST_4_LIMIT_8
    CPU_REQUEST_8_LIMIT_16
    CPU_REQUEST_16_LIMIT_32
    CPU_REQUEST_32_LIMIT_64
  }

  enum DefaultMemoryOptions {
    MEMORY_REQUEST_2_LIMIT_4
    MEMORY_REQUEST_4_LIMIT_8
    MEMORY_REQUEST_8_LIMIT_16
    MEMORY_REQUEST_16_LIMIT_32
    MEMORY_REQUEST_32_LIMIT_64
    MEMORY_REQUEST_64_LIMIT_128
  }

  enum DefaultStorageOptions {
    STORAGE_1
    STORAGE_2
    STORAGE_4
    STORAGE_16
    STORAGE_32
    STORAGE_64
    STORAGE_124
    STORAGE_256
    STORAGE_512
  }

  input QuotaInput {
    cpu: DefaultCpuOptions
    memory: DefaultMemoryOptions
    storage: DefaultStorageOptions
  }

  input CustomQuotaInput {
    cpuRequests: Float
    cpuLimits: Float 
    memoryRequests: Int
    memoryLimits: Int
    storageBlock: Int
    storageFile: Int
    storageBackup: Int
    storageCapacity: Int
    storagePvcCount: Int
    snapshotCount: Int
  }

  type Quota {
    cpu: Cpu!
    memory: Memory!
    storage: Storage!
    snapshot: Snapshot!
  }

  type Cpu {
    requests: Float!
    limits: Float!
  }

  type Memory {
    requests: Int!
    limits: Int!
  }

  type Storage {
    block: Int!
    file: Int!
    backup: Int!
    capacity: Int!
    pvcCount: Int
  }

  type Snapshot {
    count: Int!
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
    productionQuota: Quota!
    testQuota: Quota!
    developmentQuota: Quota!
    toolsQuota: Quota!
    requestHistory: [Request]!
  }

  input ProjectMetaDataInput {
    name: String!
    description: String!
    projectOwner: EmailAddress!
    technicalLeads: [EmailAddress!]!
    ministry: Ministry!
    cluster: Cluster!
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
    activeRequests: [Request]!
    projectOwner: [Project]!
    technicalLead: [Project]!
    created: DateTime!
    ministry: Ministry
    githubId: String!
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: EmailAddress!
    ministry: Ministry
    githubId: String!
  }

  input SignUpInput {
    ministry: Ministry!
    githubId: String!
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
    users: [User!]!
    user(id: ID!): User
    usersByIds(ids: [ID!]!): [User!]!
    me: User @auth

    # This should all require admin privileges
    projects: [Project!]!
    privateCloudProjects: [PrivateCloudProject!]!
    privateCloudProject(projectId: ID!): PrivateCloudProject!

    # requests: [Request!]!
    privateCloudRequests: [Request!]!
    privateCloudActiveRequest(requestId: ID!): Request!
    privateCloudActiveRequests: [Request!]!
    privateCloudArchivedRequest(requestId: ID!): Request!

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
    # updateUser(input: UpdateUserInput!): User!

    createCustomPrivateCloudProjectRequest(
      metaData: ProjectMetaDataInput!
      productionQuota: CustomQuotaInput
      developmentQuota: CustomQuotaInput
      testQuota: CustomQuotaInput
      toolsQuota: CustomQuotaInput
    ): Request! @hasRole(role: "admin") @nonNullInput

    createPrivateCloudProjectRequest(
      metaData: ProjectMetaDataInput!
      productionQuota: QuotaInput
      developmentQuota: QuotaInput
      testQuota: QuotaInput
      toolsQuota: QuotaInput
    ): Request! @nonNullInput

    createCustomPrivateCloudProjectEditRequest(
      projectId: ID!
      metaData: ProjectMetaDataInput
      productionQuota: CustomQuotaInput
      developmentQuota: CustomQuotaInput
      testQuota: CustomQuotaInput
      toolsQuota: CustomQuotaInput
    ): Request! @nonNullInput

    createPrivateCloudProjectEditRequest(
      projectId: ID!
      metaData: ProjectMetaDataInput
      productionQuota: QuotaInput
      developmentQuota: QuotaInput
      testQuota: QuotaInput
      toolsQuota: QuotaInput
    ): Request!

    makePrivateCloudRequestDecision(
      input: MakeRequestDecisionInput!
    ): RequestStatus!
  }
`;

export default typeDefs;
