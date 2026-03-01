import axios from "axios";

const uploadImage = async (token, file) => {
  const formData = new FormData();
  const containerName = "ddkh";
  formData.append("file", file);
  formData.append("containerName", containerName);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`/api/v1/files/upload`, formData, config);
  return response.data;
};

const reqActivity = async (email) => {
  return await axios.get(`/api/v1/auth/active?email=${email}`);
};

export { uploadImage, reqActivity };
