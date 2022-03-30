const Namespace = {
  id: ({_id}) => _id.toString(),
  name: ({_id, environment}) =>`${_id.toString}-${environment}`
}

export default Namespace