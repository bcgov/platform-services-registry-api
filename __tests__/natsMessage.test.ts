import message from "../src/nats/message";
import { projectA } from "../__mocks__/constants";

describe("Nats messagge", () => {
  it("Should create a message object", async () => {
    const messageObject = message("CREATE", projectA);
    expect(messageObject).toBeDefined();
  });
});
