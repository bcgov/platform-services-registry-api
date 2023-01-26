import dotenv from "dotenv";
dotenv.config();
import ChesService from "./chesService.js";

const newChesService = new ChesService({
  tokenUrl: process.env.CHES_TOKEN_URL,
  clientId: process.env.CHES_CLIENT_ID,
  clientSecret: process.env.CHES_CLIENT_SECRET,
  apiUrl: process.env.CHES_API_URL,
});

export default newChesService