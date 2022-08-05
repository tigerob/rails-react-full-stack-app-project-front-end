import axios from "axios";

const miaMusicAPI = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

miaMusicAPI.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});

export default miaMusicAPI;
