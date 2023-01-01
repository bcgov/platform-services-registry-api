import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import Platform from "../../enum/Platform";
import sendNatsMessage from "../../../../nats/SendNatsMessage";
import { ObjectId } from "mongodb";
import swig from "swig";
import { adminEmails, clusterNames, emailData } from "../../../../ches/emailConstants"

async function customPrivateCloudProjectEditRequest(_, args, context) {
  const {
    projectId,
    metaData,
    commonComponents,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota
  } = args;

  const {
    dataSources: {
      users,
      privateCloudActiveRequestedProjects,
      privateCloudActiveRequests,
      privateCloudProjects
    },
    kauth,
    chesService
  } = context;

  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
    roles: []
  };
  const [user] = await users.findByFields({ email });

  if (!user)
    throw new Error("User not found, please create a user for yourself");

  const { _id, ...project } =
    (await privateCloudProjects.findOneById(projectId)) || {};

  if (_id === undefined) {
    throw Error("Project does not exist");
  }

  if ("activeEditRequest" in project && project.activeEditRequest) {
    throw Error("There already exists an active request for this project");
  }

  if (
    ![
      project.projectOwner,
      project.primaryTechnicalLead,
      project.secondaryTechnicalLead
    ].includes(user._id) &&
    !roles.includes("admin")
  ) {
    throw new Error(
      "User must either be a project owner or technical lead on this project in order to edit it"
    );
  }

  const projectOwner = await users.findOneById(project.projectOwner);
  const primaryTechnicalLead = await users.findOneById(
    project.primaryTechnicalLead
  );
  const secondaryTechnicalLead = await users.findOneById(
    project.secondaryTechnicalLead
  );



  let requestedProjectOwner;
  let requestedPrimaryTechnicalLead;
  let requestedSecondaryTechnicalLead;

  if (metaData) {
    // Only an Admin or the PO can request to change the PO
    if (
      "projectOwner" in metaData &&
      !roles.includes("admin") &&
      project.projectOwner !== user._id
    ) {
      throw Error("Only the project owner can set a new project owner");
    }

    if (
      !roles.includes("admin") &&
      ![
        metaData.projectOwner,
        metaData.primaryTechnicalLead,
        metaData.secondaryTechnicalLead
      ].includes(email)
    ) {
      throw new Error(
        "User must assign themselves as a project owner or technical lead"
      );
    }

    [requestedProjectOwner] = await users.findByFields({
      email: metaData.projectOwner
    });

    if ("projectOwner" in metaData && !requestedProjectOwner)
      throw new Error("Project owner not found");

    [requestedPrimaryTechnicalLead] = await users.findByFields({
      email: metaData.primaryTechnicalLead
    });

    if ("primaryTechnicalLead" in metaData && !requestedPrimaryTechnicalLead)
      throw new Error("Primary technical lead not found");

    [requestedSecondaryTechnicalLead] = await users.findByFields({
      email: metaData.secondaryTechnicalLead
    });

    if (
      "secondaryTechnicalLead" in metaData &&
      !requestedSecondaryTechnicalLead
    )
      throw new Error("Secondary technical lead not found");
  }



  const requestedProject = await privateCloudActiveRequestedProjects.create({
    ...project,
    ...metaData,
    commonComponents: { ...project.commonComponents, ...commonComponents },
    projectOwner: requestedProjectOwner
      ? requestedProjectOwner._id
      : project.projectOwner,
    primaryTechnicalLead: requestedPrimaryTechnicalLead
      ? requestedPrimaryTechnicalLead._id
      : project.primaryTechnicalLead,
    secondaryTechnicalLead: requestedSecondaryTechnicalLead
      ? requestedSecondaryTechnicalLead._id
      : project.secondaryTechnicalLead,
    productionQuota: { ...project.productionQuota, ...productionQuota },
    developmentQuota: { ...project.developmentQuota, ...developmentQuota },
    testQuota: { ...project.testQuota, ...testQuota },
    toolsQuota: { ...project.toolsQuota, ...toolsQuota }
  });

  const requestBody = {
    createdBy: user._id,
    status: RequestStatus.PENDING_DECISION,
    type: RequestType.EDIT,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: new Date(),
    decisionDate: null,
    project: ObjectId(projectId),
    requestedProject: requestedProject._id
  };

  // If there is no requested quota change, we do not need admin approval and can proceed to provision
  if (
    productionQuota === undefined &&
    developmentQuota == undefined &&
    testQuota == undefined &&
    toolsQuota === undefined
  ) {
    requestBody.status = RequestStatus.APPROVED;

    await sendNatsMessage(
      requestBody.type,
      projectOwner,
      requestedPrimaryTechnicalLead || primaryTechnicalLead,
      requestedSecondaryTechnicalLead || secondaryTechnicalLead,
      requestedProject
    );
  } else {
    requestBody.status = RequestStatus.PENDING_DECISION;
  }

  const request = await privateCloudActiveRequests.create(requestBody);

  await users.addElementToManyDocumentsArray(
    [
      projectOwner,
      primaryTechnicalLead,
      secondaryTechnicalLead,
      requestedPrimaryTechnicalLead,
      requestedSecondaryTechnicalLead
    ]
      .filter(Boolean)
      .map(({ _id }) => _id),
    {
      privateCloudActiveRequests: request._id
    }
  );

  await privateCloudProjects.updateFieldsById(_id, {
    activeEditRequest: request._id
  });


  try {
    if (((JSON.stringify(project.productionQuota) !== JSON.stringify(requestedProject.productionQuota)) ||
      (JSON.stringify(project.developmentQuota) !== JSON.stringify(requestedProject.developmentQuota)) ||
      (JSON.stringify(project.testQuota) !== JSON.stringify(requestedProject.testQuota)) ||
      (JSON.stringify(project.toolsQuota) !== JSON.stringify(requestedProject.toolsQuota))) &&
      (!requestedProjectOwner && !requestedPrimaryTechnicalLead && !requestedSecondaryTechnicalLead)) {
      chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/quota-request-received-email.html",
          emailData(requestedProject, project, projectOwner, primaryTechnicalLead, secondaryTechnicalLead)
        ),
        // For all project contacts. Sent when a new quota edit request is submitted successfully.
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
          ({ email }) => email
        ),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} quota change request received`,
      });



      chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/super-admin-request-email.html",
          emailData(requestedProject, project, projectOwner, primaryTechnicalLead, secondaryTechnicalLead, {
            requestType: 'Quota editing',
            isProvisioningRequest: false,
            isQuotaRequest: true,
          })
        ),
        //To the Super Admin. Sent with any type of request needing admin approval (provisioning, quota change, deletion).
        to: adminEmails,
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `New Quota editing request in Registry waiting for your approval`,
      });
    }

    if (((JSON.stringify(project.productionQuota) === JSON.stringify(requestedProject.productionQuota)) &&
      (JSON.stringify(project.developmentQuota) === JSON.stringify(requestedProject.developmentQuota)) &&
      (JSON.stringify(project.testQuota) === JSON.stringify(requestedProject.testQuota)) &&
      (JSON.stringify(project.toolsQuota) === JSON.stringify(requestedProject.toolsQuota))) &&
      (requestedProjectOwner || requestedPrimaryTechnicalLead || requestedSecondaryTechnicalLead)) {
      chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/product-contact-change-confirmation-email.html",
          {
            licencePlate: requestedProject.licencePlate,
            projectName: requestedProject.name,
            POName: `${requestedProjectOwner.firstName} ${requestedProjectOwner.lastName}`,
            POEmail: requestedProjectOwner.email,
            POGitHubOrIDIR: requestedProjectOwner.POIDIR ? requestedProjectOwner.POIDIR : requestedProjectOwner.githubId,
            PriTLName: `${requestedPrimaryTechnicalLead.firstName} ${requestedPrimaryTechnicalLead.lastName}`,
            PriTLEmail: requestedPrimaryTechnicalLead.email,
            PriTLGitHubOrIDIR: requestedPrimaryTechnicalLead.POIDIR ? requestedPrimaryTechnicalLead.POIDIR : requestedPrimaryTechnicalLead.githubId,
            SecTLName: requestedSecondaryTechnicalLead ? `${requestedSecondaryTechnicalLead.firstName} ${requestedSecondaryTechnicalLead.lastName}` : null,
            SecTLEmail: requestedSecondaryTechnicalLead ? requestedSecondaryTechnicalLead.email : null,
            SecTLGitHubOrIDIR: requestedSecondaryTechnicalLead ? requestedSecondaryTechnicalLead.POIDIR ? requestedSecondaryTechnicalLead.POIDIR : requestedSecondaryTechnicalLead.githubId : null,
            setCluster: clusterNames.filter(item => item.name === requestedProject.cluster)[0].humanFriendlyName,
          }
        ),
        // Sent to all new, current, and prior project contacts when the Provisioner processes the request in Openshift. Contacts who were just removed should also receive this email alerting them to these changes.
        to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead, requestedProjectOwner, requestedPrimaryTechnicalLead, requestedSecondaryTechnicalLead].filter(Boolean).map(
          ({ email }) => email
        ),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: 'Contact information for your product on Private Cloud Openshift platform has changed',
      });
    }
    if (((JSON.stringify(project.productionQuota) !== JSON.stringify(requestedProject.productionQuota)) ||
      (JSON.stringify(project.developmentQuota) !== JSON.stringify(requestedProject.developmentQuota)) ||
      (JSON.stringify(project.testQuota) !== JSON.stringify(requestedProject.testQuota)) ||
      (JSON.stringify(project.toolsQuota) !== JSON.stringify(requestedProject.toolsQuota))) &&
      (requestedProjectOwner || requestedPrimaryTechnicalLead || requestedSecondaryTechnicalLead)) {
      chesService.send({
        bodyType: "html",
        body: swig.renderFile(
          "./src/ches/new-templates/quota-and-tlpo-changes.html",
          emailData(requestedProject, 
            project, 
            requestedProjectOwner||projectOwner, 
            requestedPrimaryTechnicalLead||primaryTechnicalLead, 
            requestedSecondaryTechnicalLead||secondaryTechnicalLead
            )
        ),
        // Sent to all new, current, and prior project contacts upon form submit. Contacts who were just removed should also receive this email alerting them to these changes.
        to: [requestedProjectOwner, requestedPrimaryTechnicalLead, requestedSecondaryTechnicalLead, projectOwner, primaryTechnicalLead, secondaryTechnicalLead].filter(Boolean).map(
          ({ email }) => email
        ),
        from: "Registry <PlatformServicesTeam@gov.bc.ca>",
        subject: `${requestedProject.name} quota and product contact change request received`,
      });
    }



  } catch (error) {
    console.log(error);
  }
  return request;
}

export default customPrivateCloudProjectEditRequest;


