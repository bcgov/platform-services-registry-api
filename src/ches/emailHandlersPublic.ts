import {
  generateEmailTemplatePublicData,
} from "./emailHelpers.js"
import chesService from "./index.js";
import swig from "swig";
import {
  RequestType,
  RequestDecision,
} from "../__generated__/resolvers-types.js";
import {
  adminPublicEmails,
} from "./emailConstants.js";

export const sendCreateRequestEmails = async (requestedProject) => {
  try {
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/publicEmailTemplates/super-admin-request-email.html",
        generateEmailTemplatePublicData(undefined, requestedProject, {
          requestType: "Provisioning",
          isProvisioningRequest: true,
          isQuotaRequest: false,
        })
      ),
      //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
      to: adminPublicEmails,
      from: "Registry <cloud.pathfinder@gov.bc.ca>",
      subject: `New Provisioning request in Registry waiting for your approval`,
    });
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/publicEmailTemplates/create-request-received-email.html",
        generateEmailTemplatePublicData(undefined, requestedProject)
      ),
      // To all project contacts. Sent when a new provisioning request has been submitted successfully.
      to: [
        requestedProject.projectOwner,
        requestedProject.primaryTechnicalLead,
        requestedProject.secondaryTechnicalLead,
      ]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <cloud.pathfinder@gov.bc.ca>",
      subject: `${requestedProject.name} provisioning request received`,
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
            "./src/ches/publicEmailTemplates/provisioning-request-completion-email.html",
            generateEmailTemplatePublicData(undefined, requestedProject, {
              consoleURL: `https://login.nimbus.cloud.gov.bc.ca/`,
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
          from: "Registry <cloud.pathfinder@gov.bc.ca>",
          subject:
            "Your provisioning request for AWS Platform has been completed",
        });
      }
      if (type === RequestType.Edit) {
        await chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/publicEmailTemplates/provisioning-request-completion-email.html",
            generateEmailTemplatePublicData(project, requestedProject, {
              consoleURL: `https://login.nimbus.cloud.gov.bc.ca/`,
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
          from: "Registry <cloud.pathfinder@gov.bc.ca>",
          subject:
            "Your product change request has been provisioned",
        });
      }

    }
  } catch (error) {
    console.error(error);
  }
};


export const sendEditRequestEmails = async (editRequest) => {
  try {
    await chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/publicEmailTemplates/edit-request-received.html",
        generateEmailTemplatePublicData(editRequest.requestedProject, editRequest.project)
      ),
      // For all project contacts. Sent when a new quota edit request is submitted successfully.
      to: [
        editRequest.project.projectOwner,
        editRequest.project.primaryTechnicalLead,
        editRequest.project.secondaryTechnicalLead,
        editRequest.requestedProject?.projectOwner,
        editRequest.requestedProject?.primaryTechnicalLead,
        editRequest.requestedProject?.secondaryTechnicalLead,
      ]
        .filter(Boolean)
        .map(({ email }) => email),
      from: "Registry <cloud.pathfinder@gov.bc.ca>",
      subject: `${editRequest.requestedProject.name} edit request received`,
    });
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
        "./src/ches/publicEmailTemplates/request-denial-email.html",
        generateEmailTemplatePublicData(project, requestedProject, {
          requestType:
            type === RequestType.Create
              ? "Provisioning"
              : type === RequestType.Edit
                ? "Edit"
                : "Deletion",
          humanActionComment: humanComment || null,
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