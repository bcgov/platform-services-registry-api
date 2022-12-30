const defaultQuota = {
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

export default defaultQuota;