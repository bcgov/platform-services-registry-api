import { MongoClient } from "mongodb";
import MongoHelpers from "./MongoHelpers";
import PrivateCloudProjects from "./PrivateCloudProjects";

let db = null;
let client = null;

async function getDatasources() {
  if (!db) {
    const MONGO_URL = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`
    console.log('MONGO_URL is: ', MONGO_URL);
    client = new MongoClient(MONGO_URL);
    await client.connect();
    db = client.db();
  }

  const dataSources = {
    users: new MongoHelpers(db.collection("users")),
    privateCloudProjects: new PrivateCloudProjects(
      db.collection("privateCloudProjects")
    ),
    privateCloudActiveRequests: new MongoHelpers(
      db.collection("privateCloudActiveRequests")
    ),
    privateCloudArchivedRequests: new MongoHelpers(
      db.collection("privateCloudArchivedRequests")
    ),
    privateCloudRequestedProjects: new MongoHelpers(
      db.collection("privateCloudRequestedProjects")
    ),
  };

  return dataSources;
}

async function closeClient() {
  client.close();
}

export { getDatasources, closeClient };
