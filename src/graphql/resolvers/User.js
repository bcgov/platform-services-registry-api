const User = {
  id: ({ _id }) => _id.toString(),
  projectOwner: (
    { projectOwner },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(projectOwner),
  technicalLead: (
    { technicalLead },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(technicalLead),
};

export default User;
