import axios from "axios";

const reqCategories = (id, params) => {
  return axios.get(`/api/v1/categories?userID=${id}`, {
    params: params,
  });
};

const reqParentCategories = (params) => {
  return axios.get("/api/v1/categories/parent", {
    params: params,
  });
};

const reqCreateCategory = (categoryData) => {
  return axios.post("/api/v1/categories", categoryData);
};

const reqEditCategory = (id, newCategory) => {
  return axios.put(`/api/v1/categories/${id}`, newCategory);
};

const reqDeleteCategory = (id) => {
  return axios.delete(`/api/v1/categories/${id}`);
};

export { reqCategories, reqParentCategories, reqCreateCategory, reqEditCategory, reqDeleteCategory };
