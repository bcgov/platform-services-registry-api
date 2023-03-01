export const adminEmails = [];

export const clusterNames = [
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

export const emailData = (
  requestedProject,
  project,
  projectOwner,
  primaryTechnicalLead,
  secondaryTechnicalLead,
  obj
) => {
  const objMain = {
    consoleURLProdNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-prod`,
    isProductionQuotaChanged:
      requestedProject &&
      project &&
      JSON.stringify(project.productionQuota) !==
        JSON.stringify(requestedProject.productionQuota),
    productionQuotaCPURequested:
      requestedProject &&
      project &&
      requestedProject.productionQuota.cpuRequests !==
        project.productionQuota.cpuRequests
        ? requestedProject.productionQuota.cpuRequests
        : null,
    productionQuotaMemoryRequested:
      requestedProject &&
      project &&
      requestedProject.productionQuota.memoryRequests !==
        project.productionQuota.memoryRequests
        ? requestedProject.productionQuota.memoryRequests
        : null,
    productionQuotaStorageRequested:
      requestedProject &&
      project &&
      requestedProject.productionQuota.storageFile !==
        project.productionQuota.storageFile
        ? requestedProject.productionQuota.storageFile
        : null,
    isDevelopmentQuotaChanged:
      requestedProject &&
      project &&
      JSON.stringify(project.developmentQuota) !==
        JSON.stringify(requestedProject.developmentQuota),
    consoleURLDevNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-dev`,
    developmentQuotaCPURequested:
      requestedProject &&
      project &&
      requestedProject.developmentQuota.cpuRequests !==
        project.developmentQuota.cpuRequests
        ? requestedProject.developmentQuota.cpuRequests
        : null,
    developmentQuotaMemoryRequested:
      requestedProject &&
      project &&
      requestedProject.developmentQuota.memoryRequests !==
        project.developmentQuota.memoryRequests
        ? requestedProject.developmentQuota.memoryRequests
        : null,
    developmentQuotaStorageRequested:
      requestedProject &&
      project &&
      requestedProject.developmentQuota.storageFile !==
        project.developmentQuota.storageFile
        ? requestedProject.developmentQuota.storageFile
        : null,
    isTestQuotaChanged:
      requestedProject &&
      project &&
      JSON.stringify(project.testQuota) !==
        JSON.stringify(requestedProject.testQuota),
    consoleURLTestNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-test`,
    testQuotaCPURequested:
      requestedProject &&
      project &&
      requestedProject.testQuota.cpuRequests !== project.testQuota.cpuRequests
        ? requestedProject.testQuota.cpuRequests
        : null,
    testQuotaMemoryRequested:
      requestedProject &&
      project &&
      requestedProject.testQuota.memoryRequests !==
        project.testQuota.memoryRequests
        ? requestedProject.testQuota.memoryRequests
        : null,
    testQuotaStorageRequested:
      requestedProject &&
      project &&
      requestedProject.testQuota.storageFile !== project.testQuota.storageFile
        ? requestedProject.testQuota.storageFile
        : null,
    isToolsQuotaChanged:
      requestedProject &&
      project &&
      JSON.stringify(project.toolsQuota) !==
        JSON.stringify(requestedProject.toolsQuota),
    consoleURLToolNameSpace: `https://console.apps.${requestedProject.cluster}.devops.gov.bc.ca/topology/ns/${requestedProject.licencePlate}-tool`,
    toolsQuotaCPURequested:
      requestedProject &&
      project &&
      requestedProject.toolsQuota.cpuRequests !== project.toolsQuota.cpuRequests
        ? requestedProject.toolsQuota.cpuRequests
        : null,
    toolsQuotaMemoryRequested:
      requestedProject &&
      project &&
      requestedProject.toolsQuota.memoryRequests !==
        project.toolsQuota.memoryRequests
        ? requestedProject.toolsQuota.memoryRequests
        : null,
    toolsQuotaStorageRequested:
      requestedProject &&
      project &&
      requestedProject.toolsQuota.storageFile !== project.toolsQuota.storageFile
        ? requestedProject.toolsQuota.storageFile
        : null,
    productionQuotaCPUCurrent: project
      ? project.productionQuota.cpuRequests
      : null,
    productionQuotaMemoryCurrent: project
      ? project.productionQuota.memoryRequests
      : null,
    productionQuotaStorageCurrent: project
      ? project.productionQuota.storageFile
      : null,
    developmentQuotaCPUCurrent: project
      ? project.developmentQuota.cpuRequests
      : null,
    developmentQuotaMemoryCurrent: project
      ? project.developmentQuota.memoryRequests
      : null,
    developmentQuotaStorageCurrent: project
      ? project.developmentQuota.storageFile
      : null,
    testQuotaCPUCurrent: project ? project.testQuota.cpuRequests : null,
    testQuotaMemoryCurrent: project ? project.testQuota.memoryRequests : null,
    testQuotaStorageCurrent: project ? project.testQuota.storageFile : null,
    toolsQuotaCPUCurrent: project ? project.toolsQuota.cpuRequests : null,
    toolsQuotaMemoryCurrent: project ? project.toolsQuota.memoryRequests : null,
    toolsQuotaStorageCurrent: project ? project.toolsQuota.storageFile : null,
    licencePlate: requestedProject.licencePlate,
    projectName: requestedProject.name,
    POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
    POEmail: projectOwner.email,
    POGitHubOrIDIR: projectOwner.POIDIR
      ? projectOwner.POIDIR
      : projectOwner.githubId,
    PriTLName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
    PriTLEmail: primaryTechnicalLead.email,
    PriTLGitHubOrIDIR: primaryTechnicalLead.POIDIR
      ? primaryTechnicalLead.POIDIR
      : primaryTechnicalLead.githubId,
    SecTLName: secondaryTechnicalLead
      ? `${secondaryTechnicalLead.firstName} ${secondaryTechnicalLead.lastName}`
      : null,
    SecTLEmail: secondaryTechnicalLead ? secondaryTechnicalLead.email : null,
    SecTLGitHubOrIDIR: secondaryTechnicalLead
      ? secondaryTechnicalLead.POIDIR
        ? secondaryTechnicalLead.POIDIR
        : secondaryTechnicalLead.githubId
      : null,
    setCluster: clusterNames.filter(
      (item) => item.name === requestedProject.cluster
    )[0].humanFriendlyName
  };
  return {
    ...objMain,
    ...obj
  };
};
