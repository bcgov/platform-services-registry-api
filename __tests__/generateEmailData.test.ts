import {
  generateEmailTemplateData,
  isQuotaChanged,
  sendEditRequestEmails,
} from "../src/ches/emailHandlers.js";
import swig from "swig";

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
    githubId: "testA",
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
    githubId: "testB",
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
    githubId: "testC",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
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
    githubId: "testA",
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
    githubId: "testB",
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
    githubId: "testC",
    ministry: "AGRI",
    archived: false,
    created: "2023-01-11T21:40:25.019Z",
    lastSeen: "2023-01-11T21:40:25.019Z",
  },
};

// const args = {
//   projectId: "1234",
//   name: "new name",
//   description: "new description",
//   cluster: "GOLD",
//   commonComponents: {
//     identityManagement: "PLANNING_TO_USE",
//   },
//   productionQuota: {
//     cpu: { cpuRequests: 1, cpuLimits: 2 },
//     memory: { memoryRequests: 16, memoryLimits: 32 },
//   },
// };

describe("generateEmailData", () => {
  it("Should create an email template data object", async () => {
    const emailData = generateEmailTemplateData(
      project,
      requestedProject
      // args
    );
  });

  it("Should detect if production quota has changed", async () => {
    const quotaA = {
      cpu: "CPU_REQUEST_4_LIMIT_8",
      memory: "MEMORY_REQUEST_2_LIMIT_4",
      storage: "STORAGE_1",
    };

    const quotaB = {
      cpu: "CPU_REQUEST_4_LIMIT_8",
      memory: "MEMORY_REQUEST_2_LIMIT_4",
      storage: "STORAGE_1",
    };

    const quotaC = {
      cpu: "CPU_REQUEST_4_LIMIT_8",
      memory: "MEMORY_REQUEST_2_LIMIT_4",
      storage: "STORAGE_2",
    };

    const noChange = isQuotaChanged(quotaA, quotaB);
    const change = isQuotaChanged(quotaA, quotaC);
  });

  it("Quota Changed and no Contact changed", async () => {
    let usersEmail;
    let adminEmail;

    usersEmail = swig.renderFile(
      "./src/ches/new-templates/quota-request-received-email.html",
      generateEmailTemplateData(project, requestedProject)
    );

    adminEmail = generateEmailTemplateData(project, requestedProject, {
      requestType: "Quota editing",
      isProvisioningRequest: false,
      isQuotaRequest: true,
    });
  });

  // it("No Quota changed and Project Contact Change", async () => {
  //   let usersEmail;

  //   usersEmail = swig.renderFile(
  //     "./src/ches/new-templates/product-contact-change-confirmation-email.html",
  //     generateEmailTemplateData(requestedProject, project)
  //   );
  // });

  // it("Quota changed and Project Contact Change", async () => {
  //   let usersEmail;
  //   let adminEmail;

  //   usersEmail = swig.renderFile(
  //     "./src/ches/new-templates/super-admin-request-email.html",
  //     generateEmailTemplateData(project, requestedProject, {
  //       requestType: "Quota editing",
  //       isProvisioningRequest: false,
  //       isQuotaRequest: true,
  //     })
  //   );

  //   adminEmail = swig.renderFile(
  //     "./src/ches/new-templates/quota-and-tlpo-changes.html",
  //     generateEmailTemplateData(project, requestedProject)
  //   );
  // });
});
