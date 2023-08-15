import fs from 'fs/promises';
import path from 'path';

// Read and combine JSON files in the folder
async function readAndCombineJSONFiles(folderPath) {
  const files = await fs.readdir(folderPath);
  const jsonFiles = files.filter((file) => path.extname(file) === '.json');
  let combinedData = {};

  for (const file of jsonFiles) {
    const fileContent = await fs.readFile(path.join(folderPath, file), 'utf-8');
    const jsonData = JSON.parse(fileContent);

    for (const entry of jsonData) {
      const [key, value] = Object.entries(entry)[0];
      if (key.includes('-prod')) {
        const newKey = key.replace('-prod', '');
        combinedData[newKey] = value;
      }
    }
  }

  await fs.writeFile(
    './combinedData.json',
    JSON.stringify(combinedData, null, 2)
  );

  return combinedData;
}

// Update currentProjects.json with new data
async function updateCurrentProjects(newData, currentProjectsPath) {
  const currentProjectsContent = await fs.readFile(
    currentProjectsPath,
    'utf-8'
  );
  const currentProjects = JSON.parse(currentProjectsContent);

  const updatedProjects = currentProjects.map((project) => {
    const newCreatedDate = newData[project.licencePlate];

    if (newCreatedDate) {
      return {
        ...project,
        created: { $date: newCreatedDate },
      };
    }

    return project;
  });

  const updatedProjectsJSON = JSON.stringify(updatedProjects, null, 2);
  await fs.writeFile('./UpdatedPrivateCloudProject.json', updatedProjectsJSON);

  return updatedProjects;
}

function flattenObject(obj, prefix = '') {
  const result = {};

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      const flattened = flattenObject(value, `${prefix}${key}.`);
      Object.assign(result, flattened);
    } else {
      result[`${prefix}${key}`] = value;
    }
  }

  return result;
}

function removeNestedOids(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && '$oid' in value) {
      obj[key] = value.$oid;
    }
  }
  return obj;
}

function convertToCSV(jsonArray) {
  const header = Object.keys(jsonArray[0]).join(',');
  const rows = jsonArray.map((row) =>
    Object.values(row)
      .map((value) => `"${value}"`)
      .join(',')
  );

  return [header, ...rows].join('\n');
}

async function saveCSV(data, filePath) {
  await fs.writeFile(filePath, data);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

async function main() {
  const folderPath = './createdDates';
  const currentProjectsPath = './PrivateCloudProject.json';

  const combinedData = await readAndCombineJSONFiles(folderPath);
  const updatedProjects = await updateCurrentProjects(
    combinedData,
    currentProjectsPath
  );

  const flattenedProjects = updatedProjects.map((project) => {
    const cleanedProject = removeNestedOids(project);
    return flattenObject(cleanedProject);
  });

  const csvData = convertToCSV(flattenedProjects);
  await saveCSV(csvData, 'RegistryAllProjects.csv');

  const startCutoff = new Date('2022-04-01T00:00:00Z');
  const endCutoff = new Date('2023-03-31T23:59:59Z');
  const filteredProjects = updatedProjects
    .filter((project) => {
      const projectDate = new Date(project.created.$date);
      return projectDate >= startCutoff && projectDate <= endCutoff;
    })
    .filter((project) => !project.name.toLowerCase().includes('test'))
    .map(({ name, licencePlate, created }) => ({
      name,
      licencePlate,
      created: formatDate(created.$date),
    }));

  const filteredCSVData = convertToCSV(filteredProjects);
  await saveCSV(
    filteredCSVData,
    'projects_since_april_1_2022_to_march_31_2023_with_dates.csv'
  );
}

main();
