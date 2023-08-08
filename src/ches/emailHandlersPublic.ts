import {

    contactChanged,
    generateEmailTemplatePublicData,
} from "./emailHelpers.js"
import chesService from "./index.js";
import swig from "swig";
import {
    RequestType,
    RequestDecision,
} from "../__generated__/resolvers-types.js";


export const sendCreateRequestEmails = async (requestedProject) => {
    try {
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
  console.log("request", request)
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
              "Your provisioning request for Public Cloud OpenShift Platform has been completed",
          });
        }
  
        // if (type === RequestType.Edit) {
        //   await chesService.send({
        //     bodyType: "html",
        //     body: swig.renderFile(
        //       "./src/ches/privateEmailTemplates/quota-request-completion-email.html",
        //       generateEmailTemplatePublicData(project, requestedProject, {
        //         consoleURL: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/`,
        //         humanActionComment: humanComment || null,
        //       })
        //     ),
        //     // For all project contacts.
        //     to: [
        //       requestedProject.projectOwner,
        //       requestedProject.primaryTechnicalLead,
        //       requestedProject.secondaryTechnicalLead,
        //       project.projectOwner,
        //       project.primaryTechnicalLead,
        //       project.secondaryTechnicalLead,
        //     ]
        //       .filter(Boolean)
        //       .map(({ email }) => email),
        //     from: "Registry <cloud.pathfinder@gov.bc.ca>",
        //     subject:
        //       "Resource quota for your product in Public Cloud Openshift Platform has changed",
        //   });
  
        //   await chesService.send({
        //     bodyType: "html",
        //     body: swig.renderFile(
        //       "./src/ches/privateEmailTemplates/product-quota-change-techleads-email.html"),
        //     to: [
        //       requestedProject.primaryTechnicalLead,
        //       requestedProject.secondaryTechnicalLead,
        //       project.primaryTechnicalLead,
        //       project.secondaryTechnicalLead,].filter(Boolean)
        //       .map(({ email }) => email),
        //     from: "Registry <cloud.pathfinder@gov.bc.ca>",
        //     subject: `Your ${requestedProject.name} quota change request has been approved! `,
        //   });
        // }
  
        // if (type === RequestType.Delete) {
        //   await chesService.send({
        //     bodyType: "html",
        //     body: swig.renderFile(
        //       "./src/ches/privateEmailTemplates/deletion-request-completion-email.html",
        //       generateEmailTemplatePublicData(project, undefined)
        //     ),
        //     // For all project contacts. Sent when Provisioner processes the project set deletion request in Openshift
        //     to: [
        //       project.projectOwner,
        //       project.primaryTechnicalLead,
        //       project.secondaryTechnicalLead,
        //     ]
        //       .filter(Boolean)
        //       .map(({ email }) => email),
        //     from: "Registry <cloud.pathfinder@gov.bc.ca>",
        //     subject: "Your product deletion request has been completed",
        //   });
        // }
      }
  
      if (decisionStatus === RequestDecision.Rejected) {
        await chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/privateEmailTemplates/request-denial-email.html",
            generateEmailTemplatePublicData(project, requestedProject, {
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
          from: "Registry <cloud.pathfinder@gov.bc.ca>",
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


  export const sendEditRequestEmails = async (project, requestedProject) => {
    try {
        await chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/privateEmailTemplates/quota-request-received-email.html",
            generateEmailTemplatePublicData(project, requestedProject)
          ),
          // For all project contacts. Sent when a new quota edit request is submitted successfully.
          to: [
            project.projectOwner,
            project.primaryTechnicalLead,
            project.secondaryTechnicalLead,
            contactChanged(project, requestedProject)&&requestedProject?.projectOwner,
            contactChanged(project, requestedProject)&& requestedProject?.primaryTechnicalLead,
            contactChanged(project, requestedProject)&&requestedProject?.secondaryTechnicalLead,
          ]
            .filter(Boolean)
            .map(({ email }) => email),
          from: "Registry <PlatformServicesTeam@gov.bc.ca>",
          subject: `${requestedProject.name} quota change request received`,
        });
    } catch (error) {
      console.error(error);
    }
    // *** What about no quota change and no contact change?
  };