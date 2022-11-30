import customPrivateCloudProjectRequest from "./CustomProjectRequest";

const privateCloudProjectRequest = (
  _,
  {
    metaData,
    commonComponents,
    productionQuota,
    developmentQuota,
    testQuota,
    toolsQuota,
  },
  context
) =>
  customPrivateCloudProjectRequest(
    _,
    {
      metaData,
      commonComponents,
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

export default privateCloudProjectRequest;
