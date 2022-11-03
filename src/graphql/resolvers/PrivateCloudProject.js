const PrivateCloudProject = {
  id: ({ _id }) => _id.toString(),
  createdBy: ({ createdBy }, _, { dataSources: { users } }) =>
    users.findOneById(createdBy),
  projectOwner: ({ projectOwner }, _, { dataSources: { users } }) =>
    users.findOneById(projectOwner),
  primaryTechnicalLead: (
    { primaryTechnicalLead },
    _,
    { dataSources: { users } }
  ) => users.findOneById(primaryTechnicalLead),
  secondaryTechnicalLead: (
    { secondaryTechnicalLead },
    _,
    { dataSources: { users } }
  ) => users.findOneById(secondaryTechnicalLead),
  activeEditRequest: async (
    { _id },
    _,
    { dataSources: { privateCloudActiveRequests } }
  ) => {
    const [request] = await privateCloudActiveRequests.findByFields({
      project: _id,
    });

    return request;
  },

  requestHistory: (
    { requestHistory },
    _,
    { dataSources: { privateCloudArchivedRequests } }
  ) => privateCloudArchivedRequests.findManyByIds(requestHistory),
  productionQuota: ({
    productionQuota: {
      cpuRequests,
      cpuLimits,
      memoryRequests,
      memoryLimits,
      storageBlock,
      storageFile,
      storageBackup,
      storageCapacity,
      storagePvcCount,
      snapshotCount,
    },
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
    snapshot: { count: snapshotCount },
  }),
  testQuota: ({
    testQuota: {
      cpuRequests,
      cpuLimits,
      memoryRequests,
      memoryLimits,
      storageBlock,
      storageFile,
      storageBackup,
      storageCapacity,
      storagePvcCount,
      snapshotCount,
    },
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
    snapshot: { count: snapshotCount },
  }),
  developmentQuota: ({
    developmentQuota: {
      cpuRequests,
      cpuLimits,
      memoryRequests,
      memoryLimits,
      storageBlock,
      storageFile,
      storageBackup,
      storageCapacity,
      storagePvcCount,
      snapshotCount,
    },
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
    snapshot: { count: snapshotCount },
  }),
  toolsQuota: ({
    toolsQuota: {
      cpuRequests,
      cpuLimits,
      memoryRequests,
      memoryLimits,
      storageBlock,
      storageFile,
      storageBackup,
      storageCapacity,
      storagePvcCount,
      snapshotCount,
    },
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
    snapshot: { count: snapshotCount },
  }),
  count: (_, __, { dataSources: { privateCloudProjects } }) =>
    privateCloudProjects.collection.count(),
};

export default PrivateCloudProject;
