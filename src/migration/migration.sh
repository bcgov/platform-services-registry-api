#!/bin/bash

# brew install mongodb-atlas-cli

# node index.js

mongoimport --uri "mongodb://<username>:<pw>@localhost:27018/platsrv-registry-db?retryWrites=true&w=majority&directConnection=true" --collection User --jsonArray --file mongoUsers.json
mongoimport --uri "mongodb://<username>:<pw>@localhost:27018/platsrv-registry-db?retryWrites=true&w=majority&directConnection=true" --collection PrivateCloudProject --jsonArray --file mongoProjects.json

