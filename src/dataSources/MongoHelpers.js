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

  getAllPaginated(offset, limit, ministry, search) {

    const searchQuery = {
      $or: search && ministry ? [
        { ministry: { $regex: ministry, $options: 'i' } },
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        {projectOwner: { firstName :{ $regex: search, $options: 'i'} }}
      ] : ministry ? [
        { ministry: { $regex: ministry, $options: 'i' } },
      ] : search ? [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ] : [{ ministry: { $regex: '', $options: 'i' } },
      { name: { $regex: '', $options: 'i' } },
      { description: { $regex: '', $options: 'i' } },]
    }
    return this.collection.find( { 
      // {
      //   $or:  [         
      //     {[projectOwner.firstName] : "David" }
      //   ]
      // }
       "projectOwner.firstName": { $regex: "Olena" , $options: 'i' } }
      ).skip(offset).limit(limit).toArray();
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

  async create(user) {
    const { insertedId } = await this.collection.insertOne(user);
    return this.findOneById(insertedId);
  }

  removeDocument(id) {
    return this.collection.deleteOne({ _id: id });
  }
}
