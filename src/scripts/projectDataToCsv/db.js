import * as mongoDB from "mongodb";

export const collections = {};

export async function connectToDatabase() {
  console.log("Connecting to database...");
  // const connectionString: string = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`;
  const connectionString =
    "mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/registry?retryWrites=true&w=majority";

  const client = new mongoDB.MongoClient(connectionString);
  await client.connect();
  const db = client.db();

  const privateCloudProject = db.collection("privateCloudProjects");

  collections.privateCloudProject = privateCloudProject;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collections:
      ${privateCloudProject.collectionName}`
  );
}
