// Create a test env variable that prefix the namespace name with "t"

function message(action, requestedProject) {
  const {
    _id, // Use ID from actaul project, not from requested project
    name,
    description,
    projectOwner,
    technicalLeads,
    ministry,
    cluster,
    productionCpuQuota,
    productionMemoryQuota,
    productionStorageQuota,
    productionSnapshotQuota,
    testCpuQuota,
    testMemoryQuota,
    testStorageQuota,
    testSnapshotQuota,
    developmentCpuQuota,
    developmentMemoryQuota,
    developmentStorageQuota,
    developmentSnapshotQuota,
    toolsCpuQuota,
    toolsnMemoryQuota,
    toolsStorageQuota,
    toolsSnapshotQuota,
    createdBy,
    archived,
    created,
    requestHistory,
    status,
  } = project;

  const request = {
    action,
    profile_id: _id, 
    cluster_id: 3, // Cluster id e.g gold, silver, klab (enum)
    cluster_name: cluster,
    display_name: name,
    description: description,
    ministry_id: ministry,
    merge_type: "auto", // Make this a variable
    namespaces: [
      {
        // namespace_id: 21, 
        name: `dad3d6-tools`, // Generate license plate using fn in current registry. Needs to be hex and 5 digits (or seven for test)
        quota: {
          cpu: toolsCpuQuota,
          memory: toolsnMemoryQuota,
          storage: toolsStorageQuota,
          snapshot: toolsSnapshotQuota,
        },
        quotas: {
          cpu: { requests: 0.5, limits: 1.5 },  // All variables ...
          memory: { requests: "2Gi", limits: "4Gi" },
          storage: {
            block: "1Gi",
            file: "1Gi",
            backup: "512Mi",
            capacity: "1Gi",
            pvc_count: 60,
          },
          snapshot: { count: 5 }, // Constant for now
        },
      },
      {
        namespace_id: 22,
        name: "dad3d6-dev",
        quota: {
          cpu: developmentCpuQuota,
          memory: developmentMemoryQuota,
          storage: developmentStorageQuota,
          snapshot: developmentSnapshotQuota,
        },
        quotas: {
          cpu: { requests: 0.5, limits: 1.5 },
          memory: { requests: "2Gi", limits: "4Gi" },
          storage: {
            block: "1Gi",
            file: "1Gi",
            backup: "512Mi",
            capacity: "1Gi",
            pvc_count: 60,
          },
          snapshot: { count: 5 },
        },
      },
      {
        namespace_id: 23,
        name: "dad3d6-test",
        quota: {
          cpu: testCpuQuota,
          memory: testMemoryQuota,
          storage: testStorageQuota,
          snapshot: testSnapshotQuota,
        },
        quotas: {
          cpu: { requests: 0.5, limits: 1.5 },
          memory: { requests: "2Gi", limits: "4Gi" },
          storage: {
            block: "1Gi",
            file: "1Gi",
            backup: "512Mi",
            capacity: "1Gi",
            pvc_count: 60,
          },
          snapshot: { count: 5 },
        },
      },
      {
        namespace_id: 24,
        name: "dad3d6-prod",
        quota: {
          cpu: productionCpuQuota,
          memory: productionMemoryQuota,
          storage: productionStorageQuota,
          snapshot: productionSnapshotQuota,
        },
        quotas: {
          cpu: { requests: 0.5, limits: 1.5 },
          memory: { requests: "2Gi", limits: "4Gi" },
          storage: {
            block: "1Gi",
            file: "1Gi",
            backup: "512Mi",
            capacity: "1Gi",
            pvc_count: 60,
          },
          snapshot: { count: 5 },
        },
      },
    ],
    contacts: [
      {
        user_id: "w8896699",
        provider: "github",
        email: "billy.li@gov.bc.ca",
        rocketchat_username: null,
        role: "lead",
      },
      {
        user_id: "w8896699",
        provider: "github",
        email: "billy.li@gov.bc.ca",
        rocketchat_username: null,
        role: "owner",
      },
    ],
  };

  return request;
}

export { testMessage };
