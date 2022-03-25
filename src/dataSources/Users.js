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

  addElementToArrayById(id, {arrayProperty, element}) {
    this.collection.updateOne(
      {_id: id},
      { $addToSet:  {[arrayProperty]: element}})
  }

  addElementToArraysByIds(ids, {arrayProperty, element}) {
    this.collection.updateOne(
      {_id: { $in: ids }},
      { $addToSet:  {[arrayProperty]: element}},
      {multi: true})
  }

  addElementsToArrayById(id, {arrayProperty, elements}) {
    this.collection.updateOne(
      {_id: id},
      { $addToSet:  {[arrayProperty]: {$each: elements}}})
  }

  updatePropertyById(id, updateProperty) {
    this.collection.updateOne({_id: id},
    { $set:  updateProperty})
  }

  async create(user) {
    const { insertedId } = await this.collection.insertOne(user)
    return this.findOneById(insertedId)
  }
}