import { getItem } from "@/lib/localStorage";
import axios from "axios";
import { BASEURL } from "./endPoints";
const instance = axios.create({
  baseURL: BASEURL,
});

instance.interceptors.request.use(
  function (config) {
    // Add Authorization header if token exists in localStorage
    const token = getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// // Add a response interceptor
// instance.interceptors.response.use(
//   function (response) {
//     // Return the response if status is not in the 400 or 500 range
//     return response;
//   },
//   function (error) {
//     // Show an alert for errors in the 400 or 500 range
//     if (
//       error.response &&
//       error.response.status >= 400 &&
//       error.response.status < 600
//     ) {
//       toast.error(
//         `Error: ${error.response.status} - ${error.response.data.message}`
//       );
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
