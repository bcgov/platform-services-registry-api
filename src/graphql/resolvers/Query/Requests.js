async function privateCloudRequests(
  _,
  __,
  { dataSources: { privateCloudArchivedRequests, privateCloudActiveRequests } }
) {
  return [
    ...await privateCloudArchivedRequests.getAll(),
    ...await privateCloudActiveRequests.getAll(),
  ];
}

function privateCloudActiveRequest(
  _,
  { id },
  { dataSources: { privateCloudActiveRequests } }
) {
  return privateCloudActiveRequests.findOneById(id);
}

function privateCloudActiveRequests(
  _,
  __,
  { dataSources: { privateCloudActiveRequests } }
) {
  return privateCloudActiveRequests.getAll();
}

function privateCloudArchivedRequest(
  _,
  { id },
  { dataSources: { privateCloudArchivedRequests } }
) {
  return privateCloudArchivedRequests.findOneById(id);
}

function publicCloudRequests(
  _,
  __,
  { dataSources: { publicCloudArchivedRequests, publicCloudActiveRequests } }
) {
  return [
    ...publicCloudArchivedRequests.getAll(),
    ...publicCloudActiveRequests.getAll(),
  ];
}

function publicCloudActiveRequest(
  _,
  { id },
  { dataSources: { publicCloudActiveRequests } }
) {
  return publicCloudActiveRequests.findOneById(id);
}

function publicCloudArchivedRequest(
  _,
  { id },
  { dataSources: { publicCloudArchivedRequests } }
) {
  return publicCloudArchivedRequests.findOneById(id);
}

async function requests(
  _,
  __,
  {
    dataSources: {
      publicCloudArchivedRequests,
      publicCloudActiveRequests,
      privateCloudArchivedRequests,
      privateCloudActiveRequests,
    },
  }
) {
  return [
    ...(await publicCloudArchivedRequests.getAll()),
    ...(await publicCloudActiveRequests.getAll()),
    ...(await privateCloudArchivedRequests.getAll()),
    ...(await privateCloudActiveRequests.getAll()),
  ];
}

export {
  privateCloudRequests,
  privateCloudActiveRequest,
  privateCloudActiveRequests,
  privateCloudArchivedRequest,
  publicCloudRequests,
  publicCloudActiveRequest,
  publicCloudArchivedRequest,
  requests,
};
