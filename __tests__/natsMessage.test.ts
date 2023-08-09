import privateCloudNatsMessage from '../src/natsPubSub/privateCloud/message';
import publicCloudNatsMessage from '../src/natsPubSub/publicCloud/message';
import { PublicCloudRequestedProject } from '../src/natsPubSub/publicCloud/message';
import { projectA } from '../__mocks__/constants';

describe('Nats messagge', () => {
  it('Should create a message object', async () => {
    const messageObject = privateCloudNatsMessage(
      'CREATE',
      projectA as any,
      '123abc'
    );
    expect(messageObject).toBeDefined();
  });
});

describe('message', () => {
  it('should generate a message object with the correct properties', () => {
    const requestedProject: PublicCloudRequestedProject = {
      id: '1',
      licencePlate: 'ABCD1234',
      name: 'Test Project',
      accountCoding: 'abcdefg123',
      ministry: "AEST",
      budget: {
        test: 10000,
        dev: 10000,
        prod: 10000,
        tools: 10000,
      },
      provider: 'AWS',
      projectOwner: {
        email: 'owner@example.com',
        firstName: 'John',
        lastName: 'Doe',
      },
      primaryTechnicalLead: {
        email: 'techlead1@example.com',
        firstName: 'Jane',
        lastName: 'Smith',
      },
      secondaryTechnicalLead: {
        email: 'techlead2@example.com',
        firstName: 'Mike',
        lastName: 'Brown',
      },
    };

    const result = publicCloudNatsMessage('CREATE', requestedProject);

    expect(result).toEqual({
      project_set_info: {
        licence_plate: 'ABCD1234',
        request_type: 'CREATE',
        project_name: 'Test Project',
        account_coding: 'abcdefg123',
        ministry_name: 'AEST',
        requested_product_owner: {
          name: 'John Doe',
          email: 'owner@example.com',
        },
        current_product_owner: null,
        requested_tech_leads: [
          {
            name: 'Jane Smith',
            email: 'techlead1@example.com',
          },
          {
            name: 'Mike Brown',
            email: 'techlead2@example.com',
          },
        ],
        current_tech_leads: null,
        budgets: {
          test: 10000,
          dev: 10000,
          prod: 10000,
          tools: 10000,
        },
      },
    });
  });
});
