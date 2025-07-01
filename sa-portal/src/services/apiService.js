import axios from "axios";
//is api base url not present then use http://localhost:1337
const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL + "/api" || "http://localhost:1337/api";

export default async function sendApiRequest(
  path,
  method = "GET",
  payload = null
) {
  try {
    console.log(API_BASE_URL + path);
    const response = await axios.request({
      baseURL: API_BASE_URL,
      url: path,
      method,
      data: payload,
    });

    const data = await response.data;

    return data;
  } catch (error) {
    console.error("[ApiService] Error:", error);
    throw new Error(error);
  }
}
