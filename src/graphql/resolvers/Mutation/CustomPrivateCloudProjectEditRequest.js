import RequestStatus from "../enum/RequestStatus";
import RequestDecision from "../enum/RequestDecision";
import RequestType from "../enum/RequestType";
import Platform from "../enum/Platform";
import sendNatsMessage from "../../../nats/SendNatsMessage";
import { ObjectId } from "mongodb";
import swig from "swig";
import Cluster from "../enum/Cluster";

async function customPrivateCloudProjectEditRequest(
  _,
  {
    projectId,
    metaData,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota,
  },
  {
    dataSources: {
      users,
      privateCloudRequestedProjects,
      privateCloudActiveRequests,
      privateCloudProjects,
    },
    kauth,
    chesService,
  }
) {
  const { email, resource_access } = kauth.accessToken.content;
  const { roles } = resource_access?.[process.env.AUTH_RESOURCE] || {
    roles: [],
  };
  const [user] = await users.findByFields({ email });
  const { _id, ...project } = await privateCloudProjects.findOneById(projectId);

  if (project === undefined) {
    throw Error("Project does not exist");
  }

  if ((await privateCloudActiveRequests.findOneById(projectId)) !== undefined) {
    throw Error("There already exists an active request for this project");
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

  if (
    !roles.includes("admin") &&
    ![metaData.projectOwner, ...metaData.technicalLeads].includes(email)
  ) {
    throw new Error(
      "User must assign themselves as a project owner or technical lead"
    );
  }

  const [requestedProjectOwner] = await users.findByFields({
    email: metaData.projectOwner,
  });

  if (projectOwner in metaData && !requestedProjectOwner)
    throw new Error("Project owner not found");

  const requestedTechnicalLeads = await users.findManyByFieldValues(
    "email",
    metaData.technicalLeads || []
  );

  if (technicalLeads in metaData) {
    if (
      new Set(metaData.technicalLeads).size !== metaData.technicalLeads.length
    ) {
      throw new Error("Duplicate technical leads found");
    }

    if (
      metaData &&
      requestedTechnicalLeads.length !== metaData.technicalLeads.length
    ) {
      throw new Error("One or more technical leads not found");
    }
  }

  const requestedProject = await privateCloudRequestedProjects.create({
    ...project,
    ...metaData,
    projectOwner: requestedProjectOwner
      ? requestedProjectOwner._id
      : project.projectOwner,
    technicalLeads: requestedTechnicalLeads
      ? requestedTechnicalLeads.map(({ _id }) => _id)
      : project.technicalLeads,
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
    project: ObjectId(projectId),
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

    await sendNatsMessage(
      requestBody.type,
      projectOwner.email,
      technicalLeads.map(({ email }) => email),
      requestedProject
    );
  } else {
    requestBody.status = RequestStatus.PENDING_DECISION;
  }

  const request = await privateCloudActiveRequests.create(requestBody);

  await users.addElementToManyDocumentsArray(
    [
      projectOwner,
      requestedProjectOwner,
      ...requestedTechnicalLeads,
      ...technicalLeads,
    ]
      .filter(Boolean)
      .map(({ _id }) => _id),
    {
      privateCloudActiveRequests: request._id,
    }
  );

  try {
    chesService.send({
      bodyType: "html",
      body: swig.renderFile("./src/ches/templates/edit-request-received.html", {
        projectName: metaData.name,
        POName: projectOwner.firstName + " " + projectOwner.lastName,
        POEmail: projectOwner.email,
        technicalLeads: technicalLeads,
        setCluster: Object.entries(Cluster).filter(item => item[1] === metaData.cluster)[0][0],
        licencePlate: requestedProject.licencePlate,
        showStandardFooterMessage: false, // show "love, Platform services" instead
        // productMinistry: "PRODUCT MINISTRY",
        // productDescription: "Product DESCRIPTION",
      }),
      to: [projectOwner, ...technicalLeads].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `${metaData.name} OCP 4 Edit Project Request Received`,
      // subject: `${profile.name} OCP 4 Project Set`,
    });
  } catch (error) {
    console.log(error);
  }
  return request;
}

export default customPrivateCloudProjectEditRequest;
