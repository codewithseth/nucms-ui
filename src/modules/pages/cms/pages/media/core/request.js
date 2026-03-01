import axios from "axios";

const reqImages = (id) => {
  return axios.get(`/api/v1/files/ddkh/user/${id}`);
};

const reqDeleteImage = (file_id) => {
  return axios.delete(`/api/v1/files/ddkh/${file_id}`);
};

const reqAddSlideShow = (slide_id) => {
  return axios.patch(`/api/v1/media/${slide_id}`);
};

const reqUserSlideShow = (id) => {
  return axios.get(`/api/v1/media/user/${id}`);
};

export { reqImages, reqDeleteImage, reqAddSlideShow, reqUserSlideShow };
