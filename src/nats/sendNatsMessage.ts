import dotenv from "dotenv";
dotenv.config();
import { connect, StringCodec, JSONCodec } from "nats";
import message from "./message.js";
import { testMessage, RequestType } from "./constants.js";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

// const serverURL = `nats://localhost:4222`

async function sendNatsMessage(action, requestedProject) {
  const nc = await connect({ servers: serverURL });

  console.log("Nats Connection");
  console.log(nc);

  // const sc = StringCodec();
  const jc = JSONCodec();
  console.log(jc);

  // const messageBody = message(action, requestedProject);
  const messageBody = testMessage;
  console.log(jc.encode(messageBody));

  const natsSubject = `${process.env.NATS_SUBJECT_PREFIX}_${
    RequestType[requestedProject.cluster]
  }`;

  nc.publish(natsSubject, jc.encode(messageBody));

  console.log("url");
  console.log(serverURL);

  console.log("Nats Subject");
  console.log(natsSubject);

  console.log("Nats Message");
  console.log(messageBody);

  await nc.drain();
}

export default sendNatsMessage;
