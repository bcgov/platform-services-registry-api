import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Projects extends MongoDataSource {
  getById(projectId) {
    return this.findOneById(projectId)
  }

  getAll() {
    return this.collection.find().toArray()
  }

  create(project) {
    return this.collection.insertOne(project)
  }
}