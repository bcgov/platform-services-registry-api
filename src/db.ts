import * as mongoDB from "mongodb";

export const collections: {
  privateCloudRequest?: mongoDB.Collection;
} = {};

export async function connectToDatabase() {
  console.log("Connecting to database...");
  // const connectionString: string = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`;
  const connectionString: string =
    "mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/v2?retryWrites=true&w=majority";

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);
  await client.connect();
  const db: mongoDB.Db = client.db();

  const privateCloudRequest: mongoDB.Collection = db.collection(
    "PrivateCloudRequest"
  );

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

  collections.privateCloudRequest = privateCloudRequest;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collections:
      ${privateCloudRequest.collectionName}`
  );
}
