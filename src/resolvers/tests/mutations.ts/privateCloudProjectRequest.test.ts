import "../../../env.js";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";
import resolvers from "../../index.js";
import { readFileSync } from "fs";
import configureKeycloak from "../../../auth/config.js";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import applyDirectiveTransformers from "../../../transformers/index.js";
import { PrismaClient } from "@prisma/client";
import provisionerCallbackHandler from "../../../controllers/provisionerCallbackHandler.js";
import req from "../../../auth/kauthContextMock.js";

interface ContextValue {
  kauth: KeycloakContext;
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

const contextValue: ContextValue = {
  prisma: prisma,
  // @ts-ignore
  kauth: new KeycloakContext({ req })
};

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

let schema = makeExecutableSchema({
  typeDefs: [KeycloakTypeDefs, typeDefs, DIRECTIVES],
  resolvers
});

schema = applyDirectiveTransformers(schema);

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers
});

describe("User tests", () => {
  beforeAll(async () => {});

  it("creates a private cloud project request", async () => {
    const CREATE_PRIVATE_CLOUD_PROJECT_REQUEST = `mutation PrivateCloudProjectRequest(
        $metaData: ProjectMetaDataInput!,
        $commonComponents: CommonComponentsInput!,
        $projectOwner: CreateUserInput!,
        $primaryTechnicalLead: CreateUserInput!,
        $secondaryTechnicalLead: CreateUserInput
      ) {
        privateCloudProjectRequest(
          metaData: $metaData,
          commonComponents: $commonComponents,
          projectOwner: $projectOwner,
          primaryTechnicalLead: $primaryTechnicalLead,
          secondaryTechnicalLead: $secondaryTechnicalLead
        ) {
        id
      }
    }`;

    const res = await server.executeOperation(
      {
        query: CREATE_PRIVATE_CLOUD_PROJECT_REQUEST,
        variables: {
          metaData: {
            cluster: "CLAB",
            description: "test description",
            ministry: "AGRI",
            name: "test project"
            // "projectOwnerEmail": "oamar.kanji@gov.bc.ca",
            // "primaryTechnicalLeadEmail": "xyz@test.com",
            // "secondaryTechnicalLeadEmail": "testsecondarytechnicallead@test.com"
          },
          commonComponents: {
            other: "test"
          },
          projectOwner: {
            email: "oamar.kanji@gov.bc.ca",
            firstName: "Oamar",
            githubId: "okanji",
            lastName: "Kanji",
            ministry: "AGRI"
          },
          primaryTechnicalLead: {
            email: "xyz@test.com",
            firstName: "Jane",
            githubId: "test123",
            lastName: "Smith",
            ministry: "FIN"
          }
        }
      },
      {
        contextValue
      }
    );

    // expect(res).toMatchSnapshot();
  });
});
