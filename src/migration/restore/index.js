const fs = require("fs/promises");
const {
  cpuOptionsLookup,
  memoryOptionsLookup,
  storageOptionsLookup
} = require("./constants.js");
const { PrismaClient } = require("@prisma/client");
const { data } = require("./klab2.js");
const prisma = new PrismaClient();

const CLUSTER = "SILVER"; // Replace with the cluster you want to set for all projects

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

async function checkForDuplicates() {
  const fileContents = await fs.readFile(CLUSTER + "transformed.json", "utf-8");
  const jsonObjects = JSON.parse(fileContents);

  const licensePlates = jsonObjects.map((item) => item.prod.name);

  const duplicates = licensePlates.filter(
    (item, index) => licensePlates.indexOf(item) !== index
  );

  console.log(duplicates)
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
            ministry: null
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

  console.log("Restored backed up users")
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
              ministry: null
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

  console.log("Restored users")

}

async function restoreProjects() {
  const fileContents = await fs.readFile(CLUSTER + "transformed.json", "utf-8");
  const jsonObjects = JSON.parse(fileContents);

  for (const jsonObject of jsonObjects) {
    const contacts = JSON.parse(jsonObject.annotations.contacts);

    // const owner = await prisma.user.findUnique({
    //   where: { email: contacts[0].email }
    // });
    // const primaryTechnicalLead = await prisma.user.findUnique({
    //   where: { email: contacts[1].email }
    // });
    // const secondaryTechnicalLead = contacts[2]
    //   ? await prisma.user.findUnique({ where: { email: contacts[2].email } })
    //   : null;

    const newProject = {
      licencePlate: jsonObject.prod.name, // Updated to map to labels.name
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
        cpu: cpuOptionsLookup[jsonObject.prod.cpu_quota], // Set the productionQuota cpu
        memory: memoryOptionsLookup[jsonObject.prod.memory_quota], // Set the productionQuota memory
        storage: storageOptionsLookup[jsonObject.prod.storage_quota] // Set the productionQuota storage
      },
      testQuota: {
        cpu: cpuOptionsLookup[jsonObject.test.cpu_quota], // Set the productionQuota cpu
        memory: memoryOptionsLookup[jsonObject.test.memory_quota], // Set the productionQuota memory
        storage: storageOptionsLookup[jsonObject.test.storage_quota] // Set the productionQuota storage
      },
      developmentQuota: {
        cpu: cpuOptionsLookup[jsonObject.dev.cpu_quota], // Set the productionQuota cpu
        memory: memoryOptionsLookup[jsonObject.dev.memory_quota], // Set the productionQuota memory
        storage: storageOptionsLookup[jsonObject.dev.storage_quota] // Set the productionQuota storage
      },
      toolsQuota: {
        cpu: cpuOptionsLookup[jsonObject.tools.cpu_quota], // Set the productionQuota cpu
        memory: memoryOptionsLookup[jsonObject.tools.memory_quota], // Set the productionQuota memory
        storage: storageOptionsLookup[jsonObject.tools.storage_quota] // Set the productionQuota storage
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
      console.error("Error creating PrivateCloudProject:", error);
    }
  }
  console.log("Restored Projects")
}

async function main() {
  await groupByLicensePlate();
  await backedUpUsers();
  await restoreUsers();
  await restoreProjects();

  await checkForDuplicates();
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
