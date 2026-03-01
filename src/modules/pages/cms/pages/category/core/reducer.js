import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: false,
    categories: [],
    categoriesPub: [],
    parentCategories: [],
    totalPages: 0,
    params: {
      q: "",
      size: 10,
      page: 0,
      sort: "name,desc",
    },
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setCategoriesPub: (state, action) => {
      state.categoriesPub = action.payload.categoriesPub;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setParentCategories: (state, action) => {
      state.parentCategories = action.payload;
      state.loading = false;
    },
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
  },
});

export const { setLoading, setCategories, setCategoriesPub, setParentCategories, setParams } = categorySlice.actions;
export default categorySlice.reducer;
