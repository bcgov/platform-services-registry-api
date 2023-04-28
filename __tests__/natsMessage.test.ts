import privateCloudNatsMessage from '../src/natsPubSub/privateCloud/message';
import publicCloudNatsMessage from '../src/natsPubSub/publicCloud/message';
import { PublicCloudRequestedProject } from '../src/natsPubSub/publicCloud/message';
import { projectA } from '../__mocks__/constants';

describe('Nats messagge', () => {
  it('Should create a message object', async () => {
    const messageObject = privateCloudNatsMessage('CREATE', projectA as any);
    expect(messageObject).toBeDefined();
  });
});

describe('message', () => {
  it('should generate a message object with the correct properties', () => {
    const requestedProject: PublicCloudRequestedProject = {
      id: '1',
      licencePlate: 'ABCD1234',
      name: 'Test Project',
      billingGroup: 'Test Billing Group',
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
      technicalLeads: [
        {
          email: 'techlead1@example.com',
          firstName: 'Jane',
          lastName: 'Smith',
        },
        {
          email: 'techlead2@example.com',
          firstName: 'Mike',
          lastName: 'Brown',
        },
      ],
    };

    const result = publicCloudNatsMessage(requestedProject);

    expect(result).toEqual({
      project_set_info: {
        licence_plate: 'ABCD1234',
        project_name: 'Test Project',
        billing_group: 'Test Billing Group',
        admin_email: 'owner@example.com',
        admin_name: 'John Doe',
        tech_leads: ['Jane Smith', 'Mike Brown'],
        tech_lead_emails: ['techlead1@example.com', 'techlead2@example.com'],
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
