import dotenv from "dotenv";
dotenv.config();
import { ApolloServer } from "apollo-server";
import { MongoClient } from "mongodb";
import MongoHelpers from "../../../dataSources/MongoHelpers";
import { KeycloakContext, KeycloakTypeDefs } from "keycloak-connect-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { applyDirectiveTransformers } from "../../../auth/transformers";
import { ObjectId } from "mongodb";
import typeDefs from "../../typeDefs";
import resolvers from "../index";
import { project, oamar, billy, olena } from "./TestConstants";
import { getResolveFn } from "nats/lib/nats-base-client/transport";

describe("Mongo Helpers", () => {
  let server;
  let connection;
  let db;
  let collections;
  let requestId;
  let newRequestId;
  let projectId;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    db = await connection.db(global.__MONGO_DB_NAME__);

    collections = {
      users: new MongoHelpers(db.collection("users")),
      privateCloudProjects: new MongoHelpers(
        db.collection("privateCloudProjects")
      ),
      privateCloudActiveRequestedProjects: new MongoHelpers(
        db.collection("privateCloudActiveRequestedProjects")
      ),
      privateCloudArchivedRequestedProjects: new MongoHelpers(
        db.collection("privateCloudArchivedRequestedProjects")
      ),
      privateCloudArchivedRequests: new MongoHelpers(
        db.collection("privateCloudArchivedRequests")
      ),
      privateCloudActiveRequests: new MongoHelpers(
        db.collection("privateCloudActiveRequests")
      )
    };

    collections.users.initialize();
    collections.privateCloudProjects.initialize();

    await collections.users.create(oamar);
    await collections.users.create(billy);
    await collections.users.create(olena);

    const mockProject = await collections.privateCloudProjects.create(project);
    projectId = mockProject._id.toString();

    let schema = makeExecutableSchema({
      typeDefs: [KeycloakTypeDefs, typeDefs],
      resolvers
    });

    schema = applyDirectiveTransformers(schema);

    const req = {
      kauth: {
        grant: {
          access_token: {
            isExpired: () => {
              return false;
            },
            hasRole: () => true,
            token: "abc",
            content: {
              email: "oamar.kanji@gov.bc.ca",
              resource_access: {
                "registry-api": {
                  roles: ["admin"]
                }
              },
              given_name: "Oamar",
              family_name: "Kanji"
            }
          }
        }
      }
    };

    server = new ApolloServer({
      schema,
      resolvers,
      dataSources: () => collections,
      context: () => ({
        kauth: new KeycloakContext({ req }),
        chesService: {
          send: () => ""
        }
      })
    });
  });

  afterAll(async () => {
    await db.dropDatabase();
    await connection.close();
  });

  it("Should sign up user", async () => {
    const user = await server.executeOperation({
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
          ministry: "AGRI",
          email: "alexander.carmichael@gov.bc.ca",
          githubId: "okanji"
        }
      }
    });

    expect(user.data?.createUser.email).toBe("alexander.carmichael@gov.bc.ca");
  });

  it("Should create a new project request", async () => {
    const request = await server.executeOperation({
      query: `mutation CreatePrivateCloudProjectRequest(
        $metaData: ProjectMetaDataInput!,         
         ) {
        privateCloudProjectRequest(
          metaData: $metaData,       
        ) {
          id
          createdBy {
            firstName
            lastName
            id
            email
          }
          type
          status
          active
          created
          decisionDate
          requestedProject {
            id
            primaryTechnicalLead {
              firstName
              lastName
            }
            secondaryTechnicalLead {
              firstName
              lastName
            }
          }
          project {
            ... on PrivateCloudProject {
              id
              name
              ministry
              productionQuota {
                cpu {
                  requests
                }
              }
            }
          }
        }
      }`,
      variables: {
        metaData: {
          name: "Test",
          description: "Test proj",
          projectOwner: "oamar.kanji@gov.bc.ca",
          ministry: "AGRI",
          primaryTechnicalLead: "billy.li@gov.bc.ca",
          secondaryTechnicalLead: "alexander.carmichael@gov.bc.ca",
          cluster: "SILVER"
        }
      }
    });

    const me = await server.executeOperation({
      query: `query Me {
      me {
        id
        firstName
        email
      }
    }`
    });

    const { id, requestedProject, createdBy } =
      request.data?.privateCloudProjectRequest;
    newRequestId = id;
    // Will be used in subsequent tests
    const user = me.data?.me.activeRequests;

    expect(request.errors).toBeUndefined();
    expect(createdBy.firstName).toBe("Oamar");
    expect(
      await collections.privateCloudActiveRequests.findOneById(id)
    ).toHaveProperty("_id", ObjectId(id));
    expect(
      await collections.privateCloudArchivedRequests.findOneById(id)
    ).toBeUndefined();
    expect(
      await collections.privateCloudActiveRequestedProjects.findOneById(
        requestedProject.id
      )
    ).toHaveProperty("name", "Test");
    expect(
      await collections.privateCloudProjects.findOneById(id)
    ).toBeUndefined();
    expect(requestedProject.secondaryTechnicalLead.firstName).toBe("Alexander");
    expect(requestedProject.primaryTechnicalLead.lastName).toBe("Li");
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
      }`
    });

    const requests = result.data?.privateCloudRequests;
    expect(requests).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          type: "CREATE"
        })
      ])
    );
  });

  it("Should allow a technical lead to be removed from a request", async () => {
    const request = await collections.privateCloudActiveRequests.findOneById(
      newRequestId
    );
  });

  it("Should accept a create project request", async () => {
    const result = await server.executeOperation({
      query: `mutation MakePrivateCloudRequestDecision(
        $requestId: ID!
        $decision: RequestDecision!) {
        makePrivateCloudRequestDecision(
          requestId: $requestId,
          decision: $decision
        )
      }`,
      variables: {
        requestId: newRequestId,
        decision: "APPROVE"
      }
    });

    console.log(result);

    const request = result.data?.makePrivateCloudRequestDecision;
    // expect(request).toBe("APPROVED");
  });

  // it("Should reject a create project request", async () => {
  //   const result = await server.executeOperation({
  //     query: `mutation MakePrivateCloudRequestDecision(
  //       $requestId: ID!
  //       $decision: RequestDecision!) {
  //       makePrivateCloudRequestDecision(
  //         requestId: $requestId,
  //         decision: $decision
  //       )
  //     }`,
  //     variables: {
  //       requestId: newRequestId,
  //       decision: "REJECT"
  //     }
  //   });

  //   const request = result.data?.makePrivateCloudRequestDecision;
  //   expect(request).toBe("REJECTED");
  // });

  it("Should edit project description", async () => {
    const result = await server.executeOperation({
      query: `mutation PrivateCloudProjectEditRequest(
        $projectId: ID!,
        $metaData: EditProjectMetaDataInput,
        ) {
          privateCloudProjectEditRequest(
            projectId: $projectId,
            metaData: $metaData,          
        ){
          id
          createdBy {
            firstName
            lastName
            id
            email
          }
          type
          status
          active
          created
          decisionDate
          requestedProject {
            id
            primaryTechnicalLead {
              firstName
              lastName
            }
            secondaryTechnicalLead {
              firstName
              lastName
            }
          }
          project {
            ... on PrivateCloudProject {
              id
              name
              ministry
              productionQuota {
                cpu {
                  requests
                }
              }
            }
          }
        }
      }`,
      variables: {
        projectId: projectId,
        metaData: {
          name: "Test",
          description: "Test changed description",
          projectOwner: "oamar.kanji@gov.bc.ca",
          ministry: "AGRI",
          primaryTechnicalLead: "billy.li@gov.bc.ca",
          secondaryTechnicalLead: "alexander.carmichael@gov.bc.ca",
          cluster: "SILVER"
        }
      }
    });

    const request = await collections.privateCloudActiveRequests.findOneById(
      result.data.privateCloudProjectEditRequest.id
    );

    const requestedProjectId = request.requestedProject;

    const requestedProject =
      await collections.privateCloudActiveRequestedProjects.findOneById(
        requestedProjectId
      );

    expect(requestedProject).toHaveProperty(
      "description",
      "Test changed description"
    );
  });
});
