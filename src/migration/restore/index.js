const fs = require("fs/promises");
const {
  cpuOptionsLookup,
  memoryOptionsLookup,
  storageOptionsLookup
} = require("./constants.js");
const { PrismaClient } = require("@prisma/client");
const { data } = require("./data.js");
const prisma = new PrismaClient();

const CLUSTER = "GOLD"; // Replace with the cluster you want to set for all projects

console.log(CLUSTER);

async function groupByLicensePlate() {
  const grouped = {};

  for (const item of data) {
    const licensePlate = item.labels.name;
    const namespace = item.name.split("-").pop();

    if (!grouped[licensePlate]) {
      grouped[licensePlate] = {
        annotations: item.annotations,
        creationTimestamp: item.creationTimestamp,
        name: item.name,
        resourceVersion: item.resourceVersion,
        uid: item.uid
      };
    }

    grouped[licensePlate][namespace] = item.labels;
  }

  const output = Object.values(grouped);

  fs.writeFile(
    CLUSTER + "transformed.json",
    JSON.stringify(output, null, 2),
    (err) => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        console.log("File successfully written: transformed.json");
      }
    }
  );
}

async function backedUpUsers() {
  const mongoUsersFileContents = await fs.readFile(
    "./mongoUsers.json",
    "utf-8"
  );
  const mongoUsers = JSON.parse(mongoUsersFileContents);

  for (const mongoUser of mongoUsers) {
    const { firstName, lastName, email } = mongoUser;

    try {
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (!existingUser) {
        const user = await prisma.user.create({
          data: {
            email,
            firstName,
            lastName,
            ministry: null,
            idir: null,
            upn: null,
          }
        });

        // console.log("User created:", user);
      } else {
        // console.log("User already exists:", existingUser);
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  console.log("Restored backed up users");
}

async function restoreUsers() {
  for (const object of data) {
    const contacts = JSON.parse(object.annotations.contacts);

    for (const contact of contacts) {
      try {
        const existingUser = await prisma.user.findUnique({
          where: { email: contact.email }
        });
        if (!existingUser) {
          const user = await prisma.user.create({
            data: {
              email: contact.email,
              firstName: null,
              lastName: null,
              ministry: null,
              idir: null,
              upn: null,
            }
          });
          // console.log("User created:", user);
        } else {
          // console.log("User already exists:", existingUser);
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }
  }

  console.log("Restored users");
}

async function restoreProjects() {
  const fileContents = await fs.readFile(CLUSTER + "transformed.json", "utf-8");
  const jsonObjects = JSON.parse(fileContents);

  for (const jsonObject of jsonObjects) {
    const contacts = JSON.parse(jsonObject.annotations.contacts);

    if (
      !jsonObject?.prod?.name ||
      !jsonObject?.test?.name ||
      !jsonObject?.dev?.name ||
      !jsonObject?.tools?.name
    ) {
      console.log("Missing licensePlate for project: ");

      if (jsonObject?.prod?.name) {
        console.log(jsonObject?.prod?.name);
      }

      if (jsonObject?.test?.name) {
        console.log(jsonObject?.test?.name);
      }

      if (jsonObject?.dev?.name) {
        console.log(jsonObject?.dev?.name);
      }

      if (jsonObject?.tools?.name) {
        console.log(jsonObject?.tools?.name);
      }

      continue;
    }

    const exsitingProject = await prisma.privateCloudProject.findUnique({
      where: { licencePlate: jsonObject.prod.name }
    });

    if (exsitingProject) {
      console.log("Project already exists:", jsonObject.prod?.name);
      continue;
    }

    const customCpu = "CPU_REQUEST_32_LIMIT_64";
    const customMemory = "MEMORY_REQUEST_64_LIMIT_128";
    const customStorage = "STORAGE_512";

    const newProject = {
      licencePlate: jsonObject.prod?.name, // Updated to map to labels.name
      name: jsonObject["annotations"]["openshift.io/display-name"],
      description: jsonObject["annotations"]["openshift.io/description"],
      status: "ACTIVE", // Set the project status
      projectOwner: { connect: { email: contacts[0].email } },
      primaryTechnicalLead: { connect: { email: contacts[1].email } },
      secondaryTechnicalLead: contacts[2]?.email
        ? {
          connect: {
            email: contacts[2].email
          }
        }
        : undefined,

      ministry: jsonObject.prod.ministry_id,
      cluster: CLUSTER, // Set the cluster for this project
      productionQuota: {
        cpu:
          jsonObject.prod.cpu_quota === "custom"
            ? customCpu
            : cpuOptionsLookup[jsonObject.prod.cpu_quota], // Set the productionQuota cpu
        memory:
          jsonObject.prod.memory_quota === "custom"
            ? customMemory
            : memoryOptionsLookup[jsonObject.prod.memory_quota], // Set the productionQuota memory
        storage:
          jsonObject.prod.storage_quota === "custom"
            ? customStorage
            : storageOptionsLookup[jsonObject.prod.storage_quota] // Set the productionQuota storage
      },
      testQuota: {
        cpu:
          jsonObject.test.cpu_quota === "custom"
            ? customCpu
            : cpuOptionsLookup[jsonObject.test.cpu_quota], // Set the productionQuota cpu
        memory:
          jsonObject.test.memory_quota === "custom"
            ? customMemory
            : memoryOptionsLookup[jsonObject.test.memory_quota], // Set the productionQuota memory
        storage:
          jsonObject.test.storage_quota === "custom"
            ? customStorage
            : storageOptionsLookup[jsonObject.test.storage_quota] // Set the productionQuota storage
      },
      developmentQuota: {
        cpu:
          jsonObject.dev.cpu_quota === "custom"
            ? customCpu
            : cpuOptionsLookup[jsonObject.dev.cpu_quota], // Set the productionQuota cpu
        memory:
          jsonObject.dev.memory_quota === "custom"
            ? customMemory
            : memoryOptionsLookup[jsonObject.dev.memory_quota], // Set the productionQuota memory
        storage:
          jsonObject.dev.storage_quota === "custom"
            ? customStorage
            : storageOptionsLookup[jsonObject.dev.storage_quota] // Set the productionQuota storage
      },
      toolsQuota: {
        cpu:
          jsonObject.tools.cpu_quota === "custom"
            ? customCpu
            : cpuOptionsLookup[jsonObject.tools.cpu_quota], // Set the productionQuota cpu
        memory:
          jsonObject.tools.memory_quota === "custom"
            ? customMemory
            : memoryOptionsLookup[jsonObject.tools.memory_quota], // Set the productionQuota memory
        storage:
          jsonObject.tools.storage_quota === "custom"
            ? customStorage
            : storageOptionsLookup[jsonObject.tools.storage_quota] // Set the productionQuota storage
      },

      commonComponents: {
        noServices: true // Update commonComponents fields as needed
      }
    };

    try {
      const createdProject = await prisma.privateCloudProject.create({
        data: newProject
      });

      // console.log("PrivateCloudProject created:", createdProject);
    } catch (error) {
      console.error("Error creating PrivateCloudProject:");
      console.log(newProject);
      console.log("=====================================");
    }
  }
  console.log("Restored Projects");
}

async function main() {
  await groupByLicensePlate();
  await backedUpUsers();
  await restoreUsers();
  await restoreProjects();

  // await checkForDuplicates();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
