import { Prisma, RequestType } from '@prisma/client';

export type PublicCloudRequestedProject =
  Prisma.PublicCloudRequestedProjectGetPayload<{
    select: {
      id: true;
      licencePlate: true;
      name: true;
      accountCoding: true;
      budget: true;
      provider: true;
      ministry: true;
      projectOwner: {
        select: {
          email: true;
          firstName: true;
          lastName: true;
        };
      };
      primaryTechnicalLead: {
        select: {
          email: true;
          firstName: true;
          lastName: true;
        };
      };
      secondaryTechnicalLead: {
        select: {
          email: true;
          firstName: true;
          lastName: true;
        };
      };
    };
  }>;

export type PublicCloudProject = Prisma.PublicCloudProjectGetPayload<{
  select: {
    id: true;
    licencePlate: true;
    name: true;
    accountCoding: true;
    budget: true;
    provider: true;
    ministry: true;
    projectOwner: {
      select: {
        email: true;
        firstName: true;
        lastName: true;
      };
    };
    primaryTechnicalLead: {
      select: {
        email: true;
        firstName: true;
        lastName: true;
      };
    };
    secondaryTechnicalLead: {
      select: {
        email: true;
        firstName: true;
        lastName: true;
      };
    };
  };
}>;

// Create a test env variable that prefix the namespace name with "t"
function message(
  requestType: RequestType,
  requestedProject: PublicCloudRequestedProject,
  currentProject?: PublicCloudProject 
) {
 return{
    project_set_info: {
      licence_plate: requestedProject.licencePlate,
      ministry_name : requestedProject.ministry,
      request_type: requestType,
      project_name: requestedProject.name,
      account_coding: requestedProject.accountCoding,
      budgets: requestedProject.budget,
      enterprise_support: {
        prod: true,
        test: false,
        dev: false,
        tools: false,
      },
      requested_product_owner: {
        name: `${requestedProject.projectOwner.firstName} ${requestedProject.projectOwner.lastName}`,
        email: requestedProject.projectOwner.email,
      },
      current_product_owner: !currentProject
        ? null
        : {
            name: `${currentProject.projectOwner.firstName} ${currentProject.projectOwner.lastName}`,
            email: currentProject.projectOwner.email,
          },

      requested_tech_leads: [
        {
          name: `${requestedProject.primaryTechnicalLead.firstName} ${requestedProject.primaryTechnicalLead.lastName}`,
          email: requestedProject.primaryTechnicalLead.email,
        },
        {
          name: `${requestedProject?.secondaryTechnicalLead?.firstName} ${requestedProject?.secondaryTechnicalLead?.lastName}`,
          email: requestedProject?.secondaryTechnicalLead?.email,
        },
      ].filter((techLead) => Boolean(techLead.email)),
      current_tech_leads: !currentProject
        ? null
        : [
            {
              name: `${currentProject.primaryTechnicalLead.firstName} ${currentProject.primaryTechnicalLead.lastName}`,
              email: currentProject.primaryTechnicalLead.email,
            },
            {
              name: `${currentProject?.secondaryTechnicalLead?.firstName} ${currentProject?.secondaryTechnicalLead?.lastName}`,
              email: currentProject?.secondaryTechnicalLead?.email,
            },
          ].filter((techLead) => Boolean(techLead.email)),
    },
  };
}

export default message;
