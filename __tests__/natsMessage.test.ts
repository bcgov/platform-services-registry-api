import message from "../src/nats/message";
import { projectA } from "../__mocks__/constants";

describe("Nats messagge", () => {
  it("Should create a message object", async () => {
    const messageObject = message("CREATE", projectA);
    console.log(JSON.stringify(messageObject, null, 2));
    expect(messageObject).toBeDefined();
  });
});
