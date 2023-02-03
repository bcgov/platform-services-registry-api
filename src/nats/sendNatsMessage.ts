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
    const messageBody = message(action, requestedProject);
    // const messageBody = testMessage;

    console.log("MESSAGE BODY: ", messageBody);

    const nc = await connect({ servers: serverURL });

    // const sc = StringCodec();
    const jc = JSONCodec();

    // nc.publish(natsSubject, jc.encode(messageBody));

    await nc.drain();
  } catch (e) {
    console.log(`Error sending NATS message with subject: ${natsSubject}`, e);
  }
}

export default sendNatsMessage;

const test = {
  action: "create",
  profile_id: "63cdc7cf990baeb2e97cbab9",
  cluster_name: "clab",
  display_name: "Oamar New test provisioner",
  description: "test",
  ministry_id: "PSA",
  merge_type: "auto",
  namespaces: [
    {
      name: "a59936-tools",
      quota: {
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1",
        snapshot: "snapshot-5",
      },
      quotas: {
        cpu: { requests: 0.5, limits: 1.5 },
        memory: { requests: "2Gi", limits: "4Gi" },
        storage: {
          block: "1Gi",
          file: "1Gi",
          backup: "512Mi",
          capacity: "1Gi",
          pvc_count: "60",
        },
        snapshot: { count: 5 },
      },
    },
    {
      name: "a59936-prod",
      quota: {
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1",
        snapshot: "snapshot-5",
      },
      quotas: {
        cpu: { requests: 0.5, limits: 1.5 },
        memory: { requests: "2Gi", limits: "4Gi" },
        storage: {
          block: "1Gi",
          file: "1Gi",
          backup: "512Mi",
          capacity: "1Gi",
          pvc_count: "60",
        },
        snapshot: { count: 5 },
      },
    },
    {
      name: "a59936-dev",
      quota: {
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1",
        snapshot: "snapshot-5",
      },
      quotas: {
        cpu: { requests: 0.5, limits: 1.5 },
        memory: { requests: "2Gi", limits: "4Gi" },
        storage: {
          block: "1Gi",
          file: "1Gi",
          backup: "512Mi",
          capacity: "1Gi",
          pvc_count: "60",
        },
        snapshot: { count: 5 },
      },
    },
    {
      name: "a59936-test",
      quota: {
        cpu: "cpu-request-0.5-limit-1.5",
        memory: "memory-request-2-limit-4",
        storage: "storage-1",
        snapshot: "snapshot-5",
      },
      quotas: {
        cpu: { requests: 0.5, limits: 1.5 },
        memory: { requests: "2Gi", limits: "4Gi" },
        storage: {
          block: "1Gi",
          file: "1Gi",
          backup: "512Mi",
          capacity: "1Gi",
          pvc_count: "60",
        },
        snapshot: { count: 5 },
      },
    },
  ],
  contacts: [
    {
      user_id: "okanji",
      provider: "github",
      email: "oamar.kanji@gov.bc.ca",
      rocketchat_username: null,
      role: "owner",
    },
    {
      user_id: "okanji",
      provider: "github",
      email: "oamar.kanji@gov.bc.ca",
      rocketchat_username: null,
      role: "lead",
    },
  ],
};
