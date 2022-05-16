import { defaultFieldResolver } from "graphql";
import { getDirective, MapperKind, mapSchema } from "@graphql-tools/utils";
import { auth, hasPermission, hasRole } from "keycloak-connect-graphql";

const authDirectiveTransformer = (schema, directiveName = "auth") => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const authDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];
      if (authDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        fieldConfig.resolve = auth(resolve);
      }
      return fieldConfig;
    },
  });
};

export const permissionDirectiveTransformer = (
  schema,
  directiveName = "hasPermission"
) => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const permissionDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];
      if (permissionDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        const keys = Object.keys(permissionDirective);
        let resources;
        if (keys.length === 1 && keys[0] === "resources") {
          resources = permissionDirective[keys[0]];
          if (typeof resources === "string") resources = [resources];
          if (Array.isArray(resources)) {
            resources = resources.map((val) => String(val));
          } else {
            throw new Error(
              "invalid hasRole args. role must be a String or an Array of Strings"
            );
          }
        } else {
          throw Error(
            "invalid hasRole args. must contain only a 'role argument"
          );
        }
        fieldConfig.resolve = hasPermission(resources)(resolve);
      }
      return fieldConfig;
    },
  });
};

export const roleDirectiveTransformer = (schema, directiveName = "hasRole") => {
  return mapSchema(schema, {
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
      const roleDirective = getDirective(
        schema,
        fieldConfig,
        directiveName
      )?.[0];
      if (roleDirective) {
        const { resolve = defaultFieldResolver } = fieldConfig;
        const keys = Object.keys(roleDirective);
        let role;
        if (keys.length === 1 && keys[0] === "role") {
          role = roleDirective[keys[0]];
          if (typeof role === "string") role = [role];
          if (Array.isArray(role)) {
            role = role.map((val) => String(val));
          } else {
            throw new Error(
              "invalid hasRole args. role must be a String or an Array of Strings"
            );
          }
        } else {
          throw Error(
            "invalid hasRole args. must contain only a 'role argument"
          );
        }
        fieldConfig.resolve = hasRole(role)(resolve);
      }
      return fieldConfig;
    },
  });
};

export const applyDirectiveTransformers = (schema) => {
  return authDirectiveTransformer(
    roleDirectiveTransformer(permissionDirectiveTransformer(schema))
  );
};
