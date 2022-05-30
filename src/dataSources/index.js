import { MongoClient } from "mongodb";
import MongoHelpers from "./MongoHelpers";

let db = null;
let client = null;

async function getDatasources() {
  if (!db) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db();
  }

  const dataSources = {
    users: new MongoHelpers(db.collection("users")),
    privateCloudProjects: new MongoHelpers(
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
