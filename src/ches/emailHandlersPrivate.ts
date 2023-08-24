// @ts-nocheck
import chesService from "./index.js";
import swig from "swig";
import {
  RequestType,
  RequestDecision,
} from "../__generated__/resolvers-types.js";
import {
  RequestType,
} from "../natsPubSub/privateCloud/constants.js";
import {
  adminEmails,
} from "./emailConstants.js";
import {
  quotaChanged,
  contactChanged,
  generateEmailTemplatePrivateData,
} from "./emailHelpers.js"


export const sendEditRequestEmails = async (project, requestedProject) => {
  try {
    // *** Quota Changed and no Contact changed
    if (
      quotaChanged(project, requestedProject) &&
      !contactChanged(project, requestedProject)
    ) {
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/privateEmailTemplates/quota-request-received-email.html",
          generateEmailTemplatePrivateData(project, requestedProject)
        ),
        // For all project contacts. Sent when a new quota edit request is submitted successfully.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project.secondaryTechnicalLead,
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} quota change request received`,
      });
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/privateEmailTemplates/super-admin-request-email.html",
          generateEmailTemplatePrivateData(project, requestedProject, {
            requestType: "Quota editing",
            isProvisioningRequest: false,
            isQuotaRequest: true,
          })
        ),
        //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
        to: adminEmails,
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `New Quota editing request in Registry waiting for your approval`,
      });
    }
    // *** No Quota changed and Project Contact Change

    if (
      !quotaChanged(project, requestedProject) &&
      contactChanged(project, requestedProject)
    ) {
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/privateEmailTemplates/product-contact-change-confirmation-email.html",
          generateEmailTemplatePrivateData(requestedProject, project)
        ),
        // Sent to all new, current, and prior project contacts when the Provisioner processes the request in Openshift. Contacts who were just removed should also receive this email alerting them to these changes.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project?.secondaryTechnicalLead,
          requestedProject?.projectOwner,
          requestedProject?.primaryTechnicalLead,
          requestedProject?.secondaryTechnicalLead,
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject:
          "Contact information for your product on Private Cloud Openshift platform has changed",
      });
    }
    // *** Quota changed and Project Contact Change
    if (
      quotaChanged(project, requestedProject) &&
      contactChanged(project, requestedProject)
    ) {
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/privateEmailTemplates/super-admin-request-email.html",
          generateEmailTemplatePrivateData(project, requestedProject, {
            requestType: "Quota editing",
            isProvisioningRequest: false,
            isQuotaRequest: true,
          })
        ),
        //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
        to: adminEmails,
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `New Quota editing request in Registry waiting for your approval`,
      });
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/privateEmailTemplates/quota-and-tlpo-changes.html",
          generateEmailTemplatePrivateData(project, requestedProject)
        ),
        // Sent to all new, current, and prior project contacts upon form submit. Contacts who were just removed should also receive this email alerting them to these changes.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project.secondaryTechnicalLead,
          requestedProject.projectOwner,
          requestedProject.primaryTechnicalLead,
          requestedProject.secondaryTechnicalLead,
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} quota and product contact change request received`,
      });
    }
  } catch (error) {
    console.error(error);
  }
  // *** What about no quota change and no contact change?
};

export const sendCreateRequestEmails = async (requestedProject) => {
  try {
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/privateEmailTemplates/super-admin-request-email.html",
        generateEmailTemplatePrivateData(undefined, requestedProject, {
          requestType: "Provisioning",
          isProvisioningRequest: true,
          isQuotaRequest: false,
        })
      ),
      //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
      to: adminEmails,
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `New Provisioning request in Registry waiting for your approval`,
    });
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/privateEmailTemplates/provisioning-request-received-email.html",
        generateEmailTemplatePrivateData(undefined, requestedProject)
      ),
      // To all project contacts. Sent when a new provisioning request has been submitted successfully.
      to: [
        requestedProject.projectOwner,
        requestedProject.primaryTechnicalLead,
        requestedProject.secondaryTechnicalLead,
      ]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${requestedProject.name} provisioning request received`,
    });
  } catch (error) {
    console.error(error);
  }
};


export const sendDeleteRequestEmails = async (project) => {
  try {
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/privateEmailTemplates/deletion-request-confirmation-email.html",
        generateEmailTemplatePrivateData(project, undefined)
      ),
      // For all project contacts. Sent when the project set deletion request is successfully submitted
      to: [
        project.projectOwner,
        project.primaryTechnicalLead,
        project.secondaryTechnicalLead,
      ]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${project.name} deletion request received`,
    });
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/privateEmailTemplates/super-admin-request-email.html",
        generateEmailTemplatePrivateData(project, undefined, {
          requestType: "Delete",
          isProvisioningRequest: false,
          isQuotaRequest: false,
        })
      ),
      //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
      to: adminEmails,
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `New Delete request in Registry waiting for your approval`,
    });
  } catch (error) {
    console.error(error);
  }
};

export const sendProvisionedEmails = async (request) => {
  let { type, decisionStatus, requestedProject, humanComment, project } =
    request;

  if (!project) {
    project = requestedProject;
  }

  try {
    if (decisionStatus === RequestDecision.Approved) {
      if (type === RequestType.Create) {
        await chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/privateEmailTemplates/provisioning-request-completion-email.html",
            generateEmailTemplatePrivateData(undefined, requestedProject, {
              consoleURL: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/`,
              humanActionComment: humanComment || null,
            })
          ),
          //For all project contacts. Sent when the provisioner application has finished provisioning the new namespaces for a product.
          to: [
            requestedProject.projectOwner,
            requestedProject.primaryTechnicalLead,
            requestedProject.secondaryTechnicalLead,
          ]
            .filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject:
            "Your provisioning request for Private Cloud OpenShift Platform has been completed",
        });
      }

      if (type === RequestType.Edit && quotaChanged(project, requestedProject)) {
        await chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/privateEmailTemplates/quota-request-completion-email.html",
            generateEmailTemplatePrivateData(project, requestedProject, {
              consoleURL: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/`,
              humanActionComment: humanComment || null,
            })
          ),
          // For all project contacts.
          to: [
            requestedProject.projectOwner,
            requestedProject.primaryTechnicalLead,
            requestedProject.secondaryTechnicalLead,
            project.projectOwner,
            project.primaryTechnicalLead,
            project.secondaryTechnicalLead,
          ]
            .filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject:
            "Resource quota for your product in Private Cloud Openshift Platform has changed",
        });

        await chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/privateEmailTemplates/product-quota-change-techleads-email.html"),
          to: [
            requestedProject.primaryTechnicalLead,
            requestedProject.secondaryTechnicalLead,
            project.primaryTechnicalLead,
            project.secondaryTechnicalLead,].filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject: `Your ${requestedProject.name} quota change request has been approved! `,
        });
      }

      if (type === RequestType.Delete) {
        await chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/privateEmailTemplates/deletion-request-completion-email.html",
            generateEmailTemplatePrivateData(project, undefined)
          ),
          // For all project contacts. Sent when Provisioner processes the project set deletion request in Openshift
          to: [
            project.projectOwner,
            project.primaryTechnicalLead,
            project.secondaryTechnicalLead,
          ]
            .filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject: "Your product deletion request has been completed",
        });
      }
    }

    if (decisionStatus === RequestDecision.Rejected) {
      await chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/privateEmailTemplates/request-denial-email.html",
          generateEmailTemplatePrivateData(project, requestedProject, {
            requestType:
              type === RequestType.Create
                ? "Provisioning"
                : type === RequestType.Edit
                  ? "Edit"
                  : "Deletion",
            humanActionComment: humanComment || null,
            isProvisioningRequest: type === RequestType.Create,
            isQuotaRequest: type === RequestType.Edit,
            productDescription: requestedProject.description,
            productMinistry: requestedProject.ministry,
          })
        ),
        // to all project contacts when any request (quota, provisioning, or deletion) is denied.
        to: [
          project.projectOwner,
          project.primaryTechnicalLead,
          project.secondaryTechnicalLead,
        ]
          .filter(Boolean)
          .map(({ email }) => email),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: ` ${type === RequestType.Create
          ? "Provisioning"
          : type === RequestType.Edit
            ? "Edit"
            : "Deletion"
          } request has been rejected`,
      });
    }
  } catch (error) {
    console.error(error);
  }
};

export const sendRejectEmail = async (request) => {
  let { type, requestedProject, humanComment, project } =
    request;

  if (!project) {
    project = requestedProject;
  }

  try {
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/privateEmailTemplates/request-denial-email.html",
        generateEmailTemplatePrivateData(project, requestedProject, {
          requestType:
            type === RequestType.Create
              ? "Provisioning"
              : type === RequestType.Edit
                ? "Edit"
                : "Deletion",
          humanActionComment: humanComment || null,
          isProvisioningRequest: type === RequestType.Create,
          isQuotaRequest: type === RequestType.Edit,
          productDescription: requestedProject.description,
          productMinistry: requestedProject.ministry,
        })
      ),
      // to all project contacts when any request (quota, provisioning, or deletion) is denied.
      to: [
        project.projectOwner,
        project.primaryTechnicalLead,
        project.secondaryTechnicalLead,
      ]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: ` ${type === RequestType.Create
        ? "Provisioning"
        : type === RequestType.Edit
          ? "Edit"
          : "Deletion"
        } request has been rejected`,
    });
  } catch (error) {
    console.error(error);
  }
};
