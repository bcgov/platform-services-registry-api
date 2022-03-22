const Project = {
  id: ({ _id }) => _id.toString(),
  productOwner: ({ productOwnerUserId }, _, { dataSources: { users } }) =>
    users.getById(productOwnerUserId),
  technicalLeads: ({ technicalLeadsUserIds }, _, { dataSources: { users } }) =>
    users.getByIds(technicalLeadsUserIds),
  //requestHistory: ({requestIds}) => Requests.getAllByIds(requestIds)
};

export default Project;
