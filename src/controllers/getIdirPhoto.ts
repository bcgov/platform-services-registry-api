import { callMsGraph, getAccessToken } from "../msal/index.js";

async function getUserPhotoByEmail(req, res) {
  const email = req.query.email;
  const url = `https://graph.microsoft.com/v1.0/users/${email}/photo/48x48/$value`;
  let imageUrl;

  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return null;
    }

    const response = await callMsGraph(url, accessToken, {
      "Content-Type": "image/jpeg"
    });

    if (response.ok) {
      const buffer = await response.buffer();
      const base64Image = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      imageUrl = base64Image;
      return res.json({ imageUrl }); // return added
    }

    return res.status(404).json({ error: "No photo found" }); // return added
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error }); // return added
  }
}

export default getUserPhotoByEmail;
