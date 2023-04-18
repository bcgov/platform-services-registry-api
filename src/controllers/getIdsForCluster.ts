import { prisma } from "../index.js";

const getIdsForCluster = async (req, res) => {
  try {
    const { "cluster-name": cluster } = req.query;

    if (!cluster) {
      res.status(400).json({ error: "Cluster name is missing or undefined." });
      return;
    }

    const projects = await prisma.privateCloudProject.findMany({
      where: {
        status: "ACTIVE",
        cluster: cluster.toUpperCase(),
      },
      select: {
        id: true,
        cluster: true,
      },
    });

    const projectIds = projects.map((project) => project.id);

    res.status(200).json(projectIds);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: "An error occurred while processing the request: " + error,
    });
  }
};

export default getIdsForCluster;
