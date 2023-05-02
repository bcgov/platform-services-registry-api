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

Documentation for GraphQL API Endpoints (Public Cloud)

This documentation covers the GraphQL API endpoints related to the PublicCloud entity. The app provisions server namespaces on public cloud platforms like AWS. The following sections will describe the steps to make requests for creating, editing, and managing Public Cloud projects using the GraphQL API.

### Create a Public Cloud Project

To create a new Public Cloud project, use the publicCloudProjectRequest mutation. This mutation accepts the following input parameters:

**name**: The project name.
**description**: The project description.
**ministry**: The Ministry associated with the project.
**provider**: The public cloud provider for the project (e.g., GOOGLE, AWS).
**budget**: The project's budget for different environments.
**billingGroup**: The billing group for the project.
**commonComponents**: The common components of the project.
**projectOwner**: The project owner's information.
**technicalLeads**: An array of technical leads for the project.

Example:

```
const query = `
  mutation CreatePublicCloudProject($input: PublicCloudProjectRequestInput!) {
    publicCloudProjectRequest(input: $input) {
      id
      active
      decisionStatus
    }
  }
`;

const variables = {
  input: {
    name: "New Public Cloud Project",
    description: "This is a new public cloud project.",
    ministry: "EDUC",
    provider: "AWS",
    budget: {
      prod: 1000,
      test: 500,
      dev: 500,
      tools: 200
    },
    billingGroup: "BillingGroup1",
    commonComponents: {
      addressAndGeolocation: "IMPLEMENTED",
      noServices: false,
      other: "Additional services"
    },
    projectOwner: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      ministry: "EDUC"
    },
    technicalLeads: [
      {
        firstName: "Jane",
        lastName: "Smith",
        email: "jane.smith@example.com",
        ministry: "EDUC"
      }
    ]
  }
};

fetch("https://your-api-endpoint/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer your-access-token"
  },
  body: JSON.stringify({ query, variables })
})
  .then((res) => res.json())
  .then((res) => console.log(res.data));
```

Edit a Public Cloud Project

To edit an existing Public Cloud project, use the publicCloudProjectEditRequest mutation. This mutation accepts the following input parameters:

projectId: The ID of the project you want to edit.
name: The new project name.
description: The new project description.
ministry: The new Ministry associated with the project.
provider: The new public cloud provider for the project (e.g., GOOGLE, AWS).
budget: The new project's budget for different environments.
billingGroup: The new billing group for the project.
commonComponents: The new common components of the project.
projectOwner: The new project owner's information.
technicalLeads: An array of new technical leads for the project.
Example:

```
const query = `
  mutation EditPublicCloudProject($input: PublicCloudProjectEditRequestInput!) {
    publicCloudProjectEditRequest(input: $input) {
      id
      active
      decisionStatus
    }
  }
`;

const variables = {
  input: {
    projectId: "your-project-id",
    name: "
