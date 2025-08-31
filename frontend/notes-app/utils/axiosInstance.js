import axios from "axios";

const api = axios.create({
  baseURL: "http://backend:8000/api", // Docker service name!
});

export default api;
