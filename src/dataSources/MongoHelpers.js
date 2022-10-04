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

  getAllPaginated(
    offset,
    limit,
    ministry,
    cluster,
    search,
    sortField = "created",
    sortOrder = 1
  ) {
    return search ? this.collection.aggregate([
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
        "$lookup": {
          "from": "users",
          "localField": "technicalLeads",
          "foreignField": "_id",
          "as": "projectTechLeads"
        }
      },
      {
        $match: {
          $and: [
            { "ministry": { $regex: ministry ? ministry : '', $options: 'i' } },
            { "cluster": cluster ? cluster : { $gt: 0, $lt: 4 } },
            {
              $or: [
                { "projectOwners.firstName": { $regex: search, $options: 'i' } },
                { "projectOwners.lastName": { $regex: search, $options: 'i' } },
                { "projectOwners.email": { $regex: search, $options: 'i' } },
                { "$and": [{ "projectTechLeads.firstName": { $regex: search, $options: 'i' } }] },
                { "$and": [{ "projectTechLeads.lasttName": { $regex: search, $options: 'i' } }] },
                { "$and": [{ "projectTechLeads.email": { $regex: search, $options: 'i' } }] },
                { name: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
              ]
            }
          ]
        }
      },
      { $sort: { [sortField]: sortOrder } },
    ]
    ).skip(offset).limit(limit).toArray()
      :
      this.collection.find(
        {
          $and: [
            { "ministry": { $regex: ministry ? ministry : '', $options: 'i' } },
            { "cluster": cluster ? cluster : { $gt: 0, $lt: 4 } },]
        }
      ).sort({ [sortField]: sortOrder }).skip(offset).limit(limit).toArray()
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