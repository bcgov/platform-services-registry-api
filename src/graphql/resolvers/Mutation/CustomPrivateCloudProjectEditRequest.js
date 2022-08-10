import RequestStatus from "../enum/RequestStatus";
import RequestDecision from "../enum/RequestDecision";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";
import sendNatsMessage from "../../../nats/SendNatsMessage";

async function customPrivateCloudProjectEditRequest(
  _,
  { projectId, metaData, productionQuota, developmentQuota, testQuota, toolsQuota },
  {
    dataSources: {
      users,
      privateCloudRequestedProjects,
      privateCloudActiveRequests,
      privateCloudProjects,
    },
    kauth,
    chesService
  }
) {
  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
    roles: [],
  };
  const [user] = await users.findByFields({ email });
  const {_id, ...project} = await privateCloudProjects.findOneById(projectId);

  if (project === undefined) {
    throw Error("Project does not exist");
  }

  if (await privateCloudActiveRequests.findOneById(projectId) !== undefined) {
    throw Error("There already exists an active request for this project")
  }

  // Only an Admin or a PO or TL of this project can request to edit it
  if (
    ![project.projectOwner, ...project.technicalLeads].includes(user._id) &&
    !roles.includes("admin")
  ) {
    throw new Error(
      "User must either be a project owner or technical lead on this project in order to edit it"
    );
  }

  // Only an Admin or the PO can request to change the PO
  if (
    "projectOwner" in metaData &&
    !roles.includes("admin") &&
    project.projectOwner !== user._id
  ) {
    throw Error("Only the project owner can set a new project owner");
  }

  const projectOwner = await users.findOneById(project.projectOwner);
  const technicalLeads = await users.findManyByIds(project.technicalLeads);

  const requestedProject = await privateCloudRequestedProjects.create({
    ...project,
    ...metaData,
    productionQuota: { ...project.productionQuota, ...productionQuota },
    developmentQuota: { ...project.developmentQuota, ...developmentQuota },
    testQuota: { ...project.testQuota, ...testQuota },
    toolsQuota: { ...project.toolsQuota, ...toolsQuota },
  });

  const requestBody = {
    createdBy: user._id,
    status: RequestStatus.PENDING_DECISION,
    type: RequestType.EDIT,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: new Date(),
    decisionDate: null,
    project: projectId,
    requestedProject: requestedProject._id,
  };

  // If there is no requested quota change, we do not need admin approval and can proceed to provision
  if (
    productionQuota === undefined &&
    developmentQuota == undefined &&
    testQuota == undefined &&
    toolsQuota === undefined
  ) {
    requestBody.status = RequestStatus.APPROVED;

    await sendNatsMessage();
  } else {
    requestBody.status = RequestStatus.PENDING_DECISION;
  }

  const request = await privateCloudActiveRequests.create(requestBody);

  await users.addElementToManyDocumentsArray(
    [projectOwner, ...technicalLeads].map(({ _id }) => _id),
    {
      privateCloudActiveRequests: request._id,
    }
  );

  chesService.send({
    bodyType: "html",
    body: swig.renderFile('./src/ches/templates/request-approved.html', {
      projectName: metaData.name,
      POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
      POEmail: projectOwner.email,
      TCName: `${metaData.technicalLeads[0].firstName} ${metaData.technicalLeads[0].lastName}`,
      TCEmail: metaData.technicalLeads[0].email,
      setCluster: metaData.cluster,
      licensePlate: requestedProject.licensePlate,
      showStandardFooterMessage: false, // show "love, Platform services" instead
      productMinistry: "PRODUCT MINISTRY",
      productDescription: "Product DESCRIPTION",
    }),
    to: [projectOwner, ...technicalLeads].map(({ email }) => email),
    from: "Registry <PlatformServicesTeam@gov.bc.ca>",
    subject: `**profile.name** OCP 4 Project Set`,
    // subject: `${profile.name} OCP 4 Project Set`,
  });

  return request;
}

export default customPrivateCloudProjectEditRequest;
