
const currentProjectOwner = project.projectOwner
const currentTechnicalLeads = project.technicalLeads

function updateTechnicalLeads(formerTechnicalLeads, updatedTechnicalLeadas) {
  const removedTechnicalLeads = formerTechnicalLeads.filter(tl => !updatedTechnicalLeadas.includes(tl))
  const newTechnicalLeads = updatedTechnicalLeadas.filter(tl => !formerTechnicalLeads.includes(tl))

  // Remove 
}

if(project.projectOwner !== requestedProject.projectOwner) {
  
}

// Remove removed PO and TL
await users.removeElementFromManyDocumentsArray(
  [projectOwner, ...technicalLeads].map(({ _id }) => _id),
  { activeRequests: request._id }
);