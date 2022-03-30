import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import { MongoClient } from "mongodb";
import MongoHelpers from "./dataSources/MongoHelpers";


async function startApolloServer(typeDefs, resolvers) {
  const client = new MongoClient("mongodb://localhost:27017/test");
  client.connect();

  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ 
      users: new MongoHelpers(client.db().collection("users")),
      privateCloudProjects: new MongoHelpers(client.db().collection("privateCloudProjects")),
      publicCloudProjects: new MongoHelpers(client.db().collection("publicCloudProjects")),
      namespace: new MongoHelpers(client.db().collection("namespace"))
    }),
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });
  await server.start();
  server.applyMiddleware({ app });
  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
