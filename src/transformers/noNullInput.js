import { defaultFieldResolver } from "graphql";
import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";

const noNullInput =
  (next) =>
  (...params) => {
    const args = params[1];

    const noNullError = new Error(
      `null is not allowed as the value of an input field, assign the field a non null input or remove the field from the input object`
    );
    noNullError.code = "NO NULL ALLOWED";

    for (const arg of Object.values(args)) {
      if (arg === null) {
        throw noNullError;
      }

      if (typeof arg === "object") {
        if (Object.values(arg).some((value) => value === null)) {
          throw noNullError;
        }
      }
    }

    return next.apply(null, params);
  };

export const nonNullInputDirectiveTransformer = (
  schema,
  directiveName = "nonNullInput"
) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const nonNullInputDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];
      if (nonNullInputDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = noNullInput(resolve);
      }
      return fieldConfig;
    },
  });
};

