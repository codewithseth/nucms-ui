import axios from "axios";

const reqDs = (userID) => {
  return axios.get(`/api/v1/ds/${userID}/graph`);
};

export { reqDs };
