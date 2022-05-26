import dotenv from 'dotenv';
dotenv.config();
import { ApolloServer } from "apollo-server";
import { MongoClient } from "mongodb";
import MongoHelpers from "../../dataSources/MongoHelpers";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyDirectiveTransformers } from "../../auth/transformers";
import { ObjectId } from "mongodb";

import typeDefs from "../typeDefs";
import resolvers from ".";

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
          activeRequests {
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


  // TODO: Sign up two additional users then add them as the technical leads for the request being created below.
  // you should test that those two users are being returned as the technical leads in the request object that is returned from teh mutation
  it("Should create a new project request", async () => {
    const request = await server.executeOperation({
      query: `mutation CreatePrivateCloudProjectRequest($input: CreatePrivateCloudProjectInput!) {
        createPrivateCloudProjectRequest(input: $input) {
          id
          createdBy {
            id
            firstName
          }
          requestedProject {
            ... on PrivateCloudProject {
              technicalLeads {
                id
                firstName
                lastName
                email
              }
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
          technicalLeads: [], // <- Add technical leads here. e.g [tecnnicalLeadOneEmail, technicalLeadTwoEmail]
        },
      },
    });

    const me = await server.executeOperation({
      query: `query Me {
      me {
        id
        firstName
        email
        activeRequests {
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

    const [user] = me.data?.me.activeRequests;

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

  it("Should query all requests", async () => {
    const result = await server.executeOperation({
      query: `query PrivateCloudRequests {
        privateCloudRequests {
          id
          createdBy {
            id
            firstName
            lastName
            email
          }
          type
          status
          active
          decisionDate
          project {
            id
            name
            createdBy {
              firstName
              lastName
              email
            }
          }
        }
      }`,
    });

    const requests = result.data?.privateCloudRequests;
    expect(requests).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "CREATE",
        }),
      ])
    );
  });

  it("Should reject a create project request", async () => {
    const result = await server.executeOperation({
      query: `mutation MakeDecision($input: MakeRequestDecisionInput!) {
        makePrivateCloudRequestDecision(input: $input) {
          id
          status
          type
          project {
            ... on PrivateCloudProject {
              name
              id
              status
              description
            }
          }
          requestedProject {
            ... on PrivateCloudProject {
              id
              name
              archived
              createdBy {
                firstName
              }
              status
            }
            technicalLeads {
              firstName
            }
          }
        }
      }`,
    });

    const request = result.data?.makePrivateCloudRequestDecision;

    expect(request.status).toBe("REJECTED");
  });
});
