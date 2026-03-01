import axios from "axios";

const reqPosts = (id, params) => {
  return axios.get(`/api/v1/posts?userID=${id}`, {
    params: params,
  });
};

const reqPostByCategory = (id) => {
  return axios.get(`/api/v1/posts/category/${id}`);
};

const reqPostById = (id) => {
  return axios.get(`/api/v1/posts/${id}`);
};

const reqCreatePost = (postData) => {
  return axios.post("/api/v1/posts", postData);
};

const reqEditPost = (id, newPost) => {
  return axios.put(`/api/v1/posts/${id}`, newPost);
};

const reqDeletePost = (id) => {
  return axios.delete(`/api/v1/posts/${id}`);
};

const getDashboardData = (id) => {
  return axios.get(`/api/v1/ds/${id}/graph`);
};

export { reqPosts, reqPostByCategory, reqPostById, reqCreatePost, reqEditPost, reqDeletePost, getDashboardData };
