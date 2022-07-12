#!/bin/bash

node index.js

mongoimport --uri "mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/registry?retryWrites=true&w=majority" --collection users --drop --jsonArray --file mongoUsers.json
mongoimport --uri "mongodb+srv://challenge:uYuMturLtSasyUig@cluster0.v8ikp.mongodb.net/registry?retryWrites=true&w=majority" --collection privateCloudProjects --drop --jsonArray --file mongoProjects.json

