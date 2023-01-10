import "../../src/env";
import {
  Cluster,
  Ministry,
  CommonComponentsInput,
  CreateUserInput,
  RequestDecision
} from "../../src/__generated__/resolvers-types.js";
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
  authEmail: "oamar.kanji@gov.bc.ca",
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

let requestId;

describe("Request tests", () => {
  beforeAll(async () => {});

  afterAll(async () => {
    const deleteRequests = prisma.privateCloudRequest.deleteMany();
    const deleteProjects = prisma.privateCloudProject.deleteMany();
    const deleteRequestedProjects =
      prisma.privateCloudRequestedProject.deleteMany();
    const deleteUsers = prisma.user.deleteMany();

    await prisma.$transaction([
      deleteRequests,
      deleteProjects,
      deleteRequestedProjects,
      deleteUsers
    ]);

    await prisma.$disconnect();
  });

  test("creates a private cloud project request without secondary technical lead", async () => {
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
          id
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
          requestedProject {
            id
          }
      }
    }`;

    const name: string = "Test Project";
    const description: string = "Test Description";
    const ministry: Ministry = Ministry.Agri;
    const cluster: Cluster = Cluster.Klab;

    const commonComponents: CommonComponentsInput = {
      other: "test"
    };

    const projectOwner: CreateUserInput = {
      email: "oamar.kanji@gov.bc.ca",
      firstName: "Oamar",
      githubId: "okanji",
      lastName: "Kanji",
      ministry: Ministry.Agri
    };

    const primaryTechnicalLead: CreateUserInput = {
      email: "xyz@test.com",
      firstName: "Jane",
      githubId: "test123",
      lastName: "Smith",
      ministry: Ministry.Psa
    };

    const response = await server.executeOperation(
      {
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
      },
      {
        contextValue
      }
    );

    assert(response.body.kind === "single");
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response).toMatchSnapshot({
      body: {
        singleResult: {
          data: {
            privateCloudProjectRequest: {
              id: expect.any(String),
              requestedProject: {
                id: expect.any(String)
              }
            }
          }
        }
      }
    });
    const requests = await prisma.privateCloudRequest.findMany();
    expect(requests.length).toBe(1);

    const requestedProjectId =
      // prettier-ignore
      // @ts-ignore
      response.body.singleResult.data.privateCloudProjectRequest?.requestedProject?.id;

    const requestedProject =
      await prisma.privateCloudRequestedProject.findUnique({
        where: {
          // @ts-ignore
          id: requestedProjectId
        }
      });

    expect(requestedProject).not.toBeNull();
    expect(requestedProject?.name).toBe(name);
    expect(requestedProject?.description).toBe(description);
    expect(requestedProject?.ministry).toBe(ministry);
    expect(requestedProject?.cluster).toBe(cluster);
  });

  test("creates a private cloud project request with secondary technical lead", async () => {
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
          id
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

    const name: string = "Test Project";
    const description: string = "Test Description";
    const ministry: Ministry = Ministry.Agri;
    const cluster: Cluster = Cluster.Klab;

    const commonComponents: CommonComponentsInput = {
      other: "test"
    };

    const projectOwner: CreateUserInput = {
      email: "oamar.kanji@gov.bc.ca",
      firstName: "Oamar",
      githubId: "okanji",
      lastName: "Kanji",
      ministry: Ministry.Agri
    };

    const primaryTechnicalLead: CreateUserInput = {
      email: "xyz@test.com",
      firstName: "Jane",
      githubId: "test123",
      lastName: "Smith",
      ministry: Ministry.Psa
    };

    const secondaryTechnicalLead: CreateUserInput = {
      email: "abc@test.goc.bc.ca",
      firstName: "John",
      githubId: "test456",
      lastName: "Doe",
      ministry: Ministry.Psa
    };

    const response = await server.executeOperation(
      {
        query: CREATE_PRIVATE_CLOUD_PROJECT_REQUEST,
        variables: {
          name,
          description,
          ministry,
          cluster,
          commonComponents,
          projectOwner,
          primaryTechnicalLead,
          secondaryTechnicalLead
        }
      },
      {
        contextValue
      }
    );

    // prettier-ignore
    // @ts-ignore
    requestId = response.body.singleResult.data.privateCloudProjectRequest.id;

    assert(response.body.kind === "single");
    expect(response.body.singleResult.errors).toBeUndefined();
    expect(response).toMatchSnapshot({
      body: {
        singleResult: {
          data: {
            privateCloudProjectRequest: {
              id: expect.any(String)
            }
          }
        }
      }
    });

    const requests = await prisma.privateCloudRequest.findMany();
    expect(requests.length).toBe(2);
  });

  test("Approve a private cloud project request", async () => {
    const MAKE_PRIVATE_CLOUD_PROJECT_REQUEST_DECISION = `mutation MakePrivateCloudRequestCreateDecision(
      $requestId: ID!,
      $decision: RequestDecision!) {
      privateCloudRequestDecision(requestId: $requestId, decision: $decision) {
        id
        decisionMaker {
          email
        }
        active
        createdBy {
          email
        }
        type
        decisionStatus
      }
    }`;

    const response = await server.executeOperation(
      {
        query: MAKE_PRIVATE_CLOUD_PROJECT_REQUEST_DECISION,
        variables: {
          decision: RequestDecision.Approved,
          requestId: requestId
        }
      },
      {
        contextValue
      }
    );

    const request = await prisma.privateCloudRequest.findUnique({
      where: {
        id: requestId
      }
    });

    expect(response).toMatchSnapshot({
      body: {
        singleResult: {
          data: {
            privateCloudRequestDecision: {
              id: expect.any(String)
            }
          }
        }
      }
    });

    expect(request).not.toBeNull();
    expect(request?.decisionStatus).toBe(RequestDecision.Approved);
    expect(request?.createdByEmail).toBe(contextValue.authEmail);
  });
});
