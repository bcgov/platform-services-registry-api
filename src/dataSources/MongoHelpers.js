import { MongoDataSource } from "apollo-datasource-mongodb";

const searchParams = ( ministry, cluster, search) => {
  return [
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
              { licencePlate: { $regex: search, $options: 'i' } },
            ]
          }
        ]
      }
    },
  ]
}

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

  getProjectsFiltered(    
    ministry,
    cluster,
    search
    ) {
      return search ? this.collection.aggregate(searchParams(ministry, cluster, search)).toArray()
        :
        this.collection.find(
          {
            $and: [
              { "ministry": { $regex: ministry ? ministry : '', $options: 'i' } },
              { "cluster": cluster ? cluster : { $gt: 0, $lt: 4 } },]
          }
        ).toArray()
  }

  getAllPaginated(
    offset,
    limit,
    ministry,
    cluster,
    search,
    sortField ,
    sortOrder = 1
  ) {
    return search ? this.collection.aggregate(searchParams(ministry, cluster, search)
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