import {
  generateEmailTemplateData,
  isQuotaChanged,
  sendEditRequestEmails,
} from "../src/ches/emailHandlers.js";
import swig from "swig";
import fs from "fs";
import { projectA, projectB } from "../__mocks__/constants.js";

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
