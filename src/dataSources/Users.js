import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Users extends MongoDataSource {
  getById(id) {
    return this.findOneById(id)
  }

  getAll() {
    return this.collection.find().toArray()
  }

  getByIds(ids) {
    return this.collection.findManyByIds(ids)
  }

  updateById(id, updateProp) {
    this.collection.updateOne({_id: id}, { $set:  updateProp})
  }

  async create(user) {
    const { insertedId } = await this.collection.insertOne(user)
    return this.findOneById(insertedId)
  }
}