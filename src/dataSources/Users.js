import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Users extends MongoDataSource {
  getById(userId) {
    return this.findOneById(userId)
  }

  getAll() {
    return this.collection.find().toArray()
  }

  getAllByIds(ids) {
    return this.collection.findManyByIds(ids)
  }

  create(user) {
    this.collection.insertOne(user)
    return user
  }
}