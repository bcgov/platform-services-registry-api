import {
  SelectedDefaultQuota,
  DefaultCpuOptions,
  DefaultMemoryOptions,
  DefaultStorageOptions
} from "../__generated__/resolvers-types.js";

export const defaultQuota = {
  cpuRequests: 0.5,
  cpuLimits: 1.5,
  memoryRequests: 2,
  memoryLimits: 4,
  storageBlock: 1,
  storageFile: 1,
  storageBackup: 512,
  storageCapacity: 1,
  storagePvcCount: 60,
  snapshotCount: 5
};

const cpuToDefaultOption = (quota) =>
  `CpuRequest_${quota.cpuRequests}Limit_${quota.cpuLimits}`.replaceAll(
    ".",
    "_"
  );

const memoryToDefaultOption = (quota) =>
  `MemoryRequest_${quota.memoryRequests}Limit_${quota.memoryLimits}`.replaceAll(
    ".",
    "_"
  );

const storageToDefaultOption = (quota) =>
  `Storage_${quota.storageFile}`.replaceAll(".", "_");

export const selectedDefaultQuota = (quota) =>
  ({
    cpu: DefaultCpuOptions[cpuToDefaultOption(quota)] as DefaultCpuOptions,
    memory: DefaultMemoryOptions[
      memoryToDefaultOption(quota)
    ] as DefaultMemoryOptions,
    storage: DefaultStorageOptions[
      storageToDefaultOption(quota)
    ] as DefaultStorageOptions
  } as SelectedDefaultQuota);
