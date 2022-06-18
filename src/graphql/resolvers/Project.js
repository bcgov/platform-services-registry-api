const Project = {
  __resolveType(project) {
    console.log(project)
    if (project.cluster) {
      return "PrivateCloudProject";
    }

    if (project.platform) {
      return "PublicCloudProject";
    }

    return null;
  },
};

export default Project;
