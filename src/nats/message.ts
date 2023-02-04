import {
  Cluster,
  RequestType,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions,
  testMessage
} from "./constants.js";

// Create a test env variable that prefix the namespace name with "t"
function message(action, requestedProject) {
  let {
    id, // Use ID from actaul project, not from requested project
    licencePlate,
    name,
    description,
    ministry,
    cluster,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead,
  } = requestedProject;

  const snapshot = {
    name: "snapshot-5",
    snapshotCount: 5,
  };

  testQuota = {
    cpu: DefaultCpuOptions[testQuota.cpu],
    memory: DefaultMemoryOptions[testQuota.memory],
    storage: DefaultStorageOptions[testQuota.storage],
  };

  productionQuota = {
    cpu: DefaultCpuOptions[productionQuota.cpu],
    memory: DefaultMemoryOptions[productionQuota.memory],
    storage: DefaultStorageOptions[productionQuota.storage],
  };

  developmentQuota = {
    cpu: DefaultCpuOptions[developmentQuota.cpu],
    memory: DefaultMemoryOptions[developmentQuota.memory],
    storage: DefaultStorageOptions[developmentQuota.storage],
  };

  toolsQuota = {
    cpu: DefaultCpuOptions[toolsQuota.cpu],
    memory: DefaultMemoryOptions[toolsQuota.memory],
    storage: DefaultStorageOptions[toolsQuota.storage],
  };

  const projectOwnerContact = {
    user_id: projectOwner.githubId,
    provider: "github",
    email: projectOwner.email,
    rocketchat_username: null,
    role: "owner",
  };

  const primaryTechnicalLeadContact = {
    user_id: primaryTechnicalLead.githubId,
    provider: "github",
    email: primaryTechnicalLead.email,
    rocketchat_username: null,
    role: "lead",
  };

  const secondaryTechnicalLeadContact = secondaryTechnicalLead
    ? {
        user_id: secondaryTechnicalLead.githubId,
        provider: "github",
        email: secondaryTechnicalLead.email,
        rocketchat_username: null,
        role: "lead",
      }
    : null;

  const namespaces = [
    { quotaName: "tools", quota: toolsQuota },
    { quotaName: "prod", quota: productionQuota },
    { quotaName: "dev", quota: developmentQuota },
    { quotaName: "test", quota: testQuota },
  ].map(({ quotaName, quota }) => ({
    // namespace_id: 21,
    name: `${licencePlate}-${[quotaName]}`,
    quota: {
      cpu: quota.cpu.name,
      memory: quota.memory.name,
      storage: quota.storage.name,
      snapshot: snapshot.name,
    },
    quotas: {
      cpu: { requests: quota.cpu.cpuRequests, limits: quota.cpu.cpuLimits },
      memory: {
        requests: quota.memory.memoryRequests,
        limits: quota.memory.memoryLimits,
      },
      storage: {
        block: "1Gi",
        file: quota.storage.storageFile,
        backup: quota.storage.storageBackup,
        capacity: "1Gi",
        pvc_count: quota.storage.storagePvcCount,
      },
      snapshot: { count: snapshot.snapshotCount },
    },
  }));

  const request = {
    action: RequestType[action],
    profile_id: id,
    // cluster_id: cluster,
    cluster_name: Cluster[cluster],
    display_name: name,
    description: description,
    ministry_id: ministry,
    merge_type: "auto", // Make this a variable
    namespaces,
    contacts: [
      projectOwnerContact,
      primaryTechnicalLeadContact,
      secondaryTechnicalLeadContact,
    ].filter(Boolean),
  };

  // return request;
  return testMessage
}

export default message;
