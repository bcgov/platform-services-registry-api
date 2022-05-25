const { connect, StringCodec, JSONCodec } = require("nats");

//const host = `nats://localhost:4222`;
const host = process.env.NATS_HOST
const port = process.env.NATS_PORT

async function sendNatsMessage() {
  const nc = await connect({ servers: host });

  // create a codec
  const sc = StringCodec();
  const jc = JSONCodec();

  nc.publish("hello", sc.encode("hello world"));

  await nc.drain();
}

export default sendNatsMessage