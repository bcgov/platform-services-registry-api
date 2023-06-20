import dotenv from "dotenv";
dotenv.config();
import { connect, StringCodec, JSONCodec } from "nats";
import message from "./message.js";
import { Cluster } from "./constants.js";
import openshiftDeletionCheck, {
  DeletableField
} from "../scripts/deletioncheck.js";
import { RequestType } from "../__generated__/resolvers-types.js";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

async function sendNatsMessage(action, requestedProject, requestId) {
  const natsSubject = `${process.env.NATS_SUBJECT_PREFIX}_${
    Cluster[requestedProject.cluster]
  }`;

  if (action === RequestType.Delete || action.toLowerCase() === "delete") {
    const deleteCheckList: DeletableField = await openshiftDeletionCheck(
      requestedProject.licencePlate,
      requestedProject.cluster
    );

    if (!Object.values(deleteCheckList).every((field) => field)) {
      throw new Error(
        "This project is not deletable as it is not empty. Please delete all resources before deleting the project."
      );
    }
  }

  try {
    const messageBody = message(action, requestedProject, requestId);
    // const messageBody = testMessage;
    console.log("NATS SUBJECT: ", natsSubject);
    console.log("MESSAGE BODY: ", JSON.stringify(messageBody));
    console.log("serverURL: ", serverURL);
    const nc = await connect({ servers: serverURL });

    // const sc = StringCodec();
    const jc = JSONCodec();

    nc.publish(natsSubject, jc.encode(messageBody));

    await nc.drain();
  } catch (e) {
    console.log(`Error sending NATS message with subject: ${natsSubject}`, e);
  }
}

export default sendNatsMessage;
