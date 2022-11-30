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
import provisionerCallbackHandler from "./controllers/provisionerCallbackHandler";
import swig from "swig";
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
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.post("/namespace", provisionerCallbackHandler);

  await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}

try {    
  console.log('chesService');
  chesService.send({
    bodyType: "html",
    body: swig.renderFile(
      "./src/ches/new-templates/super-admin-request-email.html",
      {
        requestType: "QoutaYupe",
        isProvisioningRequest: false,
        isQuotaRequest: true,
        consoleURLProdNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-prod`,
        isProductionQuotaChanged: true,
        productionQuotaCPURequested: "new quota",
        productionQuotaMemoryRequested: "new quota",
        productionQuotaStorageRequested: "new quota",
        isDevelopmentQuotaChanged: true,
        consoleURLDevNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-dev`,
        developmentQuotaCPURequested: "new quota",
        developmentQuotaMemoryRequested: "new quota",
        developmentQuotaStorageRequested: "new quota",
        isTestQuotaChanged: true,
        consoleURLTestNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-test`,
        testQuotaCPURequested: "new quota",
        testQuotaMemoryRequested: "new quota",
        testQuotaStorageRequested: "new quota",
        isToolsQuotaChanged: true,
        consoleURLToolNameSpace: `https://console.apps.silver.devops.gov.bc.ca/topology/ns/ggg554-tool`,
        toolsQuotaCPURequested: "new quota",
        toolsQuotaMemoryRequested: "new quota",
        toolsQuotaStorageRequested: "new quota",
        productionQuotaCPUCurrent: "current quota",
        productionQuotaMemoryCurrent: "current quota",
        productionQuotaStorageCurrent: "current quota",
        developmentQuotaCPUCurrent: "current quota",
        developmentQuotaMemoryCurrent: "current quota",
        developmentQuotaStorageCurrent: "current quota",
        testQuotaCPUCurrent: "current quota",
        testQuotaMemoryCurrent: "current quota",
        testQuotaStorageCurrent: "current quota",
        toolsQuotaCPUCurrent: "current quota",
        toolsQuotaMemoryCurrent: "current quota",
        toolsQuotaStorageCurrent: "current quota",
        projectName: "test name",
        productDescription: "test description",
        productMinistry: "CITZ",
        POName: "firstName lastName",
        POEmail: "owner@mail.com",
        POGitHub: 'POGitHub',
        POIDIR: "POIDIR",
        PriTLName: "firstName lastName",
        PriTLEmail: "PriTLEmail@mail.com",
        PriTLGitHub:'PriTLGitHub' ,
        PriTLIDIR: 'PriTLIDIR',
        SecTLName: "firstName lastName",
        SecTLEmail: "SecTLEmail@mail.com",
        SecTLGitHub: 'SecTLGitHub',
        SecTLIDIR: 'SecTLIDIR',
        setCluster: 'silver',
        licencePlate: 'ggg554',
      }
    ),
    //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
    to: 'zhanna@bcdevexchange.org',
    from: "Registry <PlatformServicesTeam@gov.bc.ca>",
    subject: `New QoutaYupe request in Registry waiting for your approval`,
  }); 
} catch (error) {
  console.log(error);
}
startApolloServer(typeDefs, resolvers);
