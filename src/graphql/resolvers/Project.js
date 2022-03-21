import Users from "../../dataSources/Users"

const Project = {
  id: ({_id}) => _id.toString(),
  productOwner: ({productOwnerId}) => Users.getById(productOwnerId),
  technicalLeads: ({technicalLeadsIds}) => Users.getAllByIds(technicalLeadsIds),
  //requestHistory: ({requestIds}) => Requests.getAllByIds(requestIds)
}

export default Project