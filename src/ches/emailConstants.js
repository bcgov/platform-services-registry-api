export const adminEmails = ['zhanna.kolesnyk@gov.bc.ca', 'zhanna@bcdevexchange.org']

export const clusterNames = [
    {
    id: 1,
    name: 'clab',
    humanFriendlyName: 'CLAB Calgary',
  },
  {
    id: 2,
    name: 'klab',
    humanFriendlyName: 'KLAB Kamloops',
  },
  {
    id: 3,
    name: 'silver',
    humanFriendlyName: 'Silver Kamloops',
  },
 {
    id: 4,
    name: 'gold',
    humanFriendlyName: 'Gold Kamloops',
  },
 {
    id: 5,
    name: 'golddr',
    humanFriendlyName: 'Gold (DR) Calgary',
  },
 {
    id: 6,
    name: 'klab2',
    humanFriendlyName: 'KLAB2 Kamloops',
  },
{
    id: 7,
    name: 'emerald',
    humanFriendlyName: 'Emerald Hosting Tier',
  },
]

export const emailData = (requestedProject,project, projectOwner, primaryTechnicalLead, secondaryTechnicalLead, obj) => {
  const objMain = {
    consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
    isProductionQuotaChanged: JSON.stringify(project.productionQuota) !== JSON.stringify(requestedProject.productionQuota),
    productionQuotaCPURequested: requestedProject.productionQuota.cpuRequests !== project.productionQuota.cpuRequests ? requestedProject.productionQuota.cpuRequests : null,
    productionQuotaMemoryRequested: requestedProject.productionQuota.memoryRequests !== project.productionQuota.memoryRequests ? requestedProject.productionQuota.memoryRequests : null,
    productionQuotaStorageRequested: requestedProject.productionQuota.storageFile !== project.productionQuota.storageFile ? requestedProject.productionQuota.storageFile : null,
    isDevelopmentQuotaChanged: JSON.stringify(project.developmentQuota) !== JSON.stringify(requestedProject.developmentQuota),
    consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
    developmentQuotaCPURequested: requestedProject.developmentQuota.cpuRequests !== project.developmentQuota.cpuRequests ? requestedProject.developmentQuota.cpuRequests : null,
    developmentQuotaMemoryRequested: requestedProject.developmentQuota.memoryRequests !== project.developmentQuota.memoryRequests ? requestedProject.developmentQuota.memoryRequests : null,
    developmentQuotaStorageRequested: requestedProject.developmentQuota.storageFile !== project.developmentQuota.storageFile ? requestedProject.developmentQuota.storageFile : null,
    isTestQuotaChanged: JSON.stringify(project.testQuota) !== JSON.stringify(requestedProject.testQuota),
    consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
    testQuotaCPURequested: requestedProject.testQuota.cpuRequests !== project.testQuota.cpuRequests ? requestedProject.testQuota.cpuRequests : null,
    testQuotaMemoryRequested: requestedProject.testQuota.memoryRequests !== project.testQuota.memoryRequests ? requestedProject.testQuota.memoryRequests : null,
    testQuotaStorageRequested: requestedProject.testQuota.storageFile !== project.testQuota.storageFile ? requestedProject.testQuota.storageFile : null,
    isToolsQuotaChanged: JSON.stringify(project.toolsQuota) !== JSON.stringify(requestedProject.toolsQuota),
    consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
    toolsQuotaCPURequested: requestedProject.toolsQuota.cpuRequests !== project.toolsQuota.cpuRequests ? requestedProject.toolsQuota.cpuRequests : null,
    toolsQuotaMemoryRequested: requestedProject.toolsQuota.memoryRequests !== project.toolsQuota.memoryRequests ? requestedProject.toolsQuota.memoryRequests : null,
    toolsQuotaStorageRequested: requestedProject.toolsQuota.storageFile !== project.toolsQuota.storageFile ? requestedProject.toolsQuota.storageFile : null,
    productionQuotaCPUCurrent: project.productionQuota.cpuRequests,
    productionQuotaMemoryCurrent: project.productionQuota.memoryRequests,
    productionQuotaStorageCurrent: project.productionQuota.storageFile,
    developmentQuotaCPUCurrent: project.developmentQuota.cpuRequests,
    developmentQuotaMemoryCurrent: project.developmentQuota.memoryRequests,
    developmentQuotaStorageCurrent: project.developmentQuota.storageFile,
    testQuotaCPUCurrent: project.testQuota.cpuRequests,
    testQuotaMemoryCurrent: project.testQuota.memoryRequests,
    testQuotaStorageCurrent: project.testQuota.storageFile,
    toolsQuotaCPUCurrent: project.toolsQuota.cpuRequests,
    toolsQuotaMemoryCurrent: project.toolsQuota.memoryRequests,
    toolsQuotaStorageCurrent: project.toolsQuota.storageFile,
    licencePlate: requestedProject.licencePlate,
    projectName: requestedProject.name,
    POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
    POEmail: projectOwner.email,
    POGitHubOrIDIR: projectOwner.POIDIR ? projectOwner.POIDIR : projectOwner.githubId,
    PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
    PriTLEmail: primaryTechnicalLead.email,
    PriTLGitHubOrIDIR: primaryTechnicalLead.POIDIR ? primaryTechnicalLead.POIDIR : primaryTechnicalLead.githubId,
    SecTLName: secondaryTechnicalLead ? `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}` : null,
    SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead.email : null,
    SecTLGitHubOrIDIR: secondaryTechnicalLead ? secondaryTechnicalLead.POIDIR ? secondaryTechnicalLead.POIDIR : secondaryTechnicalLead.githubId : null,
    setCluster: clusterNames.filter(item => item.name === requestedProject.cluster)[0].humanFriendlyName,
  }
  return {
    ...objMain,
    ...obj
  }
}