import { ApolloServer } from "apollo-server";
import { ContextValue } from "../../../index.js";

describe("User tests", () => {
  // const server = new ApolloServer<ContextValue>({
  //   typeDefs,
  //   resolvers
  // });

  it("creates a private cloud project request", async () => {
    // create a test server to test against, using our production typeDefs,
    // resolvers, and dataSources.

    // // mock the dataSource's underlying fetch methods
    // launchAPI.get = jest.fn(() => [mockLaunchResponse]);
    // userAPI.store = mockStore;
    // userAPI.store.trips.findAll.mockReturnValueOnce([
    //   { dataValues: { launchId: 1 } }
    // ]);

    // run the query against the server and snapshot the output
    const res = await server.executeOperation(
      {
        query: GET_LAUNCH,
        variables: { id: 1 }
      },
      {
        contextValue: {
          user: { id: 1, email: "a@a.a" },
          dataSources: {
            userAPI,
            launchAPI
          }
        }
      }
    );

    expect(res).toMatchSnapshot();
  });
});
