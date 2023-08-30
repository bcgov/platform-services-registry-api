import { callMsGraph, getAccessToken } from "../msal/index.js";


async function getIdirUpn(id) {
  const url = `https://graph.microsoft.com/v1.0/users/${id}?$select=onPremisesSamAccountName`

  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      throw Error('Not able to get access token');
    }

    const response = await callMsGraph(url, accessToken);
    const data = await response.json();
    return data.onPremisesSamAccountName;
  } catch (error) {
    console.error(error);
    throw Error('Error getting IDIR and/or UPN from email');
  }
}
export default getIdirUpn;

