import customPrivateCloudProjectEditRequest from "./CustomPrivateCloudProjectEditRequest";

const privateCloudProjectEditRequest = (
  _,
  {
    projectId,
    metaData,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota,
  },
  context
) =>
  customPrivateCloudProjectEditRequest(
    _,
    {
      projectId,
      metaData,
      productionQuota: {
        ...productionQuota?.cpu,
        ...productionQuota?.memory,
        ...productionQuota?.storage,
      },
      developmentQuota: {
        ...developmentQuota?.cpu,
        ...developmentQuota?.memory,
        ...developmentQuota?.storage,
      },
      testQuota: {
        ...testQuota?.cpu,
        ...testQuota?.memory,
        ...testQuota?.storage,
      },
      toolsQuota: {
        ...toolsQuota?.cpu,
        ...toolsQuota?.memory,
        ...toolsQuota?.storage,
      },
    },
    context
  );

export default privateCloudProjectEditRequest;
