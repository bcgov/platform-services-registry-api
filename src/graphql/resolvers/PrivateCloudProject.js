const PrivateCloudProject = {
  id: ({ _id }) => _id.toString(),
  createdBy: ({ createdBy }, _, { dataSources: { users } }) =>
    users.findOneById(createdBy),
  productOwner: ({ productOwnerUserId }, _, { dataSources: { users } }) =>
    users.findOneById(productOwnerUserId),
  technicalLeads: ({ technicalLeadsUserIds }, _, { dataSources: { users } }) =>
    users.findManyByIds(technicalLeadsUserIds),
  //requestHistory: ({requestIds}) => Requests.getAllByIds(requestIds)
};

export default PrivateCloudProject;
