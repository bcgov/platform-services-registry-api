import session from "express-session";
import Keycloak from ("keycloak-connect");

function configureKeycloak(app, graphqlPath) {

  const keycloakConfig = {
    realm: process.env.AUTH_RELM,
    "auth-server-url": process.env.AUTH_SERVER_URL,
    "ssl-required": "external",
    resource: process.env.AUTH_RESOURCE,
    "verify-token-audience": true,
    credentials: {
      secret: process.env.AUTH_SECRET,
    },
    "use-resource-role-mappings": true,
    "confidential-port": 0,
    "policy-enforcer": {},
  };

  const memoryStore = new session.MemoryStore();

  app.use(
    session({
      secret:
        process.env.SESSION_SECRET_STRING || "this should be a long secret",
      resave: false,
      saveUninitialized: true,
      store: memoryStore,
    })
  );

  const keycloak = new Keycloak(
    {
      store: memoryStore,
    },
    keycloakConfig
  );

  // Install general keycloak middleware
  app.use(
    keycloak.middleware({
      admin: graphqlPath,
    })
  );

  // Protect the main route for all graphql services
  // Disable unauthenticated access
  app.use(graphqlPath, keycloak.middleware());

  return { keycloak };
}

module.exports = {
  configureKeycloak,
};
