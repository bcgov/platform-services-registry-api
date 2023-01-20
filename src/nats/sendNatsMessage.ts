import dotenv from "dotenv";
dotenv.config();
import { connect, StringCodec, JSONCodec } from "nats";
import message from "./message.js";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

// const serverURL = `nats://localhost:4222`

async function sendNatsMessage(action, requestedProject) {
  if (process.env.NATS_SKIP === "skip") {
    return;
  }

  const nc = await connect({ servers: serverURL });

  const sc = StringCodec();
  const jc = JSONCodec();

  const messageBody = message(action, requestedProject);

  const natsSubject = `${process.env.NATS_SUBJECT_PREFIX}_${requestedProject.cluster}`;

  nc.publish(natsSubject, jc.encode(messageBody));

  console.log("Nats Subject");
  console.log(natsSubject);

  console.log("Nats Message");
  console.log(messageBody);

  await nc.drain();
}

export default sendNatsMessage;
