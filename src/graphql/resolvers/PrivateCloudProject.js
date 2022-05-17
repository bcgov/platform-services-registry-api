const PrivateCloudProject = {
  id: ({ _id }) => _id.toString(),
  createdBy: ({ createdBy }, _, { dataSources: { users } }) =>
    users.findOneById(createdBy),
  projectOwner: ({ projectOwner }, _, { dataSources: { users } }) =>
    users.findOneById(projectOwner),
  technicalLeads: ({ technicalLeads }, _, { dataSources: { users } }) =>
    users.findManyByIds(technicalLeads),
  requestHistory: (
    { requestHistory },
    _,
    { dataSources: { privateCloudArchivedRequests } }
  ) => privateCloudArchivedRequests.findManyByIds(requestHistory),
};

export default PrivateCloudProject;
