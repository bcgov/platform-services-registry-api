import './env.js';

import * as mongoDB from 'mongodb';

export const collections: {
  users?: mongoDB.Collection;
  privateCloudProjects?: mongoDB.Collection;
  publicCloudProjects?: mongoDB.Collection;
} = {};

export async function connectToDatabase() {
  console.log('Connecting to database...');
  const connectionString: string = process.env.DATABASE_URL || '';

  console.log('Connection string: ');
  console.log(connectionString);

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(connectionString);
  await client.connect();
  const db: mongoDB.Db = client.db();

  // Schema validation goes here

  const users = db.collection('User');
  const privateCloudProjects: mongoDB.Collection = db.collection(
    'PrivateCloudProject'
  );
  const publicCloudProjects: mongoDB.Collection =
    db.collection('PublicCloudProject');
  collections.users = users;
  collections.privateCloudProjects = privateCloudProjects;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collections:
      ${users.collectionName}
      ${privateCloudProjects.collectionName}`
  );
}
