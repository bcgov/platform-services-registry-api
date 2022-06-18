import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { configureKeycloak } from "./auth/config";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { applyDirectiveTransformers as applyAuthDirectiveTranformers } from "./auth/transformers";
import { applyDirectiveTransformers } from "./graphql/transformers";
import express from "express";
import http from "http";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { getDatasources } from "./dataSources";
import chesService from "./ches";
import provision from "./controllers/provision";

async function startApolloServer(typeDefs, resolvers) {

  let schema = makeExecutableSchema({
    typeDefs: [KeycloakTypeDefs, typeDefs],
    resolvers,
  });

  schema = applyAuthDirectiveTranformers(applyDirectiveTransformers(schema));

  const app = express();
  const { keycloak } = configureKeycloak(app, "/graphql");
  const httpServer = http.createServer(app);

  const dataSources = await getDatasources()

  const server = new ApolloServer({
    schema,
    resolvers,
    dataSources: () => dataSources,
    context: ({ req }) => ({
      kauth: new KeycloakContext({ req }, keycloak),
      chesService,
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();
  server.applyMiddleware({ app });

  app.post("/rest/provision-callback", provision);

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
