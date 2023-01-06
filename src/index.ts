import "./env.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import resolvers from "./resolvers/index.js";
import { readFileSync } from "fs";
import configureKeycloak from "./auth/config.js";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import { authDirectiveTransformer } from "./auth/directives.js";
import { PrismaClient } from "@prisma/client";
import provisionerCallbackHandler from "./controllers/provisionerCallbackHandler.js";

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

export interface ContextValue {
  kauth: KeycloakContext;
  prisma: PrismaClient;
}

export const prisma = new PrismaClient();

// prisma.$use(async (params, next) => {
//   if (params.model == "PrivateCloudProject") {
//     if (params.action == "findUnique" && params.args.where.id === undefined) {
//       params.action = "findFirst";
//     }
//   }

//   return next(params);
// });

// await connectToDatabase();

let schema = makeExecutableSchema({
  typeDefs: [KeycloakTypeDefs, typeDefs, DIRECTIVES],
  resolvers
});

schema = authDirectiveTransformer(schema, "auth");

const app = express();
const { keycloak } = configureKeycloak(app, "/graphql");
const httpServer = http.createServer(app);
const server = new ApolloServer<ContextValue>({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true
});
await server.start();

app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => {
      // @ts-ignore
      const kauth = new KeycloakContext({ req }, keycloak);
      // @ts-ignore
      const { email, resource_access } = kauth.accessToken.content;
      const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
        roles: []
      };
      return {
        // @ts-ignore
        kauth: kauth,
        prisma,
        authRoles: roles,
        authEmail: email
      };
    }
  })
);

// The below code is important for auth to work
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/namespace", provisionerCallbackHandler);

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
