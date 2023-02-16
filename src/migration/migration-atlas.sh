#!/bin/bash

# brew install mongodb-atlas-cli

node index.js

mongoimport --uri "mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/registry?retryWrites=true&w=majority" --collection User --drop --jsonArray --file mongoUsers.json
mongoimport --uri "mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/registry?retryWrites=true&w=majority" --collection PrivateCloudProject --drop --jsonArray --file mongoProjects.json
