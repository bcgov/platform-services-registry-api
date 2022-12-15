import dotenv from "dotenv";
dotenv.config();

import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault
} from "apollo-server-core";
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
import provisionerCallbackHandler from "./controllers/provisionerCallbackHandler";

async function startApolloServer(typeDefs, resolvers) {
  let schema = makeExecutableSchema({
    typeDefs: [KeycloakTypeDefs, typeDefs],
    resolvers
  });

  schema = applyAuthDirectiveTranformers(applyDirectiveTransformers(schema));

  const app = express();

  const { keycloak } = configureKeycloak(app, "/graphql");
  const httpServer = http.createServer(app);

  const dataSources = await getDatasources();

  const server = new ApolloServer({
    schema,
    resolvers,
    dataSources: () => dataSources,
    context: ({ req }) => ({
      kauth: new KeycloakContext({ req }, keycloak),
      chesService
    }),
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ footer: false, embed: true }),
      ApolloServerPluginDrainHttpServer({ httpServer })
    ]
  });

  await server.start();
  server.applyMiddleware({ app });
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true
    })
  );
  app.post("/namespace", provisionerCallbackHandler);

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
