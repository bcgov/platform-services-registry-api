#!/bin/bash

# brew install mongodb-atlas-cli

MONGODB_URI="mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/registry?retryWrites=true&w=majority"

node index.js

mongoimport --uri $MONGODB_URI --collection User --jsonArray --file mongoUsers.json
mongoimport --uri $MONGODB_URI --collection PrivateCloudProject --jsonArray --file mongoProjects.json

MONGODB_URI=$MONGODB_URI node aggrigate.js