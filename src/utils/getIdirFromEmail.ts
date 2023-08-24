import { callMsGraph, getAccessToken } from '../msal/index.js';

export async function getIdirFromEmail(email) {
  const url = `https://graph.microsoft.com/v1.0/users?$filter=startswith(mail,'${email}')&$orderby=userPrincipalName&$count=true&$top=25`;

  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      throw Error('Not able to get access token');
    }

    const response = await callMsGraph(url, accessToken);
    const data = await response.json();

    return data.value;
  } catch (error) {
    console.error(error);
    throw Error('Error getting IDIR from email');
  }
}
