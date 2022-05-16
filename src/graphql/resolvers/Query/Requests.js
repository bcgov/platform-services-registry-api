function privateCloudRequests(
  _,
  __,
  { dataSources: { privateCloudRequests } }
) {
  return privateCloudRequests.getAll();
}

function privateCloudRequest(
  _,
  { id },
  { dataSources: { privateCloudRequests } }
) {
  return privateCloudRequests.findOneById(id);
}

function publicCloudRequests(_, __, { dataSources: { publicCloudRequests } }) {
  return publicCloudRequests.getAll();
}

function publicCloudRequest(
  _,
  { id },
  { dataSources: { publicCloudRequests } }
) {
  return publicCloudRequests.findOneById(id);
}

async function requests(
  _,
  __,
  { dataSources: { publicCloudRequests, privateCloudRequests } }
) {
  return [
    ...(await privateCloudRequests.getAll()),
    ...(await publicCloudRequests.getAll()),
  ];
}

export {
  privateCloudRequests,
  privateCloudRequest,
  publicCloudRequests,
  publicCloudRequest,
  requests,
};
