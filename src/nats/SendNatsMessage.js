import dotenv from "dotenv";
dotenv.config();
import { connect, StringCodec, JSONCodec } from "nats";
import message from "./message";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;
const subject = process.env.NATS_SUBJECT;
const natsSkip = process.env.NATS_SKIP;

// const serverURL = `nats://localhost:4222`;

async function sendNatsMessage(
  action,
  projectOwner,
  primaryTechnicalLead,
  secondaryTechnicalLead,
  requestedProject
) {
  console.log("Nats envoked");
  console.log(action);
  console.log(projectOwner);
  console.log(primaryTechnicalLead);
  console.log(secondaryTechnicalLead);
  console.log(requestedProject);
  
  const nc = await connect({ servers: serverURL });

  const sc = StringCodec();
  const jc = JSONCodec();

  const messageBody = message(
    action,
    projectOwner,
    primaryTechnicalLead,
    secondaryTechnicalLead,
    requestedProject
  );

  nc.publish(subject, jc.encode(messageBody));

  console.log("Nats Message");
  console.log(messageBody);

  await nc.drain();
}

export default sendNatsMessage;
