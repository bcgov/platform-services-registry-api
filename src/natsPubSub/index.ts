import dotenv from 'dotenv';
dotenv.config();
import { connect, StringCodec, JSONCodec } from 'nats';
import createPrivateCloudMessage from './privateCloud/message.js';
import { Cluster } from './privateCloud/constants.js';
import createPublicCloudMessage from './publicCloud/message.js';
import {
  RequestType,
  PrivateCloudRequest,
  PublicCloudRequestedProject,
} from '@prisma/client';
import { PrivateCloudRequestedProject } from './privateCloud/message.js';

const serverURL = `${process.env.NATS_HOST}:${process.env.NATS_PORT}`;

async function sendNatsMessage(natsSubject, messageBody) {
  try {
    console.log('NATS SUBJECT: ', natsSubject);
    console.log('MESSAGE BODY: ', JSON.stringify(messageBody));

    const nc = await connect({ servers: serverURL });

    // const sc = StringCodec();
    const jc = JSONCodec();

    nc.publish(natsSubject, jc.encode(messageBody));

    await nc.drain();
  } catch (e) {
    console.log(`Error sending NATS message with subject: ${natsSubject}`, e);
  }
}

export function sendPrivateCloudNatsMessage(
  requestType: RequestType,
  requestedProject: PrivateCloudRequestedProject,
  requestId: PrivateCloudRequest['id']
) {
  const natsSubject = `registry_project_provisioning_${
    Cluster[requestedProject.cluster]
  }`;

  const messageBody = createPrivateCloudMessage(
    requestType,
    requestedProject,
    requestId
  );

  return sendNatsMessage(natsSubject, messageBody);
}

export function sendPublicCloudNatsMessage(
  requestType: RequestType,
  requestedProject: PublicCloudRequestedProject
) {
  const natsSubject = 'registry_project_provisioning_aws';

  const messageBody = createPublicCloudMessage(requestType, requestedProject);

  return sendNatsMessage(natsSubject, messageBody);
}
