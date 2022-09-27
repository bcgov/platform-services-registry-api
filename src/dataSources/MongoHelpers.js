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

  getAllPaginated(offset, limit, ministry="AG", search="open", cluster=2) {    
    
    return this.collection.aggregate(
      [
        {
          "$lookup": {
            "from": "users",
            "localField": "projectOwner",
            "foreignField": "_id",
            "as": "projectOwners"
          }
        },
        {
          "$unwind": "$projectOwners"
        },
        {
          $match: {
            $and: [
              { "ministry": { $regex: ministry ? ministry : '', $options: 'i' } },
              { "cluster": cluster ? cluster : { $gt: 0, $lt: 4 } },
              {
                $or: [
                  { "projectOwners.firstName": { $regex: search?search:'', $options: 'i' } },
                  { "projectOwners.lastName": { $regex: search?search:'', $options: 'i' } },
                  { "projectOwners.email": { $regex: search?search:'', $options: 'i' } },
                   { name: { $regex: search ? search : '', $options: 'i' } } ,
                   { description: { $regex: search ? search : '', $options: 'i' } },
                ]    
              }
            ]                 
          }
        },         
      ]
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
