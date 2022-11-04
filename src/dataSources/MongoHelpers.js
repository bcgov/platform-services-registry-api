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

  getAllPaginated(offset, limit) {
    return this.collection.find().skip(offset).limit(limit).toArray();
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

  removeElementFromManyDocumentsArray(ids, set) {
    return this.collection.updateMany(
      { _id: { $in: ids } },
      { $pull: set },
      { multi: true }
    );
  }

  removeElementFromManyDocumentsArray(ids, set) {
    return this.collection.updateMany(
      { _id: { $in: ids } },
      { $pull: set },
      { multi: true }
    );
  }

  updateFieldsById(id, data) {
    return this.collection.updateOne(
      { _id: id },
      { $set: data },
      { upsert: true }
    );
  }

  async create(data) {
    const { insertedId } = await this.collection.insertOne(data);
    return this.findOneById(insertedId);
  }

  async createMany(data) {
    const { insertedIds } = await this.collection.insertMany(data);
    console.log(insertedIds);

    return this.findManyByIds(insertedIds);
  }

  removeDocument(id) {
    return this.collection.deleteOne({ _id: id });
  }
}
