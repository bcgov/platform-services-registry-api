import { ApolloServer } from "apollo-server";
import { MongoClient } from "mongodb";
import MongoHelpers from "../../dataSources/MongoHelpers";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyDirectiveTransformers as applyAuthDirectiveTranformers } from "../../auth/transformers";
import { applyDirectiveTransformers } from "../../graphql/transformers";



import typeDefs from "../typeDefs";
import resolvers from ".";
import { usersByIds } from "./Query/Users";

let signedUpUserId = "";

describe("User tests", () => {
  let server;
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = await connection.db(global.__MONGO_DB_NAME__);

    const users = new MongoHelpers(db.collection("users"));

    let schema = makeExecutableSchema({
      typeDefs: [KeycloakTypeDefs, typeDefs],
      resolvers,
    });

    schema = applyAuthDirectiveTranformers(applyDirectiveTransformers(schema));

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
              family_name: "Kanji",
            },
            hasRole: () => true
          },
        },
      },
    };

    server = new ApolloServer({
      schema,
      resolvers,
      dataSources: () => ({
        users,
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
          ministry: "AGRI",
          githubId: "okanji",
        },
      },
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.signUp.firstName).toBe("Oamar");
    signedUpUserId = result.data?.signUp.id;
    expect(result.data?.signUp.email).toBe("oamar.kanji@gov.bc.ca");
  });

  it("It should get the logged in user", async () => {
    const result = await server.executeOperation({
      query: `query Me {
        me {
          id
          firstName
          lastName
          email
        }
      }`,
    });

    expect(result.errors).toBeUndefined();
    expect(result.data?.me.firstName).toBe("Oamar");
    expect(result.data?.me.email).toBe("oamar.kanji@gov.bc.ca");
  });

  it("Newly signed up user can be queried by ID", async () => {
    const result = await server.executeOperation({
      query: `query User($userId: ID!) {
        user(id: $userId) {
          id
          firstName
          lastName
        }
      }`,
      variables: {
        userId: signedUpUserId,
      },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data?.user.firstName).toBe("Oamar");
    expect(result.data?.user.lastName).toBe("Kanji");
  });

  // at least one user exists from tests above
  it("Listing users retrieves at least one user", async () => {
    const result = await server.executeOperation({
      query: `query Users {
        users {
          firstName
        }
      }`,
    });
    expect(result.errors).toBeUndefined();
    expect(result.data?.users.length).toBeGreaterThan(0);
  });

  it("A new user can be created", async () => {
    const result = await server.executeOperation({
      query: `mutation {
        createUser(input: {
          firstName: "Alexander",
          lastName: "Carmichael",
          ministry: HLTH,
          email: "alexander.carmichael@gov.bc.ca",
          githubId: "okanji"

        }) {
          id
          firstName
        }
      }`,
    });
    expect(result.errors).toBeUndefined();
    expect(result.data?.createUser.firstName).toBe("Alexander");
  });

  /*It should be noted that this is dependent on the CreateUser test passing successfully*/
  it("Can query multiple users by an array of IDs", async () => {
    let userId1;
    let userId2;
    const usersResult = await server.executeOperation({
      query: `query Users {
        users {
          id
        }
      }`,
    });

    expect(usersResult.data?.users.length).toBeGreaterThan(1);
    userId1 = usersResult.data?.users[0].id;
    userId2 = usersResult.data?.users[1].id;

    const result = await server.executeOperation({
      query: `query UsersByIds($ids: [ID!]!) {
        usersByIds(ids: $ids) {
          firstName
        }
      }`,
      variables: {
        ids: [userId1, userId2],
      },
    });
    expect(result.errors).toBeUndefined();
    expect(result.data?.usersByIds.length).toBe(2);
  });
});
