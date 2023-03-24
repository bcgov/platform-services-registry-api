import { prisma } from "../index.js";

const getIdsForCluster = async (req, res) => {
  try {
    const { "cluster-name": cluster } = req.body;

    const projects = await prisma.privateCloudProject.findMany({
      where: {
        status: "ACTIVE",
        cluster: cluster
      },
      select: {
        id: true
      }
    });

    const projectIds = projects.map((project) => project.id);

    res.status(200).json(projectIds);
  } catch (error) {
    console.log(error);
    res.status(400).end();
  }
};

export default getIdsForCluster;
