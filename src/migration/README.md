To run the script you need to:

1. ` brew install mongodb/brew/mongodb-database-tools`
2. copy database from old registry to you local psql database
3. portforward mongodb that you want to migrate data to.
4. update connection string in migration.sh to:

```
mongodb://<USERNAME>:<PassWord>@localhost:27018/<DB_NAME>?retryWrites=true&w=majority&directConnection=true
```

5. update connection string in index.js to you local psql db
6. `npm install`
7. run `bash migration.sh`
