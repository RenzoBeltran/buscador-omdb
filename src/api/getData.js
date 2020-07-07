import axios from "axios";

async function getData(url, params) {
  try {
    const response = await axios(url, { ...params });
    return response.data;
  } catch {
    console.log("Ocurrió un error");
  }
}

export default getData;
