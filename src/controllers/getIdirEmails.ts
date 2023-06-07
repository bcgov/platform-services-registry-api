import { callMsGraph, getAccessToken } from "../msal/index.js";

async function getIdirEmails(req, res) {
  const email = req.query.email;
  const url = `https://graph.microsoft.com/v1.0/users?$filter=startswith(mail,'${email}')&$orderby=userPrincipalName&$count=true&$top=25`;

  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return res.status(401).json([]);
    }

    const response = await callMsGraph(url, accessToken);
    const data = await response.json();

    return res.json(data.value);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error fetching users" });
  }
}

export default getIdirEmails;
