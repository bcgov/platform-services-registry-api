// @ts-nocheck
import chesService from "./index.js";
import swig from "swig";

const adminEmails = ["Zhanna.Kolesnyk@gov.bc.ca"];

const clusterNames = [
  {
    id: 1,
    name: "clab",
    humanFriendlyName: "CLAB Calgary"
  },
  {
    id: 2,
    name: "klab",
    humanFriendlyName: "KLAB Kamloops"
  },
  {
    id: 3,
    name: "silver",
    humanFriendlyName: "Silver Kamloops"
  },
  {
    id: 4,
    name: "gold",
    humanFriendlyName: "Gold Kamloops"
  },
  {
    id: 5,
    name: "golddr",
    humanFriendlyName: "Gold (DR) Calgary"
  },
  {
    id: 6,
    name: "klab2",
    humanFriendlyName: "KLAB2 Kamloops"
  },
  {
    id: 7,
    name: "emerald",
    humanFriendlyName: "Emerald Hosting Tier"
  }
];

export const generateEmailTemplateData = (
  project,
  requestedProject,
  args,
  other = {}
) => {
  const projectOwner = project.projectOwner;
  const primaryTechnicalLead = project.primaryTechnicalLead;
  const secondaryTechnicalLead = project.secondaryTechnicalLead;

  return {
    consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
    consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
    consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
    consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,

    isProductionQuotaChanged: "productionQuota" in args,
    productionQuotaCPURequested: args?.productionQuota?.cpuRequests || null,
    productionQuotaMemoryRequested:
      args?.productionQuota?.memoryRequests || null,
    productionQuotaStorageRequested: args?.productionQuota?.storageFile || null,

    isDevelopmentQuotaChanged: "developmentQuota" in args,
    developmentQuotaCPURequested: args?.developmentQuota?.cpuRequests || null,
    developmentQuotaMemoryRequested:
      args?.developmentQuota?.memoryRequests || null,
    developmentQuotaStorageRequested:
      args?.developmentQuota?.storageFile || null,

    isTestQuotaChanged: "testQuota" in args,
    testQuotaCPURequested: args?.testQuota?.cpuRequests || null,
    testQuotaMemoryRequested: args?.testQuota?.memoryRequests || null,
    testQuotaStorageRequested: args?.testQuota?.storageFile || null,

    isToolsQuotaChanged: "toolsQuota" in args,
    toolsQuotaCPURequested: args?.toolsQuota?.cpuRequests || null,
    toolsQuotaMemoryRequested: args?.toolsQuota?.memoryRequests || null,
    toolsQuotaStorageRequested: args?.toolsQuota?.storageFile || null,

    productionQuotaCPUCurrent: project?.productionQuota?.cpuRequests || null,
    productionQuotaMemoryCurrent:
      project?.productionQuota?.memoryRequests || null,
    productionQuotaStorageCurrent:
      project?.productionQuota?.storageFile || null,

    developmentQuotaCPUCurrent: project?.developmentQuota?.cpuRequests || null,
    developmentQuotaMemoryCurrent:
      project?.developmentQuota?.memoryRequests || null,
    developmentQuotaStorageCurrent:
      project?.developmentQuota?.storageFile || null,

    testQuotaCPUCurrent: project?.testQuota?.cpuRequests || null,
    testQuotaMemoryCurrent: project?.testQuota?.memoryRequests || null,
    testQuotaStorageCurrent: project?.testQuota?.storageFile || null,

    toolsQuotaCPUCurrent: project?.toolsQuota?.cpuRequests || null,
    toolsQuotaMemoryCurrent: project?.toolsQuota?.memoryRequests || null,
    toolsQuotaStorageCurrent: project?.toolsQuota?.storageFile || null,

    licencePlate: requestedProject.licencePlate,

    projectName: requestedProject.name,
    POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
    POEmail: projectOwner.email,
    POGitHubOrIDIR: projectOwner?.POIDIR || projectOwner?.githubId,

    PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
    PriTLEmail: primaryTechnicalLead?.email,
    PriTLGitHubOrIDIR:
      primaryTechnicalLead?.POIDIR || primaryTechnicalLead?.githubId,

    SecTLName: secondaryTechnicalLead
      ? `${secondaryTechnicalLead?.firstName} ${secondaryTechnicalLead.lastName}`
      : null,
    SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead?.email : null,
    SecTLGitHubOrIDIR: secondaryTechnicalLead?.POIDIR
      ? secondaryTechnicalLead.POIDIR
      : secondaryTechnicalLead.githubId,

    setCluster: clusterNames.filter(
      (item) => item.name === requestedProject?.cluster
    )[0]?.humanFriendlyName,
    ...other
  };
};

// @ts-ignore
export const sendEditRequestEmails = async (
  project,
  requestedProject,
  args
) => {
chesService.send({
  bodyType: "html",
  body: "This is a test email from my new script",
  to: ["oamarkanji@gmail.com"],
  from: "Registry <PlatformServicesTeam@gov.bc.ca>",
  subject: `**profile.name** OCP 4 Project Set`
});
};

// export const sendEditRequestEmails = async (
//   project,
//   requestedProject,
//   args
// ) => {
//   const quotaChanged =
//     "toolsQuota" in args ||
//     "developmentQuota" in args ||
//     "testQuota" in args ||
//     "productionQuota" in args;

//   const contactChanged =
//     "projectOwner" in args ||
//     "primaryTechnicalLead" in args ||
//     "secondaryTechnicalLead" in args;

//   // *** Quota Changed and no Contact changed
//   if (quotaChanged && !contactChanged) {
//     await ChesService.send({
//       bodyType: "html",
//       body: swig.renderFile(
//         "./src/ches/new-templates/quota-request-received-email.html",
//         generateEmailTemplateData(project, requestedProject, args)
//       ),
//       // For all project contacts. Sent when a new quota edit request is submitted successfully.
//       to: [
//         project.projectOwner,
//         project.primaryTechnicalLead,
//         project.secondaryTechnicalLead
//       ]
//         .filter(Boolean)
//         .map(({ email }) => email),
//       from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//       subject: `${requestedProject.name} quota change request received`
//     });

//     await ChesService.send({
//       bodyType: "html",
//       body: swig.renderFile(
//         "./src/ches/new-templates/super-admin-request-email.html",
//         generateEmailTemplateData(project, requestedProject, args, {
//           requestType: "Quota editing",
//           isProvisioningRequest: false,
//           isQuotaRequest: true
//         })
//       ),
//       //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
//       to: adminEmails,
//       from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//       subject: `New Quota editing request in Registry waiting for your approval`
//     });
//   }

//   // ***

//   // *** No Quota changed and Project Contact Change
//   if (!quotaChanged && contactChanged) {
//     await ChesService.send({
//       bodyType: "html",
//       body: swig.renderFile(
//         "./src/ches/new-templates/product-contact-change-confirmation-email.html",
//         generateEmailTemplateData(requestedProject, project, args)
//       ),
//       // Sent to all new, current, and prior project contacts when the Provisioner processes the request in Openshift. Contacts who were just removed should also receive this email alerting them to these changes.
//       to: [
//         project.projectOwner,
//         project.primaryTechnicalLead,
//         project?.secondaryTechnicalLead,
//         requestedProject?.projectOwner,
//         requestedProject?.primaryTechnicalLead,
//         requestedProject?.secondaryTechnicalLead
//       ]
//         .filter(Boolean)
//         .map(({ email }) => email),
//       from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//       subject:
//         "Contact information for your product on Private Cloud Openshift platform has changed"
//     });
//   }

//   // *** Quota changed and Project Contact Change
//   if (quotaChanged && contactChanged) {
//     await ChesService.send({
//       bodyType: "html",
//       body: swig.renderFile(
//         "./src/ches/new-templates/super-admin-request-email.html",
//         generateEmailTemplateData(project, requestedProject, args, {
//           requestType: "Quota editing",
//           isProvisioningRequest: false,
//           isQuotaRequest: true
//         })
//       ),
//       //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
//       to: adminEmails,
//       from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//       subject: `New Quota editing request in Registry waiting for your approval`
//     });

//     await ChesService.send({
//       bodyType: "html",
//       body: swig.renderFile(
//         "./src/ches/new-templates/quota-and-tlpo-changes.html",
//         generateEmailTemplateData(project, requestedProject, args)
//       ),
//       // Sent to all new, current, and prior project contacts upon form submit. Contacts who were just removed should also receive this email alerting them to these changes.
//       to: [
//         project.projectOwner,
//         project.primaryTechnicalLead,
//         project.secondaryTechnicalLead,
//         requestedProject.projectOwner,
//         requestedProject.primaryTechnicalLead,
//         requestedProject.secondaryTechnicalLead
//       ]
//         .filter(Boolean)
//         .map(({ email }) => email),
//       from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//       subject: `${requestedProject.name} quota and product contact change request received`
//     });
//   }

//   // *** What about no quota change and no contact change?
// };
