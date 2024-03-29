import { PrismaClient } from '@prisma/client';
import getIdirUpn from '../../utils/getIdirUpn.js';
import { getIdirFromEmail } from '../../utils/getIdirFromEmail.js';

const prisma = new PrismaClient();

const users = await prisma.user.findMany();

for (const user of users) {
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
      idir: await getIdirUpn(userData.id),
      upn: userData.userPrincipalName,
    },
  });
}
