const User = {
  id: ({ _id }) => _id.toString(),
  privateCloudProjectOwner: (
    { privateCloudProjectOwner },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(privateCloudProjectOwner),
  privateCloudTechnicalLead: (
    { privateCloudTechnicalLead },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(privateCloudTechnicalLead),
  privateCloudActiveRequests: (
    { privateCloudActiveRequests: privateCloudActiveRequestsIds },
    _,
    { dataSources: { privateCloudActiveRequests } }
  ) => privateCloudActiveRequests.findManyByIds(privateCloudActiveRequestsIds),
};

export default User;
