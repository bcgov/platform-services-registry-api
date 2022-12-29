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
import { addMocksToSchema } from "@graphql-tools/mock";
import { authDirectiveTransformer } from "./auth/directives.js";
import { PrismaClient } from "@prisma/client";

// Note: this only works locally because it relies on `npm` routing
// from the root directory of the project.
const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

export interface ContextValue {
  kauth: KeycloakContext;
  // dataSources?: {
  //   booksAPI: BooksDataSource;
  // };
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

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
// await connectToDatabase();
app.use(
  "/graphql",
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => {
      return {
        // @ts-ignore
        kauth: new KeycloakContext({ req }, keycloak),
        prisma
        // dataSources: {
        //   booksAPI: new BooksDataSource()
        // }
      };
    }
  })
);

// The below code is important for auth to work
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
