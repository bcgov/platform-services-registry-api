// import request from "supertest";
// import express from "express";
// import { getReProvisionNatsMessage } from "../src/controllers/index.js";

// const app = express();
// app.use(express.json());
// app.get(
//   "/api/v1/provision/sync/:profileId/provisioned-profile-bot-json",
//   getReProvisionNatsMessage
// );

// describe("Integration test: GET /api/v1/provision/sync/:profileId/provisioned-profile-bot-json", () => {
//   afterEach(async () => {
//     // Clean up your test database or any other resources created during the test
//   });

//   it("should return a JSON object with the correct message", async () => {
//     const profileId = "123"; // Replace this with a valid profileId from your test database

//     const response = await request(app).get(
//       `/api/v1/provision/sync/${profileId}/provisioned-profile-bot-json`
//     );

//     // Add assertions based on the expected response structure
//     // For example:
//     expect(response.status).toBe(200);
//     expect(response.body).toHaveProperty("message");
//   });

//   // Add more test cases if needed
// });
