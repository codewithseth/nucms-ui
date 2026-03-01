import { createSlice } from "@reduxjs/toolkit";

const settingSlice = createSlice({
  name: "setting",
  initialState: {
    loading: false,
    activity: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setActivity: (state, action) => {
      state.activity = action.payload;
      state.loading = false;
    },
  },
});
export const { setLoading, setActivity } = settingSlice.actions;
export default settingSlice.reducer;
