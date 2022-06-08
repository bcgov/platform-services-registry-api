
import dotenv from "dotenv";
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
import { getResolveFn } from "nats/lib/nats-base-client/transport";

// jest.mock("express-validator", () => ({
//   ...jest.requireActual("express-validator"),
//   validationResult: () => ({ isEmpty: () => true }),
// }));

// jest.mock(".../import/ches", () => ({
//   send: jest.fn(),
// }));

let newRequestId;

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
              resource_access: {
                "registry-api": {
                  roles: ["admin"],
                },
              },
              given_name: "Oamar",
              family_name: "Kanji"
            },
          },
        },
      },
    };

    server = new ApolloServer({
      schema,
      resolvers,
      dataSources: () => collections,
      context: () => ({
        kauth: new KeycloakContext({ req }),
        chesService: {
          send: () => console.log("*** SEND ***")
        }
      }),
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
          ministry: "AGRICULTURE",
          githubId: "okanji"
        },
      },
    });
    //Two other users for subsequest testing
    const secondUser = await server.executeOperation({
      query: `mutation Mutation($input: CreateUserInput!) {
        createUser(input: $input) {
          id
          email
        }
      }`,
      variables: {
        input: {
          firstName: "Alexander",
          lastName: "Carmichael",
          ministry: "AGRICULTURE",
          email: "alexander.carmichael@gov.bc.ca"
        },
      },
    });
    expect(secondUser.data?.createUser.email).toBe("alexander.carmichael@gov.bc.ca");
    const thirdUser = await server.executeOperation({
      query: `mutation Mutation($input: CreateUserInput!) {
        createUser(input: $input) {
          id
          email
        }
      }`,
      variables: {
        input: {
          firstName: "Billy",
          lastName: "Li",
          ministry: "AGRICULTURE",
          email: "billy.li@gov.bc.ca"
        },
      },
    });
    expect(thirdUser.data?.createUser.email).toBe("billy.li@gov.bc.ca");
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
          }
          requestedProject {
            ... on PrivateCloudProject {
              id
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
          technicalLeads: ["alexander.carmichael@gov.bc.ca", "billy.li@gov.bc.ca"],
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
    newRequestId = id;
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
    expect(requestedProject.technicalLeads[0].firstName).toBe("Alexander");
    expect(requestedProject.technicalLeads[1].lastName).toBe("Li");
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

  it("Should allow a technical lead to be removed from a request", async () => {
    const request =  await collections.privateCloudActiveRequests.findOneById(newRequestId);
    console.log(request);
  });

  it("Should reject a create project request", async () => {
    const result = await server.executeOperation({
      query: `mutation MakePrivateCloudRequestDecision($input: MakeRequestDecisionInput!) {
        makePrivateCloudRequestDecision(input: $input)
      }`,
      variables: {
        input: {
          decision: "REJECT",
          request: newRequestId,
        },
      },
    });
    const request = result.data?.makePrivateCloudRequestDecision;
    expect(request.status).toBe("REJECTED");
  });
});
