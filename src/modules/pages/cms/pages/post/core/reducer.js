import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    loading: false,
    posts: [],
    postsPub: [],
    postsByCategory: [],
    postByCategoryPub: [],
    post: null,
    dash: {
      totalPost: 0,
      totalCategory: 0,
      totalMedia: 0,
      numberOfVisitor: 0,
    },
    params: {
      q: "",
      size: 10,
      page: 0,
      totalPages: 0,
      total: 0,
      sort: "title,asc",
    },
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
      state.params.page = action.payload.page;
      state.params.totalPages = action.payload.totalPages;
      state.params.total = action.payload.total;
      state.loading = false;
    },
    setPostsPub: (state, action) => {
      state.postsPub = action.payload.postsPub;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setPostsByCategory: (state, action) => {
      state.postsByCategory = action.payload.postsByCategory;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setPostsByCategoryPub: (state, action) => {
      state.postByCategoryPub = action.payload.postByCategoryPub;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setPostDetail: (state, action) => {
      state.post = action.payload;
      state.loading = false;
    },
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setDash: (state, action) => {
      state.dash = action.payload.dash;
      state.loading = false;
    },
  },
});
export const {
  setLoading,
  setPosts,
  setPostsPub,
  setPostsByCategory,
  setPostsByCategoryPub,
  setPostDetail,
  setParams,
  setDash,
} = postSlice.actions;
export default postSlice.reducer;
