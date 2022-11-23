import RequestStatus from "../../enum/RequestStatus";
import RequestType from "../../enum/RequestType";
import Platform from "../../enum/Platform";
import sendNatsMessage from "../../../../nats/SendNatsMessage";
import { ObjectId } from "mongodb";
import swig from "swig";

async function privateCloudProjectDeleteRequest(_, args, context) {
  const { projectId } = args;

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
      "User must either be a project owner or technical lead on this project in order to delete it"
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

  const requestBody = {
    createdBy: user._id,
    status: RequestStatus.APPROVED,
    type: RequestType.DELETE,
    platform: Platform.PRIVATE_CLOUD,
    active: true,
    created: new Date(),
    decisionDate: null,
    project: ObjectId(projectId)
  };

  // If there is no requested quota change, we do not need admin approval and can proceed to provision

  await sendNatsMessage(
    requestBody.type,
    projectOwner.email,
    [
      requestedPrimaryTechnicalLead
        ? requestedPrimaryTechnicalLead
        : primaryTechnicalLead,
      requestedSecondaryTechnicalLead
        ? requestedSecondaryTechnicalLead
        : secondaryTechnicalLead
    ].map(({ email }) => email),
    requestedProject
  );

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
        secondaryTechnicalLead,
        requestedPrimaryTechnicalLead,
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

export default privateCloudProjectDeleteRequest;
