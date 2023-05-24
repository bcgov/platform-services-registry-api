// @ts-nocheck
import chesService from "./index.js";
import swig from "swig";
import {
  RequestType,
  RequestDecision,
} from "../__generated__/resolvers-types.js";
import {
  RequestType,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions,
} from "../nats/constants.js";
import {
  adminEmails,
  clusterNames,
  ministriesNames,
} from "./emailConstants.js";

export const isQuotaChanged = (projectQuota, requestedQuota) =>
  JSON.stringify(projectQuota) !== JSON.stringify(requestedQuota);

const quotaChanged = (project, requestedProject) => {
  return !(
    JSON.stringify(project.productionQuota) ===
    JSON.stringify(requestedProject.productionQuota) &&
    JSON.stringify(project.developmentQuota) ===
    JSON.stringify(requestedProject.developmentQuota) &&
    JSON.stringify(project.testQuota) ===
    JSON.stringify(requestedProject.testQuota) &&
    JSON.stringify(project.toolsQuota) ===
    JSON.stringify(requestedProject.toolsQuota)
  );
};
const contactChanged = (project, requestedProject) => {
  return !(
    requestedProject.projectOwner.email === project.projectOwner.email &&
    requestedProject.primaryTechnicalLead.email ===
    project.primaryTechnicalLead.email &&
    requestedProject.secondaryTechnicalLead?.email ===
    project.secondaryTechnicalLead?.email
  );
};

export const generateEmailTemplateData = (
  incomingProject,
  incomingRequest,
  other = {}
) => {
  const project = incomingProject
    ? { ...incomingProject }
    : { ...incomingRequest };
  const requestedProject = incomingRequest
    ? { ...incomingRequest }
    : { ...incomingProject };

  const secondaryTechnicalLead =
    (!!project.secondaryTechnicalLead || !!requestedProject.secondaryTechnicalLead) && requestedProject.secondaryTechnicalLead.id !== project.secondaryTechnicalLead.id
      ? project.secondaryTechnicalLead : !!requestedProject.secondaryTechnicalLead ? requestedProject.secondaryTechnicalLead : null;
  const primaryTechnicalLead = project.primaryTechnicalLead;
  const projectOwner = project.projectOwner;

  project.testQuota = {
    cpu: DefaultCpuOptions[project.testQuota.cpu],
    memory: DefaultMemoryOptions[project.testQuota.memory],
    storage: DefaultStorageOptions[project.testQuota.storage],
  };

  project.productionQuota = {
    cpu: DefaultCpuOptions[project.productionQuota.cpu],
    memory: DefaultMemoryOptions[project.productionQuota.memory],
    storage: DefaultStorageOptions[project.productionQuota.storage],
  };

  project.developmentQuota = {
    cpu: DefaultCpuOptions[project.developmentQuota.cpu],
    memory: DefaultMemoryOptions[project.developmentQuota.memory],
    storage: DefaultStorageOptions[project.developmentQuota.storage],
  };

  project.toolsQuota = {
    cpu: DefaultCpuOptions[project.toolsQuota.cpu],
    memory: DefaultMemoryOptions[project.toolsQuota.memory],
    storage: DefaultStorageOptions[project.toolsQuota.storage],
  };

  requestedProject.testQuota = {
    cpu: DefaultCpuOptions[requestedProject.testQuota.cpu],
    memory: DefaultMemoryOptions[requestedProject.testQuota.memory],
    storage: DefaultStorageOptions[requestedProject.testQuota.storage],
  };

  requestedProject.productionQuota = {
    cpu: DefaultCpuOptions[requestedProject.productionQuota.cpu],
    memory: DefaultMemoryOptions[requestedProject.productionQuota.memory],
    storage: DefaultStorageOptions[requestedProject.productionQuota.storage],
  };

  requestedProject.developmentQuota = {
    cpu: DefaultCpuOptions[requestedProject.developmentQuota.cpu],
    memory: DefaultMemoryOptions[requestedProject.developmentQuota.memory],
    storage: DefaultStorageOptions[requestedProject.developmentQuota.storage],
  };

  requestedProject.toolsQuota = {
    cpu: DefaultCpuOptions[requestedProject.toolsQuota.cpu],
    memory: DefaultMemoryOptions[requestedProject.toolsQuota.memory],
    storage: DefaultStorageOptions[requestedProject.toolsQuota.storage],
  };

  return {
    consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
    consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
    consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
    consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
    isProductionQuotaChanged: isQuotaChanged(
      project.productionQuota,
      requestedProject.productionQuota
    ),
    productionQuotaCPURequested:
      requestedProject.productionQuota.cpu.cpuRequests !==
        project.productionQuota.cpu.cpuRequests
        ? requestedProject.productionQuota.cpu.cpuRequests
        : null,
    productionQuotaMemoryRequested:
      requestedProject.productionQuota.memory.memoryRequests !==
        project.productionQuota.memory.memoryRequests
        ? requestedProject.productionQuota.memory.memoryRequests
        : null,
    productionQuotaStorageRequested:
      requestedProject.productionQuota.storage.storageFile !==
        project.productionQuota.storage.storageFile
        ? requestedProject.productionQuota.storage.storageFile
        : null,
    isDevelopmentQuotaChanged: isQuotaChanged(
      project.developmentQuota,
      requestedProject.developmentQuota
    ),
    developmentQuotaCPURequested:
      requestedProject.developmentQuota.cpu.cpuRequests !==
        project.developmentQuota.cpu.cpuRequests
        ? requestedProject.developmentQuota.cpu.cpuRequests
        : null,
    developmentQuotaMemoryRequested:
      requestedProject.developmentQuota.memory.memoryRequests !==
        project.developmentQuota.memory.memoryRequests
        ? requestedProject.developmentQuota.memory.memoryRequests
        : null,
    developmentQuotaStorageRequested:
      requestedProject.developmentQuota.storage.storageFile !==
        project.developmentQuota.storage.storageFile
        ? requestedProject.developmentQuota.storage.storageFile
        : null,
    isTestQuotaChanged: isQuotaChanged(
      project.testQuota,
      requestedProject.testQuota
    ),
    testQuotaCPURequested:
      requestedProject.testQuota.cpu.cpuRequests !==
        project.testQuota.cpu.cpuRequests
        ? requestedProject.testQuota.cpu.cpuRequests
        : null,
    testQuotaMemoryRequested:
      requestedProject.testQuota.memoryRequests !==
        project.testQuota.memory.memoryRequests
        ? requestedProject.testQuota.memory.memoryRequests
        : null,
    testQuotaStorageRequested:
      requestedProject.testQuota.storage.storageFile !==
        project.testQuota.storage.storageFile
        ? requestedProject.testQuota.storage.storageFile
        : null,
    isToolsQuotaChanged: isQuotaChanged(
      project.toolsQuota,
      requestedProject.toolsQuota
    ),
    toolsQuotaCPURequested:
      requestedProject.toolsQuota.cpu.cpuRequests !==
        project.toolsQuota.cpu.cpuRequests
        ? requestedProject.toolsQuota.cpu.cpuRequests
        : null,
    toolsQuotaMemoryRequested:
      requestedProject.toolsQuota.memory.memoryRequests !==
        project.toolsQuota.memory.memoryRequests
        ? requestedProject.toolsQuota.memory.memoryRequests
        : null,
    toolsQuotaStorageRequested:
      requestedProject.toolsQuota.storage.storageFile !==
        project.toolsQuota.storage.storageFile
        ? requestedProject.toolsQuota.storage.storageFile
        : null,
    productionQuotaCPUCurrent:
      project?.productionQuota?.cpu.cpuRequests || null,
    productionQuotaMemoryCurrent:
      project?.productionQuota?.memory.memoryRequests || null,
    productionQuotaStorageCurrent:
      project?.productionQuota?.storage.storageFile || null,
    developmentQuotaCPUCurrent:
      project?.developmentQuota?.cpu.cpuRequests || null,
    developmentQuotaMemoryCurrent:
      project?.developmentQuota?.memory.memoryRequests || null,
    developmentQuotaStorageCurrent:
      project?.developmentQuota?.storage.storageFile || null,
    testQuotaCPUCurrent: project?.testQuota?.cpu.cpuRequests || null,
    testQuotaMemoryCurrent: project?.testQuota?.memory.memoryRequests || null,
    testQuotaStorageCurrent: project?.testQuota?.storage.storageFile || null,
    toolsQuotaCPUCurrent: project?.toolsQuota?.cpu.cpuRequests || null,
    toolsQuotaMemoryCurrent: project?.toolsQuota?.memory.memoryRequests || null,
    toolsQuotaStorageCurrent: project?.toolsQuota?.storage.storageFile || null,
    licencePlate: requestedProject.licencePlate,
    projectName: requestedProject.name,
    productDescription: requestedProject.description,
    productMinistry: ministriesNames.filter(
      (item) =>
        item.name.toLowerCase() === requestedProject?.ministry.toLowerCase()
    )[0]?.humanFriendlyName,
    POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
    POEmail: projectOwner.email,
    POGitHubOrIDIR: projectOwner?.POIDIR,
    PriTLName: `${primaryTechnicalLead?.firstName} ${primaryTechnicalLead?.lastName}`,
    PriTLEmail: primaryTechnicalLead?.email,
    PriTLGitHubOrIDIR: primaryTechnicalLead?.POIDIR,
    SecTLName: secondaryTechnicalLead
      ? `${secondaryTechnicalLead?.firstName} ${secondaryTechnicalLead.lastName}`
      : null,
    SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead?.email : null,
    SecTLGitHubOrIDIR: secondaryTechnicalLead
      ? secondaryTechnicalLead?.POIDIR
      : null,
    setCluster: clusterNames.filter(
      (item) =>
        item.name.toLowerCase() === requestedProject?.cluster.toLowerCase()
    )[0]?.humanFriendlyName,
    ...other,
  };
};

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
          "./src/ches/new-templates/quota-request-received-email.html",
          generateEmailTemplateData(project, requestedProject)
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
          "./src/ches/new-templates/super-admin-request-email.html",
          generateEmailTemplateData(project, requestedProject, {
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
          "./src/ches/new-templates/product-contact-change-confirmation-email.html",
          generateEmailTemplateData(requestedProject, project)
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
          "./src/ches/new-templates/super-admin-request-email.html",
          generateEmailTemplateData(project, requestedProject, {
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
          "./src/ches/new-templates/quota-and-tlpo-changes.html",
          generateEmailTemplateData(project, requestedProject)
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
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/super-admin-request-email.html",
        generateEmailTemplateData(undefined, requestedProject, {
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
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/provisioning-request-received-email.html",
        generateEmailTemplateData(undefined, requestedProject)
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
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/deletion-request-confirmation-email.html",
        generateEmailTemplateData(project, undefined)
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
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/super-admin-request-email.html",
        generateEmailTemplateData(project, undefined, {
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
        chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/new-templates/provisioning-request-completion-email.html",
            generateEmailTemplateData(undefined, requestedProject, {
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
        chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/new-templates/quota-request-completion-email.html",
            generateEmailTemplateData(project, requestedProject, {
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

        chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/new-templates/product-quota-change-techleads-email.html"),
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
        chesService.send({
          bodyType: "html",
          body: swig.renderFile(
            "./src/ches/new-templates/deletion-request-completion-email.html",
            generateEmailTemplateData(project, undefined)
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
      chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/request-denial-email.html",
          generateEmailTemplateData(project, requestedProject, {
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
    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/new-templates/request-denial-email.html",
        generateEmailTemplateData(project, requestedProject, {
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
