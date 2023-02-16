import * as mongoDB from "mongodb";

console.log("Connecting to database...");
// const connectionString= `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`;
const connectionString =
  "mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/registry?retryWrites=true&w=majority";

const client = new mongoDB.MongoClient(connectionString);
await client.connect();
const db = client.db();

// Aggrigat date from string to date object

const privateCloudProject = db.collection("PrivateCloudProject");
const user = db.collection("User");

console.log("Aggrigating date from string to date object...");
try {
  const result = privateCloudProject.aggregate([
    {
      $set: {
        created: {
          $toDate: "$created"
        }
      }
    }
  ]);
  console.log(result);
} catch (e) {
  console.log(e);
}

// const res = await privateCloudProject.aggregate([
//   {
//     $addFields: {
//       created: {
//         $toDate: "$created"
//       }
//     }
//   }
// ]);

// await user.aggregate([
//   {
//     $addFields: {
//       created: {
//         $toDate: "$created"
//       }
//     }
//   }
// ]);

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
