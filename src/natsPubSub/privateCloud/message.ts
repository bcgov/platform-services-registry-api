import {
  Cluster,
  RequestType,
  DefaultCpuOptions,
  CpuOption,
  MemoryOption,
  StorageOption,
  DefaultMemoryOptions,
  DefaultStorageOptions,
} from './constants.js';
import { Prisma, RequestType as Action } from '@prisma/client';

export type PrivateCloudRequestedProject =
  Prisma.PrivateCloudRequestedProjectGetPayload<{
    select: {
      productionQuota: true;
      developmentQuota: true;
      testQuota: true;
      toolsQuota: true;
      id: true;
      licencePlate: true;
      name: true;
      description: true;
      ministry: true;
      cluster: true;
      projectOwner: {
        select: {
          email: true;
        };
      };
      primaryTechnicalLead: {
        select: {
          email: true;
        };
      };
      secondaryTechnicalLead: {
        select: {
          email: true;
        };
      };
    };
  }>;

type QuotaOption = {
  cpu: CpuOption;
  memory: MemoryOption;
  storage: StorageOption;
};

// Create a test env variable that prefix the namespace name with "t"
function message(action, requestedProject, requestId, currentProject?) {
  let {
    id, // Use ID from actaul project, not from requested project
    licencePlate,
    name,
    description,
    ministry,
    cluster,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead,
  } = requestedProject;


  let isContactChanged = true;
  if(currentProject !== undefined){
    isContactChanged = !(
      JSON.stringify(requestedProject.projectOwner.email) === JSON.stringify(currentProject.projectOwner.email) &&
      JSON.stringify(requestedProject.primaryTechnicalLead.email) === JSON.stringify(currentProject.primaryTechnicalLead.email) &&
      JSON.stringify(requestedProject.secondaryTechnicalLead?.email) === JSON.stringify(currentProject.secondaryTechnicalLead?.email)
      );
  }

  const snapshot = {
    name: 'snapshot-5',
    snapshotCount: 5,
  };

  const provisionerTestQuota: QuotaOption = {
    cpu: DefaultCpuOptions[testQuota.cpu],
    memory: DefaultMemoryOptions[testQuota.memory],
    storage: DefaultStorageOptions[testQuota.storage],
  };

  const provisionerProductionQuota: QuotaOption = {
    cpu: DefaultCpuOptions[productionQuota.cpu],
    memory: DefaultMemoryOptions[productionQuota.memory],
    storage: DefaultStorageOptions[productionQuota.storage],
  };

  const provisionerDevelopmentQuota: QuotaOption = {
    cpu: DefaultCpuOptions[developmentQuota.cpu],
    memory: DefaultMemoryOptions[developmentQuota.memory],
    storage: DefaultStorageOptions[developmentQuota.storage],
  };

  const provisionerToolsQuota: QuotaOption = {
    cpu: DefaultCpuOptions[toolsQuota.cpu],
    memory: DefaultMemoryOptions[toolsQuota.memory],
    storage: DefaultStorageOptions[toolsQuota.storage],
  };

  let allianceLabel = '';
  switch (ministry.toLocaleLowerCase()) {
    case 'ag':
    case 'pssg':
    case 'embc':
    case 'mah':
      allianceLabel = 'JAG';
      break;
    default:
      allianceLabel = 'none';
      break;
  }

  const projectOwnerContact = {
    email: projectOwner.email,
    role: 'owner',
  };

  const primaryTechnicalLeadContact = {
    email: primaryTechnicalLead.email,
    role: 'lead',
  };

  const secondaryTechnicalLeadContact = secondaryTechnicalLead
    ? {
        email: secondaryTechnicalLead.email,
        role: 'lead',
      }
    : null;

  const namespaces = [
    { quotaName: 'tools', quota: provisionerToolsQuota },
    { quotaName: 'prod', quota: provisionerProductionQuota },
    { quotaName: 'dev', quota: provisionerDevelopmentQuota },
    { quotaName: 'test', quota: provisionerTestQuota },
  ].map(({ quotaName, quota }) => ({
    // namespace_id: 21,
    name: `${licencePlate}-${[quotaName]}`,
    quota: {
      cpu: quota.cpu.name,
      memory: quota.memory.name,
      storage: quota.storage.name,
      snapshot: snapshot.name,
    },
    quotas: {
      cpu: { requests: quota.cpu.cpuRequests, limits: quota.cpu.cpuLimits },
      memory: {
        requests: quota.memory.memoryRequests,
        limits: quota.memory.memoryLimits,
      },
      storage: {
        block: quota.storage.storageBlock,
        file: quota.storage.storageFile,
        backup: quota.storage.storageBackup,
        capacity: quota.storage.storageCapacity,
        pvc_count: quota.storage.storagePvcCount,
      },
      snapshot: { count: snapshot.snapshotCount },
    },
  }));

  const messageBody = {
    action: RequestType[action],
    profile_id: id,
    licencePlate: licencePlate,
    isContactChanged: isContactChanged,
    workflow: `${Cluster[cluster]}-${licencePlate}-${requestId}`, //should be unique request ID _id request
    // cluster_id: cluster,
    cluster_name: Cluster[cluster],
    display_name: name,
    description: description,
    ministry_id: ministry,
    merge_type: 'auto', // Make this a variable
    alliance: allianceLabel, // "JAG" for Justice Attornies Group, else "none"
    namespaces,
    contacts: [
      projectOwnerContact,
      primaryTechnicalLeadContact,
      secondaryTechnicalLeadContact,
    ].filter(Boolean),
  };

  return messageBody;
}

export default message;
