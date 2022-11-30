import { ObjectId } from "mongodb";

const project = {
  _id: ObjectId("637bfc646118a168badcf5a9"),
  licencePlate: "973905",
  name: "RSBC CARMA API",
  created: "2021-02-12T17:05:13.394Z",
  description:
    "Road Safety BC (RSBC) Case and Records Management Application (CARMA) API is the micro services API integration layer used for to create a link between the VIPS driver prohibition system of record and the CARMA case management system built on the AG PSSG sector Enterprise Case Management (ECM) PaaS. ",
  cluster: { $numberInt: "3" },
  ministry: "PSSG",
  archived: false,
  status: "active",
  requestHistory: [],
  projectOwner: ObjectId("637bfc646118a168badcf6f3"),
  primaryTechnicalLead: ObjectId("637bfc646118a168badcf72b"),
  secondaryTechnicalLead: ObjectId("637bfc646118a168badcf72b"),
  productionQuota: {
    cpuRequests: { $numberInt: "4" },
    cpuLimits: { $numberInt: "8" },
    memoryRequests: { $numberInt: "16" },
    memoryLimits: { $numberInt: "32" },
    storageBlock: { $numberInt: "1" },
    storageFile: { $numberInt: "64" },
    storageBackup: { $numberInt: "1" },
    storageCapacity: { $numberInt: "1" },
    storagePvcCount: { $numberInt: "60" },
    snapshotCount: { $numberInt: "5" }
  },
  developmentQuota: {
    cpuRequests: { $numberInt: "4" },
    cpuLimits: { $numberInt: "8" },
    memoryRequests: { $numberInt: "16" },
    memoryLimits: { $numberInt: "32" },
    storageBlock: { $numberInt: "1" },
    storageFile: { $numberInt: "64" },
    storageBackup: { $numberInt: "1" },
    storageCapacity: { $numberInt: "1" },
    storagePvcCount: { $numberInt: "60" },
    snapshotCount: { $numberInt: "5" }
  },
  toolsQuota: {
    cpuRequests: { $numberInt: "2" },
    cpuLimits: { $numberInt: "4" },
    memoryRequests: { $numberInt: "8" },
    memoryLimits: { $numberInt: "16" },
    storageBlock: { $numberInt: "1" },
    storageFile: { $numberInt: "64" },
    storageBackup: { $numberInt: "1" },
    storageCapacity: { $numberInt: "1" },
    storagePvcCount: { $numberInt: "60" },
    snapshotCount: { $numberInt: "5" }
  },
  testQuota: {
    cpuRequests: { $numberInt: "4" },
    cpuLimits: { $numberInt: "8" },
    memoryRequests: { $numberInt: "16" },
    memoryLimits: { $numberInt: "32" },
    storageBlock: { $numberInt: "1" },
    storageFile: { $numberInt: "64" },
    storageBackup: { $numberInt: "1" },
    storageCapacity: { $numberInt: "1" },
    storagePvcCount: { $numberInt: "60" },
    snapshotCount: { $numberInt: "5" }
  },
  activeEditRequest: null,
  commonComponents: {},
  profileId: { $numberInt: "278" },
  createdBy: ObjectId("637bfc646118a168badcf7b6")
};

const oamar = {
  _id: ObjectId("637bfc646118a168badcf7b6"),
  githubId: "okanji",
  firstName: "Oamar",
  lastName: "Kanji",
  email: "oamar.kanji@gov.bc.ca",
  archived: false,
  created: "2021-07-27T03:59:21.378Z",
  privateCloudProjectOwner: [],
  privateCloudPrimaryTechnicalLead: [],
  privateCloudSecondaryTechnicalLead: [ObjectId("637bfc646118a168badcf5a9")],
  privateCloudActiveRequests: [],
  lastSeen: "2022-11-21T22:32:04.695Z"
};

const billy = {
  _id: ObjectId("637bfc646118a168badcf72b"),
  githubId: "w8896699",
  firstName: "Billy",
  lastName: "Li",
  email: "billy.li@gov.bc.ca",
  archived: false,
  created: "2022-06-15T02:07:53.418Z",
  privateCloudProjectOwner: [],
  privateCloudPrimaryTechnicalLead: [ObjectId("637bfc646118a168badcf5a9")],
  privateCloudSecondaryTechnicalLead: [],
  privateCloudActiveRequests: [],
  lastSeen: "2022-11-21T22:32:04.695Z"
};

const olena = {
  _id: ObjectId("637bfc646118a168badcf6f3"),
  githubId: "mitovskaol",
  firstName: "Olena",
  lastName: "Mitovska",
  email: "olena.mitovska@gov.bc.ca",
  archived: false,
  created: "2022-06-15T02:16:32.877Z",
  privateCloudProjectOwner: [ObjectId("637bfc646118a168badcf5a9")],
  privateCloudPrimaryTechnicalLead: [],
  privateCloudSecondaryTechnicalLead: [],
  privateCloudActiveRequests: [],
  lastSeen: "2022-11-21T22:32:04.695Z"
};

export { project, oamar, billy, olena };
