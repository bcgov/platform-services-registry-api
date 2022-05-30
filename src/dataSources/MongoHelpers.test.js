import { MongoClient } from "mongodb";
import { user } from "../graphql/resolvers/Query/Users";
import MongoHelpers from "./MongoHelpers";
import { mockUserAlex, mockUserBilly, mockUserOamar } from "./TestConstants";

describe("MongoDataSource", () => {
  it("sets up caching functions", () => {
    const users = {};
    const source = new MongoHelpers(users);
    source.initialize();
    expect(source.findOneById).toBeDefined();
    expect(source.findByFields).toBeDefined();
    expect(source.deleteFromCacheById).toBeDefined();
    expect(source.deleteFromCacheByFields).toBeDefined();
    expect(source.collection).toEqual(users);
  });
});

describe("Mongo Helpers", () => {
  let connection;
  let db;
  let oamarId;
  let billyId;
  let users;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    db = await connection.db(global.__MONGO_DB_NAME__);
    users = new MongoHelpers(db.collection("users"));
    users.initialize();

    const oamar = await users.collection.insertOne(mockUserOamar);
    oamarId = oamar.insertedId;

    const billy = await users.collection.insertOne(mockUserBilly);
    billyId = billy.insertedId;
  });

  afterAll(async () => {
    await db.dropDatabase();
    await connection.close();
  });

  test("Data Source with Collection", async () => {
    const user = await users.findOneById(oamarId);

    expect(user.firstName).toBe("Oamar");
    expect(user.id).toBeUndefined();
  });

  it("Should return undefined if document does not exist, async", async () => {
    const user = await users.findOneById("123");
    expect(user).toBeUndefined();
  });

  it("Should get all users in the collection", async () => {
    const allUsers = await users.getAll();

    expect(allUsers.map((user) => user._id)).toEqual([oamarId, billyId]);
  });

  it("Should get users by id's", async () => {
    const allUsers = await users.findManyByIds([oamarId, billyId]);

    expect(allUsers.map((user) => user._id)).toEqual([oamarId, billyId]);
  });

  it("Should insert a user into collection and return the user", async () => {
    const insertedUser = await users.create(mockUserAlex);

    expect(insertedUser).toEqual(mockUserAlex);
  });

  it("Should insert an element to an array in a document", async () => {
    const testProjectId = "testProjectOneId";
    const result = await users.addElementToDocumentArray(oamarId, {
      projectOwner: testProjectId,
    });

    const user = await users.collection.find({ _id: oamarId }).toArray();

    expect(result.acknowledged).toBe(true);
    expect(user[0]["projectOwner"]).toEqual([testProjectId]);
  });

  it("Should insert an element to an array in many documents by id", async () => {
    const testProjectId = "testProjectTwoId";
    const { acknowledged } = await users.addElementToManyDocumentsArray(
      [billyId, oamarId],
      {
        technicalLeads: testProjectId,
      }
    );

    const allUsers = await users.collection
      .find({ _id: { $in: [oamarId, billyId] } })
      .toArray();

    expect(acknowledged).toBe(true);
    expect(allUsers.map((user) => user.technicalLeads)).toEqual([
      [testProjectId],
      [testProjectId],
    ]);
  });

  it("Should find all documents with a specified field name for corresponding specified values", async () => {
    const allUsers = await users.findManyByFieldValues("email", [
      "oamarkanji@registry.com",
      "billyli@registry.com",
    ]);
    expect(allUsers.map((user) => user._id)).toEqual([oamarId, billyId]);
  });

  it("Should update specified fields in document with specified values ", async () => {
    const ret = await users.updateFieldsById(oamarId, {
      email: "a.kanji@gamil.com",
      firstName: "Aahil",
    });

    const user = await users.findOneById(oamarId);
    expect(acknowledged).toBe(true);
    // expect(user.email).toEqual("a.kanji@gamil.com")
    // expect(user.firstName).toEqual("Aahil")
  });

  it("Should delete a document", async () => {
    const { acknowledged } = await users.removeDocument(oamarId);
    const allUsers = await users.getAll();

    // console.log(allUsers)

    expect(acknowledged).toBe(true);
  });

  it("Should delete an element from an array in multipe documents", async () => {
    const oamar = await users.create(mockUserOamar);
    const { acknowledged } = await users.removeElementFromManyDocumentsArray(
      [billyId, oamar._id],
      { array: "B" }
    );
    const allUsers = await users.getAll();
    console.log(allUsers.map((user) => user.array));

    expect(allUsers.map((user) => user.array)).toStrictEqual([["A"], ["A", "B"], ["A"]]);
  });
});
