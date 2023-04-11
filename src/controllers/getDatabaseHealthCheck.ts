import { prisma } from "../index.js";

// Create an api endpoint that checks the health of the databas
const getDatabaseHealthCheck = async (req, res) => {
  try {
    await prisma.privateCloudProject.findMany({
      where: {
        status: "ACTIVE",
      },
      select: {
        id: true,
      },
    });

    res.sendStatus(200); // OK status
  } catch (error) {
    console.error("Error connecting to database:", error);
    res.sendStatus(500); // Internal Server Error status
  }
};

export default getDatabaseHealthCheck;
