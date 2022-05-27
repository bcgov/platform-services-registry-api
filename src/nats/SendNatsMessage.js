import { connect, StringCodec, JSONCodec } from "nats";

// const serverURL = `nats://localhost:4222`;

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`
const subject = process.env.NATS_SUBJECT

async function sendNatsMessage() {
  const nc = await connect({ servers: serverURL });

  console.log("** SEND NATS MESSAGE **");
  console.log(nc)

  // create a codec
  const sc = StringCodec();
  const jc = JSONCodec();

  nc.publish(subject, sc.encode("hello world"));

  await nc.drain();
}

export default sendNatsMessage