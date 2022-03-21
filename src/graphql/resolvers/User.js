const User = {
  id: ({_id}) => _id.toString(),
  // projects: ({projectIds}, _, ) => // will get the array of project id's and look up the corresponding projects in the database
}

export default User