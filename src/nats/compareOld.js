const test = {
  action: "edit",
  profile_id: 135,
  cluster_id: 3,
  cluster_name: "silver",
  display_name: "Mines Digital Services",
  description:
    "This project will replace the legacy Mine Management System (MMS) with a scalable, open source, data driven system using modern and flexible technologies.",
  ministry_id: "EMPR",
  merge_type: "auto",
  namespaces: [
    {
      namespace_id: 434,
      name: "4c2ba9-tools",
      quota: {
        cpu: "cpu-request-2-limit-4",
        memory: "memory-request-8-limit-16",
        storage: "storage-128",
        snapshot: "snapshot-5"
      },
      quotas: {
        cpu: { requests: 2, limits: 4 },
        memory: { requests: "8Gi", limits: "16Gi" },
        storage: {
          block: "128Gi",
          file: "128Gi",
          backup: "64Gi",
          capacity: "128Gi",
          pvc_count: 60
        },
        snapshot: { count: 5 }
      }
    },
    {
      namespace_id: 436,
      name: "4c2ba9-test",
      quota: {
        cpu: "cpu-request-8-limit-16",
        memory: "memory-request-32-limit-64",
        storage: "storage-128",
        snapshot: "snapshot-5"
      },
      quotas: {
        cpu: { requests: 8, limits: 16 },
        memory: { requests: "32Gi", limits: "64Gi" },
        storage: {
          block: "128Gi",
          file: "128Gi",
          backup: "64Gi",
          capacity: "128Gi",
          pvc_count: 60
        },
        snapshot: { count: 5 }
      }
    },
    {
      namespace_id: 435,
      name: "4c2ba9-dev",
      quota: {
        cpu: "cpu-request-8-limit-16",
        memory: "memory-request-32-limit-64",
        storage: "storage-128",
        snapshot: "snapshot-5"
      },
      quotas: {
        cpu: { requests: 8, limits: 16 },
        memory: { requests: "32Gi", limits: "64Gi" },
        storage: {
          block: "128Gi",
          file: "128Gi",
          backup: "64Gi",
          capacity: "128Gi",
          pvc_count: 60
        },
        snapshot: { count: 5 }
      }
    },
    {
      namespace_id: 437,
      name: "4c2ba9-prod",
      quota: {
        cpu: "cpu-request-8-limit-16",
        memory: "memory-request-32-limit-64",
        storage: "storage-128",
        snapshot: "snapshot-5"
      },
      quotas: {
        cpu: { requests: 8, limits: 16 },
        memory: { requests: "32Gi", limits: "64Gi" },
        storage: {
          block: "128Gi",
          file: "128Gi",
          backup: "64Gi",
          capacity: "128Gi",
          pvc_count: 60
        },
        snapshot: { count: 5 }
      }
    }
  ],
  contacts: [
    {
      user_id: "vyasworks",
      provider: "github",
      email: "Vyas.Sarangapani@ca.ey.com",
      rocketchat_username: null,
      role: "lead"
    },
    {
      user_id: "will-freshworks",
      provider: "github",
      email: "will.sonnex@ca.ey.com",
      rocketchat_username: null,
      role: "lead"
    },
    {
      user_id: "colinsquirrell",
      provider: "github",
      email: "colin.squirrell@gov.bc.ca",
      rocketchat_username: null,
      role: "owner"
    }
  ]
};
