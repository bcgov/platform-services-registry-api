import { MongoClient } from 'mongodb';
import { Prisma, CommonComponents } from '@prisma/client';

function tranformCommonComponentOption(original) {
  if (original === undefined || original === null) {
    return {
      planningToUse: false,
      implemented: false,
    };
  } else if (original === 'PLANNING_TO_USE') {
    return {
      planningToUse: true,
      implemented: false,
    };
  } else if (original === 'IMPLEMENTED') {
    return {
      planningToUse: false,
      implemented: true,
    };
  } else {
    return {
      planningToUse: false,
      implemented: false,
    };
  }
}

export const transformCommonComponents = (originalComponents: any) => {
  const commonComponentKeys = [
    'addressAndGeolocation',
    'workflowManagement',
    'formDesignAndSubmission',
    'identityManagement',
    'paymentServices',
    'documentManagement',
    'endUserNotificationAndSubscription',
    'publishing',
    'businessIntelligence',
  ];

  const commonComponetsOptions = Object.fromEntries(
    commonComponentKeys.map((key) => [
      key,
      tranformCommonComponentOption(originalComponents[key]),
    ])
  );

  const isCommonComponentsUsed = !Object.values(commonComponetsOptions).some(
    (value) => value.planningToUse || value.implemented
  );

  const newComponents = {
    ...commonComponetsOptions,
    other: originalComponents.other || '',
    noServices: isCommonComponentsUsed,
  } as CommonComponents;

  return newComponents;
};
// Connection URL and Database Name
const url = process.env.DATABASE_URL;
// const dbName = 'platsrv-registry-db';
const dbName = 'oamar';
const collectionNames = ['PrivateCloudRequestedProject', 'PrivateCloudProject'];

console.log('DATABASE_URL: ', url);

// Create a new MongoClient
const client = new MongoClient(url);

async function updateDocuments(collectionName) {
  try {
    // Connect the client to the server
    await client.connect();
    console.log('Connected successfully to server');

    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Get all documents
    const cursor = collection.find({}); // Adjust the find query as needed

    console.log('Found documents:', await cursor.count());

    // Iterate over the cursor
    for await (const project of cursor) {
      const commonComponents = transformCommonComponents(
        project.commonComponents
      );

      // Update the document
      await collection.updateOne(
        { _id: project._id }, // Make sure to use the correct identifier field
        { $set: { commonComponents } }
      );
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

// Call the updateDocuments function
async function updateAllCollections(collections) {
  for (const collectionName of collections) {
    await updateDocuments(collectionName);
  }
}

// Call the updateAllCollections function with all collection names
updateAllCollections(collectionNames)
  .then(() => console.log('All collections have been updated.'))
  .catch((error) => console.error('Error updating collections:', error));
