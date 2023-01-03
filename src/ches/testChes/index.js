import dotenv from "dotenv";
dotenv.config();
import ChesService from "./chesService.js";

// Use the chesService object to send emails, make sure you have the
// following environment variables set in your .env file in THIS directory:

const chesService = new ChesService({
  tokenUrl: process.env.CHES_TOKEN_URL,
  clientId: process.env.CHES_CLIENT_ID,
  clientSecret: process.env.CHES_CLIENT_SECRET,
  apiUrl: process.env.CHES_API_URL
});

chesService.send({
  bodyType: "html",
  body: "This is a test email from my new script",
  to: ["oamarkanji@gmail.com", "zhanna.kolesnyk@gov.bc.ca"],
  from: "Registry <PlatformServicesTeam@gov.bc.ca>",
  subject: `**profile.name** OCP 4 Project Set`
});
