import dotenv from 'dotenv';
dotenv.config();
import { connect, StringCodec, JSONCodec } from 'nats';
import createPrivateCloudMessage from './privateCloud/message.js';
import { Cluster } from './privateCloud/constants.js';
import createPublicCloudMessage from './publicCloud/message.js';
import openshiftDeletionCheck, {
  DeletableField,
} from '../scripts/deletioncheck.js';
import { RequestType, PrivateCloudRequest } from '@prisma/client';
import { PrivateCloudRequestedProject } from './privateCloud/message.js';
import {
  PublicCloudRequestedProject,
  PublicCloudProject,
} from './publicCloud/message.js';

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

export async function sendPrivateCloudNatsMessage(
  requestType: RequestType,
  requestedProject: PrivateCloudRequestedProject,
  requestId: PrivateCloudRequest['id'],
  currentProject?: PrivateCloudRequestedProject
) {
  const natsSubject = `registry_project_provisioning_${
    Cluster[requestedProject.cluster]
  }`;

  // Perform deletion check if request is a delete request
  if (
    requestType === RequestType.DELETE ||
    requestType.toLowerCase() === 'delete'
  ) {
    const deleteCheckList: DeletableField = await openshiftDeletionCheck(
      requestedProject.licencePlate,
      requestedProject.cluster
    );

    if (!Object.values(deleteCheckList).every((field) => field)) {
      throw new Error(
        'This project is not deletable as it is not empty. Please delete all resources before deleting the project.'
      );
    }
  }

  const messageBody = createPrivateCloudMessage(
    requestType,
    requestedProject,
    requestId,
    currentProject
  );

  return sendNatsMessage(natsSubject, messageBody);
}

export function sendPublicCloudNatsMessage(
  requestType: RequestType,
  requestedProject: PublicCloudRequestedProject,
  currentProject?: PublicCloudProject
) {
  const natsSubject = 'registry_project_provisioning_aws';

  const messageBody = createPublicCloudMessage(
    requestType,
    requestedProject,
    currentProject
  );

  return sendNatsMessage(natsSubject, messageBody);
}
