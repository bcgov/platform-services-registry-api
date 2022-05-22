const { connect, StringCodec, JSONCodec } = require("nats");

const host = `nats://localhost:4222`;

async function sendNatsMessage() {
  const nc = await connect({ servers: host });

  // create a codec
  const sc = StringCodec();
  const jc = JSONCodec();

  nc.publish("hello", jc.encode({hello: "world"}));

  await nc.drain();
}

sendNatsMessage()