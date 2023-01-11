import { defaultFieldResolver } from "graphql";
import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";

const flattenDefaultQuotaInput = (incoming) => ({
  ...incoming?.cpu,
  ...incoming?.memory,
  ...incoming?.storage
});

// This function takes in a schema and adds upper-casing logic
// to every resolver for an object field that has a directive with
// the specified name (we're using `upper`)
export function flattenDefaultQuotaTransformer(
  schema,
  directiveName = "flattenDefaultQuotaInput"
) {
  return mapSchema(schema, {
    // Executes once for each object field in the schema
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      // Check whether this field has the specified directive
      const upperDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];

      if (upperDirective) {
        // Get this field's original resolver
        const { resolve = defaultFieldResolver } = fieldConfig;

        // Replace the original resolver with a function that *first* flattens the quota inptut,
        // then calls the original resolver, then
        fieldConfig.resolve = async function (source, args, context, info) {
          if (args?.productionQuota) {
            args.productionQuota = flattenDefaultQuotaInput(
              args.productionQuota
            );
          }

          if (args?.testQuota) {
            args.testQuota = flattenDefaultQuotaInput(args.testQuota);
          }

          if (args?.toolsQuota) {
            args.toolsQuota = flattenDefaultQuotaInput(args.toolsQuota);
          }

          if (args?.developmentQuota) {
            args.developmentQuota = flattenDefaultQuotaInput(
              args.developmentQuota
            );
          }

          const result = await resolve(source, args, context, info);

          return result;
        };
        return fieldConfig;
      }
    }
  });
}
