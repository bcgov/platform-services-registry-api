import Papa from "papaparse";
import { connectToDatabase, collections } from "./db.js";
import fs from "fs";

await connectToDatabase();

const projects = await collections.privateCloudProject.find({}).toArray();

const threeYearsAgo = new Date("2018-01-01T00:00:00.000Z");

console.log("Unfiltered projects", projects.length);

const data = projects
  .filter(({ created }) => new Date(created) > threeYearsAgo)
  .map((project) => ({
    name: project.name,
    description: project.description,
    status: project.status,
    created: project.created,
    ministry: project.ministry
  }));

console.log("Filtered projects", data.length);

const csv = Papa.unparse(data);
fs.writeFileSync("output.csv", csv);
