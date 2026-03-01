import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  comments: [],
  commentsByPostID: [],
  totalPages: 0,
  params: {
    size: 10,
    page: 0,
  },
};

const commentSlice = createSlice({
  name: "comment",
  initialState: initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setComments: (state, action) => {
      state.comments = action.payload.comments;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setCommentsByPostID: (state, action) => {
      state.commentsByPostID = action.payload.commentsByPostID;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
      state.loading = false;
    },
  },
});

export const { setComments, setCommentsByPostID, setLoading } = commentSlice.actions;
export default commentSlice.reducer;
