import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ContextValue } from '../index';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
};

export enum Cluster {
  Clab = 'CLAB',
  Emerald = 'EMERALD',
  Gold = 'GOLD',
  Golddr = 'GOLDDR',
  Klab = 'KLAB',
  Klab2 = 'KLAB2',
  Silver = 'SILVER'
}

export type CommonComponents = {
  __typename?: 'CommonComponents';
  addressAndGeolocation?: Maybe<CommonComponentsOptions>;
  businessIntelligence?: Maybe<CommonComponentsOptions>;
  documentManagement?: Maybe<CommonComponentsOptions>;
  endUserNotificationAndSubscription?: Maybe<CommonComponentsOptions>;
  formDesignAndSubmission?: Maybe<CommonComponentsOptions>;
  identityManagement?: Maybe<CommonComponentsOptions>;
  other?: Maybe<Scalars['String']>;
  paymentServices?: Maybe<CommonComponentsOptions>;
  publishing?: Maybe<CommonComponentsOptions>;
  workflowManagement?: Maybe<CommonComponentsOptions>;
};

export type CommonComponentsInput = {
  addressAndGeolocation?: InputMaybe<CommonComponentsOptions>;
  businessIntelligence?: InputMaybe<CommonComponentsOptions>;
  documentManagement?: InputMaybe<CommonComponentsOptions>;
  endUserNotificationAndSubscription?: InputMaybe<CommonComponentsOptions>;
  formDesignAndSubmission?: InputMaybe<CommonComponentsOptions>;
  identityManagement?: InputMaybe<CommonComponentsOptions>;
  other?: InputMaybe<Scalars['String']>;
  paymentServices?: InputMaybe<CommonComponentsOptions>;
  publishing?: InputMaybe<CommonComponentsOptions>;
  workflowManagement?: InputMaybe<CommonComponentsOptions>;
};

export enum CommonComponentsOptions {
  Implemented = 'IMPLEMENTED',
  PlanningToUse = 'PLANNING_TO_USE'
}

export type CreateUserInput = {
  email: Scalars['EmailAddress'];
  firstName: Scalars['String'];
  githubId: Scalars['String'];
  lastName: Scalars['String'];
  ministry?: InputMaybe<Ministry>;
};

export type CustomQuotaInput = {
  cpuLimits?: InputMaybe<Scalars['Float']>;
  cpuRequests?: InputMaybe<Scalars['Float']>;
  memoryLimits?: InputMaybe<Scalars['Int']>;
  memoryRequests?: InputMaybe<Scalars['Int']>;
  snapshotCount?: InputMaybe<Scalars['Int']>;
  storageBackup?: InputMaybe<Scalars['Int']>;
  storageBlock?: InputMaybe<Scalars['Int']>;
  storageCapacity?: InputMaybe<Scalars['Int']>;
  storageFile?: InputMaybe<Scalars['Int']>;
  storagePvcCount?: InputMaybe<Scalars['Int']>;
};

export enum DefaultCpuOptions {
  CpuRequest_0_5Limit_1_5 = 'CPU_REQUEST_0_5_LIMIT_1_5',
  CpuRequest_1Limit_2 = 'CPU_REQUEST_1_LIMIT_2',
  CpuRequest_2Limit_4 = 'CPU_REQUEST_2_LIMIT_4',
  CpuRequest_4Limit_8 = 'CPU_REQUEST_4_LIMIT_8',
  CpuRequest_8Limit_16 = 'CPU_REQUEST_8_LIMIT_16',
  CpuRequest_16Limit_32 = 'CPU_REQUEST_16_LIMIT_32',
  CpuRequest_32Limit_64 = 'CPU_REQUEST_32_LIMIT_64'
}

export enum DefaultMemoryOptions {
  MemoryRequest_2Limit_4 = 'MEMORY_REQUEST_2_LIMIT_4',
  MemoryRequest_4Limit_8 = 'MEMORY_REQUEST_4_LIMIT_8',
  MemoryRequest_8Limit_16 = 'MEMORY_REQUEST_8_LIMIT_16',
  MemoryRequest_16Limit_32 = 'MEMORY_REQUEST_16_LIMIT_32',
  MemoryRequest_32Limit_64 = 'MEMORY_REQUEST_32_LIMIT_64',
  MemoryRequest_64Limit_128 = 'MEMORY_REQUEST_64_LIMIT_128'
}

export enum DefaultStorageOptions {
  Storage_1 = 'STORAGE_1',
  Storage_2 = 'STORAGE_2',
  Storage_4 = 'STORAGE_4',
  Storage_16 = 'STORAGE_16',
  Storage_32 = 'STORAGE_32',
  Storage_64 = 'STORAGE_64',
  Storage_124 = 'STORAGE_124',
  Storage_256 = 'STORAGE_256',
  Storage_512 = 'STORAGE_512'
}

export type EditProjectMetaDataInput = {
  cluster?: InputMaybe<Cluster>;
  description?: InputMaybe<Scalars['String']>;
  ministry?: InputMaybe<Ministry>;
  name?: InputMaybe<Scalars['String']>;
  primaryTechnicalLeadEmail?: InputMaybe<Scalars['EmailAddress']>;
  projectOwnerEmail?: InputMaybe<Scalars['EmailAddress']>;
  secondaryTechnicalLeadEmail?: InputMaybe<Scalars['EmailAddress']>;
};

export enum Environment {
  Development = 'DEVELOPMENT',
  Production = 'PRODUCTION',
  Test = 'TEST',
  Tools = 'TOOLS'
}

export type FilterPrivateCloudProjectsInput = {
  cluster?: InputMaybe<Cluster>;
  ministry?: InputMaybe<Ministry>;
};

export enum Ministry {
  Aest = 'AEST',
  Ag = 'AG',
  Agri = 'AGRI',
  Alc = 'ALC',
  Bcpc = 'BCPC',
  Citz = 'CITZ',
  Dbc = 'DBC',
  Eao = 'EAO',
  Educ = 'EDUC',
  Embc = 'EMBC',
  Empr = 'EMPR',
  Env = 'ENV',
  Fin = 'FIN',
  Flnr = 'FLNR',
  Hlth = 'HLTH',
  Irr = 'IRR',
  Jedc = 'JEDC',
  Lbr = 'LBR',
  Ldb = 'LDB',
  Mah = 'MAH',
  Mcf = 'MCF',
  Mmha = 'MMHA',
  Psa = 'PSA',
  Pssg = 'PSSG',
  Sdpr = 'SDPR',
  Tca = 'TCA',
  Tran = 'TRAN'
}

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  customPrivateCloudProjectEditRequest: PrivateCloudRequest;
  customPrivateCloudProjectRequest: PrivateCloudRequest;
  makePrivateCloudRequestDecision: RequestStatus;
  privateCloudProjectDeleteRequest: PrivateCloudRequest;
  privateCloudProjectEditRequest: PrivateCloudRequest;
  privateCloudProjectRequest: PrivateCloudRequest;
  signUp: User;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationCustomPrivateCloudProjectEditRequestArgs = {
  commonComponents: CommonComponentsInput;
  developmentQuota?: InputMaybe<CustomQuotaInput>;
  metaData?: InputMaybe<EditProjectMetaDataInput>;
  productionQuota?: InputMaybe<CustomQuotaInput>;
  projectId: Scalars['ID'];
  testQuota?: InputMaybe<CustomQuotaInput>;
  toolsQuota?: InputMaybe<CustomQuotaInput>;
};


export type MutationCustomPrivateCloudProjectRequestArgs = {
  commonComponents: CommonComponentsInput;
  developmentQuota?: InputMaybe<CustomQuotaInput>;
  metaData: ProjectMetaDataInput;
  productionQuota?: InputMaybe<CustomQuotaInput>;
  testQuota?: InputMaybe<CustomQuotaInput>;
  toolsQuota?: InputMaybe<CustomQuotaInput>;
};


export type MutationMakePrivateCloudRequestDecisionArgs = {
  decision: RequestDecision;
  requestId: Scalars['ID'];
};


export type MutationPrivateCloudProjectDeleteRequestArgs = {
  projectId: Scalars['ID'];
};


export type MutationPrivateCloudProjectEditRequestArgs = {
  commonComponents?: InputMaybe<CommonComponentsInput>;
  developmentQuota?: InputMaybe<QuotaInput>;
  metaData?: InputMaybe<EditProjectMetaDataInput>;
  productionQuota?: InputMaybe<QuotaInput>;
  projectId: Scalars['ID'];
  testQuota?: InputMaybe<QuotaInput>;
  toolsQuota?: InputMaybe<QuotaInput>;
};


export type MutationPrivateCloudProjectRequestArgs = {
  commonComponents: CommonComponentsInput;
  metaData: ProjectMetaDataInput;
  primaryTechnicalLead?: InputMaybe<CreateUserInput>;
  projectOwner?: InputMaybe<CreateUserInput>;
  secondaryTechnicalLead?: InputMaybe<CreateUserInput>;
};

export enum Platform {
  PrivateCloud = 'PRIVATE_CLOUD',
  PublicCloud = 'PUBLIC_CLOUD'
}

export type PrivateCloudProject = {
  __typename?: 'PrivateCloudProject';
  activeEditRequest?: Maybe<PrivateCloudRequest>;
  archived: Scalars['Boolean'];
  cluster: Cluster;
  commonComponents: CommonComponents;
  count?: Maybe<Scalars['Int']>;
  created: Scalars['DateTime'];
  createdBy: User;
  description: Scalars['String'];
  developmentQuota: Quota;
  id: Scalars['ID'];
  licencePlate: Scalars['ID'];
  ministry: Ministry;
  name: Scalars['String'];
  primaryTechnicalLead: User;
  productionQuota: Quota;
  projectOwner: User;
  requestHistory: Array<Maybe<PrivateCloudRequest>>;
  secondaryTechnicalLead?: Maybe<User>;
  status: ProjectStatus;
  testQuota: Quota;
  toolsQuota: Quota;
};

export type PrivateCloudRequest = {
  __typename?: 'PrivateCloudRequest';
  active: Scalars['Boolean'];
  created: Scalars['DateTime'];
  createdBy: User;
  decisionDate?: Maybe<Scalars['DateTime']>;
  decisionMaker?: Maybe<User>;
  id: Scalars['ID'];
  project?: Maybe<PrivateCloudProject>;
  requestedProject?: Maybe<PrivateCloudProject>;
  status: RequestStatus;
  type: RequestType;
};

export type ProjectMetaDataInput = {
  cluster: Cluster;
  description: Scalars['String'];
  ministry: Ministry;
  name: Scalars['String'];
  primaryTechnicalLeadEmail: Scalars['EmailAddress'];
  projectOwnerEmail: Scalars['EmailAddress'];
  secondaryTechnicalLeadEmail?: InputMaybe<Scalars['EmailAddress']>;
};

export enum ProjectStatus {
  Active = 'ACTIVE',
  CreateRequest = 'CREATE_REQUEST',
  Inactive = 'INACTIVE'
}

export enum PublicCloudPlatform {
  Aws = 'AWS',
  Google = 'GOOGLE'
}

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  privateCloudActiveRequest: PrivateCloudRequest;
  privateCloudActiveRequests: Array<PrivateCloudRequest>;
  privateCloudActiveRequestsById: Array<PrivateCloudRequest>;
  privateCloudArchivedRequest: PrivateCloudRequest;
  privateCloudArchivedRequests: Array<PrivateCloudRequest>;
  privateCloudArchivedRequestsById: Array<PrivateCloudRequest>;
  privateCloudProject: PrivateCloudProject;
  privateCloudProjects: Array<PrivateCloudProject>;
  privateCloudProjectsById: Array<PrivateCloudProject>;
  privateCloudProjectsCount: Scalars['Int'];
  privateCloudProjectsPaginated: Array<PrivateCloudProject>;
  privateCloudProjectsWithFilterSearch: Array<PrivateCloudProject>;
  privateCloudRequests: Array<PrivateCloudRequest>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  userPrivateCloudActiveRequest: PrivateCloudRequest;
  userPrivateCloudActiveRequests: Array<PrivateCloudRequest>;
  userPrivateCloudActiveRequestsById: PrivateCloudRequest;
  userPrivateCloudProject: PrivateCloudProject;
  userPrivateCloudProjects: Array<PrivateCloudProject>;
  userPrivateCloudProjectsById: PrivateCloudProject;
  users: Array<User>;
  usersByIds: Array<User>;
};


export type QueryPrivateCloudActiveRequestArgs = {
  requestId: Scalars['ID'];
};


export type QueryPrivateCloudActiveRequestsByIdArgs = {
  requestIds: Scalars['ID'];
};


export type QueryPrivateCloudArchivedRequestArgs = {
  requestId: Scalars['ID'];
};


export type QueryPrivateCloudArchivedRequestsByIdArgs = {
  requestIds: Scalars['ID'];
};


export type QueryPrivateCloudProjectArgs = {
  projectId: Scalars['ID'];
};


export type QueryPrivateCloudProjectsByIdArgs = {
  projectIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryPrivateCloudProjectsCountArgs = {
  filter?: InputMaybe<FilterPrivateCloudProjectsInput>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryPrivateCloudProjectsPaginatedArgs = {
  filter?: InputMaybe<FilterPrivateCloudProjectsInput>;
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
};


export type QueryPrivateCloudProjectsWithFilterSearchArgs = {
  filter?: InputMaybe<FilterPrivateCloudProjectsInput>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['EmailAddress'];
};


export type QueryUserPrivateCloudActiveRequestArgs = {
  requestId: Scalars['ID'];
};


export type QueryUserPrivateCloudActiveRequestsByIdArgs = {
  requestIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUserPrivateCloudProjectArgs = {
  projectId: Scalars['ID'];
};


export type QueryUserPrivateCloudProjectsByIdArgs = {
  projectIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUsersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type Quota = {
  __typename?: 'Quota';
  cpuLimits: Scalars['Float'];
  cpuRequests: Scalars['Float'];
  memoryLimits: Scalars['Int'];
  memoryRequests: Scalars['Int'];
  snapshotCount: Scalars['Int'];
  storageBackup: Scalars['Int'];
  storageBlock: Scalars['Int'];
  storageCapacity: Scalars['Int'];
  storageFile: Scalars['Int'];
  storagePvcCount: Scalars['Int'];
};

export type QuotaInput = {
  cpu?: InputMaybe<DefaultCpuOptions>;
  memory?: InputMaybe<DefaultMemoryOptions>;
  storage?: InputMaybe<DefaultStorageOptions>;
};

export enum RequestDecision {
  Approve = 'APPROVE',
  Reject = 'REJECT'
}

export enum RequestStatus {
  Approved = 'APPROVED',
  PendingDecision = 'PENDING_DECISION',
  Rejected = 'REJECTED'
}

export enum RequestType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Edit = 'EDIT'
}

export type SignUpInput = {
  githubId: Scalars['String'];
  ministry: Ministry;
};

export enum SortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type UpdateUserInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastSeen?: InputMaybe<Scalars['DateTime']>;
  projectOwner?: InputMaybe<Array<Scalars['ID']>>;
  technicalLead?: InputMaybe<Array<Scalars['ID']>>;
};

export type User = {
  __typename?: 'User';
  archived: Scalars['Boolean'];
  created: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  firstName: Scalars['String'];
  githubId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName: Scalars['String'];
  lastSeen?: Maybe<Scalars['DateTime']>;
  ministry?: Maybe<Ministry>;
  privateCloudProjectOwner: Array<Maybe<PrivateCloudProject>>;
  privateCloudProjectPrimaryTechnicalLead: Array<Maybe<PrivateCloudProject>>;
  privateCloudProjectSecondaryTechnicalLead: Array<Maybe<PrivateCloudProject>>;
  privateCloudRequestPrimaryTechnicalLead: Array<Maybe<PrivateCloudRequest>>;
  privateCloudRequestProjectOwner: Array<Maybe<PrivateCloudRequest>>;
  privateCloudRequestSecondaryTechnicalLead: Array<Maybe<PrivateCloudRequest>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Cluster: Cluster;
  CommonComponents: ResolverTypeWrapper<CommonComponents>;
  CommonComponentsInput: CommonComponentsInput;
  CommonComponentsOptions: CommonComponentsOptions;
  CreateUserInput: CreateUserInput;
  CustomQuotaInput: CustomQuotaInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DefaultCpuOptions: DefaultCpuOptions;
  DefaultMemoryOptions: DefaultMemoryOptions;
  DefaultStorageOptions: DefaultStorageOptions;
  EditProjectMetaDataInput: EditProjectMetaDataInput;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  Environment: Environment;
  FilterPrivateCloudProjectsInput: FilterPrivateCloudProjectsInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Ministry: Ministry;
  Mutation: ResolverTypeWrapper<{}>;
  Platform: Platform;
  PrivateCloudProject: ResolverTypeWrapper<PrivateCloudProject>;
  PrivateCloudRequest: ResolverTypeWrapper<PrivateCloudRequest>;
  ProjectMetaDataInput: ProjectMetaDataInput;
  ProjectStatus: ProjectStatus;
  PublicCloudPlatform: PublicCloudPlatform;
  Query: ResolverTypeWrapper<{}>;
  Quota: ResolverTypeWrapper<Quota>;
  QuotaInput: QuotaInput;
  RequestDecision: RequestDecision;
  RequestStatus: RequestStatus;
  RequestType: RequestType;
  SignUpInput: SignUpInput;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CommonComponents: CommonComponents;
  CommonComponentsInput: CommonComponentsInput;
  CreateUserInput: CreateUserInput;
  CustomQuotaInput: CustomQuotaInput;
  DateTime: Scalars['DateTime'];
  EditProjectMetaDataInput: EditProjectMetaDataInput;
  EmailAddress: Scalars['EmailAddress'];
  FilterPrivateCloudProjectsInput: FilterPrivateCloudProjectsInput;
  Float: Scalars['Float'];
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  PrivateCloudProject: PrivateCloudProject;
  PrivateCloudRequest: PrivateCloudRequest;
  ProjectMetaDataInput: ProjectMetaDataInput;
  Query: {};
  Quota: Quota;
  QuotaInput: QuotaInput;
  SignUpInput: SignUpInput;
  String: Scalars['String'];
  UpdateUserInput: UpdateUserInput;
  User: User;
}>;

export type NonNullInputDirectiveArgs = { };

export type NonNullInputDirectiveResolver<Result, Parent, ContextType = ContextValue, Args = NonNullInputDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CommonComponentsResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['CommonComponents'] = ResolversParentTypes['CommonComponents']> = ResolversObject<{
  addressAndGeolocation?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  businessIntelligence?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  documentManagement?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  endUserNotificationAndSubscription?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  formDesignAndSubmission?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  identityManagement?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  other?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  paymentServices?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  publishing?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  workflowManagement?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type MutationResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  customPrivateCloudProjectEditRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationCustomPrivateCloudProjectEditRequestArgs, 'commonComponents' | 'projectId'>>;
  customPrivateCloudProjectRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationCustomPrivateCloudProjectRequestArgs, 'commonComponents' | 'metaData'>>;
  makePrivateCloudRequestDecision?: Resolver<ResolversTypes['RequestStatus'], ParentType, ContextType, RequireFields<MutationMakePrivateCloudRequestDecisionArgs, 'decision' | 'requestId'>>;
  privateCloudProjectDeleteRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationPrivateCloudProjectDeleteRequestArgs, 'projectId'>>;
  privateCloudProjectEditRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationPrivateCloudProjectEditRequestArgs, 'projectId'>>;
  privateCloudProjectRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationPrivateCloudProjectRequestArgs, 'commonComponents' | 'metaData'>>;
  signUp?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
}>;

export type PrivateCloudProjectResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['PrivateCloudProject'] = ResolversParentTypes['PrivateCloudProject']> = ResolversObject<{
  activeEditRequest?: Resolver<Maybe<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  cluster?: Resolver<ResolversTypes['Cluster'], ParentType, ContextType>;
  commonComponents?: Resolver<ResolversTypes['CommonComponents'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  developmentQuota?: Resolver<ResolversTypes['Quota'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  licencePlate?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ministry?: Resolver<ResolversTypes['Ministry'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryTechnicalLead?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  productionQuota?: Resolver<ResolversTypes['Quota'], ParentType, ContextType>;
  projectOwner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  requestHistory?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudRequest']>>, ParentType, ContextType>;
  secondaryTechnicalLead?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProjectStatus'], ParentType, ContextType>;
  testQuota?: Resolver<ResolversTypes['Quota'], ParentType, ContextType>;
  toolsQuota?: Resolver<ResolversTypes['Quota'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrivateCloudRequestResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['PrivateCloudRequest'] = ResolversParentTypes['PrivateCloudRequest']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  decisionDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  decisionMaker?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  requestedProject?: Resolver<Maybe<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['RequestStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RequestType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  privateCloudActiveRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<QueryPrivateCloudActiveRequestArgs, 'requestId'>>;
  privateCloudActiveRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  privateCloudActiveRequestsById?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType, RequireFields<QueryPrivateCloudActiveRequestsByIdArgs, 'requestIds'>>;
  privateCloudArchivedRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<QueryPrivateCloudArchivedRequestArgs, 'requestId'>>;
  privateCloudArchivedRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  privateCloudArchivedRequestsById?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType, RequireFields<QueryPrivateCloudArchivedRequestsByIdArgs, 'requestIds'>>;
  privateCloudProject?: Resolver<ResolversTypes['PrivateCloudProject'], ParentType, ContextType, RequireFields<QueryPrivateCloudProjectArgs, 'projectId'>>;
  privateCloudProjects?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  privateCloudProjectsById?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType, Partial<QueryPrivateCloudProjectsByIdArgs>>;
  privateCloudProjectsCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<QueryPrivateCloudProjectsCountArgs>>;
  privateCloudProjectsPaginated?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType, RequireFields<QueryPrivateCloudProjectsPaginatedArgs, 'limit' | 'offset'>>;
  privateCloudProjectsWithFilterSearch?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType, Partial<QueryPrivateCloudProjectsWithFilterSearchArgs>>;
  privateCloudRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
  userPrivateCloudActiveRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<QueryUserPrivateCloudActiveRequestArgs, 'requestId'>>;
  userPrivateCloudActiveRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  userPrivateCloudActiveRequestsById?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, Partial<QueryUserPrivateCloudActiveRequestsByIdArgs>>;
  userPrivateCloudProject?: Resolver<ResolversTypes['PrivateCloudProject'], ParentType, ContextType, RequireFields<QueryUserPrivateCloudProjectArgs, 'projectId'>>;
  userPrivateCloudProjects?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  userPrivateCloudProjectsById?: Resolver<ResolversTypes['PrivateCloudProject'], ParentType, ContextType, Partial<QueryUserPrivateCloudProjectsByIdArgs>>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  usersByIds?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersByIdsArgs, 'ids'>>;
}>;

export type QuotaResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Quota'] = ResolversParentTypes['Quota']> = ResolversObject<{
  cpuLimits?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  cpuRequests?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  memoryLimits?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  memoryRequests?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  snapshotCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storageBackup?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storageBlock?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storageCapacity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storageFile?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  storagePvcCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  githubId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ministry?: Resolver<Maybe<ResolversTypes['Ministry']>, ParentType, ContextType>;
  privateCloudProjectOwner?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudProject']>>, ParentType, ContextType>;
  privateCloudProjectPrimaryTechnicalLead?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudProject']>>, ParentType, ContextType>;
  privateCloudProjectSecondaryTechnicalLead?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudProject']>>, ParentType, ContextType>;
  privateCloudRequestPrimaryTechnicalLead?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudRequest']>>, ParentType, ContextType>;
  privateCloudRequestProjectOwner?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudRequest']>>, ParentType, ContextType>;
  privateCloudRequestSecondaryTechnicalLead?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudRequest']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ContextValue> = ResolversObject<{
  CommonComponents?: CommonComponentsResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PrivateCloudProject?: PrivateCloudProjectResolvers<ContextType>;
  PrivateCloudRequest?: PrivateCloudRequestResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quota?: QuotaResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = ContextValue> = ResolversObject<{
  nonNullInput?: NonNullInputDirectiveResolver<any, any, ContextType>;
}>;