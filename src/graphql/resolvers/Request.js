import Platform from "./enum/Platform";

const Request = {
  id: ({ _id }) => _id.toString(),
  createdBy: ({ createdBy }, _, { dataSources: { users } }) =>
    users.findOneById(createdBy),
  project: (
    { project, platform },
    _,
    { dataSources: { privateCloudProjects, publicCloudProjects } }
  ) => {
    switch (platform) {
      case Platform.PRIVATE_CLOUD:
        return privateCloudProjects.findOneById(project);
      case Platform.PUBLIC_CLOUD:
        return publicCloudProjects.findOneById(project);
      default:
        return null;
    }
  },
  decisionMaker: ({ decisionMaker }, _, { dataSources: { users } }) => users.findOneById(decisionMaker),
  requestedProject: (
    { requestedProject, platform },
    _,
    {
      dataSources: {
        privateCloudRequestedProjects,
        publicCloudRequestedProjects,
      },
    }
  ) => {
    switch (platform) {
      case Platform.PRIVATE_CLOUD:
        return privateCloudRequestedProjects.findOneById(requestedProject);
      case Platform.PUBLIC_CLOUD:
        return publicCloudRequestedProjects.findOneById(requestedProject);
      default:
        return null;
    }
  },
};

export default Request;
