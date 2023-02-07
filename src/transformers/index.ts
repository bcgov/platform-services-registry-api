import {
  authDirectiveTransformer,
  roleDirectiveTransformer,
  permissionDirectiveTransformer,
} from "./auth.js";
import { nonNullInputDirectiveTransformer } from "./noNullInput.js";
import { flattenDefaultQuotaTransformer } from "./flattenDefaultQuota.js";

const applyDirectiveTransformers = (schema) => {
  return authDirectiveTransformer(
    roleDirectiveTransformer(
      permissionDirectiveTransformer(
        flattenDefaultQuotaTransformer(nonNullInputDirectiveTransformer(schema))
      )
    )
  );
};

export default applyDirectiveTransformers;
