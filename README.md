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

## General Architecture
<img width="1719" alt="image" src="https://user-images.githubusercontent.com/30703259/235977287-0fe6612b-542f-4ffe-bd2b-ccaf54949289.png">

## GraphQL API Documentation

This documentation covers the publicCloud related GraphQL API endpoints for an application that provisions server namespaces on public cloud platforms like AWS. The flow of the app is as follows:

1. A user makes a create request with a project owner and multiple technical leads. If these users do not exist, they will be created.
2. The request is reviewed by an admin and will be approved or rejected.
3. If approved, it is sent to the provisioner microservice that creates the namespace in AWS and grants the specified users access.
4. Once the project is provisioned, the user can make edit requests to change project properties, such as project owner, technical leads, and other fields. This step does not require admin approval.

The following examples use JavaScript with `fetch`. In the examples, the variables for the query/mutation are stored in their own constant.

## Public Cloud Project Request

To create a public cloud project request, use the `publicCloudProjectRequest` mutation. This mutation accepts the following arguments:

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
    name: "Example Project",
    description: "A brief description of the project.",
    ministry: "AEST",
    provider: "AWS",
    budget: {
      prod: 1000,
      test: 500,
      dev: 500,
      tools: 100,
    },
    billingGroup: "example-billing-group",
    commonComponents: {
      addressAndGeolocation: "IMPLEMENTED",
      workflowManagement: "PLANNING_TO_USE",
      noServices: false,
      other: "Additional services",
    },
    projectOwner: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      ministry: "AEST",
    },
    technicalLeads: [
      {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        ministry: "AEST",
      },
    ],
  },
};

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-access-token',
  },
  body: JSON.stringify({ query, variables }),
})
  .then(res => res.json())
  .then(console.log);
```

## Public Cloud Project Edit Request

To edit a public cloud project, use the `publicCloudProjectEditRequest` mutation. This mutation accepts the same arguments as the publicCloudProjectRequest mutation but also requires the projectId argument. Note that all arguments need to be provided, regardless of weather that property is to be cahnged or not. For example, if you want to keep the description the same, simply provide the same description as the current project. Note that the provider cannont be changed and this endpoint will throw an error if changed. 

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

const variables = {
  filter: {
    ministry: "AEST",
    provider: "AWS",
    status: "APPROVED",
  },
};

fetch('your-graphql-endpoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer your-access-token',
  },
  body: JSON.stringify({ query, variables }),
})
  .then(res => res.json())
  .then(console.log);


