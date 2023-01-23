## How to run the project locally

- First install packages with `npm i -f`. Note the use of the `-f` flag. This is required as some of the keyclaok packages are outdated and throw warnings that halts the installation. The `-f` flag forces the installation.

- Make sure you have a `.env.dev` and a `.env.test` file in the root folder of this repository.

- Execute `npm run compile`. This will automatically generate typescript types from the graphql shcema and also compile the typescript files.

- Execute `npm run prisma-generate-dev` and then `npm run prisma-generate-test`. This will create the necessary Prisma assets for the app. 

- `npm run watch` to start the API.