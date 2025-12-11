import axios from "axios";

const BASAE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
  baseURL: BASAE_URL,
});

export default api;
