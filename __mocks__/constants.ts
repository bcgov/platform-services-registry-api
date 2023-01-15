import {
  Cluster,
  Ministry,
  ProjectStatus
} from "../src/__generated__/resolvers-types.js";

export const mockProjectA = {
  id: "63bd0a56e7df3f190dfe89f9",
  name: "test project",
  description: "test description",
  status: ProjectStatus.Active,
  licencePlate: "t8c56ac",
  created: "2023-01-10T06:48:53.935Z",
  projectOwner: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fc"
    }
  },
  primaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fb"
    }
  },
  secondaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fa"
    }
  },
  ministry: Ministry.Agri,
  cluster: Cluster.Clab,
  productionQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
  testQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
  developmentQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
  toolsQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
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
    other: "test"
  },
  profileId: null
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
      id: "63bd0a56e7df3f190dfe89fc"
    }
  },
  primaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fb"
    }
  },
  secondaryTechnicalLead: {
    connect: {
      id: "63bd0a56e7df3f190dfe89fa"
    }
  },
  ministry: Ministry.Agri,
  cluster: Cluster.Clab,
  productionQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
  testQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
  developmentQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
  toolsQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 2,
    memoryLimits: 4,
    storageBlock: 1,
    storageFile: 1,
    storageBackup: 512,
    storageCapacity: 1,
    storagePvcCount: 60,
    snapshotCount: 5
  },
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
    other: "test"
  },
  profileId: null
};

export const mockProjectOwner = {
  id: "63bd0a56e7df3f190dfe89fc",
  email: "oamarkanji@gmail.com",
  firstName: "testA",
  lastName: "testA",
  githubId: "testA",
  ministry: Ministry.Agri
};

export const mockPrimaryTechnicalLead = {
  id: "63bd0a56e7df3f190dfe89fb",
  email: "testB@test.com",
  firstName: "testB",
  lastName: "testB",
  githubId: "testB",
  ministry: Ministry.Agri
};

export const mockSecondaryTechnicalLead = {
  id: "63bd0a56e7df3f190dfe89fa",
  email: "testC@test.com",
  firstName: "testC",
  lastName: "testC",
  githubId: "testC",
  ministry: Ministry.Agri
};
