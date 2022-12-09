const User = {
  id: ({ _id }) => _id.toString(),
  privateCloudProjectOwner: (
    { privateCloudProjectOwner },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(privateCloudProjectOwner),
  privateCloudPrimaryTechnicalLead: (
    { privateCloudPrimaryTechnicalLead },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(privateCloudPrimaryTechnicalLead),
  privateCloudSecondaryTechnicalLead: (
    { privateCloudSecondaryTechnicalLead },
    _,
    { dataSources: { privateCloudProjects } }
  ) => privateCloudProjects.findManyByIds(privateCloudSecondaryTechnicalLead),

  privateCloudActiveRequests: (
    { privateCloudActiveRequests: privateCloudActiveRequestsIds },
    _,
    { dataSources: { privateCloudActiveRequests } }
  ) => privateCloudActiveRequests.findManyByIds(privateCloudActiveRequestsIds)
};

export default User;
