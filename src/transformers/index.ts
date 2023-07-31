import {
  authDirectiveTransformer,
  roleDirectiveTransformer,
  permissionDirectiveTransformer,
} from './auth.js';
import { nonNullInputDirectiveTransformer } from './noNullInput.js';
import { flattenDefaultQuotaTransformer } from './flattenDefaultQuota.js';
import { lowerDirectiveTransformer } from './lowerCase.js';

const applyDirectiveTransformers = (schema) => {
  return authDirectiveTransformer(
    roleDirectiveTransformer(
      permissionDirectiveTransformer(
        flattenDefaultQuotaTransformer(
          nonNullInputDirectiveTransformer(lowerDirectiveTransformer(schema))
        )
      )
    )
  );
};

export default applyDirectiveTransformers;
