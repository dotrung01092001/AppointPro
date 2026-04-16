import axios from "axios";
import env from "../../app/config/env";

export const axiosInstance = axios.create({
  baseURL: env.API_BASE_URL,
});
