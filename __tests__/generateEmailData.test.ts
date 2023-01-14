// await sendEditRequestEmails(
//   editRequest.project,
//   editRequest.requestedProject,
//   args
// );

import { generateEmailTemplateData } from "../src/ches/emailHandlers.js";

const project = {
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
  profileId: null,
  projectOwner: {
    id: "63bd0a56e7df3f190dfe89fc",
    firstName: "testA",
    lastName: "testA",
    email: "testA@test.com",
    githubId: "testA",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z"
  },
  primaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fb",
    firstName: "testB",
    lastName: "testB",
    email: "testB@test.com",
    githubId: "testB",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z"
  },
  secondaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fa",
    firstName: "testC",
    lastName: "testC",
    email: "testC@test.com",
    githubId: "testC",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z"
  }
};

const requestedProject = {
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
  productionQuota: {
    cpuRequests: 0.5,
    cpuLimits: 1.5,
    memoryRequests: 64,
    memoryLimits: 128,
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
    identityManagement: "PLANNING_TO_USE",
    paymentServices: null,
    documentManagement: null,
    endUserNotificationAndSubscription: null,
    publishing: null,
    businessIntelligence: null,
    other: "test"
  },
  profileId: null,
  projectOwner: {
    id: "63bd0a56e7df3f190dfe89fc",
    firstName: "testA",
    lastName: "testA",
    email: "testA@test.com",
    githubId: "testA",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z"
  },
  primaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fb",
    firstName: "testB",
    lastName: "testB",
    email: "testB@test.com",
    githubId: "testB",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z"
  },
  secondaryTechnicalLead: {
    id: "63bd0a56e7df3f190dfe89fa",
    firstName: "testC",
    lastName: "testC",
    email: "testC@test.com",
    githubId: "testC",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z"
  }
};

const args = {
  projectId: "1234",
  name: "new name",
  description: "new description",
  cluster: "GOLD",
  commonComponents: {
    identityManagement: "PLANNING_TO_USE"
  },
  productionQuota: {
    cpu: { cpuRequests: 1, cpuLimits: 2 },
    memory: { memoryRequests: 16, memoryLimits: 32 }
  }
};

describe("generateEmailData", () => {
  it("Should create an email template data object", async () => {
    const emailData = generateEmailTemplateData(
      project,
      requestedProject,
      args
    );
  });
});
