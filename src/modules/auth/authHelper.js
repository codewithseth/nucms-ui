import axios from "axios";

const setUpAxios = () => {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
      }
      return Promise.reject(error);
    },
  );
};

export { setUpAxios };
