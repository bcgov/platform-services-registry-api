import { callMsGraph, getAccessToken } from "../msal/index.js";

async function getUserPhotoByEmail(req, res) {
  const email = req.query.email;
  const url = `https://graph.microsoft.com/v1.0/users/${email}/photo/$value`;

  let imageUrl;

  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return null;
    }

    const response = await callMsGraph(url, accessToken);

    if (response.ok) {
      const buffer = await response.buffer();
      const base64Image = `data:image/jpeg;base64,${buffer.toString("base64")}`;
      imageUrl = base64Image;
    }
  } catch (error) {
    console.error(error);
  }

  return imageUrl;
}

export default getUserPhotoByEmail;

// export async function getUserPhotoByEmail(req, res) {
//   const email = req.query.email;
//   const url = `https://graph.microsoft.com/v1.0/users/${email}/photo/$value`;

//   let imageUrl;

//   try {
//     const accessToken = await getAccessToken();

//     if (!accessToken) {
//       return null;
//     }

//     const response = await callMsGraph(url, accessToken);

//     if (response.ok) {
//       const data = await response.blob();

//       imageUrl = URL.createObjectURL(data);
//     }
//   } catch (error) {
//     console.error(error);
//   }

//   return imageUrl;
// }
