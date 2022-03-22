import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Projects extends MongoDataSource {
  getById(projectId) {
    return this.findOneById(projectId)
  }

  getAll() {
    return this.collection.find().toArray()
  }

  async create(project) {
    const { insertedId } = await this.collection.insertOne(project)
    return this.findOneById(insertedId)
  }
}