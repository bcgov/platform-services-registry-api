#!/bin/bash

DELAY=25

mongo <<EOF
var config = {
    "_id": "dbrs",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "mongo1:27017",
            "priority": 2
        },
        {
            "_id": 2,
            "host": "mongo2:27017",
            "priority": 1
        }
    ]
};
rs.initiate(config, { force: true });
EOF

echo "****** Waiting for ${DELAY} seconds for replicaset configuration to be applied ******"

sleep $DELAY

mongo -- "$MONGODB_NAME" <<EOF

var user = '$MONGODB_USERNAME';
var passwd = '$MONGODB_PASSWORD';
use $MONGODB_NAME
db.log.insert({"name":"create db"});
db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});   

