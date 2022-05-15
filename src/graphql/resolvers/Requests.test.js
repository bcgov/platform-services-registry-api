require('dotenv').config()
const { ApolloServer, gql } = require("apollo-server");
const { MongoClient } = require("mongodb");
import MongoHelpers from "../../dataSources/MongoHelpers";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyDirectiveTransformers } from "../../auth/transformers";

import typeDefs from "../typeDefs";
import resolvers from ".";

describe("Mongo Helpers", () => {
  let server;
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = await connection.db(global.__MONGO_DB_NAME__);

    let schema = makeExecutableSchema({
      typeDefs: [KeycloakTypeDefs, typeDefs],
      resolvers,
    });

    schema = applyDirectiveTransformers(schema);

    const req = {
      kauth: {
        grant: {
          access_token: {
            isExpired: () => {
              return false;
            },
            token: "abc",
            content: {
              email: "oamar.kanji@gov.bc.ca",
              firstName: "Oamar",
              resource_access: {
                "registry-api": {
                  roles: ["admin"],
                },
              },
            },
          },
        },
      },
    };

    server = new ApolloServer({
      schema,
      resolvers,
      dataSources: () => ({
        users: new MongoHelpers(db.collection("users")),
        privateCloudProjects: new MongoHelpers(
          db.collection("privateCloudProjects")
        ),
        privateCloudRequests: new MongoHelpers(
          db.collection("privateCloudActiveRequests")
        ),
        privateCloudActiveRequests: new MongoHelpers(
          db.collection("privateCloudRequests")
        ),
        privateCloudRequestedProjects: new MongoHelpers(
          db.collection("privateCloudRequestedProjects")
        ),
      }),
      context: () => {
        return { kauth: new KeycloakContext({ req }) };
      },
    });
  });

  afterAll(async () => {
    await db.dropDatabase();
    await connection.close();
  });

  it("Should sign up user", async () => {
    const result = await server.executeOperation({
      query: `mutation SignUp($input: SignUpInput!) {
        signUp(input: $input) {
          id
          firstName
          lastName
          email
        }
      }`,
      variables: {
        input: {
          firstName: "Oamar",
          lastName: "Kanji",
          ministry: "AGRICULTURE",
        },
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.signUp.firstName).toBe("Oamar");
    expect(result.data?.signUp.email).toBe("oamar.kanji@gov.bc.ca");
  });

  it("Should create a new project request", async () => {
    const result = await server.executeOperation({
      query: `mutation CreatePrivateCloudProject($input: CreatePrivateCloudProjectInput!) {
        createPrivateCloudProject(input: $input) {
          id
          createdBy {
            id
            firstName
          }
          requestedProject {
            ... on PrivateCloudProject {
              id
              name
            }
          }
        }
      }`,
      variables: {
        input: {
          name: "Test Project",
          description: "Some test project",
          ministry: "AGRICULTURE",
          cluster: "SILVER",
          projectOwner: "oamar.kanji@gov.bc.ca",
          technicalLeads: [],
        },
      },
    });
    
    expect(result.errors).toBeUndefined();
    expect(result.data?.createPrivateCloudProject.createdBy.firstName).toBe("Oamar");
  });
});
