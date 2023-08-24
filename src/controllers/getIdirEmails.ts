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

async function apiEndpoint(req, res) {
  const email = req.query.email;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const idir = await getIdirFromEmail(email);
    return res.json({ idir });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error getting IDIR from email' });
  }
}

export default apiEndpoint;
