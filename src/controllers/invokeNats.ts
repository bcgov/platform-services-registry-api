import dotenv from "dotenv";
dotenv.config();
import { connect, JSONCodec } from "nats";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

const jc = JSONCodec();

async function sendNatsMessage(subject, message) {
  console.log("NATS SUBJECT: ", subject);
  console.log("MESSAGE BODY: ", message);

  try {
    const nc = await connect({ servers: serverURL });
    const jc = JSONCodec();

    nc.publish(subject, jc.encode(message));
    await nc.flush();
    await nc.close();
  } catch (err) {
    console.error(`Error sending NATS message with subject: ${subject}`, err);
    throw new Error("Failed to send message to NATS server");
  }
}

const invokeNats = async (req, res, next) => {
  try {
    const { subject, message } = req.body;
    console.log("subject: ", subject);

    if (!subject || !message) {
      throw new Error("Missing subject or message");
    }

    await sendNatsMessage(subject, message);

    res.status(200).end();
  } catch (err) {
    console.error("Error invoking NATS:", err);
    next(err);
  }
};

export default invokeNats;
