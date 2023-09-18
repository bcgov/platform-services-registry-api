import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { ContextValue } from '../index';
import * as yup from 'yup'
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

export type Budget = {
  __typename?: 'Budget';
  dev: Scalars['Float'];
  prod: Scalars['Float'];
  test: Scalars['Float'];
  tools: Scalars['Float'];
};

export type BudgetInput = {
  dev: Scalars['Float'];
  prod: Scalars['Float'];
  test: Scalars['Float'];
  tools: Scalars['Float'];
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
  noServices: Scalars['Boolean'];
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
  noServices: Scalars['Boolean'];
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
  idir?: InputMaybe<Scalars['String']>;
  lastName: Scalars['String'];
  ministry?: InputMaybe<Scalars['String']>;
  upn?: InputMaybe<Scalars['String']>;
};

export enum DecisionStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Provisioned = 'PROVISIONED',
  Rejected = 'REJECTED'
}

export enum DefaultCpuOptions {
  CpuRequest_0_5Limit_1_5 = 'CPU_REQUEST_0_5_LIMIT_1_5',
  CpuRequest_1Limit_2 = 'CPU_REQUEST_1_LIMIT_2',
  CpuRequest_2Limit_4 = 'CPU_REQUEST_2_LIMIT_4',
  CpuRequest_4Limit_8 = 'CPU_REQUEST_4_LIMIT_8',
  CpuRequest_8Limit_16 = 'CPU_REQUEST_8_LIMIT_16',
  CpuRequest_16Limit_32 = 'CPU_REQUEST_16_LIMIT_32',
  CpuRequest_32Limit_64 = 'CPU_REQUEST_32_LIMIT_64',
  CpuRequest_64Limit_128 = 'CPU_REQUEST_64_LIMIT_128'
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
  Storage_128 = 'STORAGE_128',
  Storage_256 = 'STORAGE_256',
  Storage_512 = 'STORAGE_512'
}

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

export type FilterPublicCloudProjectsInput = {
  accountCoding?: InputMaybe<Scalars['String']>;
  ministry?: InputMaybe<Ministry>;
  provider?: InputMaybe<Provider>;
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
  privateCloudProjectDeleteRequest: PrivateCloudRequest;
  privateCloudProjectEditRequest: PrivateCloudRequest;
  privateCloudProjectRequest: PrivateCloudRequest;
  privateCloudReProvisionProject?: Maybe<PrivateCloudProject>;
  privateCloudReProvisionRequest?: Maybe<PrivateCloudRequest>;
  privateCloudRequestDecision?: Maybe<PrivateCloudRequest>;
  publicCloudProjectEditRequest: PublicCloudRequest;
  publicCloudProjectRequest: PublicCloudRequest;
  publicCloudRequestDecision?: Maybe<PublicCloudRequest>;
  signUp: User;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationPrivateCloudProjectDeleteRequestArgs = {
  licencePlate: Scalars['String'];
  projectId: Scalars['ID'];
  projectOwnerEmail: Scalars['EmailAddress'];
};


export type MutationPrivateCloudProjectEditRequestArgs = {
  commonComponents: CommonComponentsInput;
  description: Scalars['String'];
  developmentQuota: QuotaInput;
  ministry: Ministry;
  name: Scalars['String'];
  primaryTechnicalLead: CreateUserInput;
  productionQuota: QuotaInput;
  projectId: Scalars['ID'];
  projectOwner: CreateUserInput;
  secondaryTechnicalLead?: InputMaybe<CreateUserInput>;
  testQuota: QuotaInput;
  toolsQuota: QuotaInput;
};


export type MutationPrivateCloudProjectRequestArgs = {
  cluster: Cluster;
  commonComponents: CommonComponentsInput;
  description: Scalars['String'];
  ministry: Ministry;
  name: Scalars['String'];
  primaryTechnicalLead: CreateUserInput;
  projectOwner: CreateUserInput;
  secondaryTechnicalLead?: InputMaybe<CreateUserInput>;
};


export type MutationPrivateCloudReProvisionProjectArgs = {
  projectId: Scalars['ID'];
};


export type MutationPrivateCloudReProvisionRequestArgs = {
  requestId: Scalars['ID'];
};


export type MutationPrivateCloudRequestDecisionArgs = {
  decision: RequestDecision;
  humanComment?: InputMaybe<Scalars['String']>;
  requestId: Scalars['ID'];
};


export type MutationPublicCloudProjectEditRequestArgs = {
  accountCoding?: InputMaybe<Scalars['String']>;
  budget: BudgetInput;
  description: Scalars['String'];
  ministry: Ministry;
  name: Scalars['String'];
  primaryTechnicalLead: CreateUserInput;
  projectId: Scalars['ID'];
  projectOwner: CreateUserInput;
  secondaryTechnicalLead?: InputMaybe<CreateUserInput>;
};


export type MutationPublicCloudProjectRequestArgs = {
  accountCoding?: InputMaybe<Scalars['String']>;
  budget: BudgetInput;
  description: Scalars['String'];
  ministry: Ministry;
  name: Scalars['String'];
  primaryTechnicalLead: CreateUserInput;
  projectOwner: CreateUserInput;
  provider: Provider;
  secondaryTechnicalLead?: InputMaybe<CreateUserInput>;
};


export type MutationPublicCloudRequestDecisionArgs = {
  decision: RequestDecision;
  humanComment?: InputMaybe<Scalars['String']>;
  requestId: Scalars['ID'];
};

export enum Platform {
  PrivateCloud = 'PRIVATE_CLOUD',
  PublicCloud = 'PUBLIC_CLOUD'
}

export type PrivateCloudProject = {
  __typename?: 'PrivateCloudProject';
  activeEditRequest?: Maybe<PrivateCloudRequest>;
  cluster: Cluster;
  commonComponents: CommonComponents;
  count?: Maybe<Scalars['Int']>;
  created: Scalars['DateTime'];
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
  createdBy?: Maybe<User>;
  decisionDate?: Maybe<Scalars['DateTime']>;
  decisionMaker?: Maybe<User>;
  decisionStatus: DecisionStatus;
  humanComment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  project?: Maybe<PrivateCloudProject>;
  requestedProject?: Maybe<PrivateCloudProject>;
  type: RequestType;
};

export enum ProjectStatus {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE'
}

export enum Provider {
  Aws = 'AWS',
  Google = 'GOOGLE'
}

export enum PublicCloudPlatform {
  Aws = 'AWS',
  Google = 'GOOGLE'
}

export type PublicCloudProject = {
  __typename?: 'PublicCloudProject';
  accountCoding: Scalars['String'];
  activeEditRequest?: Maybe<PublicCloudRequest>;
  budget: Budget;
  created: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  licencePlate: Scalars['ID'];
  ministry: Ministry;
  name: Scalars['String'];
  primaryTechnicalLead: User;
  projectOwner: User;
  provider: Provider;
  requestHistory: Array<Maybe<PublicCloudRequest>>;
  secondaryTechnicalLead?: Maybe<User>;
  status: ProjectStatus;
};

export type PublicCloudRequest = {
  __typename?: 'PublicCloudRequest';
  active: Scalars['Boolean'];
  created: Scalars['DateTime'];
  createdBy?: Maybe<User>;
  decisionDate?: Maybe<Scalars['DateTime']>;
  decisionMaker?: Maybe<User>;
  decisionStatus: DecisionStatus;
  humanComment?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  project?: Maybe<PublicCloudProject>;
  requestedProject?: Maybe<PublicCloudProject>;
  type: RequestType;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<User>;
  privateCloudActiveRequestById: PrivateCloudRequest;
  privateCloudActiveRequests: Array<PrivateCloudRequest>;
  privateCloudActiveRequestsById: Array<PrivateCloudRequest>;
  privateCloudProjectById: PrivateCloudProject;
  privateCloudProjects: Array<PrivateCloudProject>;
  privateCloudProjectsById: Array<PrivateCloudProject>;
  privateCloudProjectsPaginated: ProjectsPaginatedOutput;
  privateCloudProjectsWithFilterSearch: Array<PrivateCloudProject>;
  privateCloudRequestById: PrivateCloudRequest;
  privateCloudRequests: Array<PrivateCloudRequest>;
  publicCloudActiveRequestById: PublicCloudRequest;
  publicCloudActiveRequests: Array<PublicCloudRequest>;
  publicCloudActiveRequestsById: Array<PublicCloudRequest>;
  publicCloudProjectById: PublicCloudProject;
  publicCloudProjects: Array<PublicCloudProject>;
  publicCloudProjectsById: Array<PublicCloudProject>;
  publicCloudProjectsPaginated: PublicCloudProjectsPaginatedOutput;
  publicCloudRequestById: PublicCloudRequest;
  publicCloudRequests: Array<PublicCloudRequest>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  userPrivateCloudActiveRequestById: PrivateCloudRequest;
  userPrivateCloudActiveRequests: Array<PrivateCloudRequest>;
  userPrivateCloudActiveRequestsByIds: PrivateCloudRequest;
  userPrivateCloudDeletionCheck: Scalars['Boolean'];
  userPrivateCloudProjectById: PrivateCloudProject;
  userPrivateCloudProjects: Array<PrivateCloudProject>;
  userPrivateCloudProjectsByIds: PrivateCloudProject;
  userPrivateCloudProjectsPaginated: ProjectsPaginatedOutput;
  userPrivateCloudRequestById: PrivateCloudRequest;
  userPrivateCloudRequests: Array<PrivateCloudRequest>;
  userPublicCloudActiveRequestById: PublicCloudRequest;
  userPublicCloudActiveRequests: Array<PublicCloudRequest>;
  userPublicCloudActiveRequestsByIds: PublicCloudRequest;
  userPublicCloudProjectById: PublicCloudProject;
  userPublicCloudProjects: Array<PublicCloudProject>;
  userPublicCloudProjectsByIds: PublicCloudProject;
  userPublicCloudRequestById: PublicCloudRequest;
  userPublicCloudRequests: Array<PublicCloudRequest>;
  users: Array<User>;
  usersByIds: Array<User>;
};


export type QueryPrivateCloudActiveRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryPrivateCloudActiveRequestsByIdArgs = {
  requestIds: Scalars['ID'];
};


export type QueryPrivateCloudProjectByIdArgs = {
  projectId: Scalars['ID'];
};


export type QueryPrivateCloudProjectsByIdArgs = {
  projectIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryPrivateCloudProjectsPaginatedArgs = {
  filter?: InputMaybe<FilterPrivateCloudProjectsInput>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryPrivateCloudProjectsWithFilterSearchArgs = {
  filter?: InputMaybe<FilterPrivateCloudProjectsInput>;
  search?: InputMaybe<Scalars['String']>;
};


export type QueryPrivateCloudRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryPublicCloudActiveRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryPublicCloudActiveRequestsByIdArgs = {
  requestIds: Scalars['ID'];
};


export type QueryPublicCloudProjectByIdArgs = {
  projectId: Scalars['ID'];
};


export type QueryPublicCloudProjectsByIdArgs = {
  projectIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryPublicCloudProjectsPaginatedArgs = {
  filter?: InputMaybe<FilterPublicCloudProjectsInput>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryPublicCloudRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUserByEmailArgs = {
  email: Scalars['EmailAddress'];
};


export type QueryUserPrivateCloudActiveRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryUserPrivateCloudActiveRequestsByIdsArgs = {
  requestIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUserPrivateCloudDeletionCheckArgs = {
  projectId: Scalars['ID'];
};


export type QueryUserPrivateCloudProjectByIdArgs = {
  projectId: Scalars['ID'];
};


export type QueryUserPrivateCloudProjectsByIdsArgs = {
  projectIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUserPrivateCloudProjectsPaginatedArgs = {
  filter?: InputMaybe<FilterPrivateCloudProjectsInput>;
  page: Scalars['Int'];
  pageSize: Scalars['Int'];
  search?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['Int']>;
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryUserPrivateCloudRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryUserPublicCloudActiveRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryUserPublicCloudActiveRequestsByIdsArgs = {
  requestIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUserPublicCloudProjectByIdArgs = {
  projectId: Scalars['ID'];
};


export type QueryUserPublicCloudProjectsByIdsArgs = {
  projectIds?: InputMaybe<Array<Scalars['ID']>>;
};


export type QueryUserPublicCloudRequestByIdArgs = {
  requestId: Scalars['ID'];
};


export type QueryUsersByIdsArgs = {
  ids: Array<Scalars['ID']>;
};

export type Quota = {
  __typename?: 'Quota';
  cpu: DefaultCpuOptions;
  memory: DefaultMemoryOptions;
  storage: DefaultStorageOptions;
};

export type QuotaInput = {
  cpu: DefaultCpuOptions;
  memory: DefaultMemoryOptions;
  storage: DefaultStorageOptions;
};

export enum RequestDecision {
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export enum RequestType {
  Create = 'CREATE',
  Delete = 'DELETE',
  Edit = 'EDIT'
}

export enum SortOrder {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING'
}

export type UpdateUserInput = {
  archived?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  firstName?: InputMaybe<Scalars['String']>;
  idir?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  lastSeen?: InputMaybe<Scalars['DateTime']>;
  projectOwner?: InputMaybe<Array<Scalars['ID']>>;
  technicalLead?: InputMaybe<Array<Scalars['ID']>>;
  upn?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  archived: Scalars['Boolean'];
  created: Scalars['DateTime'];
  email: Scalars['EmailAddress'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  idir?: Maybe<Scalars['String']>;
  isNew?: Maybe<IsNew>;
  lastName?: Maybe<Scalars['String']>;
  lastSeen?: Maybe<Scalars['DateTime']>;
  ministry?: Maybe<Scalars['String']>;
  privateCloudProjectOwner: Array<Maybe<PrivateCloudProject>>;
  privateCloudProjectPrimaryTechnicalLead: Array<Maybe<PrivateCloudProject>>;
  privateCloudProjectSecondaryTechnicalLead: Array<Maybe<PrivateCloudProject>>;
  publicCloudProjectOwner: Array<Maybe<PublicCloudProject>>;
  publicCloudProjectTechnicalLead: Array<Maybe<PublicCloudProject>>;
  upn?: Maybe<Scalars['String']>;
};

export type IsNew = {
  __typename?: 'isNew';
  private?: Maybe<Scalars['Boolean']>;
  public?: Maybe<Scalars['Boolean']>;
};

export type PrivateCloudProjectsPaginatedOutput = {
  __typename?: 'privateCloudProjectsPaginatedOutput';
  projects: Array<PrivateCloudProject>;
  total: Scalars['Int'];
};

export type ProjectsPaginatedOutput = {
  __typename?: 'projectsPaginatedOutput';
  projects: Array<PrivateCloudProject>;
  total: Scalars['Int'];
};

export type PublicCloudProjectsPaginatedOutput = {
  __typename?: 'publicCloudProjectsPaginatedOutput';
  projects: Array<PublicCloudProject>;
  total: Scalars['Int'];
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
  Budget: ResolverTypeWrapper<Budget>;
  BudgetInput: BudgetInput;
  Cluster: Cluster;
  CommonComponents: ResolverTypeWrapper<CommonComponents>;
  CommonComponentsInput: CommonComponentsInput;
  CommonComponentsOptions: CommonComponentsOptions;
  CreateUserInput: CreateUserInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DecisionStatus: DecisionStatus;
  DefaultCpuOptions: DefaultCpuOptions;
  DefaultMemoryOptions: DefaultMemoryOptions;
  DefaultStorageOptions: DefaultStorageOptions;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  Environment: Environment;
  FilterPrivateCloudProjectsInput: FilterPrivateCloudProjectsInput;
  FilterPublicCloudProjectsInput: FilterPublicCloudProjectsInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Ministry: Ministry;
  Mutation: ResolverTypeWrapper<{}>;
  Platform: Platform;
  PrivateCloudProject: ResolverTypeWrapper<PrivateCloudProject>;
  PrivateCloudRequest: ResolverTypeWrapper<PrivateCloudRequest>;
  ProjectStatus: ProjectStatus;
  Provider: Provider;
  PublicCloudPlatform: PublicCloudPlatform;
  PublicCloudProject: ResolverTypeWrapper<PublicCloudProject>;
  PublicCloudRequest: ResolverTypeWrapper<PublicCloudRequest>;
  Query: ResolverTypeWrapper<{}>;
  Quota: ResolverTypeWrapper<Quota>;
  QuotaInput: QuotaInput;
  RequestDecision: RequestDecision;
  RequestType: RequestType;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
  isNew: ResolverTypeWrapper<IsNew>;
  privateCloudProjectsPaginatedOutput: ResolverTypeWrapper<PrivateCloudProjectsPaginatedOutput>;
  projectsPaginatedOutput: ResolverTypeWrapper<ProjectsPaginatedOutput>;
  publicCloudProjectsPaginatedOutput: ResolverTypeWrapper<PublicCloudProjectsPaginatedOutput>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  Budget: Budget;
  BudgetInput: BudgetInput;
  CommonComponents: CommonComponents;
  CommonComponentsInput: CommonComponentsInput;
  CreateUserInput: CreateUserInput;
  DateTime: Scalars['DateTime'];
  EmailAddress: Scalars['EmailAddress'];
  FilterPrivateCloudProjectsInput: FilterPrivateCloudProjectsInput;
  FilterPublicCloudProjectsInput: FilterPublicCloudProjectsInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Mutation: {};
  PrivateCloudProject: PrivateCloudProject;
  PrivateCloudRequest: PrivateCloudRequest;
  PublicCloudProject: PublicCloudProject;
  PublicCloudRequest: PublicCloudRequest;
  Query: {};
  Quota: Quota;
  QuotaInput: QuotaInput;
  String: Scalars['String'];
  UpdateUserInput: UpdateUserInput;
  User: User;
  isNew: IsNew;
  privateCloudProjectsPaginatedOutput: PrivateCloudProjectsPaginatedOutput;
  projectsPaginatedOutput: ProjectsPaginatedOutput;
  publicCloudProjectsPaginatedOutput: PublicCloudProjectsPaginatedOutput;
}>;

export type LowerCaseDirectiveArgs = { };

export type LowerCaseDirectiveResolver<Result, Parent, ContextType = ContextValue, Args = LowerCaseDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type BudgetResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Budget'] = ResolversParentTypes['Budget']> = ResolversObject<{
  dev?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  prod?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  tools?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommonComponentsResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['CommonComponents'] = ResolversParentTypes['CommonComponents']> = ResolversObject<{
  addressAndGeolocation?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  businessIntelligence?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  documentManagement?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  endUserNotificationAndSubscription?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  formDesignAndSubmission?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  identityManagement?: Resolver<Maybe<ResolversTypes['CommonComponentsOptions']>, ParentType, ContextType>;
  noServices?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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
  privateCloudProjectDeleteRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationPrivateCloudProjectDeleteRequestArgs, 'licencePlate' | 'projectId' | 'projectOwnerEmail'>>;
  privateCloudProjectEditRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationPrivateCloudProjectEditRequestArgs, 'commonComponents' | 'description' | 'developmentQuota' | 'ministry' | 'name' | 'primaryTechnicalLead' | 'productionQuota' | 'projectId' | 'projectOwner' | 'testQuota' | 'toolsQuota'>>;
  privateCloudProjectRequest?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<MutationPrivateCloudProjectRequestArgs, 'cluster' | 'commonComponents' | 'description' | 'ministry' | 'name' | 'primaryTechnicalLead' | 'projectOwner'>>;
  privateCloudReProvisionProject?: Resolver<Maybe<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType, RequireFields<MutationPrivateCloudReProvisionProjectArgs, 'projectId'>>;
  privateCloudReProvisionRequest?: Resolver<Maybe<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType, RequireFields<MutationPrivateCloudReProvisionRequestArgs, 'requestId'>>;
  privateCloudRequestDecision?: Resolver<Maybe<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType, RequireFields<MutationPrivateCloudRequestDecisionArgs, 'decision' | 'requestId'>>;
  publicCloudProjectEditRequest?: Resolver<ResolversTypes['PublicCloudRequest'], ParentType, ContextType, RequireFields<MutationPublicCloudProjectEditRequestArgs, 'budget' | 'description' | 'ministry' | 'name' | 'primaryTechnicalLead' | 'projectId' | 'projectOwner'>>;
  publicCloudProjectRequest?: Resolver<ResolversTypes['PublicCloudRequest'], ParentType, ContextType, RequireFields<MutationPublicCloudProjectRequestArgs, 'budget' | 'description' | 'ministry' | 'name' | 'primaryTechnicalLead' | 'projectOwner' | 'provider'>>;
  publicCloudRequestDecision?: Resolver<Maybe<ResolversTypes['PublicCloudRequest']>, ParentType, ContextType, RequireFields<MutationPublicCloudRequestDecisionArgs, 'decision' | 'requestId'>>;
  signUp?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
}>;

export type PrivateCloudProjectResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['PrivateCloudProject'] = ResolversParentTypes['PrivateCloudProject']> = ResolversObject<{
  activeEditRequest?: Resolver<Maybe<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  cluster?: Resolver<ResolversTypes['Cluster'], ParentType, ContextType>;
  commonComponents?: Resolver<ResolversTypes['CommonComponents'], ParentType, ContextType>;
  count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
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
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  decisionDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  decisionMaker?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  decisionStatus?: Resolver<ResolversTypes['DecisionStatus'], ParentType, ContextType>;
  humanComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  requestedProject?: Resolver<Maybe<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RequestType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicCloudProjectResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['PublicCloudProject'] = ResolversParentTypes['PublicCloudProject']> = ResolversObject<{
  accountCoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  activeEditRequest?: Resolver<Maybe<ResolversTypes['PublicCloudRequest']>, ParentType, ContextType>;
  budget?: Resolver<ResolversTypes['Budget'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  licencePlate?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  ministry?: Resolver<ResolversTypes['Ministry'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  primaryTechnicalLead?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  projectOwner?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  provider?: Resolver<ResolversTypes['Provider'], ParentType, ContextType>;
  requestHistory?: Resolver<Array<Maybe<ResolversTypes['PublicCloudRequest']>>, ParentType, ContextType>;
  secondaryTechnicalLead?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ProjectStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicCloudRequestResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['PublicCloudRequest'] = ResolversParentTypes['PublicCloudRequest']> = ResolversObject<{
  active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  createdBy?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  decisionDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  decisionMaker?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  decisionStatus?: Resolver<ResolversTypes['DecisionStatus'], ParentType, ContextType>;
  humanComment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  project?: Resolver<Maybe<ResolversTypes['PublicCloudProject']>, ParentType, ContextType>;
  requestedProject?: Resolver<Maybe<ResolversTypes['PublicCloudProject']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['RequestType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  privateCloudActiveRequestById?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<QueryPrivateCloudActiveRequestByIdArgs, 'requestId'>>;
  privateCloudActiveRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  privateCloudActiveRequestsById?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType, RequireFields<QueryPrivateCloudActiveRequestsByIdArgs, 'requestIds'>>;
  privateCloudProjectById?: Resolver<ResolversTypes['PrivateCloudProject'], ParentType, ContextType, RequireFields<QueryPrivateCloudProjectByIdArgs, 'projectId'>>;
  privateCloudProjects?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  privateCloudProjectsById?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType, Partial<QueryPrivateCloudProjectsByIdArgs>>;
  privateCloudProjectsPaginated?: Resolver<ResolversTypes['projectsPaginatedOutput'], ParentType, ContextType, RequireFields<QueryPrivateCloudProjectsPaginatedArgs, 'page' | 'pageSize'>>;
  privateCloudProjectsWithFilterSearch?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType, Partial<QueryPrivateCloudProjectsWithFilterSearchArgs>>;
  privateCloudRequestById?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<QueryPrivateCloudRequestByIdArgs, 'requestId'>>;
  privateCloudRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  publicCloudActiveRequestById?: Resolver<ResolversTypes['PublicCloudRequest'], ParentType, ContextType, RequireFields<QueryPublicCloudActiveRequestByIdArgs, 'requestId'>>;
  publicCloudActiveRequests?: Resolver<Array<ResolversTypes['PublicCloudRequest']>, ParentType, ContextType>;
  publicCloudActiveRequestsById?: Resolver<Array<ResolversTypes['PublicCloudRequest']>, ParentType, ContextType, RequireFields<QueryPublicCloudActiveRequestsByIdArgs, 'requestIds'>>;
  publicCloudProjectById?: Resolver<ResolversTypes['PublicCloudProject'], ParentType, ContextType, RequireFields<QueryPublicCloudProjectByIdArgs, 'projectId'>>;
  publicCloudProjects?: Resolver<Array<ResolversTypes['PublicCloudProject']>, ParentType, ContextType>;
  publicCloudProjectsById?: Resolver<Array<ResolversTypes['PublicCloudProject']>, ParentType, ContextType, Partial<QueryPublicCloudProjectsByIdArgs>>;
  publicCloudProjectsPaginated?: Resolver<ResolversTypes['publicCloudProjectsPaginatedOutput'], ParentType, ContextType, RequireFields<QueryPublicCloudProjectsPaginatedArgs, 'page' | 'pageSize'>>;
  publicCloudRequestById?: Resolver<ResolversTypes['PublicCloudRequest'], ParentType, ContextType, RequireFields<QueryPublicCloudRequestByIdArgs, 'requestId'>>;
  publicCloudRequests?: Resolver<Array<ResolversTypes['PublicCloudRequest']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  userByEmail?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByEmailArgs, 'email'>>;
  userPrivateCloudActiveRequestById?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<QueryUserPrivateCloudActiveRequestByIdArgs, 'requestId'>>;
  userPrivateCloudActiveRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  userPrivateCloudActiveRequestsByIds?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, Partial<QueryUserPrivateCloudActiveRequestsByIdsArgs>>;
  userPrivateCloudDeletionCheck?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<QueryUserPrivateCloudDeletionCheckArgs, 'projectId'>>;
  userPrivateCloudProjectById?: Resolver<ResolversTypes['PrivateCloudProject'], ParentType, ContextType, RequireFields<QueryUserPrivateCloudProjectByIdArgs, 'projectId'>>;
  userPrivateCloudProjects?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  userPrivateCloudProjectsByIds?: Resolver<ResolversTypes['PrivateCloudProject'], ParentType, ContextType, Partial<QueryUserPrivateCloudProjectsByIdsArgs>>;
  userPrivateCloudProjectsPaginated?: Resolver<ResolversTypes['projectsPaginatedOutput'], ParentType, ContextType, RequireFields<QueryUserPrivateCloudProjectsPaginatedArgs, 'page' | 'pageSize'>>;
  userPrivateCloudRequestById?: Resolver<ResolversTypes['PrivateCloudRequest'], ParentType, ContextType, RequireFields<QueryUserPrivateCloudRequestByIdArgs, 'requestId'>>;
  userPrivateCloudRequests?: Resolver<Array<ResolversTypes['PrivateCloudRequest']>, ParentType, ContextType>;
  userPublicCloudActiveRequestById?: Resolver<ResolversTypes['PublicCloudRequest'], ParentType, ContextType, RequireFields<QueryUserPublicCloudActiveRequestByIdArgs, 'requestId'>>;
  userPublicCloudActiveRequests?: Resolver<Array<ResolversTypes['PublicCloudRequest']>, ParentType, ContextType>;
  userPublicCloudActiveRequestsByIds?: Resolver<ResolversTypes['PublicCloudRequest'], ParentType, ContextType, Partial<QueryUserPublicCloudActiveRequestsByIdsArgs>>;
  userPublicCloudProjectById?: Resolver<ResolversTypes['PublicCloudProject'], ParentType, ContextType, RequireFields<QueryUserPublicCloudProjectByIdArgs, 'projectId'>>;
  userPublicCloudProjects?: Resolver<Array<ResolversTypes['PublicCloudProject']>, ParentType, ContextType>;
  userPublicCloudProjectsByIds?: Resolver<ResolversTypes['PublicCloudProject'], ParentType, ContextType, Partial<QueryUserPublicCloudProjectsByIdsArgs>>;
  userPublicCloudRequestById?: Resolver<ResolversTypes['PublicCloudRequest'], ParentType, ContextType, RequireFields<QueryUserPublicCloudRequestByIdArgs, 'requestId'>>;
  userPublicCloudRequests?: Resolver<Array<ResolversTypes['PublicCloudRequest']>, ParentType, ContextType>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  usersByIds?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUsersByIdsArgs, 'ids'>>;
}>;

export type QuotaResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['Quota'] = ResolversParentTypes['Quota']> = ResolversObject<{
  cpu?: Resolver<ResolversTypes['DefaultCpuOptions'], ParentType, ContextType>;
  memory?: Resolver<ResolversTypes['DefaultMemoryOptions'], ParentType, ContextType>;
  storage?: Resolver<ResolversTypes['DefaultStorageOptions'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  archived?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['EmailAddress'], ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  idir?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isNew?: Resolver<Maybe<ResolversTypes['isNew']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastSeen?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  ministry?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  privateCloudProjectOwner?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudProject']>>, ParentType, ContextType>;
  privateCloudProjectPrimaryTechnicalLead?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudProject']>>, ParentType, ContextType>;
  privateCloudProjectSecondaryTechnicalLead?: Resolver<Array<Maybe<ResolversTypes['PrivateCloudProject']>>, ParentType, ContextType>;
  publicCloudProjectOwner?: Resolver<Array<Maybe<ResolversTypes['PublicCloudProject']>>, ParentType, ContextType>;
  publicCloudProjectTechnicalLead?: Resolver<Array<Maybe<ResolversTypes['PublicCloudProject']>>, ParentType, ContextType>;
  upn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IsNewResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['isNew'] = ResolversParentTypes['isNew']> = ResolversObject<{
  private?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  public?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PrivateCloudProjectsPaginatedOutputResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['privateCloudProjectsPaginatedOutput'] = ResolversParentTypes['privateCloudProjectsPaginatedOutput']> = ResolversObject<{
  projects?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProjectsPaginatedOutputResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['projectsPaginatedOutput'] = ResolversParentTypes['projectsPaginatedOutput']> = ResolversObject<{
  projects?: Resolver<Array<ResolversTypes['PrivateCloudProject']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PublicCloudProjectsPaginatedOutputResolvers<ContextType = ContextValue, ParentType extends ResolversParentTypes['publicCloudProjectsPaginatedOutput'] = ResolversParentTypes['publicCloudProjectsPaginatedOutput']> = ResolversObject<{
  projects?: Resolver<Array<ResolversTypes['PublicCloudProject']>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ContextValue> = ResolversObject<{
  Budget?: BudgetResolvers<ContextType>;
  CommonComponents?: CommonComponentsResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PrivateCloudProject?: PrivateCloudProjectResolvers<ContextType>;
  PrivateCloudRequest?: PrivateCloudRequestResolvers<ContextType>;
  PublicCloudProject?: PublicCloudProjectResolvers<ContextType>;
  PublicCloudRequest?: PublicCloudRequestResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Quota?: QuotaResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  isNew?: IsNewResolvers<ContextType>;
  privateCloudProjectsPaginatedOutput?: PrivateCloudProjectsPaginatedOutputResolvers<ContextType>;
  projectsPaginatedOutput?: ProjectsPaginatedOutputResolvers<ContextType>;
  publicCloudProjectsPaginatedOutput?: PublicCloudProjectsPaginatedOutputResolvers<ContextType>;
}>;

export type DirectiveResolvers<ContextType = ContextValue> = ResolversObject<{
  lowerCase?: LowerCaseDirectiveResolver<any, any, ContextType>;
}>;


export function BudgetInputSchema(): yup.SchemaOf<BudgetInput> {
  return yup.object({
    dev: yup.number().defined(),
    prod: yup.number().defined(),
    test: yup.number().defined(),
    tools: yup.number().defined()
  })
}

export const ClusterSchema = yup.mixed().oneOf([Cluster.Clab, Cluster.Emerald, Cluster.Gold, Cluster.Golddr, Cluster.Klab, Cluster.Klab2, Cluster.Silver]);

export function CommonComponentsInputSchema(): yup.SchemaOf<CommonComponentsInput> {
  return yup.object({
    addressAndGeolocation: CommonComponentsOptionsSchema,
    businessIntelligence: CommonComponentsOptionsSchema,
    documentManagement: CommonComponentsOptionsSchema,
    endUserNotificationAndSubscription: CommonComponentsOptionsSchema,
    formDesignAndSubmission: CommonComponentsOptionsSchema,
    identityManagement: CommonComponentsOptionsSchema,
    noServices: yup.boolean().defined(),
    other: yup.string(),
    paymentServices: CommonComponentsOptionsSchema,
    publishing: CommonComponentsOptionsSchema,
    workflowManagement: CommonComponentsOptionsSchema
  })
}

export const CommonComponentsOptionsSchema = yup.mixed().oneOf([CommonComponentsOptions.Implemented, CommonComponentsOptions.PlanningToUse]);

export function CreateUserInputSchema(): yup.SchemaOf<CreateUserInput> {
  return yup.object({
    email: yup.mixed().defined(),
    firstName: yup.string().defined(),
    idir: yup.string(),
    lastName: yup.string().defined(),
    ministry: yup.string(),
    upn: yup.string()
  })
}

export const DecisionStatusSchema = yup.mixed().oneOf([DecisionStatus.Approved, DecisionStatus.Pending, DecisionStatus.Provisioned, DecisionStatus.Rejected]);

export const DefaultCpuOptionsSchema = yup.mixed().oneOf([DefaultCpuOptions.CpuRequest_0_5Limit_1_5, DefaultCpuOptions.CpuRequest_1Limit_2, DefaultCpuOptions.CpuRequest_2Limit_4, DefaultCpuOptions.CpuRequest_4Limit_8, DefaultCpuOptions.CpuRequest_8Limit_16, DefaultCpuOptions.CpuRequest_16Limit_32, DefaultCpuOptions.CpuRequest_32Limit_64, DefaultCpuOptions.CpuRequest_64Limit_128]);

export const DefaultMemoryOptionsSchema = yup.mixed().oneOf([DefaultMemoryOptions.MemoryRequest_2Limit_4, DefaultMemoryOptions.MemoryRequest_4Limit_8, DefaultMemoryOptions.MemoryRequest_8Limit_16, DefaultMemoryOptions.MemoryRequest_16Limit_32, DefaultMemoryOptions.MemoryRequest_32Limit_64, DefaultMemoryOptions.MemoryRequest_64Limit_128]);

export const DefaultStorageOptionsSchema = yup.mixed().oneOf([DefaultStorageOptions.Storage_1, DefaultStorageOptions.Storage_2, DefaultStorageOptions.Storage_4, DefaultStorageOptions.Storage_16, DefaultStorageOptions.Storage_32, DefaultStorageOptions.Storage_64, DefaultStorageOptions.Storage_128, DefaultStorageOptions.Storage_256, DefaultStorageOptions.Storage_512]);

export const EnvironmentSchema = yup.mixed().oneOf([Environment.Development, Environment.Production, Environment.Test, Environment.Tools]);

export function FilterPrivateCloudProjectsInputSchema(): yup.SchemaOf<FilterPrivateCloudProjectsInput> {
  return yup.object({
    cluster: ClusterSchema,
    ministry: MinistrySchema
  })
}

export function FilterPublicCloudProjectsInputSchema(): yup.SchemaOf<FilterPublicCloudProjectsInput> {
  return yup.object({
    accountCoding: yup.string(),
    ministry: MinistrySchema,
    provider: ProviderSchema
  })
}

export const MinistrySchema = yup.mixed().oneOf([Ministry.Aest, Ministry.Ag, Ministry.Agri, Ministry.Alc, Ministry.Bcpc, Ministry.Citz, Ministry.Dbc, Ministry.Eao, Ministry.Educ, Ministry.Embc, Ministry.Empr, Ministry.Env, Ministry.Fin, Ministry.Flnr, Ministry.Hlth, Ministry.Irr, Ministry.Jedc, Ministry.Lbr, Ministry.Ldb, Ministry.Mah, Ministry.Mcf, Ministry.Mmha, Ministry.Psa, Ministry.Pssg, Ministry.Sdpr, Ministry.Tca, Ministry.Tran]);

export const PlatformSchema = yup.mixed().oneOf([Platform.PrivateCloud, Platform.PublicCloud]);

export const ProjectStatusSchema = yup.mixed().oneOf([ProjectStatus.Active, ProjectStatus.Inactive]);

export const ProviderSchema = yup.mixed().oneOf([Provider.Aws, Provider.Google]);

export const PublicCloudPlatformSchema = yup.mixed().oneOf([PublicCloudPlatform.Aws, PublicCloudPlatform.Google]);

export function QuotaInputSchema(): yup.SchemaOf<QuotaInput> {
  return yup.object({
    cpu: DefaultCpuOptionsSchema.defined(),
    memory: DefaultMemoryOptionsSchema.defined(),
    storage: DefaultStorageOptionsSchema.defined()
  })
}

export const RequestDecisionSchema = yup.mixed().oneOf([RequestDecision.Approved, RequestDecision.Rejected]);

export const RequestTypeSchema = yup.mixed().oneOf([RequestType.Create, RequestType.Delete, RequestType.Edit]);

export const SortOrderSchema = yup.mixed().oneOf([SortOrder.Ascending, SortOrder.Descending]);

export function UpdateUserInputSchema(): yup.SchemaOf<UpdateUserInput> {
  return yup.object({
    archived: yup.boolean(),
    email: yup.mixed(),
    firstName: yup.string(),
    idir: yup.string(),
    lastName: yup.string(),
    lastSeen: yup.mixed(),
    projectOwner: yup.array().of(yup.string().defined()).optional(),
    technicalLead: yup.array().of(yup.string().defined()).optional(),
    upn: yup.string()
  })
}
