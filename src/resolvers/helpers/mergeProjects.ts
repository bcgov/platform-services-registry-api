import {
  Prisma,
  User,
  PrivateCloudProject,
  PrivateCloudProjectEmbeded
} from "@prisma/client";

interface Users {
  projectOwner: User;
  primaryTechnicalLead: User;
  secondaryTechnicalLead: User;
}

const mergeProjets = (
  existing: PrivateCloudProject,
  incoming: Partial<PrivateCloudProjectEmbeded>,
  users: Users
): PrivateCloudProjectEmbeded => {
  const {
    id,
    projectOwnerId,
    primaryTechnicalLeadId,
    secondaryTechnicalLeadId,
    ...project
  } = existing;

  const { projectOwner, primaryTechnicalLead, secondaryTechnicalLead } = users;

  const requestedProject = { ...project, ...incoming.metaData };

  if (incoming.commonComponents) {
    requestedProject.commonComponents = incoming.commonComponents;
  }

  if (incoming.productionQuota) {
    requestedProject.productionQuota = {
      ...project.productionQuota,
      ...incoming.productionQuota.cpu,
      ...incoming.productionQuota.memory,
      ...incoming.productionQuota.storage
    };
  }

  if (incoming.testQuota) {
    requestedProject.testQuota = {
      ...project.testQuota,
      ...incoming.testQuota.cpu,
      ...incoming.testQuota.memory,
      ...incoming.testQuota.storage
    };
  }

  if (incoming.toolsQuota) {
    requestedProject.toolsQuota = {
      ...project.toolsQuota,
      ...incoming.toolsQuota.cpu,
      ...incoming.toolsQuota.memory,
      ...incoming.toolsQuota.storage
    };
  }

  if (incoming.developmentQuota) {
    requestedProject.developmentQuota = {
      ...project.developmentQuota,
      ...incoming.developmentQuota.cpu,
      ...incoming.developmentQuota.memory,
      ...incoming.developmentQuota.storage
    };
  }

  requestedProject.projectOwnerEmail = incoming.projectOwner
    ? incoming.projectOwner.email
    : projectOwner.email;

  requestedProject.primaryTechnicalLeadEmail = incoming.primaryTechnicalLead
    ? incoming.primaryTechnicalLead.email
    : primaryTechnicalLead.email;

  requestedProject.secondaryTechnicalLeadEmail = incoming.secondaryTechnicalLead
    ? incoming.secondaryTechnicalLead.email
    : secondaryTechnicalLead.email;

  return requestedProject;
};

export default mergeProjets;
