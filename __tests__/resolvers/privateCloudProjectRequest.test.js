import "../../src/env";
import { Cluster, Ministry } from "../../src/__generated__/resolvers-types.js";
import resolvers from "../../src/resolvers/index.js";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { readFileSync } from "fs";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import applyDirectiveTransformers from "../../src/transformers/index.js";
import { PrismaClient } from "@prisma/client";
import req from "../../src/auth/kauthContextMock.js";
import assert from "assert";
const prisma = new PrismaClient();
const contextValue = {
    prisma: prisma,
    // @ts-ignore
    kauth: new KeycloakContext({ req }),
    authEmail: "oamar.kanji@gov.bc.ca",
    authRoles: ["admin"]
};
const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });
let schema = makeExecutableSchema({
    typeDefs: [KeycloakTypeDefs, typeDefs, DIRECTIVES],
    resolvers
});
schema = applyDirectiveTransformers(schema);
const server = new ApolloServer({
    schema
});
describe("Request tests", () => {
    beforeAll(async () => { });
    test("creates a private cloud project request", async () => {
        const CREATE_PRIVATE_CLOUD_PROJECT_REQUEST = `mutation PrivateCloudProjectRequest(
        $name: String!,
        $description: String!,
        $ministry: Ministry!,
        $cluster: Cluster!,
        $commonComponents: CommonComponentsInput!,
        $projectOwner: CreateUserInput!,
        $primaryTechnicalLead: CreateUserInput!,
        $secondaryTechnicalLead: CreateUserInput
      ) {
        privateCloudProjectRequest(
          name: $name,
          description: $description,
          ministry: $ministry,
          cluster: $cluster,
          commonComponents: $commonComponents,
          projectOwner: $projectOwner,
          primaryTechnicalLead: $primaryTechnicalLead,
          secondaryTechnicalLead: $secondaryTechnicalLead
        ) {
          active
          createdBy {
            email
          }
          decisionDate
          decisionMaker {
            email
          }
          decisionStatus
          project {
            name
          }
      }
    }`;
        console.log("DATABASE URL: ", process.env.DATABASE_URL);
        const name = "Test Project";
        const description = "Test Description";
        const ministry = Ministry.Agri;
        const cluster = Cluster.Klab;
        const commonComponents = {
            other: "test"
        };
        const projectOwner = {
            email: "oamar.kanji@gov.bc.ca",
            firstName: "Oamar",
            githubId: "okanji",
            lastName: "Kanji",
            ministry: "AGRI"
        };
        const primaryTechnicalLead = {
            email: "xyz@test.com",
            firstName: "Jane",
            githubId: "test123",
            lastName: "Smith",
            ministry: "FIN"
        };
        const response = await server.executeOperation({
            query: CREATE_PRIVATE_CLOUD_PROJECT_REQUEST,
            variables: {
                name,
                description,
                ministry,
                cluster,
                commonComponents,
                projectOwner,
                primaryTechnicalLead
            }
        }, {
            contextValue
        });
        assert(response.body.kind === "single");
        expect(response.body.singleResult.errors).toBeUndefined();
        expect(response).toMatchSnapshot();
        // const newRequest = await prisma.privateCloudRequest.findUnique({
        //   where: {
        // });
        //
    });
});
