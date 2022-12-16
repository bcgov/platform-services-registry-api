import dotenv from "dotenv";
dotenv.config();
import ChesService from "./chesService.js";
import swig from "swig";
// Use the chesService object to send emails, make sure you have the
// following environment variables set in your .env file in THIS directory:

const chesService = new ChesService({
  tokenUrl: process.env.CHES_TOKEN_URL,
  clientId: process.env.CHES_CLIENT_ID,
  clientSecret: process.env.CHES_CLIENT_SECRET,
  apiUrl: process.env.CHES_API_URL
});

// chesService.send({
//   bodyType: "html",
//   body: "This is a test email from my new script",
//   to: ["zhanna.kolesnyk@gov.bc.ca"],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: `**profile.name** OCP 4 Project Set`
// });

//Quota Changes and TL/PO Changes 

chesService.send({
  bodyType: "html",
  body: swig.renderFile(
    "../new-templates/quota-and-tlpo-changes.html",
    {
      isQuotaRequest: false,
      consoleURLProdNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-prod`,
      isProductionQuotaChanged: true,
      productionQuotaCPURequested: null,
      productionQuotaMemoryRequested: "new quota",
      productionQuotaStorageRequested: "new quota",
      isDevelopmentQuotaChanged: true,
      consoleURLDevNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-dev`,
      developmentQuotaCPURequested: "new quota",
      developmentQuotaMemoryRequested: null,
      developmentQuotaStorageRequested: "new quota",
      isTestQuotaChanged: true,
      consoleURLTestNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-test`,
      testQuotaCPURequested: "new quota",
      testQuotaMemoryRequested: "new quota",
      testQuotaStorageRequested: null,
      isToolsQuotaChanged: false,
      consoleURLToolNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-tool`,
      toolsQuotaCPURequested: "new quota",
      toolsQuotaMemoryRequested: "new quota",
      toolsQuotaStorageRequested: "new quota",
      productionQuotaCPUCurrent: "current quota",
      productionQuotaMemoryCurrent: "current quota",
      productionQuotaStorageCurrent: "current quota",
      developmentQuotaCPUCurrent: "current quota",
      developmentQuotaMemoryCurrent: "current quota",
      developmentQuotaStorageCurrent: "current quota",
      testQuotaCPUCurrent: "current quota",
      testQuotaMemoryCurrent: "current quota",
      testQuotaStorageCurrent: "current quota",
      toolsQuotaCPUCurrent: "current quota",
      toolsQuotaMemoryCurrent: "current quota",
      toolsQuotaStorageCurrent: "current quota",
      projectName: "test name",
      productDescription: "test description",
      productMinistry: "CITZ",
      POName: "firstName lastName",
      POEmail: "owner@mail.com",
      POGitHub: 'POGitHub',
      POIDIR: "POIDIR",
      PriTLName: "firstName lastName",
      PriTLEmail: "PriTLEmail@mail.com",
      PriTLGitHub: 'PriTLGitHub',
      PriTLIDIR: 'PriTLIDIR',
      SecTLName: "firstName lastName",
      SecTLEmail: "SecTLEmail@mail.com",
      SecTLGitHub: 'SecTLGitHub',
      SecTLIDIR: 'SecTLIDIR',
      setCluster: 'silver',
      licencePlate: 'ggg554',
    }
  ),
  // Sent to all new, current, and prior project contacts upon form submit. Contacts who were just removed should also receive this email alerting them to these changes.
  to: ['zhanna.kolesnyk@gov.bc.ca'],
  from: "Registry <PlatformServicesTeam@gov.bc.ca>",
  subject: 'ProjectName quota and product contact change request received',
});

//Deletion Request Completion

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/deletion-request-completion-email.html",
//     {
//           productDescription: 'productDescription',
//           productMinistry: 'productMinistry',
//           projectName: "test name",
//           POName: "firstName lastName",
//           POEmail: "owner@mail.com",
//           POGitHub: 'POGitHub',
//           POIDIR: "POIDIR",
//           PriTLName: "firstName lastName",
//           PriTLEmail: "PriTLEmail@mail.com",
//           PriTLGitHub: 'PriTLGitHub',
//           PriTLIDIR: 'PriTLIDIR',
//           SecTLName: "firstName lastName",
//           SecTLEmail: "SecTLEmail@mail.com",
//           SecTLGitHub: 'SecTLGitHub',
//           SecTLIDIR: 'SecTLIDIR',
//           setCluster: 'silver',
//           licencePlate: 'ggg554',
//     }
//   ),
//   // For all project contacts. Sent when Provisioner processes the project set deletion request in Openshift
//   to: ['zhanna.kolesnyk@gov.bc.ca'],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: 'Your product deletion request has been completed',
// }); 


//Deletion Request Confirmation

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/deletion-request-confirmation-email.html",
//     {
//     productDescription: 'productDescription',
//     productMinistry: 'productMinistry',
//     projectName: "test name",
//           POName: "firstName lastName",
//           POEmail: "owner@mail.com",
//           POGitHub: 'POGitHub',
//           POIDIR: "POIDIR",
//           PriTLName: "firstName lastName",
//           PriTLEmail: "PriTLEmail@mail.com",
//           PriTLGitHub: 'PriTLGitHub',
//           PriTLIDIR: 'PriTLIDIR',
//           SecTLName: "firstName lastName",
//           SecTLEmail: "SecTLEmail@mail.com",
//           SecTLGitHub: 'SecTLGitHub',
//           SecTLIDIR: 'SecTLIDIR',
//           setCluster: 'silver',
//           licencePlate: 'ggg554',
//     }
//   ),
//   // For all project contacts. Sent when the project set deletion request is successfully submitted
//   to: ['zhanna.kolesnyk@gov.bc.ca'],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: `projectName deletion request received`,
// }); 


//Quota Request Completion

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/quota-request-completion-email.html",
//     {
//       consoleURL: `https://console.apps.silver.devops.gov.bc.ca/`,
//       humanActionComment: 'humanActionComment',
//       consoleURLProdNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-prod`,
//       isProductionQuotaChanged: true,
//       productionQuotaCPURequested: null,
//       productionQuotaMemoryRequested: "new quota",
//       productionQuotaStorageRequested: "new quota",
//       isDevelopmentQuotaChanged: true,
//       consoleURLDevNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-dev`,
//       developmentQuotaCPURequested: "new quota",
//       developmentQuotaMemoryRequested: null,
//       developmentQuotaStorageRequested: "new quota",
//       isTestQuotaChanged: true,
//       consoleURLTestNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-test`,
//       testQuotaCPURequested: "new quota",
//       testQuotaMemoryRequested: "new quota",
//       testQuotaStorageRequested: null,
//       isToolsQuotaChanged: false,
//       consoleURLToolNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-tool`,
//       toolsQuotaCPURequested: "new quota",
//       toolsQuotaMemoryRequested: "new quota",
//       toolsQuotaStorageRequested: "new quota",
//       projectName: "test name",
//       POName: "firstName lastName",
//       POEmail: "owner@mail.com",
//       POGitHub: 'POGitHub',
//       POIDIR: "POIDIR",
//       PriTLName: "firstName lastName",
//       PriTLEmail: "PriTLEmail@mail.com",
//       PriTLGitHub: 'PriTLGitHub',
//       PriTLIDIR: 'PriTLIDIR',
//       SecTLName: "firstName lastName",
//       SecTLEmail: "SecTLEmail@mail.com",
//       SecTLGitHub: 'SecTLGitHub',
//       SecTLIDIR: 'SecTLIDIR',
//       setCluster: 'silver',
//       licencePlate: 'ggg554',
//     }
//   ),
//   // For all project contacts
//   to: ["zhanna.kolesnyk@gov.bc.ca"],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: 'Resource quota for your product in Private Cloud Openshift Platform has changed',
// });

//Provisioning Request Completion Email

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/provisioning-request-completion-email.html",
//     {
//      consoleURL:`https://console.apps.silver.devops.gov.bc.ca/`,
//       humanActionComment: 'humanActionComment',
//       projectName: "projectName",
//       POName: "projectOwner.firstName  projectOwner.lastName",
//       POEmail: 'projectOwner.email',
//       PriTLName: 'primaryTechnicalLead.firstName primaryTechnicalLead.lastName',
//       PriTLEmail: 'PriTLEmail',
//       PriTLGitHub: 'PriTLGitHub',
//       PriTLIDIR: 'PriTLIDIR',
//       SecTLName: 'secondaryTechnicalLead.firstName secondaryTechnicalLead.lastName',
//       SecTLEmail: 'SecTLEmail',
//       SecTLGitHub: 'SecTLGitHub',
//       SecTLIDIR: 'SecTLIDIR',
//       setCluster: "silver",
//       licencePlate: "XXXXXX",
//           }
//   ),
//   //For all project contacts. Sent when the provisioner application has finished provisioning the new namespaces for a product.
//   to: ["zhanna.kolesnyk@gov.bc.ca"],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: 'Your provisioning request for Private Cloud OpenShift Platform has been completed',
//   });

//Request Denial Email

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/request-denial-email.html",
//     {
//       humanActionComment: 'humanActionComment',
//           isProvisioningRequest: false,
//           isQuotaRequest: false,
//           consoleURLProdNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-prod`,
//           isProductionQuotaChanged: true,
//           productionQuotaCPURequested: null,
//           productionQuotaMemoryRequested: "new quota",
//           productionQuotaStorageRequested: "new quota",
//           isDevelopmentQuotaChanged: true,
//           consoleURLDevNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-dev`,
//           developmentQuotaCPURequested: "new quota",
//           developmentQuotaMemoryRequested: null,
//           developmentQuotaStorageRequested: "new quota",
//           isTestQuotaChanged: true,
//           consoleURLTestNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-test`,
//           testQuotaCPURequested: "new quota",
//           testQuotaMemoryRequested: "new quota",
//           testQuotaStorageRequested: null,
//           isToolsQuotaChanged: false,
//           consoleURLToolNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-tool`,
//           toolsQuotaCPURequested: "new quota",
//           toolsQuotaMemoryRequested: "new quota",
//           toolsQuotaStorageRequested: "new quota",
//           productionQuotaCPUCurrent: "current quota",
//           productionQuotaMemoryCurrent: "current quota",
//           productionQuotaStorageCurrent: "current quota",
//           developmentQuotaCPUCurrent: "current quota",
//           developmentQuotaMemoryCurrent: "current quota",
//           developmentQuotaStorageCurrent: "current quota",
//           testQuotaCPUCurrent: "current quota",
//           testQuotaMemoryCurrent: "current quota",
//           testQuotaStorageCurrent: "current quota",
//           toolsQuotaCPUCurrent: "current quota",
//           toolsQuotaMemoryCurrent: "current quota",
//           toolsQuotaStorageCurrent: "current quota",
//           projectName: "test name",
//           productDescription: "test description",
//           productMinistry: "CITZ",
//           POName: "firstName lastName",
//           POEmail: "owner@mail.com",
//           POGitHub: 'POGitHub',
//           POIDIR: "POIDIR",
//           PriTLName: "firstName lastName",
//           PriTLEmail: "PriTLEmail@mail.com",
//           PriTLGitHub:'PriTLGitHub' ,
//           PriTLIDIR: 'PriTLIDIR',
//           SecTLName: "firstName lastName",
//           SecTLEmail: "SecTLEmail@mail.com",
//           SecTLGitHub: 'SecTLGitHub',
//           SecTLIDIR: 'SecTLIDIR',
//           setCluster: 'silver',
//           licencePlate: 'ggg554',
//     }
//   ),
//   // to all project contacts when any request (quota, provisioning, or deletion) is denied.
//    to: ["zhanna.kolesnyk@gov.bc.ca"],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: 'Projectname Deletion Request request has been rejected',
// });

//Product Contact Change Confirmation Email

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/product-contact-change-confirmation-email.html",
//     {
//       projectName: "projectName",
//       POName: "projectOwner.firstName  projectOwner.lastName",
//       POEmail: 'projectOwner.email',
//       PriTLName: 'primaryTechnicalLead.firstName primaryTechnicalLead.lastName',
//       PriTLEmail: 'PriTLEmail',
//       PriTLGitHub: 'PriTLGitHub',
//       PriTLIDIR: 'PriTLIDIR',
//       SecTLName: 'secondaryTechnicalLead.firstName secondaryTechnicalLead.lastName',
//       SecTLEmail: 'SecTLEmail',
//       SecTLGitHub: 'SecTLGitHub',
//       SecTLIDIR: 'SecTLIDIR',
//       setCluster: "silver",
//       licencePlate: "XXXXXX",
//      }
//   ),
//   // To all project contacts. Sent when a new provisioning request has been submitted successfully.
//   to: ["zhanna.kolesnyk@gov.bc.ca"],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//      subject: 'Contact information for your product on Private Cloud Openshift platform have changed',
//   });


// Quota Request Received Email

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/quota-request-received-email.html",
//     {
//       consoleURLProdNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-prod`,
//                 isProductionQuotaChanged: true,
//                 productionQuotaCPURequested: null,
//                 productionQuotaMemoryRequested: "new quota",
//                 productionQuotaStorageRequested: "new quota",
//                 isDevelopmentQuotaChanged: true,
//                 consoleURLDevNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-dev`,
//                 developmentQuotaCPURequested: "new quota",
//                 developmentQuotaMemoryRequested: null,
//                 developmentQuotaStorageRequested: "new quota",
//                 isTestQuotaChanged: true,
//                 consoleURLTestNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-test`,
//                 testQuotaCPURequested: "new quota",
//                 testQuotaMemoryRequested: "new quota",
//                 testQuotaStorageRequested: null,
//                 isToolsQuotaChanged: false,
//                 consoleURLToolNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-tool`,
//                 toolsQuotaCPURequested: "new quota",
//                 toolsQuotaMemoryRequested: "new quota",
//                 toolsQuotaStorageRequested: "new quota",
//                 productionQuotaCPUCurrent: "current quota",
//                 productionQuotaMemoryCurrent: "current quota",
//                 productionQuotaStorageCurrent: "current quota",
//                 developmentQuotaCPUCurrent: "current quota",
//                 developmentQuotaMemoryCurrent: "current quota",
//                 developmentQuotaStorageCurrent: "current quota",
//                 testQuotaCPUCurrent: "current quota",
//                 testQuotaMemoryCurrent: "current quota",
//                 testQuotaStorageCurrent: "current quota",
//                 toolsQuotaCPUCurrent: "current quota",
//                 toolsQuotaMemoryCurrent: "current quota",
//                 toolsQuotaStorageCurrent: "current quota",
//          licencePlate: "XXXXXX",
//          projectName: "projectName",
//                POName: "projectOwner.firstName  projectOwner.lastName",
//                POEmail: 'projectOwner.email',
//                PriTLName: 'primaryTechnicalLead.firstName primaryTechnicalLead.lastName',
//                PriTLEmail: 'PriTLEmail',
//                PriTLGitHub: 'PriTLGitHub',
//                PriTLIDIR: 'PriTLIDIR',
//                SecTLName: 'secondaryTechnicalLead.firstName secondaryTechnicalLead.lastName',
//                SecTLEmail: 'SecTLEmail',
//                SecTLGitHub: 'SecTLGitHub',
//                SecTLIDIR: 'SecTLIDIR',
//                setCluster: "silver",
//      }
//   ),
//   // For all project contacts. Sent when a new quota edit request is submitted successfully.
//    to: ['zhanna.kolesnyk@gov.bc.ca'],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: `ProjectName quota change request received`,
//   });

//Provisioning Request Received Email

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/provisioning-request-received-email.html",
//     {
//       projectName: "projectName",
//       productDescription: 'productDescription',
//       productMinistry: 'productMinistry',
//       POName: "projectOwner.firstName  projectOwner.lastName",
//       POEmail: 'projectOwner.email',
//       PriTLName: 'primaryTechnicalLead.firstName primaryTechnicalLead.lastName',
//       PriTLEmail: 'PriTLEmail',
//       PriTLGitHub: 'PriTLGitHub',
//       PriTLIDIR: 'PriTLIDIR',
//       SecTLName: 'secondaryTechnicalLead.firstName secondaryTechnicalLead.lastName',
//       SecTLEmail: 'SecTLEmail',
//       SecTLGitHub: 'SecTLGitHub',
//       SecTLIDIR: 'SecTLIDIR',
//       setCluster: "silver",
//      }
//   ),
//   // To all project contacts. Sent when a new provisioning request has been submitted successfully.
//    to: ["zhanna.kolesnyk@gov.bc.ca"],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: `ProjectName provisioning request received`,
//   });



//Super Admin Request Email

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/super-admin-request-email.html",
//         {
//           isProvisioningRequest: true,
//           isQuotaRequest: true,
//           consoleURLProdNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-prod`,
//           isProductionQuotaChanged: true,
//           productionQuotaCPURequested: null,
//           productionQuotaMemoryRequested: "new quota",
//           productionQuotaStorageRequested: "new quota",
//           isDevelopmentQuotaChanged: true,
//           consoleURLDevNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-dev`,
//           developmentQuotaCPURequested: "new quota",
//           developmentQuotaMemoryRequested: null,
//           developmentQuotaStorageRequested: "new quota",
//           isTestQuotaChanged: true,
//           consoleURLTestNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-test`,
//           testQuotaCPURequested: "new quota",
//           testQuotaMemoryRequested: "new quota",
//           testQuotaStorageRequested: null,
//           isToolsQuotaChanged: false,
//           consoleURLToolNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-tool`,
//           toolsQuotaCPURequested: "new quota",
//           toolsQuotaMemoryRequested: "new quota",
//           toolsQuotaStorageRequested: "new quota",
//           productionQuotaCPUCurrent: "current quota",
//           productionQuotaMemoryCurrent: "current quota",
//           productionQuotaStorageCurrent: "current quota",
//           developmentQuotaCPUCurrent: "current quota",
//           developmentQuotaMemoryCurrent: "current quota",
//           developmentQuotaStorageCurrent: "current quota",
//           testQuotaCPUCurrent: "current quota",
//           testQuotaMemoryCurrent: "current quota",
//           testQuotaStorageCurrent: "current quota",
//           toolsQuotaCPUCurrent: "current quota",
//           toolsQuotaMemoryCurrent: "current quota",
//           toolsQuotaStorageCurrent: "current quota",
//           projectName: "test name",
//           productDescription: "test description",
//           productMinistry: "CITZ",
//           POName: "firstName lastName",
//           POEmail: "owner@mail.com",
//           POGitHub: 'POGitHub',
//           POIDIR: "POIDIR",
//           PriTLName: "firstName lastName",
//           PriTLEmail: "PriTLEmail@mail.com",
//           PriTLGitHub:'PriTLGitHub' ,
//           PriTLIDIR: 'PriTLIDIR',
//           SecTLName: "firstName lastName",
//           SecTLEmail: "SecTLEmail@mail.com",
//           SecTLGitHub: 'SecTLGitHub',
//           SecTLIDIR: 'SecTLIDIR',
//           setCluster: 'silver',
//           licencePlate: 'ggg554',
//         }
//       ),
//       //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
//       to: ['zhanna@bcdevexchange.org'],
//       from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//       subject: `New QUOTA REQUEST request in Registry waiting for your approval`,
//     });


//Deletion Request Completion Email

// chesService.send({
//   bodyType: "html",
//   body: swig.renderFile(
//     "../new-templates/deletion-request-completion-email.html",
//     {
//     productDescription: "productDescription",
//       projectName: 'projectName',
//       productDescription: 'productDescription',
//       productMinistry: 'productMinistry',
//       POName: 'projectOwner.firstName projectOwner.lastName',
//       POEmail: 'projectOwner.email',
//       POGitHub: 'POGitHub',
//       POIDIR: 'POIDIR',
//       PriTLName: 'primaryTechnicalLead.firstName  primaryTechnicalLead.lastName',
//       PriTLEmail: 'PriTLEmail',
//       PriTLGitHub: 'PriTLGitHub',
//       PriTLIDIR: 'PriTLIDIR',
//       SecTLName: null,
//       SecTLEmail: 'SecTLEmail',
//       SecTLGitHub: 'SecTLGitHub',
//       SecTLIDIR: 'SecTLIDIR',
//       licencePlate: 'xxxxxx',
//       setCluster: "silver",
//     }
//   ),
//   // For all project contacts. Sent when Provisioner processes the project set deletion request in Openshift
//   to: ["zhanna.kolesnyk@gov.bc.ca"],
//   from: "Registry <PlatformServicesTeam@gov.bc.ca>",
//   subject: 'Your product deletion request has been completed',
// });