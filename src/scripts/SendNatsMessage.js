const { connect, StringCodec, JSONCodec } = require("nats");

// const serverURL = `nats://localhost:4222`;

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`
const subject = process.env.NATS_SUBJECT

async function sendNatsMessage() {
  const nc = await connect({ servers: serverURL });

  // create a codec
  const sc = StringCodec();
  const jc = JSONCodec();

  nc.publish(subject, sc.encode("hello world"));

  await nc.drain();
}

export default sendNatsMessage