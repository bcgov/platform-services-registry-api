import {
  authDirectiveTransformer,
  roleDirectiveTransformer,
  permissionDirectiveTransformer
} from "./auth.js";

import { nonNullInputDirectiveTransformer } from "./noNullInput.js";

const applyDirectiveTransformers = (schema) => {
  return authDirectiveTransformer(
    roleDirectiveTransformer(
      permissionDirectiveTransformer(nonNullInputDirectiveTransformer(schema))
    )
  );
};

export default applyDirectiveTransformers;
