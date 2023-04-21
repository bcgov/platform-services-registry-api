import dotenv from "dotenv";
dotenv.config();
import { connect, StringCodec, JSONCodec } from "nats";
import createPrivateCloudMessage from "./privateCloud/message.js";
import { testMessage, Cluster } from "./privateCloud/constants.js";
import createPublicCloudMessage from "./publicCloud/message.js";
import { RequestType } from "@prisma/client";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

async function sendNatsMessage(natsSubject, messageBody) {
  try {
    console.log("NATS SUBJECT: ", natsSubject);
    console.log("MESSAGE BODY: ", JSON.stringify(messageBody));

    const nc = await connect({ servers: serverURL });

    // const sc = StringCodec();
    const jc = JSONCodec();

    nc.publish(natsSubject, jc.encode(messageBody));

    await nc.drain();
  } catch (e) {
    console.log(`Error sending NATS message with subject: ${natsSubject}`, e);
  }
}

function sendPrivateCloudNatsMessage(action, requestedProject) {
  const natsSubject = `registry_project_provisioning_${
    Cluster[requestedProject.cluster]
  }`;

  const messageBody = createPrivateCloudMessage(action, requestedProject);

  return sendNatsMessage(natsSubject, messageBody);
}

function sendPublicCloudNatsMessage(action, requestedProject) {
  const natsSubject = `public_cloud`;

  const messageBody = createPublicCloudMessage(action, requestedProject);

  return sendNatsMessage(natsSubject, messageBody);
}

export { sendPrivateCloudNatsMessage, sendPublicCloudNatsMessage };
