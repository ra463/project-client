import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:4000",
  // baseURL: "https://my-project.adaptable.app",
  baseURL: "https://project-server-brkp.onrender.com",
});

export default axiosInstance;
