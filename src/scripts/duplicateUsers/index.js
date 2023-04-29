import { MongoClient } from "mongodb";

async function updatePrivateCloudProjects() {
  const uri =
    "mongodb://registry:pQ3DYCeMTqEhbQ3DYC1e8qwb9@localhost:27018/platsrv-registry-db?directConnection=true";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("platsrv-registry-db");
    const usersCollection = database.collection("User");
    const projectsCollection = database.collection("PrivateCloudProject");

    // Run the aggregation query to find duplicate user emails
    const duplicateUsers = await usersCollection
      .aggregate([
        { $addFields: { lowercaseEmail: { $toLower: "$email" } } },
        {
          $group: {
            _id: "$lowercaseEmail",
            count: { $sum: 1 },
            users: { $push: "$$ROOT" }
          }
        },
        { $match: { count: { $gt: 1 } } },
        { $project: { _id: 0, duplicates: "$users" } }
      ])
      .toArray();

    for (const duplicateGroup of duplicateUsers) {
      const lowercaseUser = duplicateGroup.duplicates.find(
        (user) => user.email === user.lowercaseEmail
      );
      const uppercaseUser = duplicateGroup.duplicates.find(
        (user) => user.email !== user.lowercaseEmail
      );

      console.log(lowercaseUser);

      // Update PrivateCloudProject documents
      const updateFields = {
        projectOwnerId: uppercaseUser._id,
        primaryTechnicalLeadId: uppercaseUser._id,
        secondaryTechnicalLeadId: uppercaseUser._id
      };

      for (const field of Object.keys(updateFields)) {
        await projectsCollection.updateMany(
          { [field]: updateFields[field] },
          { $set: { [field]: lowercaseUser._id } }
        );
      }
    }
  } catch (error) {
    console.error("Error updating PrivateCloudProject documents:", error);
  } finally {
    await client.close();
  }
}

updatePrivateCloudProjects();
