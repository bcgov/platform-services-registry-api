import {
  Cluster,
  Ministry,
  ProjectStatus,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions,
} from "../src/__generated__/resolvers-types.js";

const defaultQuota = {
  cpu: DefaultCpuOptions.CpuRequest_0_5Limit_1_5,
  memory: DefaultMemoryOptions.MemoryRequest_2Limit_4,
  storage: DefaultStorageOptions.Storage_1,
};

// const defaultQuota = {
//   cpu: DefaultCpuOptions.CPU_REQUEST_0_5_LIMIT_1_5,
//   memory: DefaultMemoryOptions.MemoryRequest_2Limit_4,
//   storage: DefaultStorageOptions.Storage_1,
// };

// export const defaultQuota = {
//   cpu: DefaultCpuOptions.CPU_REQUEST_0_5_LIMIT_1_5,
//   memory: DefaultMemoryOptions.MEMORY_REQUEST_2_LIMIT_4,
//   storage: DefaultStorageOptions.STORAGE_1,
// };

export const mockProjectA = {
  id: "63bd0a56e7df3f190dfe89f9",
  name: "test project",
  description: "test description",
  status: ProjectStatus.Active,
  licencePlate: "t8c56ac",
  created: "2023-01-10T06:48:53.935Z",
  projectOwner: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fc",
    },
  },
  primaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fb",
    },
  },
  secondaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fa",
    },
  },
  ministry: Ministry.Agri,
  cluster: Cluster.Clab,
  productionQuota: defaultQuota,
  testQuota: defaultQuota,
  developmentQuota: defaultQuota,
  toolsQuota: defaultQuota,
  commonComponents: {
    addressAndGeolocation: null,
    workflowManagement: null,
    formDesignAndSubmission: null,
    identityManagement: null,
    paymentServices: null,
    documentManagement: null,
    endUserNotificationAndSubscription: null,
    publishing: null,
    businessIntelligence: null,
    noServices: false,
    other: "test",
  },
  profileId: null,
};

export const mockProjectB = {
  id: "63bd0a65e7df3f190dfe89f9",
  name: "test project",
  description: "test description",
  status: ProjectStatus.Active,
  licencePlate: "t7c347a",
  created: "2023-01-10T06:48:53.935Z",
  projectOwner: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fc",
    },
  },
  primaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fb",
    },
  },
  secondaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fa",
    },
  },
  ministry: Ministry.Agri,
  cluster: Cluster.Clab,
  productionQuota: defaultQuota,
  testQuota: defaultQuota,
  developmentQuota: defaultQuota,
  toolsQuota: defaultQuota,
  commonComponents: {
    addressAndGeolocation: null,
    workflowManagement: null,
    formDesignAndSubmission: null,
    identityManagement: null,
    paymentServices: null,
    documentManagement: null,
    endUserNotificationAndSubscription: null,
    publishing: null,
    businessIntelligence: null,
    noServices: false,
    other: "test",
  },
  profileId: null,
};

export const mockProjectOwner = {
  id: "63bd0a56e7df3f190dfe89fc",
  email: "oamarkanji@gmail.com",
  firstName: "testA",
  lastName: "testA",
  githubId: "testA",
  ministry: Ministry.Agri,
};

export const mockPrimaryTechnicalLead = {
  id: "63bd0a56e7df3f190dfe89fb",
  email: "testB@test.com",
  firstName: "testB",
  lastName: "testB",
  githubId: "testB",
  ministry: Ministry.Agri,
};

export const mockSecondaryTechnicalLead = {
  id: "63bd0a56e7df3f190dfe89fa",
  email: "testC@test.com",
  firstName: "testC",
  lastName: "testC",
  githubId: "testC",
  ministry: Ministry.Agri,
};
