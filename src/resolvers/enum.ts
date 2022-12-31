export const Cluster = {
  CLAB: "clab",
  KLAB: "klab",
  SILVER: "silver",
  GOLD: "gold",
  GOLDDR: "golddr",
  KLAB2: "klab2",
  EMERALD: "emerald"
};

export const Environment = {
  PRODUCTION: "production",
  TEST: "test",
  DEVELOPMENT: "development",
  TOOLS: "tools"
};

export const Platform = {
  PRIVATE_CLOUD: "private-cloud",
  PUBLIC_CLOUD: "public-cloud"
};

export const ProjectStatus = {
  CREATE_REQUEST: "create-request",
  ACTIVE: "active",
  INACTIVE: "inactive"
};

export const PublicCloudPlatform = {
  GOOGLE: "google-cloud",
  AWS: "amazon-web-services"
};

export const DefaultCpuOptions = {
  CPU_REQUEST_0_5_LIMIT_1_5: { cpuRequests: 0.5, cpuLimits: 1.5 },
  CPU_REQUEST_1_LIMIT_2: { cpuRequests: 1, cpuLimits: 2 },
  CPU_REQUEST_2_LIMIT_4: { cpuRequests: 2, cpuLimits: 4 },
  CPU_REQUEST_4_LIMIT_8: { cpuRequests: 4, cpuLimits: 8 },
  CPU_REQUEST_8_LIMIT_16: { cpuRequests: 8, cpuLimits: 16 },
  CPU_REQUEST_16_LIMIT_32: { cpuRequests: 16, cpuLimits: 32 },
  CPU_REQUEST_32_LIMIT_64: { cpuRequests: 32, cpuLimits: 64 }
};

export const DefaultMemoryOptions = {
  MEMORY_REQUEST_2_LIMIT_4: { memoryRequests: 2, memoryLimits: 4 },
  MEMORY_REQUEST_4_LIMIT_8: { memoryRequests: 4, memoryLimits: 8 },
  MEMORY_REQUEST_8_LIMIT_16: { memoryRequests: 8, memoryLimits: 16 },
  MEMORY_REQUEST_16_LIMIT_32: { memoryRequests: 16, memoryLimits: 32 },
  MEMORY_REQUEST_32_LIMIT_64: { memoryRequests: 32, memoryLimits: 64 },
  MEMORY_REQUEST_64_LIMIT_128: { memoryRequests: 64, memoryLimits: 128 }
};

export const DefaultStorageOptions = {
  STORAGE_1: { storageFile: 1 },
  STORAGE_2: { storageFile: 2 },
  STORAGE_4: { storageFile: 4 },
  STORAGE_16: { storageFile: 16 },
  STORAGE_32: { storageFile: 32 },
  STORAGE_64: { storageFile: 64 },
  STORAGE_124: { storageFile: 124 },
  STORAGE_256: { storageFile: 256 },
  STORAGE_512: { storageFile: 512 }
};

export const RequestDecision = {
  APPROVED: "approved",
  REJECTED: "rejected"
};

export const RequestDecisionStatus = {
  PENDING: "pending-decision",
  APPROVED: "approved",
  REJECTED: "rejected"
};

export const RequestType = {
  CREATE: "create",
  EDIT: "edit",
  DELETE: "delete"
};

export const SortOrder = {
  ASCENDING: 1,
  DESCENDING: -1
};
