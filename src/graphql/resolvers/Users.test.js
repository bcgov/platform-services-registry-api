import { ApolloServer } from "apollo-server";
import { MongoClient } from "mongodb";
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

    const users = new MongoHelpers(db.collection("users"));

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
            },
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
});
