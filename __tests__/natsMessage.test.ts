import message from '../src/natsPubSub/privateCloud/message';
import { projectA } from '../__mocks__/constants';

describe('Nats messagge', () => {
  it('Should create a message object', async () => {
    const messageObject = message('CREATE', projectA as any);
    expect(messageObject).toBeDefined();
  });
});
