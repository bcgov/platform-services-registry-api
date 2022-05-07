require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { configureKeycloak } from "./auth/config";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { applyDirectiveTransformers } from "./auth/transformers";
import express from "express";
import http from "http";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { MongoClient } from "mongodb";
import MongoHelpers from "./dataSources/MongoHelpers";

async function startApolloServer(typeDefs, resolvers) {
  const client = new MongoClient(process.env.MONGO_URI);
  client.connect();

  let schema = makeExecutableSchema({
    typeDefs: [KeycloakTypeDefs, typeDefs],
    resolvers,
  });

  schema = applyDirectiveTransformers(schema);

  const app = express();

  const graphqlPath = "/graphql";
  const { keycloak } = configureKeycloak(app, graphqlPath);

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    resolvers,
    dataSources: () => ({
      users: new MongoHelpers(client.db().collection("users")),
      privateCloudProjects: new MongoHelpers(
        client.db().collection("privateCloudProjects")
      ),
      publicCloudProjects: new MongoHelpers(
        client.db().collection("publicCloudProjects")
      ),
      privateCloudRequests: new MongoHelpers(
        client.db().collection("privateCloudRequests")
      ),
      publicCloudRequests: new MongoHelpers(
        client.db().collection("publicCloudRequests")
      ),
      privateCloudRequestedProjects: new MongoHelpers(
        client.db().collection("privateCloudRequestedProjects")
      ),
      publicCloudRequestedProjects: new MongoHelpers(
        client.db().collection("publicCloudRequestedProjects")
      ),
    }),
    context: ({ req }) => {
      return ({kauth: new KeycloakContext({ req }, keycloak)})
    },
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
