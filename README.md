# Apollo Server and GraphQL Code Generator example

GraphQL Code Generator generates our types in the `src/__generated___/resolvers.ts` file. Take a look at the `src/resolver.ts` file to see how we use the generated types to set up type checking for our resolvers.

## Run locally

To run this example locally:

```bash
npm i && npm start
```

When your server is up you can navigate to [http://localhost:4000/](http://localhost:4000/) in your favorite browser and use the [Apollo Sandbox](https://www.apollographql.com/docs/studio/explorer/sandbox/) to perform GraphQL operations against the server.

## Prisma

```bash
npx prisma generate
npx prisma db push
```
