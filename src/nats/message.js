// Create a test env variable that prefix the namespace name with "t"

function message(
  action,
  projectOwner,
  primaryTechnicalLead,
  secondaryTechnicalLead,
  requestedProject
) {
  const {
    _id, // Use ID from actaul project, not from requested project
    licencePlate,
    name,
    description,
    ministry,
    cluster,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota
  } = requestedProject;

  const projectOwnerContact = {
    user_id: projectOwner.githubId,
    provider: "github",
    email: projectOwner.email,
    rocketchat_username: null,
    role: "owner"
  };

  const primaryTechnicalLeadContact = {
    user_id: primaryTechnicalLead.githubId,
    provider: "github",
    email: primaryTechnicalLead.email,
    rocketchat_username: null,
    role: "lead"
  };

  const secondaryTechnicalLeadContact = {
    user_id: secondaryTechnicalLead.githubId,
    provider: "github",
    email: secondaryTechnicalLead.email,
    rocketchat_username: null,
    role: "lead"
  };

  const namespaces = [
    { quotaName: "tools", quota: toolsQuota },
    { quotaName: "prod", productionQuota },
    { quotaName: "dev", quota: developmentQuota },
    { quotaName: "test", quota: testQuota }
  ].map((quota) => ({
    // namespace_id: 21,
    name: `${licencePlate}-${quotaName}`,
    quota: {
      cpu: `cpu-request-${quota.cpuRequests}-limit-${quota.cpuLimits}`,
      memory: `memory-request-${quota.memoryRequests}-limit-${quota.memoryLimits}`,
      storage: `storage-${quota.storageFile}`,
      snapshot: `snapshot-${quota.snapshotCount}`
    },
    quotas: {
      cpu: { requests: quota.cpuRequests, limits: quota.cpuLimits },
      memory: {
        requests: `${quota.memoryRequests}Gi`,
        limits: `${quota.memoryLimits}Gi`
      },
      storage: {
        block: `${quota.storageBlock}Gi`,
        file: `${quota.storageFile}Gi`,
        backup: `${quota.storageBackup}Mi`,
        capacity: `${quota.storageCapacity}Gi`,
        pvc_count: `${quota.storagePvcCount}`
      },
      snapshot: { count: quota.snapshotCount }
    }
  }));

  const request = {
    action,
    profile_id: _id,
    cluster_id: 3, // Cluster id e.g gold, silver, klab (enum)
    cluster_name: cluster,
    display_name: name,
    description: description,
    ministry_id: ministry,
    merge_type: "auto", // Make this a variable
    namespaces,
    contacts: [
      projectOwnerContact,
      primaryTechnicalLeadContact,
      secondaryTechnicalLeadContact
    ]
  };

  return request;
}

export default message;
