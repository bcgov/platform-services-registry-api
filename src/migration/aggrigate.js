require("dotenv").config();
const { MongoClient } = require("mongodb");

async function main() {
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/drivers/node/ for more details
   */
  const uri = process.env.MONGODB_URI;

  console.log("URI: ", uri);

  /**
   * The Mongo Client you will use to interact with your database
   * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
   * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
   * pass option { useUnifiedTopology: true } to the MongoClient constructor.
   * const client =  new MongoClient(uri, {useUnifiedTopology: true})
   */
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    await convertStringsToDates(client, "PrivateCloudProject", "created");
    await convertStringsToDates(client, "User", "created");
    await convertStringsToDates(client, "User", "lastSeen");

    // Make the appropriate DB calls
  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);

async function convertStringsToDates(client, collectionName, field) {
  const pipeline = [
    {
      $set: {
        [field]: {
          $toDate: "$" + field,
        },
      },
    },
    { $merge: { into: collectionName } },
  ];

  // See https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html#aggregate for the aggregate() docs
  const aggCursor = client
    .db("registry")
    .collection(collectionName)
    .aggregate(pipeline);

  await aggCursor.forEach((airbnbListing) => {
    console.log(`${airbnbListing._id}: ${airbnbListing.averagePrice}`);
  });
}

// *** Example code for adding indexes to a collection

// const privateCloudRequest = db.collection("PrivateCloudRequest");

// ** Create indexes **
// Prisma does not support partial unique indexes. So we drop the one that Prisma created and create a new one.

// let dropIndexResult;

// try {
//   dropIndexResult = await privateCloudRequest.dropIndex(
//     "PrivateCloudRequest_projectId_key"
//   );
// } catch (e) {
//   console.log(e);
// }

// setTimeout(() => {}, 4000); // Wait for index to drop

// let createIndexresult;

// try {
//   createIndexresult = await privateCloudRequest.createIndex(
//     { projectId: 1 },
//     {
//       unique: true,
//       partialFilterExpression: { projectId: { $exists: true } }
//     }
//   );
// } catch (e) {
//   console.log(e);
// }

// console.log(`Dropped index: ${dropIndexResult}`);
// console.log(`Created index: ${createIndexresult}`);
