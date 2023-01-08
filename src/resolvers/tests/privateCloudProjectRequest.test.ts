import "../../env";
import {
  ProjectMetaDataInput,
  Cluster,
  Ministry,
  CommonComponentsInput,
  CreateUserInput
} from "../../__generated__/resolvers-types.js";
import resolvers from "../index";
import { ApolloServer } from "@apollo/server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { readFileSync } from "fs";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import applyDirectiveTransformers from "../../transformers/index.js";
import { PrismaClient } from "@prisma/client";
import req from "../../auth/kauthContextMock.js";
import assert from "assert";

interface ContextValue {
  kauth: KeycloakContext;
  prisma: PrismaClient;
  authEmail: string;
  authRoles: string[];
}

const prisma = new PrismaClient();

const contextValue: ContextValue = {
  prisma: prisma,
  // @ts-ignore
  kauth: new KeycloakContext({ req }),
  authEmail: "oamar.kanji@gmail.com",
  authRoles: ["admin"]
};

const typeDefs = readFileSync("./schema.graphql", { encoding: "utf-8" });

let schema = makeExecutableSchema({
  typeDefs: [KeycloakTypeDefs, typeDefs, DIRECTIVES],
  resolvers
});

schema = applyDirectiveTransformers(schema);

const server = new ApolloServer<ContextValue>({
  schema
});

describe("Request tests", () => {
  beforeAll(async () => {});

  test("creates a private cloud project request", async () => {
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

    const metaData: ProjectMetaDataInput = {
      cluster: "CLAB" as Cluster,
      description: "test description",
      ministry: "AGRI" as Ministry,
      name: "test project"
    };

    const commonComponents: CommonComponentsInput = {
      other: "test"
    };

    const projectOwner: CreateUserInput = {
      email: "oamar.kanji@gov.bc.ca",
      firstName: "Oamar",
      githubId: "okanji",
      lastName: "Kanji",
      ministry: "AGRI" as Ministry
    };

    const primaryTechnicalLead: CreateUserInput = {
      email: "xyz@test.com",
      firstName: "Jane",
      githubId: "test123",
      lastName: "Smith",
      ministry: "FIN" as Ministry
    };

    const response = await server.executeOperation(
      {
        query: CREATE_PRIVATE_CLOUD_PROJECT_REQUEST,
        variables: {
          metaData,
          commonComponents,
          projectOwner,
          primaryTechnicalLead
        }
      },
      {
        contextValue
      }
    );

    assert(response.body.kind === "single");
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response).toMatchSnapshot();
   
    // const newRequest = await prisma.privateCloudRequest.findUnique({
    //   where: {
    // });

    // 
  });
});
