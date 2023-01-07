const req = {
  kauth: {
    grant: {
      access_token: {
        isExpired: () => {
          return false;
        },
        hasRole: () => true,
        token: "abc",
        content: {
          email: "oamar.kanji@gov.bc.ca",
          resource_access: {
            "registry-api": {
              roles: ["admin"]
            } 
          },
          given_name: "Oamar",
          family_name: "Kanji"
        }
      }
    }
  }
};

export default req;
