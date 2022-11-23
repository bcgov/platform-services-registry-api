import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import Platform from "../../enum/Platform";
import sendNatsMessage from "../../../../nats/SendNatsMessage";
import { ObjectId } from "mongodb";
import swig from "swig";

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
      privateCloudRequestedProjects,
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

  const requestedProject = await privateCloudRequestedProjects.create({
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
      projectOwner.email,
      requestedPrimaryTechnicalLead?.email || primaryTechnicalLead.email,
      requestedSecondaryTechnicalLead?.email || secondaryTechnicalLead?.email,
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
    chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/templates/edit-request-received.html", {
        projectName: requestedProject.name,
        POName: projectOwner.firstName + " " + projectOwner.lastName,
        POEmail: projectOwner.email,
        technicalLeads: [primaryTechnicalLead, secondaryTechnicalLead],
        setCluster: requestedProject.cluster,
        licensePlate: requestedProject.licensePlate,
        showStandardFooterMessage: false, // show "love, Platform services" instead
        productMinistry: "PRODUCT MINISTRY",
        productDescription: "Product DESCRIPTION"
      }),
      to: [
        projectOwner,
        requestedProjectOwner,
        primaryTechnicalLead,
        requestedPrimaryTechnicalLead,
        secondaryTechnicalLead,
        requestedSecondaryTechnicalLead
      ].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${metaData.name} OCP 4 Project Set`
    });
  } catch (error) {
    console.log(error);
  }
  return request;
}

export default customPrivateCloudProjectEditRequest;
