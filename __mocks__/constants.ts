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
  ministry: Ministry.Agri,
};

export const mockPrimaryTechnicalLead = {
  id: "63bd0a56e7df3f190dfe89fb",
  email: "testB@test.com",
  firstName: "testB",
  lastName: "testB",
  ministry: Ministry.Agri,
};

export const mockSecondaryTechnicalLead = {
  id: "63bd0a56e7df3f190dfe89fa",
  email: "testC@test.com",
  firstName: "testC",
  lastName: "testC",
  ministry: Ministry.Agri,
};

export const quotaA = {
  productionQuota: {
    cpu: "CPU_REQUEST_0_5_LIMIT_1_5",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
  testQuota: {
    cpu: "CPU_REQUEST_0_5_LIMIT_1_5",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
  developmentQuota: {
    cpu: "CPU_REQUEST_0_5_LIMIT_1_5",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
  toolsQuota: {
    cpu: "CPU_REQUEST_0_5_LIMIT_1_5",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
};

export const quotaB = {
  productionQuota: {
    cpu: "CPU_REQUEST_4_LIMIT_8",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
  testQuota: {
    cpu: "CPU_REQUEST_4_LIMIT_8",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
  developmentQuota: {
    cpu: "CPU_REQUEST_4_LIMIT_8",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
  toolsQuota: {
    cpu: "CPU_REQUEST_0_5_LIMIT_1_5",
    memory: "MEMORY_REQUEST_2_LIMIT_4",
    storage: "STORAGE_1",
  },
};

export const restProjectA = {
  id: "63bf2cca4a18633df22cc6af",
  name: "test project",
  description: "test description",
  status: "ACTIVE",
  licencePlate: "t9d68bd",
  created: "2023-01-10T06:48:53.935Z",
  projectOwnerId: "63bd0a56e7df3f190dfe89fc",
  primaryTechnicalLeadId: "63bd0a56e7df3f190dfe89fb",
  secondaryTechnicalLeadId: "63bd0a56e7df3f190dfe89fa",
  ministry: "AGRI",
  cluster: "CLAB",
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
    other: "test",
  },
  profileId: null,
  projectOwner: {
    id: "63bd0a56e7df3f190dfe89fc",
    firstName: "testA",
    lastName: "testA",
    email: "testA@test.com",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
  primaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fb",
    firstName: "testB",
    lastName: "testB",
    email: "testB@test.com",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
  secondaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fa",
    firstName: "testC",
    lastName: "testC",
    email: "testC@test.com",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
};

export const restProjectB = {
  id: "63bf2cce4a18633df22cc6b8",
  name: "new name",
  description: "new description",
  status: "ACTIVE",
  licencePlate: "t9d68bd",
  created: "2023-01-10T06:48:53.935Z",
  projectOwnerId: "63bd0a56e7df3f190dfe89fc",
  primaryTechnicalLeadId: "63bd0a56e7df3f190dfe89fb",
  secondaryTechnicalLeadId: "63bd0a56e7df3f190dfe89fa",
  ministry: "AGRI",
  cluster: "GOLD",
  commonComponents: {
    addressAndGeolocation: null,
    workflowManagement: null,
    formDesignAndSubmission: null,
    identityManagement: "PLANNING_TO_USE",
    paymentServices: null,
    documentManagement: null,
    endUserNotificationAndSubscription: null,
    publishing: null,
    businessIntelligence: null,
    other: "test",
  },
  profileId: null,
  projectOwner: {
    id: "63bd0a56e7df3f190dfe89fc",
    firstName: "testA",
    lastName: "testA",
    email: "testA@test.com",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
  primaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fb",
    firstName: "testB",
    lastName: "testB",
    email: "testB@test.com",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
  secondaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fa",
    firstName: "testC",
    lastName: "testC",
    email: "testC@test.com",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
};

export const projectA = { ...restProjectA, ...quotaA };
export const projectB = { ...restProjectB, ...quotaB };
