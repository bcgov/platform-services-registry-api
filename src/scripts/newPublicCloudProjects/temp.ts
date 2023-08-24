import fs from 'fs/promises';
import path from 'path';
import {
  PrismaClient,
  PublicCloudProject,
  ProjectStatus,
} from '@prisma/client';
import { getIdirFromEmail } from '../../controllers/getIdirEmails.js';

const prisma = new PrismaClient();

const mainFolderPath =
  '/Users/okanji/Desktop/platform-services-registry-api/src/scripts/newPublicCloudProjects/project_sets';

const parseMinistryFromDisplayName = (displayName) => {
  if (displayName && displayName.length > 0) {
    const dividedString = displayName.split(/(\s+)/);
    if (dividedString[2]) {
      const ministry = dividedString[dividedString.length - 1].split(':', 1)[0];
      return ministry;
    }
  }
};

async function getUser(email) {
  if (!email) {
    console.log('No email provided')
    return undefined;
  }

  const userData = await getIdirFromEmail(email)[0];

  console.log(userData);

  if (!userData) {
    console.log('No user data found for email: ', email);
    return undefined;
  }

  const user = {
    email: userData.mail.toLowerCase(),
    firstName: userData.givenName,
    lastName: userData.surname,
    ministry: parseMinistryFromDisplayName(userData.displayName),
  };

  return user;
}

async function createProject(projectData) {
  try {
    // console.log('projectOwner: ', projectData.productOwner);
    // console.log('primaryTechnicalLead: ', projectData.primaryTechnicalLeadId);
    // console.log(
    //   'secondaryTechnicalLead: ',
    //   projectData.secondaryTechnicalLeadId
    // );

    console.log('Creating project: ', projectData?.project_name);
    const projectOwner = await getUser(projectData?.productOwner?.email);
    const primaryTechnicalLead = await getUser(
      projectData?.primaryTechnicalLeadId?.email
    );
    const secondaryTechnicalLead = await getUser(
      projectData?.secondaryTechnicalLeadId?.email
    );

    console.log('projectOwner: ', projectOwner);

    if (!projectOwner || !primaryTechnicalLead) {
      console.log(
        'Could not find user for project: ',
        projectData.project_name
      );
      return;
    }

    const project = await prisma.publicCloudProject.create({
      data: {
        name: projectData.project_name,
        description: '',
        provider: 'AWS',
        ministry: 'CITZ',
        status: ProjectStatus.ACTIVE,
        licencePlate: projectData.licence_plate,
        accountCoding: projectData.account_coding,
        budget: projectData.budget,
        projectOwner: {
          connectOrCreate: {
            where: {
              email: projectOwner.email,
            },
            create: projectOwner,
          },
        },
        primaryTechnicalLead: {
          connectOrCreate: {
            where: {
              email: primaryTechnicalLead.email,
            },
            create: primaryTechnicalLead,
          },
        },
        secondaryTechnicalLead: secondaryTechnicalLead
          ? {
              connectOrCreate: {
                where: {
                  email: secondaryTechnicalLead.email,
                },
                create: secondaryTechnicalLead,
              },
            }
          : undefined,
      },
    });

    console.log('Created project: ', project.name);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function main() {
  try {
    const licensePlateFolders = await fs.readdir(mainFolderPath);

    for (const licensePlateFolder of licensePlateFolders) {
      const folderPath = path.join(mainFolderPath, licensePlateFolder);

      const stats = await fs.stat(folderPath);

      if (stats.isDirectory()) {
        const projectJsonPath = path.join(folderPath, 'project.json');

        const data = await fs.readFile(projectJsonPath, 'utf-8');

        const projectData = await JSON.parse(data);
        const user = await getUser(projectData?.productOwner?.email);
        console.log('user: ', user);

        await createProject(projectData);
      }
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

main(); // Call the async function
