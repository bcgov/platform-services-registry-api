// import * as mongoDB from "mongodb";
// import {UserDbObject} from "./__generated__/resolvers-types";

// export const collections: {
//   users?: mongoDB.Collection;
//   privateCloudProjects?: mongoDB.Collection;
//   privateCloudActiveRequests?: mongoDB.Collection;
//   privateCloudArchivedRequests?: mongoDB.Collection;
//   privateCloudActiveRequestedProjects?: mongoDB.Collection;
//   privateCloudArchivedRequestedProjects?: mongoDB.Collection;
// } = {};

// export async function connectToDatabase() {
//   console.log("Connecting to database...");
//   const connectionString: string = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_NAME}?retryWrites=true&w=majority`;

//   const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);
//   await client.connect();
//   const db: mongoDB.Db = client.db();

//   // Schema validation goes here

//   const users = db.collection("users");
//   const privateCloudProjects: mongoDB.Collection = db.collection(
//     "privateCloudProjects"
//   );
//   const privateCloudActiveRequests: mongoDB.Collection = db.collection(
//     "privateCloudActiveRequests"
//   );
//   const privateCloudArchivedRequests: mongoDB.Collection = db.collection(
//     "privateCloudArchivedRequests"
//   );
//   const privateCloudActiveRequestedProjects: mongoDB.Collection = db.collection(
//     "privateCloudActiveRequestedProjects"
//   );
//   const privateCloudArchivedRequestedProjects: mongoDB.Collection =
//     db.collection("privateCloudArchivedRequestedProjects");

//   collections.users = users;
//   collections.privateCloudProjects = privateCloudProjects;
//   collections.privateCloudActiveRequests = privateCloudActiveRequests;
//   collections.privateCloudArchivedRequests = privateCloudArchivedRequests;
//   collections.privateCloudActiveRequestedProjects =
//     privateCloudActiveRequestedProjects;
//   collections.privateCloudArchivedRequestedProjects =
//     privateCloudArchivedRequestedProjects;

//   console.log(
//     `Successfully connected to database: ${db.databaseName} and collections:
//       ${users.collectionName}
//       ${privateCloudProjects.collectionName}
//       ${privateCloudActiveRequests.collectionName}
//       ${privateCloudArchivedRequests.collectionName}
//       ${privateCloudActiveRequestedProjects.collectionName}
//       ${privateCloudArchivedRequestedProjects.collectionName}`
//   );
// }
