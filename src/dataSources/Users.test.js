const { MongoClient } = require("mongodb");
import Users from "./Users"

const mockUserOamar = {
  firstName: "Oamar",
  lastName: "Kanji",
  email: "oamarkanji@registry.com",
  archived: false,
  created: new Date(),
  projects: [],
};

const mockUserAlex = {
  firstName: "Alex",
  lastName: "Carmichael",
  email: "alexcarmichael@registry.com",
  archived: false,
  created: new Date(),
  projects: [],
}

describe('MongoDataSource', () => {
  it('sets up caching functions', () => {
    const users = {}
    const source = new Users(users)
    source.initialize()
    expect(source.findOneById).toBeDefined()
    expect(source.findByFields).toBeDefined()
    expect(source.deleteFromCacheById).toBeDefined()
    expect(source.deleteFromCacheByFields).toBeDefined()
    expect(source.collection).toEqual(users)
  })
})

describe("User data source", () => {
  let connection;
  let db;
  let testUserId
  let users

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
    users = new Users(db.collection("users"))
    users.initialize()

    const testUser = await users.collection.insertOne(mockUserOamar);
    testUserId = testUser.insertedId
  });

  afterAll(async () => {
    await connection.close();
  });

  test('Data Source with Collection', async () => {
    const user = await users.getById(testUserId)

    expect(user.firstName).toBe('Oamar')
    expect(user.id).toBeUndefined()
  })

  it("Should insert a user into collection and return the user", async () => {
    const insertedUser = await users.create(mockUserAlex);
    
    expect(insertedUser).toEqual(mockUserAlex);
  });
});
