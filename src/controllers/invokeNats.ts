import dotenv from "dotenv";
dotenv.config();
import { connect, StringCodec, JSONCodec } from "nats";

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

async function sendNatsMessage(subject, message) {
  try {
    console.log("NATS SUBJECT: ", subject);
    console.log("MESSAGE BODY: ", message);

    const nc = await connect({ servers: serverURL });

    // const sc = StringCodec();
    const jc = JSONCodec();

    nc.publish(subject, jc.encode(message));

    await nc.drain();
  } catch (e) {
    console.log(`Error sending NATS message with subject: ${subject}`, e);
  }
}

const invokeNats = async (req, res) => {
  try {
    const { subject, message } = req.body;
    await sendNatsMessage(subject, message);

    res.status(200).end();
  } catch (e) {
    console.log("Error invoking NATS", e);
    res.status(500).end();
  }
};

export default invokeNats;
