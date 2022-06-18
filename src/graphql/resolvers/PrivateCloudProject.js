const PrivateCloudProject = {
  id: ({ _id }) => _id.toString(),
  createdBy: ({ createdBy }, _, { dataSources: { users } }) =>
    users.findOneById(createdBy),
  projectOwner: ({ projectOwner }, _, { dataSources: { users } }) =>
    users.findOneById(projectOwner),
  technicalLeads: ({ technicalLeads }, _, { dataSources: { users } }) =>
    users.findManyByIds(technicalLeads),
  requestHistory: (
    { requestHistory },
    _,
    { dataSources: { privateCloudArchivedRequests } }
  ) => privateCloudArchivedRequests.findManyByIds(requestHistory),
  productionQuota: ({
    cpuRequests,
    cpuLimits,
    memoryRequests,
    memoryLimits,
    storageBlock,
    storageFile,
    storageBackup,
    storageCapacity,
    storagePvcCount,
    snapshoCount,
  }) => ({
    cpu: { requests: cpuRequests, limits: cpuLimits },
    memory: { requests: memoryRequests, limits: memoryLimits },
    storage: {
      block: storageBlock,
      file: storageFile,
      backup: storageBackup,
      capacity: storageCapacity,
      pvcCount: storagePvcCount,
    },
    snapshot: { count: snapshoCount },
  }),
  testQuota: ({
    cpuRequests,
    cpuLimits,
    memoryRequests,
    memoryLimits,
    storageBlock,
    storageFile,
    storageBackup,
    storageCapacity,
    storagePvcCount,
    snapshoCount,
  }) => ({
    cpu: { requests: cpuRequests, limits: cpuLimits },
    memory: { requests: memoryRequests, limits: memoryLimits },
    storage: {
      block: storageBlock,
      file: storageFile,
      backup: storageBackup,
      capacity: storageCapacity,
      pvcCount: storagePvcCount,
    },
    snapshot: { count: snapshoCount },
  }),
  developmentQuota: ({
    cpuRequests,
    cpuLimits,
    memoryRequests,
    memoryLimits,
    storageBlock,
    storageFile,
    storageBackup,
    storageCapacity,
    storagePvcCount,
    snapshoCount,
  }) => ({
    cpu: { requests: cpuRequests, limits: cpuLimits },
    memory: { requests: memoryRequests, limits: memoryLimits },
    storage: {
      block: storageBlock,
      file: storageFile,
      backup: storageBackup,
      capacity: storageCapacity,
      pvcCount: storagePvcCount,
    },
    snapshot: { count: snapshoCount },
  }),
  toolsQuota: ({
    cpuRequests,
    cpuLimits,
    memoryRequests,
    memoryLimits,
    storageBlock,
    storageFile,
    storageBackup,
    storageCapacity,
    storagePvcCount,
    snapshoCount,
  }) => ({
    cpu: { requests: cpuRequests, limits: cpuLimits },
    memory: { requests: memoryRequests, limits: memoryLimits },
    storage: {
      block: storageBlock,
      file: storageFile,
      backup: storageBackup,
      capacity: storageCapacity,
      pvcCount: storagePvcCount,
    },
    snapshot: { count: snapshoCount },
  }),
};

export default PrivateCloudProject;
