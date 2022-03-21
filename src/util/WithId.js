function withId(obj) {
  const { _id, ...newObj } = obj
  const id = _id.toString()
  return { id, ...newObj }
}

export default withId