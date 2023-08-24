import fs from 'fs/promises';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { getIdirFromEmail } from '../../controllers/getIdirEmails.js';

const prisma = new PrismaClient();

const parseMinistryFromDisplayName = (displayName) => {
  if (displayName && displayName.length > 0) {
    const dividedString = displayName.split(/(\s+)/);
    if (dividedString[2]) {
      const ministry = dividedString[dividedString.length - 1].split(':', 1)[0];
      return ministry;
    }
  }
};

const dataPath =
  '/Users/okanji/Desktop/platform-services-registry-api/src/scripts/updateUsers/users.json';

const data = await fs.readFile(dataPath, 'utf-8');

const projectData = await JSON.parse(data);

for (const user of projectData) {
  console.log(user.email);
  const [userData] = await getIdirFromEmail(user.email);

  if (!userData) {
    console.log('No user data found for email: ', user.email);
    continue;
  }

  await prisma.user.update({
    where: {
      email: user.email.toLowerCase(),
    },
    data: {
      ministry: parseMinistryFromDisplayName(userData.displayName),
    },
  });
}
