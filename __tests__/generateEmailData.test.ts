import {
  generateEmailTemplateData,
  isQuotaChanged,
  sendEditRequestEmails,
} from "../src/ches/emailHandlers.js";
import swig from "swig";
import fs from "fs";

const quotaA = {
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

const quotaB = {
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

const restProjectA = {
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

const restProjectB = {
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

const projectA = { ...restProjectA, ...quotaA };
const projectB = { ...restProjectB, ...quotaB };

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

const generatedEmailsPath = "./src/ches/generatedEmailPreviews";

describe("generateEmailData", () => {
  it("Should create an email template data object", async () => {
    const emailData = generateEmailTemplateData(
      projectA,
      projectB
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
    const usersEmail = swig.renderFile(
      "./src/ches/new-templates/quota-request-received-email.html",
      generateEmailTemplateData(projectA, projectB)
    );

    const adminEmail = swig.renderFile(
      "./src/ches/new-templates/super-admin-request-email.html",
      generateEmailTemplateData(projectA, projectB, {
        requestType: "Quota editing",
        isProvisioningRequest: false,
        isQuotaRequest: true,
      })
    );

    try {
      fs.writeFileSync(
        generatedEmailsPath + "/quota-request-received-email.html",
        usersEmail
      );
      console.log("File has been saved.");
    } catch (error) {
      console.error(error);
    }

    try {
      fs.writeFileSync(
        generatedEmailsPath + "/super-admin-request-email.html",
        adminEmail
      );
    } catch (error) {
      console.error(error);
    }

    expect(adminEmail).toMatchSnapshot();
    expect(usersEmail).toMatchSnapshot();
  });

  it("No Quota changed and Project Contact Change", async () => {
    const usersEmail = swig.renderFile(
      "./src/ches/new-templates/product-contact-change-confirmation-email.html",
      generateEmailTemplateData(projectA, projectB)
    );

    try {
      fs.writeFileSync(
        generatedEmailsPath + "/product-contact-change-confirmation-email.html",
        usersEmail
      );
      console.log("File has been saved.");
    } catch (error) {
      console.error(error);
    }
  });

  it("Quota changed and Project Contact Change", async () => {
    const usersEmail = swig.renderFile(
      "./src/ches/new-templates/super-admin-request-email.html",
      generateEmailTemplateData(projectA, projectB, {
        requestType: "Quota editing",
        isProvisioningRequest: false,
        isQuotaRequest: true,
      })
    );

    const adminEmail = swig.renderFile(
      "./src/ches/new-templates/quota-and-tlpo-changes.html",
      generateEmailTemplateData(projectA, projectB)
    );
  });
});
