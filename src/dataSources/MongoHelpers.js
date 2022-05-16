import { MongoDataSource } from "apollo-datasource-mongodb";

export default class MongoHelpers extends MongoDataSource {
  // Inherited methods
  // findOneById(id, options)
  // findManyByIds(ids, options)
  // findByFields(fields, options)

  findManyByFieldValues(field, values) {
    return this.collection.find({ [field]: { $in: values } }).toArray();
  }

  getAll() {
    return this.collection.find().toArray();
  }

  addElementToDocumentArray(id, set) {
    return this.collection.updateOne({ _id: id }, { $addToSet: set });
  }

  addElementToManyDocumentsArray(ids, set) {
    return this.collection.updateMany(
      { _id: { $in: ids } },
      { $addToSet: set },
      { multi: true }
    );
  }

  updateFieldsById(id, data) {
    return this.collection.updateOne({ _id: id }, { $set: data });
  }

  async create(user) {
    const { insertedId } = await this.collection.insertOne(user);
    return this.findOneById(insertedId);
  }

  removeDocument(id) {
    return this.collection.deleteOne({ _id: id });
  }
}
