import './env.js';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { KeycloakContext, KeycloakTypeDefs } from 'keycloak-connect-graphql';
import express from 'express';
import cron from 'node-cron';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import resolvers from './resolvers/index.js';
import { readFileSync } from 'fs';
import configureKeycloak from './auth/config.js';
import { DIRECTIVES } from '@graphql-codegen/typescript-mongodb';
import applyDirectiveTransformers from './transformers/index.js';
import { PrismaClient } from '@prisma/client';
import {
  privateCloudProvisionerCallbackHandler,
  publicCloudProvisionerCallbackHandler,
  getReProvisionNatsMessage,
  getIdsForCluster,
  getDatabaseHealthCheck,
} from './controllers/index.js';
import chesService from './ches/index.js';
import { connectToDatabase } from './db.js';
import {
  getIdirEmails,
  getIdirPhoto,
  getRequestStatus,
  getIdir,
} from './controllers/index.js';

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

export interface ContextValue {
  kauth: KeycloakContext;
  prisma: PrismaClient;
  authRoles: string[];
  authEmail: string;
  chesService: typeof chesService;
}

export const prisma = new PrismaClient();

let schema = makeExecutableSchema({
  typeDefs: [KeycloakTypeDefs, typeDefs, DIRECTIVES],
  resolvers,
});

schema = applyDirectiveTransformers(schema);

export const app = express();
const { keycloak } = configureKeycloak(app, '/');
const httpServer = http.createServer(app);

app.use(cors());

export const server = new ApolloServer<ContextValue>({
  schema,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  introspection: true,
});

await server.start();

await connectToDatabase();

app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  expressMiddleware(server, {
    context: async ({ req }) => {
      // @ts-ignore
      const kauth = new KeycloakContext({ req }, keycloak);
      // @ts-ignore
      const email = kauth?.accessToken?.content?.email;
      const lowerCaseEmail = email?.toLowerCase();
      // @ts-ignore
      const resource_access = kauth?.accessToken?.content?.resource_access;
      const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
        roles: [],
      };

      return {
        kauth: kauth,
        prisma,
        authRoles: roles,
        authEmail: lowerCaseEmail,
        chesService,
      };
    },
  })
);

// The below code is important for auth to work
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get(
  '/api/v1/provision/sync/:profile_id/provisioned-profile-bot-json',
  keycloak.protect(),
  getReProvisionNatsMessage
);

app.get(
  '/api/v1/provision/sync/provisioned-profile-ids',
  keycloak.protect(),
  getIdsForCluster
);

app.get('/api/v1/database-health-check', getDatabaseHealthCheck);

app.get('/api/v1/getIdirEmails', getIdirEmails);

app.get('/api/v1/getIdirPhoto', getIdirPhoto);

app.get('/api/v1/getIdir', getIdir);

app.post('/namespace', privateCloudProvisionerCallbackHandler);
app.post('/public-cloud', publicCloudProvisionerCallbackHandler);

cron.schedule('*/5 * * * *', async function () {
  const requestsArr = await prisma.privateCloudRequest.findMany({
    where: {
      active: true,
    },
    include: {
      requestedProject: true,
    },
  });

  requestsArr.map((request) => {
    getRequestStatus(
      request.id,
      request.licencePlate,
      request.requestedProject.cluster.toLowerCase()
    );
  });
});

await new Promise<void>((resolve) =>
  httpServer.listen({ port: 4000 }, resolve)
);
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
