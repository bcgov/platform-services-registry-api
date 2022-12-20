import MongoHelpers from "./MongoHelpers";

const searchParams = (ministry, cluster, search) => {
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
        "localField": "primaryTechnicalLead",
        "foreignField": "_id",
        "as": "primaryTechnicalLeads"
      }
    },
    {
      "$unwind": "$primaryTechnicalLeads"
    },
    {
      "$lookup": {
        "from": "users",
        "localField": "secondaryTechnicalLead",
        "foreignField": "_id",
        "as": "secondaryTechnicalLeads"
      }
    },
    {
      "$unwind": "$secondaryTechnicalLeads"
    },
    {
      $match: {
        $and: [
          { "ministry": { $regex: ministry ? ministry : '', $options: 'i' } },
          { "cluster": cluster ? cluster : { $gt: 0, $lt: 8 } },
          {
            $or: [
              { "projectOwners.firstName": { $regex: search, $options: 'i' } },
              { "projectOwners.lastName": { $regex: search, $options: 'i' } },
              { "projectOwners.email": { $regex: search, $options: 'i' } },
              { "primaryTechnicalLeads.firstName": { $regex: search, $options: 'i' } },
              { "primaryTechnicalLeads.lastName": { $regex: search, $options: 'i' } },
              { "primaryTechnicalLeads.email": { $regex: search, $options: 'i' } },
              { "secondaryTechnicalLeads.firstName": { $regex: search, $options: 'i' } },
              { "secondaryTechnicalLeads.lastName": { $regex: search, $options: 'i' } },
              { "secondaryTechnicalLeads.email": { $regex: search, $options: 'i' } },
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

export default class PrivateCloudProjects extends MongoHelpers {
  getPaginated(offset, limit, filter, search, sort, sortOrder = 1) {
    const { ministry, cluster } = filter || {};

    return (search ? this.collection.aggregate(searchParams(ministry, cluster, search))
      : this.collection.find({
        $and: [
          { ministry: { $regex: ministry ? ministry : "", $options: "i" } },
          { cluster: { $regex: ministry ? ministry : "", $options: "i" } },
        ],
      })).sort({ [sort]: sortOrder }).skip(offset).limit(limit).toArray();
  }

  getFilteredSearch(
    filter,
    search
  ) {
    const { ministry, cluster } = filter || {};
    return (search ? this.collection.aggregate(searchParams(ministry, cluster, search))
      : this.collection.find({
        $and: [
          { "ministry": { $regex: ministry ? ministry : '', $options: 'i' } },
          { "cluster": cluster ? cluster : { $gt: 0, $lt: 8 } },]
      })).toArray()
  }

  getFilteredSearchSorted(filter, search, sort, sortOrder = 1) {
    const { ministry, cluster } = filter || {};
    return (search ? this.collection.aggregate(searchParams(ministry, cluster, search))
      : this.collection.find({
        $and: [
          { ministry: { $regex: ministry ? ministry : "", $options: "i" } },
          { cluster: cluster ? cluster : { $gt: 0, $lt: 8 } },
        ],
      })).sort({ [sort]: sortOrder }).toArray();
  }
}
