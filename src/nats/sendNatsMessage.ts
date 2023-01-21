import dotenv from "dotenv";
dotenv.config();
import { connect, StringCodec, JSONCodec } from "nats";
import message from "./message.js";
import { testMessage, Cluster } from "./constants.js";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

// const serverURL = `nats://localhost:4222`

async function sendNatsMessage(action, requestedProject) {
  const natsSubject = `${process.env.NATS_SUBJECT_PREFIX}_${
    Cluster[requestedProject.cluster]
  }`;

  try {
    const nc = await connect({ servers: serverURL });

    // const sc = StringCodec();
    const jc = JSONCodec();

    const messageBody = message(action, requestedProject);
    // const messageBody = testMessage;

    nc.publish(natsSubject, jc.encode(messageBody));

    await nc.drain();
  } catch (e) {
    console.log(`Error sending NATS message with subject: ${natsSubject}`, e);
  }
}

export default sendNatsMessage;
