async function privateCloudRequests(
  _,
  __,
  { dataSources: { privateCloudArchivedRequests, privateCloudActiveRequests } }
) {
  return [
    ...(await privateCloudArchivedRequests.getAll()),
    ...(await privateCloudActiveRequests.getAll()),
  ];
}

function privateCloudActiveRequest(
  _,
  { requestId },
  { dataSources: { privateCloudActiveRequests } }
) {
  return privateCloudActiveRequests.findOneById(requestId);
}

function privateCloudActiveRequests(
  _,
  __,
  { dataSources: { privateCloudActiveRequests } }
) {
  return privateCloudActiveRequests.getAll();
}

function privateCloudActiveRequestsById(
  _,
  { requestIds },
  { dataSources: { privateCloudActiveRequests } }
) {
  return privateCloudActiveRequests.findManyByIds(requestIds);
}

function privateCloudArchivedRequest(
  _,
  { requestId },
  { dataSources: { privateCloudArchivedRequests } }
) {
  return privateCloudArchivedRequests.findOneById(requestId);
}

function privateCloudArchivedRequests(
  _,
  __,
  { dataSources: { privateCloudArchivedRequests } }
) {
  return privateCloudArchivedRequests.getAll();
}

function privateCloudArchivedRequestsById(
  _,
  { requestIds },
  { dataSources: { privateCloudArchivedRequests } }
) {
  return privateCloudArchivedRequests.findManyByIds(requestIds);
}

async function userPrivateCloudActiveRequests(
  _,
  __,
  { dataSources: { privateCloudActiveRequests, users }, kauth }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  return privateCloudActiveRequests.findManyByIds(
    user.privateCloudActiveRequests
  );
}

async function userPrivateCloudActiveRequest(
  _,
  { requestId },
  { dataSources: { privateCloudActiveRequests, users }, kauth }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  if (
    !user.privateCloudActiveRequests
      .map((id) => id.toString())
      .includes(requestId)
  ) {
    throw Error("User is not a member of this project");
  }

  return privateCloudActiveRequests.findOneById(requestId);
}

async function userPrivateCloudActiveRequestsById(
  _,
  { requestIds },
  { dataSources: { privateCloudActiveRequests, users }, kauth }
) {
  const { email } = kauth.accessToken.content;
  const [user] = await users.findByFields({ email });

  const activeRequests = user.privateCloudActiveRequests;

  requestIds.every((requestId) => activeRequests.includes(requestId))
    ? privateCloudActiveRequests.findManyByIds(requestIds)
    : [];
}

// function publicCloudRequests(
//   _,
//   __,
//   { dataSources: { publicCloudArchivedRequests, publicCloudActiveRequests } }
// ) {
//   return [
//     ...publicCloudArchivedRequests.getAll(),
//     ...publicCloudActiveRequests.getAll(),
//   ];
// }

// function publicCloudActiveRequest(
//   _,
//   { id },
//   { dataSources: { publicCloudActiveRequests } }
// ) {
//   return publicCloudActiveRequests.findOneById(id);
// }

// function publicCloudArchivedRequest(
//   _,
//   { id },
//   { dataSources: { publicCloudArchivedRequests } }
// ) {
//   return publicCloudArchivedRequests.findOneById(id);
// }

// async function requests(
//   _,
//   __,
//   {
//     dataSources: {
//       publicCloudArchivedRequests,
//       publicCloudActiveRequests,
//       privateCloudArchivedRequests,
//       privateCloudActiveRequests,
//     },
//   }
// ) {
//   return [
//     ...(await publicCloudArchivedRequests.getAll()),
//     ...(await publicCloudActiveRequests.getAll()),
//     ...(await privateCloudArchivedRequests.getAll()),
//     ...(await privateCloudActiveRequests.getAll()),
//   ];
// }

export {
  privateCloudRequests,
  privateCloudActiveRequest,
  privateCloudActiveRequests,
  privateCloudActiveRequestsById,
  userPrivateCloudActiveRequests,
  userPrivateCloudActiveRequest,
  userPrivateCloudActiveRequestsById,
  privateCloudArchivedRequest,
  privateCloudArchivedRequests,
  privateCloudArchivedRequestsById,
};
