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
    AEST
    AG
    AGRI
    ALC
    BCPC
    CITZ
    DBC
    EAO
    EDUC
    EMBC
    EMPR
    ENV
    FIN
    FLNR
    HLTH
    IRR
    JEDC
    LBR
    LDB
    MAH
    MCF
    MMHA
    PSA
    PSSG
    SDPR
    TCA
    TRAN
  }

  enum Cluster {
    CLAB
    KLAB
    SILVER
    GOLD
    GOLDDR
    KLAB2
    EMERALD
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

  enum CommonComponentsOptions {
    IMPLEMENTED
    PLANNING_TO_USE
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
    primaryTechnicalLead: User!
    secondaryTechnicalLead: User
    ministry: Ministry!
    requestHistory: [Request]
    activeEditRequest: Request
    count: Int
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
    primaryTechnicalLead: User!
    secondaryTechnicalLead: User
    ministry: Ministry!
    PublicCloudPlatform: PublicCloudPlatform!
    requestHistory: [Request]
    activeEditRequest: Request
    count: Int
  }

  type PrivateCloudProject implements Project {
    id: ID!
    name: String!
    licencePlate: ID!
    archived: Boolean!
    created: DateTime!
    createdBy: User!
    description: String!
    status: ProjectStatus!
    projectOwner: User!
    primaryTechnicalLead: User!
    secondaryTechnicalLead: User
    ministry: Ministry!
    cluster: Cluster!
    productionQuota: Quota!
    testQuota: Quota!
    developmentQuota: Quota!
    toolsQuota: Quota!
    requestHistory: [Request]!
    activeEditRequest: Request
    count: Int
    commonComponents: CommonComponents!
  }

  type CommonComponents {
    addressAndGeolocation: CommonComponentsOptions
    workflowManagement: CommonComponentsOptions
    formDesignAndSubmission: CommonComponentsOptions
    identityManagement: CommonComponentsOptions
    paymentServices: CommonComponentsOptions
    documentManagement: CommonComponentsOptions
    endUserNotificationAndSubscription: CommonComponentsOptions
    publishing: CommonComponentsOptions
    businessIntelligence: CommonComponentsOptions
    other: String
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
    requestedProject: Project
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: EmailAddress!
    archived: Boolean!
    lastSeen: DateTime
    privateCloudActiveRequests: [Request]!
    privateCloudProjectOwner: [Project]!
    privateCloudPrimaryTechnicalLead: [Project]!
    privateCloudSecondaryTechnicalLead: [Project]!
    created: DateTime!
    ministry: Ministry
    githubId: String
  }

  input ProjectMetaDataInput {
    name: String!
    description: String!
    projectOwner: EmailAddress!
    primaryTechnicalLead: EmailAddress!
    secondaryTechnicalLead: EmailAddress
    ministry: Ministry!
    cluster: Cluster!
  }

  input EditProjectMetaDataInput {
    name: String
    description: String
    projectOwner: EmailAddress
    primaryTechnicalLead: EmailAddress
    secondaryTechnicalLead: EmailAddress
    ministry: Ministry
    cluster: Cluster
  }

  input CommonComponentsInput {
    addressAndGeolocation: CommonComponentsOptions
    workflowManagement: CommonComponentsOptions
    formDesignAndSubmission: CommonComponentsOptions
    identityManagement: CommonComponentsOptions
    paymentServices: CommonComponentsOptions
    documentManagement: CommonComponentsOptions
    endUserNotificationAndSubscription: CommonComponentsOptions
    publishing: CommonComponentsOptions
    businessIntelligence: CommonComponentsOptions
    other: String
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

  input FilterPrivateCloudProjectsInput {
    ministry: Ministry
    cluster: Cluster
  }

  enum SortOrder {
    ASCENDING
    DESCENDING
  }

  type Query {
    users: [User!]! @hasRole(role: "admin")
    user(id: ID!): User @hasRole(role: "admin")
    usersByIds(ids: [ID!]!): [User!]! @hasRole(role: "admin")
    userByEmail(email: EmailAddress!): User
    me: User @auth

    privateCloudProjects: [PrivateCloudProject!]! @hasRole(role: "admin")

    privateCloudProjectsPaginated(
      offset: Int!
      limit: Int!
      filter: FilterPrivateCloudProjectsInput
      search: String
    ): [PrivateCloudProject!]! @hasRole(role: "admin")

    privateCloudProjectsCount(
      filter: FilterPrivateCloudProjectsInput
      search: String
    ): Int! @hasRole(role: "admin")

    privateCloudProject(projectId: ID!): PrivateCloudProject!
      @hasRole(role: "admin")

    privateCloudProjectsWithFilterSearch(
      filter: FilterPrivateCloudProjectsInput
      search: String
    ): [PrivateCloudProject!]! @hasRole(role: "admin")

    privateCloudProjectsById(projectIds: [ID!]): [PrivateCloudProject!]!
    userPrivateCloudProjects: [PrivateCloudProject!]! @auth
    userPrivateCloudProject(projectId: ID!): PrivateCloudProject! @auth
    userPrivateCloudProjectsById(projectIds: [ID!]): PrivateCloudProject! @auth

    privateCloudRequests: [Request!]! @hasRole(role: "admin")
    privateCloudActiveRequest(requestId: ID!): Request! @hasRole(role: "admin")
    privateCloudActiveRequests: [Request!]! @hasRole(role: "admin")
    privateCloudActiveRequestsById(requestIds: ID!): [Request!]!
      @hasRole(role: "admin")
    userPrivateCloudActiveRequests: [Request!]! @auth
    userPrivateCloudActiveRequest(requestId: ID!): Request! @auth
    userPrivateCloudActiveRequestsById(requestIds: [ID!]): Request! @auth

    privateCloudArchivedRequest(requestId: ID!): Request!
      @hasRole(role: "admin")
    privateCloudArchivedRequests: [Request!]! @hasRole(role: "admin")
    privateCloudArchivedRequestsById(requestIds: ID!): [Request!]!
      @hasRole(role: "admin")

    # Can also implement the above for a particular field, like ministry.. Could have a ministry admin role
  }

  type Mutation {
    signUp: User! @auth
    # userUpdateSelf()

    createUser(input: CreateUserInput!): User!
    # updateUser(input: UpdateUserInput!): User!

    privateCloudProjectRequest(
      metaData: ProjectMetaDataInput!
      commonComponents: CommonComponentsInput
    ): Request! @nonNullInput @auth

    privateCloudProjectEditRequest(
      projectId: ID!
      metaData: EditProjectMetaDataInput
      commonComponents: CommonComponentsInput
      productionQuota: QuotaInput
      developmentQuota: QuotaInput
      testQuota: QuotaInput
      toolsQuota: QuotaInput
    ): Request! @nonNullInput @auth

    customPrivateCloudProjectRequest(
      metaData: ProjectMetaDataInput!
      commonComponents: CommonComponentsInput!
      productionQuota: CustomQuotaInput
      developmentQuota: CustomQuotaInput
      testQuota: CustomQuotaInput
      toolsQuota: CustomQuotaInput
    ): Request! @hasRole(role: "admin") @nonNullInput

    customPrivateCloudProjectEditRequest(
      projectId: ID!
      metaData: EditProjectMetaDataInput
      commonComponents: CommonComponentsInput!
      productionQuota: CustomQuotaInput
      developmentQuota: CustomQuotaInput
      testQuota: CustomQuotaInput
      toolsQuota: CustomQuotaInput
    ): Request! @nonNullInput @hasRole(role: "admin")

    privateCloudProjectDeleteRequest(projectId: ID!): Request!

    makePrivateCloudRequestDecision(
      requestId: ID!
      decision: RequestDecision!
      projectId: ID
    ): RequestStatus! @hasRole(role: "admin")
  }
`;

export default typeDefs;
