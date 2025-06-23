import axios from "axios";

const API_BASE_URL = import.meta.env.REACT_APP_API_BASE_URL;

export default async function useApi(path, method = "GET", payload = null) {
  try {
    const response = await axios.request({
      baseURL: API_BASE_URL,
      url: path,
      method,
      data: payload,
    });

    const data = await response.data;

    return data;
  } catch (error) {
    console.error("[useApi] Error:", error);
    throw new Error(error);
  }
}
