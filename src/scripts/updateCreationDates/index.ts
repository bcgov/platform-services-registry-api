import { PrismaClient } from '@prisma/client';
import { json } from 'body-parser';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const directoryPath =
  '/Users/okanji/Desktop/platform-services-registry-api/src/scripts/updateCreationDates/creation_times_test';

async function updateCreationDates() {
  // Get all the files in the creation_times directory
  const files = fs.readdirSync(directoryPath);

  for (const file of files) {
    if (file.startsWith('creation_times_') && file.endsWith('.json')) {
      const filePath = path.join(directoryPath, file);
      const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

      console.log(jsonData);

      // Filter out the entries that are not 'prod'
      const prodEntries = jsonData.filter((entry) => {
        const licencePlate = Object.keys(entry)[0];
        return licencePlate.endsWith('-prod');
      });

      for (const entry of prodEntries) {
        const licencePlate = Object.keys(entry)[0].replace('-prod', '');

        const createdDate = new Date(entry[licencePlate + '-prod']);

        // Update the creation date in the database
        const result = await prisma.privateCloudProject.updateMany({
          where: {
            licencePlate,
          },
          data: {
            created: createdDate,
          },
        });

        console.log(result);
      }
    }
  }
  console.log('Update completed.');
  await prisma.$disconnect();
}

updateCreationDates().catch((e) => {
  console.error('Error:', e);
  prisma.$disconnect();
});
