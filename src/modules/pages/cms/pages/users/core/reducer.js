import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    user: {},
    info: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    setUserDetail: (state, action) => {
      state.user = action.payload;
    },
    setInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});
export const { setUser, setUserDetail, setInfo } = userSlice.actions;
export default userSlice.reducer;
