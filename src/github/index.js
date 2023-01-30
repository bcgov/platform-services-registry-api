import { createAppAuth } from "@octokit/auth";
import { Octokit } from "@octokit/core";

// Auth documentation: https://github.com/octokit/octokit.js#authentication
// Install an app on a GitHub organization: https://github.com/settings/apps

async function inviteUsersToGithubOrgs(users) {
  const appOctokit = new Octokit({
    authStrategy: createAppAuth,
    auth: {
      appId: process.env.GITHUB_APP_ID,
      privateKey: process.env.GITHUB_PRIVATE_KEY,
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  });

  const getInstallations = await appOctokit.request(
    "GET /app/installations{?per_page,page,since,outdated}",
    {}
  );

  const installations = getInstallations.data;

  for (let installation of installations) {
    const installationOctokit = new Octokit({
      authStrategy: createAppAuth,
      auth: {
        appId: process.env.GITHUB_APP_ID,
        privateKey: process.env.GITHUB_PRIVATE_KEY,
        installationId: installation.id,
      },
    });

    for (let githubUserName of users) {
      try {
        const user = await installationOctokit.request(
          "GET /users/{username}",
          {
            username: githubUserName,
          }
        );

        await installationOctokit.request("POST /orgs/{org}/invitations", {
          org: installation.account.login,
          invitee_id: user.data.id,
          role: "direct_member",
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default inviteUsersToGithubOrgs;
