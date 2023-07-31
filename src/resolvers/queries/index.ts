import * as privateCloudProjectQueries from './privateCloud/projects.js';
import * as privateCloudProjectRequests from './privateCloud/requests.js';
import * as publicCloudProjectQueries from './publicCloud/projects.js';
import * as publicCloudProjectRequests from './publicCloud/requests.js';
import * as userQueries from './users.js';

export default {
  Query: {
    ...privateCloudProjectQueries,
    ...privateCloudProjectRequests,
    ...publicCloudProjectQueries,
    ...publicCloudProjectRequests,
    ...userQueries,
  },
};
