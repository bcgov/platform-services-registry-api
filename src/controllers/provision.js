import RequestType from "../graphql/resolvers/enum/RequestType";
import { getDatasources } from "../dataSources";
import chesService from "../ches"

export default async function provision(req, res) {
  const {
    privateCloudActiveRequests,
    privateCloudProjects,
    privateCloudRequestedProjects,
  } = getDatasources();

  try {
    const { requestId } = req.data;

    // Get request
    const request = await privateCloudActiveRequests.findOneById(requestId);
    const { _id, ...requestedProject } =
      await privateCloudRequestedProjects.findOneById(request.project);

    // Replace project with requested project
    let projectId;

    if (request.type === RequestType.CREATE) {
      const newProject = await privateCloudProjects.create(requestedProject);
      projectId = newProject._id;
    } else {
      const updatedProject = await privateCloudProjects.updateFieldsById(
        request.project,
        requestedProject
      );
      projectId = updatedProject._id;
    }

    // Get PO and TL's
    const { projectOwner, technicalLeads } =
      request.type === RequestType.CREATE
        ? await privateCloudRequestedProjects.findOneById(
            request.requestedProject
          )
        : await privateCloudProjects.findOneById(request.project);

    // Remove active request from PO and TL's user documents
    await users.removeElementFromManyDocumentsArray(
      [projectOwner, ...technicalLeads].map(({ _id }) => _id),
      { activeRequests: request._id }
    );

    // Move active request to archived requests
    await privateCloudActiveRequests.removeDocument(request._id);
    const archivedRequest = await privateCloudArchivedRequests.create({
      ...request,
      ...{
        status: RequestStatus.REJECTED,
        decisionDate: new Date(),
        active: false,
        decisionMaker: user._id,
      },
    });

    // Add archived request to the projects request history
    if (request.type !== RequestType.CREATE) {
      await privateCloudProjects.addElementToDocumentArray(request.project, {
        requestHistory: archivedRequest._id,
      });
    }

    // Assign the project to the PO and TL's

    // Find project owner and add the project id
    await users.addElementToDocumentArray(projectOwner._id, {
      projectOwner: newProject._id,
    });

    // Find technical leads and add the project id
    if (input?.technicalLeads) {
      await users.addElementToManyDocumentsArray(
        technicalLeads.map(({ _id }) => _id),
        {
          technicalLead: newProject._id,
        }
      );
    }

    chesService.send({
      bodyType: "html",
      body: `<div style="color: blue">Project provisioned</div>`,
      to: [projectOwner, ...technicalLeads].map(({ email }) => email),
      from: "Registry <PlatformServicesTeam@gov.bc.ca>",
      subject: `**profile.name** OCP 4 Project Set`,
      // subject: `${profile.name} OCP 4 Project Set`,
    })
    res.status(200);
  } catch (err) {
    console.log(err);
    res.status(400);
  }
}
