const User = {
  id: ({ _id }) => _id.toString(),
  projectOwnerPrivateCloud: (
    { projectOwnerPrivateCloud },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(projectOwnerPrivateCloud),
  technicalLeadPrivateCloud: (
    { technicalLeadPrivateCloud },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(technicalLeadPrivateCloud),
  projectOwnerPublicCloud: (
    { projectOwnerPublicCloud },
    _,
    { dataSources: { publicCloudProjects } }
  ) => publicCloudProjects.findManyByIds(projectOwnerPublicCloud),
  technicalLeadPublicCloud: (
    { technicalLeadPublicCloud },
    _,
    { dataSources: { publicCloudProjects } }
  ) => publicCloudProjects.findManyByIds(technicalLeadPublicCloud),
};

export default User;
