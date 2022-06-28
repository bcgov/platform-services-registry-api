import { connect, StringCodec, JSONCodec } from "nats";
import message from "./message";
// const serverURL = `nats://localhost:4222`;

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`
const subject = process.env.NATS_SUBJECT

async function sendNatsMessage(action, projectOwner, technicalLeads, requestedProject) {
  const nc = await connect({ servers: serverURL });

  const sc = StringCodec();
  const jc = JSONCodec();

  const messageBody = message(action, projectOwner, technicalLeads, requestedProject)

  nc.publish(subject, jc.encode(messageBody));

  await nc.drain();
}

export default sendNatsMessage