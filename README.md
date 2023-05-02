## How to run the project locally

- First install packages with `npm i -f`. Note the use of the `-f` flag. This is required as some of the keyclaok packages are outdated and throw warnings that halts the installation. The `-f` flag forces the installation.

- Make sure you have a `.env.dev` and a `.env.test` file in the root folder of this repository.

- Execute `npm run compile`. This will automatically generate typescript types from the graphql shcema and also compile the typescript files.

- Execute `npm run prisma-generate-dev` and then `npm run prisma-generate-test`. This will create the necessary Prisma assets for the app.

- `npm run watch` to start the API.

### To make the migration happen on production environment.

You need to grab some information from secret(platsrv-registry-mongo-creds) of the environment you want to push schema first, including:

1. MONGODB_USER
2. MONGODB_PASSWORD

```
export MONGODB_USER=<username you found in that secret>
export MONGODB_PASSWORD=<password you found in that secret>
```

``
then we can export the DATABASE_URL to our local_env:

```
export DATABASE_URL=mongodb://$MONGODB_USER:$MONGODB_PASSWORD@localhost:27018/platsrv-registry-db?directConnection=true
```

### Next step, you will need to prot-forward the primary pod to your localhost port.

#### Find primary mongodb.

1. open a shell to one of the mongodb pod

```
oc -n <namespace> rsh pod/mongo-0
```

2. Connect to mongo by this command in mongo pod

```
mongo
```

3. Findout the primary mongodb pod by:

```
db.runCommand("ismaster").primary
```

4. Record that primary pod, for exapmle its mongodb-0, we now can port-forward that pod's port to your localhost port 27018.

```
oc port-forward pod/mongodb-0 27018:27017
```

Once that is done, we can do the schema build and push by just exec

```
npm run prisma-migrate-prod
```

In this app root directory.

Next, create the full text search indexes on the database. You can do this in the mongod comand line:

```
db.PrivateCloudProject.createIndex({
  name: "text",
  description: "text",
  licencePlate: "text",
  ministry: "text",
  cluster: "text"
});
```

```
db.User.createIndex({
  firstName: "text",
  lastName: "text",
  email: "text",
});
```

### For local devlopment

##### create db folder

```
mkdir mongo_data mongo_data/rc1 mongo_data/rc2
```

##### Make sure docker desktop is up and running and run a script to start the api and db container:

```
bash startDockerEnvironment.sh
```

##### Setup env

```
export DATABASE_URL="mongodb://admin:admin_pw@localhost:27017/registry?retryWrites=true&w=majority&directConnection=true"
```

##### Export prisma schema to db:

```
npm run prisma-migrate-prod
```

And your local API is ready!

## API Documentation

# GraphQL API Documentation

This documentation covers the publicCloud related GraphQL API endpoints for an application that provisions server namespaces on public cloud platforms like AWS. The flow of the app is as follows:

1. A user makes a create request with a project owner and multiple technical leads. If these users do not exist, they will be created.
2. The request is reviewed by an admin and will be approved or rejected.
3. If approved, it is sent to the provisioner microservice that creates the namespace in AWS and grants the specified users access.
4. Once the project is provisioned, the user can make edit requests to change project properties, such as project owner, technical leads, and other fields. This step does not require admin approval.

The GrpahQl API endpoints can be split up into **Queries** and **Mutations**. **Queries** only fetch data while **Mutations** write data and fetch the result. This documentation will cover the following **Queries** and **Mutations**:

### Mutations

- `publicCloudProjectRequest`
- `publicCloudProjectEditRequest`
- `publicCloudRequestDecision` (ADMIN only)

### Queries (ADMIN)

- `publicCloudProjects`
- `publicCloudProjectById`
- `publicCloudActiveRequests`

The above **Queries** requre the `admin` role and will fetch data for all users in the registry. Each one of these **Query** has a counterpart for a user that is restricted to only fetching data belonging to the user. Below is the list of the **user** versions of the **Queries**, note that the the input variables are the same. You do not need to pass in an idtentifier for the user as it is already known by the API from the authorization token. The examples below will be for the admin **Queries**, but you can simply replace their names if you want to use the user counterpart.

### Queries (USER)

- `userPublicCloudProjects`
- `userPublicCloudProjectById`
- `userPublicCloudActiveRequests`

# Mutations

## Public Cloud Project Request

To create a public cloud project request, use the `publicCloudProjectRequest` mutation. This mutation accepts the following required arguments:

- `name`: The name of the project.
- `description`: A brief description of the project.
- `ministry`: The ministry associated with the project.
- `provider`: The public cloud provider (e.g., `GOOGLE` or `AWS`).
- `budget`: The budget for the project.
- `billingGroup`: The billing group for the project.
- `commonComponents`: Common components to be used in the project.
- `projectOwner`: Information about the project owner.
- `technicalLeads`: Information about the technical leads.

Here's an example using JavaScript with `fetch`:

Note that the `query` part of the request represents the data that will be returned if the mutation is successful. The `variables` part of the request are the input varialbes that will be written to the database if successful.

```javascript
const query = `
  mutation PublicCloudProjectRequest($input: PublicCloudProjectRequestInput!) {
    publicCloudProjectRequest(input: $input) {
      id
      name
      description
      provider
    }
  }
`;

const variables = {
  input: {
    name: 'Example Project',
    description: 'A brief description of the project.',
    ministry: 'AEST',
    provider: 'AWS',
    budget: {
      prod: 1000,
      test: 500,
      dev: 500,
      tools: 100,
    },
    billingGroup: 'example-billing-group',
    commonComponents: {
      addressAndGeolocation: 'IMPLEMENTED',
      workflowManagement: 'PLANNING_TO_USE',
      noServices: false,
      other: 'Additional services',
    },
    projectOwner: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      ministry: 'AEST',
    },
    technicalLeads: [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        ministry: 'AEST',
      },
    ],
  },
};

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-access-token',
  },
  body: JSON.stringify({ query, variables }),
})
  .then((res) => res.json())
  .then(console.log);
```

## Public Cloud Project Edit Request

To edit a public cloud project, use the `publicCloudProjectEditRequest` mutation. This mutation accepts the same arguments as the `publicCloudProjectRequest` mutation except that there is no option to change the `provider` and it also requires the `projectId` argument.

Note that all arguments need to be provided, regardless of whether that property is to be cahnged or not. For example, if you want to keep the description the same, simply provide the same description as the current project.

This mutation accepts the following arguments:

- `projectId`: The project ID to edit
- `name`: The name of the project.
- `description`: A brief description of the project.
- `ministry`: The ministry associated with the project.
- `provider`: The public cloud provider (e.g., `GOOGLE` or `AWS`).
- `budget`: The budget for the project.
- `billingGroup`: The billing group for the project.
- `commonComponents`: Common components to be used in the project.
- `projectOwner`: Information about the project owner.
- `technicalLeads`: Information about the technical leads.

Here's an example using JavaScript with `fetch`:

```javascript
const query = `
  mutation PublicCloudProjectEditRequest($input: PublicCloudProjectEditRequestInput!) {
    publicCloudProjectEditRequest(input: $input) {
      id
      name
      description
      provider
    }
    }
`;

const variables = {
  input: {
    projectId: 'your-project-id',
    name: 'Updated Example Project',
    description: 'An updated description of the project.',
    ministry: 'AEST',
    provider: 'AWS',
    budget: {
      prod: 1200,
      test: 600,
      dev: 600,
      tools: 200,
    },
    billingGroup: 'updated-billing-group',
    commonComponents: {
      addressAndGeolocation: 'IMPLEMENTED',
      workflowManagement: 'PLANNING_TO_USE',
      noServices: false,
      other: 'Additional services',
    },
    projectOwner: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      ministry: 'AEST',
    },
    technicalLeads: [
      {
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane.doe@example.com',
        ministry: 'AEST',
      },
    ],
  },
};

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-access-token',
  },
  body: JSON.stringify({ query, variables }),
})
  .then((res) => res.json())
  .then(console.log);
```

## Public Cloud Request Decision

An admin will be required to make a decision about a create request in order for it to be provisioned. If the admin approved the request, it will get provisioned. To make a request decision for a public cloud project, use the `publicCloudRequestDecision` mutation.

This mutation accepts the following arguments:

- `requestId`: The ID of the request.
- `decision`: One of "APPROVED" or "REJECTED"
- `humanComment`: An optional string input for a comment about the requested project. This is usually used for an Admin to explain why a request is being rejected.

Here's an example using JavaScript with fetch:

```javascript
const mutation = `mutation PublicCloudRequestDecision($requestId: ID!, $decision: RequestDecision!, $humanComment: String) {
    publicCloudRequestDecision(requestId: $requestId, decision: $decision, humanComment: $humanComment) {
      id
      status
      reason
      requestedBy {
        id
        name
      }
      requestedAt
      decidedBy {
        id
        name
      }
      decidedAt
      humanComment
    }
  }`;

const variables = {
  requestId: 'your-request-id',
  decision: 'APPROVED', // or "REJECTED"
  humanComment: 'Optional human comment for the decision',
};

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-access-token',
  },
  body: JSON.stringify({ query: mutation, variables }),
})
  .then((res) => res.json())
  .then(console.log);
```

# Queries

## Querying Public Cloud Projects

To query all public cloud projects, use the `publicCloudProjects` query.
Here's an example using JavaScript with `fetch`:

```javascript
const query = `
  query PublicCloudProjects {
  publicCloudProjects {
    id
    licencePlate
    ministry
    name
    projectOwner {
      firstName
      lastName
      email
    }
    provider
    status
    technicalLeads {
      firstName
      id
      lastName
      email
    }
    created
    description
    budget {
      tools
      test
      prod
      dev
    }
    billingGroup
    activeEditRequest {
      id
      active
      type
    }
  }
}
`;

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-access-token',
  },
})
  .then((res) => res.json())
  .then(console.log);
```

## Querying a Single Public Cloud Project

To query a single public cloud project, use the `publicCloudProject` query. This query requires the `id` argument.

Here's an example using JavaScript with fetch:

```javascript
const query = `  query publicCloudProjectById($id: ID!) {
    publicCloudProjectById(projectId: $id) {
      id
      name
      description
      provider
      status
    }
  }`;

const variables = {
  id: 'your-project-id',
};

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-access-token',
  },
  body: JSON.stringify({ query, variables }),
})
  .then((res) => res.json())
  .then(console.log);
```

## Querying all Public Cloud Active Requests

Querying active public cloud requests. To get active public cloud requests, use the privateCloudActiveRequests query.

Here's an example using JavaScript with fetch:

```javascript
const query = `
  query UserPublicCloudActiveRequests($userId: ID!) {
    userPublicCloudActiveRequests(userId: $userId) {
      id
      status
      reason
      requestedBy {
        id
        name
      }
      requestedAt
      decidedBy {
        id
        name
      }
      decidedAt
      humanComment
    }
  }
`;

const variables = {
  userId: 'your-user-id',
};

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer your-access-token',
  },
  body: JSON.stringify({ query, variables }),
})
  .then((res) => res.json())
  .then(console.log);
```
