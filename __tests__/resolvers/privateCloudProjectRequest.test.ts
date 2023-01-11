import "../../src/env";
import {
  Cluster,
  Ministry,
  CommonComponentsInput,
  CreateUserInput,
  RequestDecision,
  RequestType,
  CommonComponentsOptions,
  DefaultCpuOptions,
  DefaultMemoryOptions
} from "../../src/__generated__/resolvers-types.js";
import {
  DefaultCpuOptions as DefaultCpuOptionsEnum,
  DefaultMemoryOptions as DefaultMemoryOptionsEnum
} from "../../src/resolvers/enum";
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
import supertest from "supertest";
import {
  mockProjectOwner,
  mockPrimaryTechnicalLead,
  mockSecondaryTechnicalLead,
  mockProject
} from "../../__mocks__/constants.js";

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

let requestAId;
let requestBId;
let projectCId;
let projectDId;

describe("Request tests", () => {
  beforeAll(async () => {
    const users = await prisma.user.createMany({
      data: [
        mockProjectOwner,
        mockPrimaryTechnicalLead,
        mockSecondaryTechnicalLead
      ]
    });

    const projectC = await prisma.privateCloudProject.create({
      data: mockProject
    });

    const mockProjectB = { ...mockProject, licencePlate: "t9d68bd" };

    const projectD = await prisma.privateCloudProject.create({
      data: mockProjectB
    });

    projectCId = projectC.id;
    projectDId = projectD.id;
  });

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

    // prettier-ignore
    // @ts-ignore
    requestAId = response.body.singleResult.data.privateCloudProjectRequest.id;

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

    const projectOwnerUser = await prisma.user.findUnique({
      where: {
        email: projectOwner.email
      }
    });

    expect(projectOwnerUser).not.toBeNull();
    expect(projectOwnerUser?.firstName).toBe(projectOwner.firstName);
    expect(projectOwnerUser?.lastName).toBe(projectOwner.lastName);
    expect(projectOwnerUser?.githubId).toBe(projectOwner.githubId);
    expect(projectOwnerUser?.ministry).toBe(projectOwner.ministry);

    const primaryTechnicalLeadUser = await prisma.user.findUnique({
      where: {
        email: primaryTechnicalLead.email
      }
    });

    expect(primaryTechnicalLeadUser).not.toBeNull();
    expect(primaryTechnicalLeadUser?.firstName).toBe(
      primaryTechnicalLead.firstName
    );
    expect(primaryTechnicalLeadUser?.lastName).toBe(
      primaryTechnicalLead.lastName
    );
    expect(primaryTechnicalLeadUser?.githubId).toBe(
      primaryTechnicalLead.githubId
    );
    expect(primaryTechnicalLeadUser?.ministry).toBe(
      primaryTechnicalLead.ministry
    );
  });

  test("Creates a private cloud project request with secondary technical lead", async () => {
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
    requestBId = response.body.singleResult.data.privateCloudProjectRequest.id;

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

    const secondaryTechnicalLeadUser = await prisma.user.findUnique({
      where: {
        email: secondaryTechnicalLead.email
      }
    });

    expect(secondaryTechnicalLeadUser).not.toBeNull();
    expect(secondaryTechnicalLeadUser?.firstName).toBe(
      secondaryTechnicalLead.firstName
    );
    expect(secondaryTechnicalLeadUser?.lastName).toBe(
      secondaryTechnicalLead.lastName
    );
    expect(secondaryTechnicalLeadUser?.githubId).toBe(
      secondaryTechnicalLead.githubId
    );
    expect(secondaryTechnicalLeadUser?.ministry).toBe(
      secondaryTechnicalLead.ministry
    );
  });

  test("Approve a private cloud project request", async () => {
    const MAKE_PRIVATE_CLOUD_PROJECT_REQUEST_DECISION = `mutation PrivateCloudRequestDecision(
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
          requestId: requestAId
        }
      },
      {
        contextValue
      }
    );

    const request = await prisma.privateCloudRequest.findUnique({
      where: {
        id: requestAId
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

  test("Reject a private cloud project request", async () => {
    const MAKE_PRIVATE_CLOUD_PROJECT_REQUEST_DECISION = `mutation PrivateCloudRequestDecision(
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
          decision: RequestDecision.Rejected,
          requestId: requestBId
        }
      },
      {
        contextValue
      }
    );

    const request = await prisma.privateCloudRequest.findUnique({
      where: {
        id: requestBId
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
    expect(request?.decisionStatus).toBe(RequestDecision.Rejected);
    expect(request?.createdByEmail).toBe(contextValue.authEmail);
  });

  test("Delete request", async () => {
    const DELETE_PRIVATE_CLOUD_PROJECT_REQUEST = `mutation PrivateCloudProjectDeleteRequest($projectId: ID!) {
      privateCloudProjectDeleteRequest(projectId: $projectId) {
        id
        active
        createdBy {
          email
        }
        decisionDate
        decisionMaker {
          email
        }
        type
        decisionStatus
        project {
          name
        }
      }
    }`;

    const response = await server.executeOperation(
      {
        query: DELETE_PRIVATE_CLOUD_PROJECT_REQUEST,
        variables: {
          projectId: projectCId
        }
      },
      {
        contextValue
      }
    );

    const request = await prisma.privateCloudRequest.findUnique({
      where: {
        // @ts-ignore
        id: response.body.singleResult.data.privateCloudProjectDeleteRequest.id
      }
    });

    expect(response).toMatchSnapshot({
      body: {
        singleResult: {
          data: {
            privateCloudProjectDeleteRequest: {
              id: expect.any(String)
            }
          }
        }
      }
    });

    expect(request).not.toBeNull();
    expect(request?.active).toBe(true);
    expect(request?.type).toBe(RequestType.Delete);
  });

  test("Makes an edit request", async () => {
    const EDIT_REQUEST = `mutation Mutation($projectId: ID!, $name: String, $description: String, $cluster: Cluster, $commonComponents: CommonComponentsInput, $productionQuota: QuotaInput) {
      privateCloudProjectEditRequest(projectId: $projectId, name: $name, description: $description, cluster: $cluster, commonComponents: $commonComponents, productionQuota: $productionQuota) {
        id
        active
        type
        createdBy {
          email
        }
      }
    }`;

    const variables = {
      projectId: projectDId,
      name: "new name",
      description: "new description",
      cluster: Cluster.Gold,
      commonComponents: {
        identityManagement: CommonComponentsOptions.PlanningToUse
      },
      productionQuota: {
        cpu: DefaultCpuOptions.CpuRequest_0_5Limit_1_5,
        memory: DefaultMemoryOptions.MemoryRequest_64Limit_128
      }
    };

    const response = await server.executeOperation(
      {
        query: EDIT_REQUEST,
        variables
      },
      {
        contextValue
      }
    );

    expect(response).toMatchSnapshot({
      body: {
        singleResult: {
          data: {
            privateCloudProjectEditRequest: {
              id: expect.any(String)
            }
          }
        }
      }
    });

    const request = await prisma.privateCloudRequest.findUnique({
      where: {
        // @ts-ignore
        id: response.body.singleResult.data.privateCloudProjectEditRequest.id
      },
      include: {
        project: true,
        requestedProject: true
      }
    });

    console.log("RequestedProject");
    console.log(request?.requestedProject?.productionQuota);

    console.log("Expected");
    console.log({
      ...mockProject.productionQuota,
      ...DefaultCpuOptions[variables.productionQuota.cpu],
      ...DefaultMemoryOptions[variables.productionQuota.memory]
    });

    console.log("Mock Project");
    console.log(mockProject.productionQuota);

    console.log(DefaultCpuOptions[variables.productionQuota.cpu]);

    expect(request).not.toBeNull();
    expect(request?.active).toBe(true);
    expect(request?.type).toBe(RequestType.Edit);
    expect(request?.project?.name).toBe(mockProject.name);
    expect(request?.requestedProject?.name).toBe(variables.name);
    expect(request?.project?.description).toBe(mockProject.description);
    expect(request?.requestedProject?.description).toBe(variables.description);
    expect(request?.project?.cluster).toBe(mockProject.cluster);
    expect(request?.requestedProject?.cluster).toBe(variables.cluster);
    expect(request?.project?.commonComponents).toEqual(
      mockProject.commonComponents
    );
    expect(request?.requestedProject?.commonComponents).toEqual({
      ...mockProject.commonComponents,
      ...variables.commonComponents
    });
    expect(request?.project?.productionQuota).toEqual(
      mockProject.productionQuota
    );
    expect(request?.requestedProject?.productionQuota).toEqual({
      ...mockProject.productionQuota,
      ...DefaultCpuOptionsEnum[variables.productionQuota.cpu],
      ...DefaultMemoryOptionsEnum[variables.productionQuota.memory]
    });
  });
});
