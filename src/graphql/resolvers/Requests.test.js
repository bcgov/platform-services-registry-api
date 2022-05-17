require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server");
const { MongoClient } = require("mongodb");
import MongoHelpers from "../../dataSources/MongoHelpers";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyDirectiveTransformers } from "../../auth/transformers";
const { ObjectId } = require("mongodb");

import typeDefs from "../typeDefs";
import resolvers from ".";
import { users } from "./Query/Users";

describe("Mongo Helpers", () => {
  let server;
  let connection;
  let db;
  let collections;
  let requestId;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = await connection.db(global.__MONGO_DB_NAME__);

    collections = {
      users: new MongoHelpers(db.collection("users")),
      privateCloudProjects: new MongoHelpers(
        db.collection("privateCloudProjects")
      ),
      privateCloudRequestedProjects: new MongoHelpers(
        db.collection("privateCloudRequestedProjects")
      ),
      privateCloudArchivedRequests: new MongoHelpers(
        db.collection("privateCloudArchivedRequests")
      ),
      privateCloudActiveRequests: new MongoHelpers(
        db.collection("privateCloudActiveRequests")
      ),
    };

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
      dataSources: () => collections,
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
          projectRequests {
            id
            type
          }
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
    const request = await server.executeOperation({
      query: `mutation CreatePrivateCloudProjectRequest($input: CreatePrivateCloudProjectInput!) {
        createPrivateCloudProjectRequest(input: $input) {
          id
          createdBy {
            id
            firstName
            email
            technicalLead {
              technicalLeads {
                id
                firstName
              }
            }
            projectRequests {
              id
              type
            }
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

    const me = await server.executeOperation({
      query: `query Me {
      me {
        id
        firstName
        email
        projectRequests {
          id
          createdBy {
            id
            email
          }
        }
      }
    }`,
    });

    const { id, requestedProject, createdBy } =
      request.data?.createPrivateCloudProjectRequest;

    // Will be used in subsequent tests

    const [user] = me.data?.me.projectRequests

    expect(request.errors).toBeUndefined();
    expect(createdBy.firstName).toBe("Oamar");
    expect(
      await collections.privateCloudActiveRequests.findOneById(id)
    ).toHaveProperty("_id", ObjectId(id));
    expect(
      await collections.privateCloudArchivedRequests.findOneById(id)
    ).toBeUndefined();
    expect(
      await collections.privateCloudRequestedProjects.findOneById(
        requestedProject.id
      )
    ).toHaveProperty("name", "Test Project");
    expect(
      await collections.privateCloudProjects.findOneById(id)
    ).toBeUndefined();
    expect([user.id]).toStrictEqual([id]);
  });

  // it("Should approve a create project request", async () => {
    
  // });
});
