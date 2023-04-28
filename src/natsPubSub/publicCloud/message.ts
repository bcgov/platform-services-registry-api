import { Prisma } from '@prisma/client';

export type PublicCloudRequestedProject =
  Prisma.PublicCloudRequestedProjectGetPayload<{
    select: {
      id: true;
      licencePlate: true;
      name: true;
      billingGroup: true;
      budget: true;
      provider: true;
      projectOwner: {
        select: {
          email: true;
          firstName: true;
          lastName: true;
        };
      };
      technicalLeads: {
        select: {
          email: true;
          firstName: true;
          lastName: true;
        };
      };
    };
  }>;

// Create a test env variable that prefix the namespace name with "t"
function message(requestedProject: PublicCloudRequestedProject) {
  return {
    project_set_info: {
      licence_plate: requestedProject.licencePlate,
      project_name: requestedProject.name,
      billing_group: requestedProject.billingGroup,

      admin_email: requestedProject.projectOwner.email,
      admin_name: `${requestedProject.projectOwner.firstName} ${requestedProject.projectOwner.lastName}`,
      tech_leads: requestedProject.technicalLeads.map(
        (techLead) => `${techLead.firstName} ${techLead.lastName}`
      ),
      tech_lead_emails: requestedProject.technicalLeads.map(
        (techLead) => techLead.email
      ),
      budgets: requestedProject.budget,
    },
  };
}

export default message;
