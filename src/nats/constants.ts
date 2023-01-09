export const Cluster = {
  CLAB: "clab",
  KLAB: "klab",
  SILVER: "silver",
  GOLD: "gold",
  GOLDDR: "golddr",
  KLAB2: "klab2",
  EMERALD: "emerald"
};

export const RequestType = {
  CREATE: "create",
  EDIT: "edit",
  DELETE: "delete"
};


const testMessage = {
  action: "create",
  profile_id: 6,
  cluster_id: 3,
  cluster_name: "silver",
  display_name: "Mautic test",
  description: "asdf",
  ministry_id: "AGRI",
  merge_type: "auto",
  namespaces: [
    {
      namespace_id: 21,
      name: "dad3d6-tools",
      quota: {
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1", // the one refers to the file
        snapshot: "snapshot-5",
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
      namespace_id: 22,
      name: "dad3d6-dev",
      quota: {
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1",
        snapshot: "snapshot-5",
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
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1",
        snapshot: "snapshot-5",
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
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1",
        snapshot: "snapshot-5",
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


export {testMessage}
