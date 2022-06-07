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
  productionNamespace: ({
    productionCpuQuota,
    productionMemoryQuota,
    productionStorageQuota,
    productionSnapshotQuota,
  }) => ({
    cpu: productionCpuQuota,
    memory: productionMemoryQuota,
    storage: productionStorageQuota,
    snapshot: productionSnapshotQuota,
  }),
  testNamespace: ({
    testCpuQuota,
    testnMemoryQuota,
    testStorageQuota,
    testSnapshotQuota,
  }) => ({
    cpu: testCpuQuota,
    memory: testnMemoryQuota,
    storage: testStorageQuota,
    snapshot: testSnapshotQuota,
  }),
  developmentNamespace: ({
    developmentCpuQuota,
    developmentMemoryQuota,
    developmentStorageQuota,
    developmentSnapshotQuota,
  }) => ({
    cpu: developmentCpuQuota,
    memory: developmentMemoryQuota,
    storage: developmentStorageQuota,
    snapshot: developmentSnapshotQuota,
  }),
  toolsNamespace: ({
    toolsCpuQuota,
    toolsMemoryQuota,
    toolsStorageQuota,
    toolsSnapshotQuota,
  }) => ({
    cpu: toolsCpuQuota,
    memory: toolsMemoryQuota,
    storage: toolsStorageQuota,
    snapshot : toolsSnapshotQuota,
  }),
};

export default PrivateCloudProject;
