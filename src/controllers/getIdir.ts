import { callMsGraph, getAccessToken } from "../msal/index.js";


async function getIdir(req, res) {
  const id = req.query.id;
  const url = `https://graph.microsoft.com/v1.0/users/${id}?$select=onPremisesSamAccountName`

  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return res.status(401).json([]);
    }
    const response = await callMsGraph(url, accessToken);
    const data = await response.json();
    return res.json(data.onPremisesSamAccountName);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error fetching IDIR" });
  }
}

export default getIdir;

