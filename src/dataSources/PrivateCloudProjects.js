import MongoHelpers from "./MongoHelpers";

export default class PrivateCloudProjects extends MongoHelpers {
  getPaginated(offset, limit, filter, search, sort, sortOrder = 1) {
    const { ministry, cluster } = filter || {};

    if (search) {
      return this.collection
        .aggregate([
          {
            $lookup: {
              from: "users",
              localField: "projectOwner",
              foreignField: "_id",
              as: "projectOwners",
            },
          },
          {
            $unwind: "$projectOwners",
          },
          {
            $lookup: {
              from: "users",
              localField: "technicalLeads",
              foreignField: "_id",
              as: "projectTechLeads",
            },
          },
          {
            $match: {
              $and: [
                {
                  ministry: {
                    $regex: ministry ? ministry : "",
                    $options: "i",
                  },
                },
                { cluster: cluster ? cluster : { $gt: 0, $lt: 4 } },
                {
                  $or: [
                    {
                      "projectOwners.firstName": {
                        $regex: search,
                        $options: "i",
                      },
                    },
                    {
                      "projectOwners.lastName": {
                        $regex: search,
                        $options: "i",
                      },
                    },
                    {
                      "projectOwners.email": {
                        $regex: search,
                        $options: "i",
                      },
                    },
                    {
                      $and: [
                        {
                          "projectTechLeads.firstName": {
                            $regex: search,
                            $options: "i",
                          },
                        },
                      ],
                    },
                    {
                      $and: [
                        {
                          "projectTechLeads.lasttName": {
                            $regex: search,
                            $options: "i",
                          },
                        },
                      ],
                    },
                    {
                      $and: [
                        {
                          "projectTechLeads.email": {
                            $regex: search,
                            $options: "i",
                          },
                        },
                      ],
                    },
                    { name: { $regex: search, $options: "i" } },
                    { description: { $regex: search, $options: "i" } },
                    { licencePlate: { $regex: search, $options: "i" } },
                  ],
                },
              ],
            },
          },
          { $sort: { [sort]: sortOrder } },
          { $skip: offset },
          { $limit: limit },
        ])
        .toArray();
    }

    return this.collection
      .find({
        $and: [
          { ministry: { $regex: ministry ? ministry : "", $options: "i" } },
          { cluster: cluster ? cluster : { $gt: 0, $lt: 4 } },
        ],
      })
      .sort({ [sort]: sortOrder })
      .skip(offset)
      .limit(limit)
      .toArray();
  }

  getFilteredSearchSorted(filter, search, sort, sortOrder = 1) {
    const { ministry, cluster } = filter || {};

    if (search) {
      return this.collection
        .aggregate([
          {
            $lookup: {
              from: "users",
              localField: "projectOwner",
              foreignField: "_id",
              as: "projectOwners",
            },
          },
          {
            $unwind: "$projectOwners",
          },
          {
            $lookup: {
              from: "users",
              localField: "technicalLeads",
              foreignField: "_id",
              as: "projectTechLeads",
            },
          },
          {
            $match: {
              $and: [
                {
                  ministry: {
                    $regex: ministry ? ministry : "",
                    $options: "i",
                  },
                },
                { cluster: cluster ? cluster : { $gt: 0, $lt: 4 } },
                {
                  $or: [
                    {
                      "projectOwners.firstName": {
                        $regex: search,
                        $options: "i",
                      },
                    },
                    {
                      "projectOwners.lastName": {
                        $regex: search,
                        $options: "i",
                      },
                    },
                    {
                      "projectOwners.email": {
                        $regex: search,
                        $options: "i",
                      },
                    },
                    {
                      $and: [
                        {
                          "projectTechLeads.firstName": {
                            $regex: search,
                            $options: "i",
                          },
                        },
                      ],
                    },
                    {
                      $and: [
                        {
                          "projectTechLeads.lasttName": {
                            $regex: search,
                            $options: "i",
                          },
                        },
                      ],
                    },
                    {
                      $and: [
                        {
                          "projectTechLeads.email": {
                            $regex: search,
                            $options: "i",
                          },
                        },
                      ],
                    },
                    { name: { $regex: search, $options: "i" } },
                    { description: { $regex: search, $options: "i" } },
                    { licencePlate: { $regex: search, $options: "i" } },
                  ],
                },
              ],
            },
          },
          { $sort: { [sort]: sortOrder } },
        ])
        .toArray();
    }

    return this.collection
      .find({
        $and: [
          { ministry: { $regex: ministry ? ministry : "", $options: "i" } },
          { cluster: cluster ? cluster : { $gt: 0, $lt: 4 } },
        ],
      })
      .sort({ [sort]: sortOrder })
      .toArray();
  }
}
