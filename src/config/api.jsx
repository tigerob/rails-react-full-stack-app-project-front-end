import axios from "axios";

const miaMusicAPI = axios.create({
  baseURL: "https://mia-music-studios-api.herokuapp.com/",
});

miaMusicAPI.interceptors.request.use((req) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    req.headers["Authorization"] = `Bearer ${token}`;
  }
  return req;
});

export default miaMusicAPI;
