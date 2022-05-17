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
  projectRequests: (
    {projectRequests},
    _,
    { dataSources: { privateCloudActiveRequests } }
    ) => privateCloudActiveRequests.findManyByIds(projectRequests),
  };

export default User;
