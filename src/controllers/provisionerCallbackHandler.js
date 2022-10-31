import RequestType from "../graphql/resolvers/enum/RequestType";
import RequestStatus from "../graphql/resolvers/enum/RequestStatus";
import ProjectStatus from "../graphql/resolvers/enum/ProjectStatus";

import { getDatasources } from "../dataSources";
import chesService from "../ches";
import swig from "swig";

export default async function provisionerCallbackHandler(req, res, next) {
  const dataSources = await getDatasources();
  const {
    privateCloudActiveRequests,
    privateCloudProjects,
    privateCloudRequestedProjects,
    privateCloudArchivedRequests,
    users,
  } = dataSources;

  try {
    const { prefix: licencePlate } = req.body;

    privateCloudActiveRequests.initialize();
    privateCloudRequestedProjects.initialize();
    privateCloudProjects.initialize();
    privateCloudArchivedRequests.initialize();
    users.initialize();

    const [requestedProject] = await privateCloudRequestedProjects.findByFields(
      {
        licencePlate,
      }
    );

    const [request] = await privateCloudActiveRequests.findByFields({
      requestedProject: requestedProject._id,
    });

    if (request === undefined) {
      throw Error("The request does not exist");
    }

    if (request.status !== RequestStatus.APPROVED) {
      throw Error("Request must be approved before it can be provissioned");
    }

    let projectId;
    if (request.type === RequestType.CREATE) {
      const newProject = await privateCloudProjects.create({
        ...requestedProject,
        requestHistory: [request._id],
        status: ProjectStatus.ACTIVE,
      });
      projectId = newProject._id;
    } else {
      const updatedProject = await privateCloudProjects.updateFieldsById(
        request.project,
        {
          ...requestedProject,
          requestHistory: [...requestedProject.requestHistory, request._id],
        }
      );
      projectId = updatedProject._id;
    }

    // Get PO and TL's
    const {
      projectOwner: projectOwnerId,
      primaryTechnicalLead: primaryTechnicalLeadId,
      secondaryTechnicalLead: secondaryTechnicalLeadId,
    } = request.type === RequestType.CREATE
      ? await privateCloudRequestedProjects.findOneById(
          request.requestedProject
        )
      : await privateCloudProjects.findOneById(request.project);

    const projectOwner = await users.findOneById(projectOwnerId);
    const primaryTechnicalLead = await users.findOneById(
      primaryTechnicalLeadId
    );
    const secondaryTechnicalLead = await users.findOneById(
      secondaryTechnicalLeadId
    );
    // Remove active request from PO and TL's user documents
    await users.removeElementFromManyDocumentsArray(
      [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].map(
        ({ _id }) => _id
      ),
      { privateCloudActiveRequests: request._id }
    );

    // Move active request to archived requests
    await privateCloudActiveRequests.removeDocument(request._id);
    const archivedRequest = await privateCloudArchivedRequests.create({
      ...request,
      active: false,
    });

    // Add archived request to the projects request history
    if (request.type !== RequestType.CREATE) {
      await privateCloudProjects.addElementToDocumentArray(request.project, {
        requestHistory: archivedRequest._id,
      });
    }

    // Assign the project to the PO and TL's
    await users.addElementToDocumentArray(projectOwner._id, {
      privateCloudProjectOwner: projectId,
    });

    await users.addElementToDocumentArray(projectOwner._id, {
      privateCloudPrimaryTechnicalLead: projectId,
    });

    await users.addElementToDocumentArray(projectOwner._id, {
      privateCloudSecondaryTechnicalLead: projectId,
    });

    
    await privateCloudProjects.updateFieldsById(projectId, {
      activeEditRequest: null,
    });

    chesService.send({
      bodyType: "html",
      body: swig.renderFile(
        "./src/ches/templates/provisioning-request-done.html",
        {
          // consoleButtons : '<div>CONSOLE BUTTONS GO HERE</div>',
          // humanActionComment: 'HUMAN ACTION COMMENT HERE',
          projectName: requestedProject.name,
          POName: `${projectOwner.firstName} ${projectOwner.lastName}`,
          POEmail: projectOwner.email,
          TCName: `${primaryTechnicalLead.firstName} ${primaryTechnicalLead.lastName}`,
          TCEmail: primaryTechnicalLead.email,
          setCluster: requestedProject.cluster,
          licensePlate: requestedProject.licensePlate,
          showStandardFooterMessage: true,
        }
      ),
      to: [projectOwner, primaryTechnicalLead, secondaryTechnicalLead].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `**profile.name** OCP 4 Project Set`,
      // subject: `${profile.name} OCP 4 Project Set`,
    });
    res.status(200).end();
  } catch (err) {
    console.log(err);
    res.status(400);
    next(err);
  }
}
