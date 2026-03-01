import { createSlice } from "@reduxjs/toolkit";

const dsSlice = createSlice({
    name: "ds",
    initialState: {
        total: {},
    },
    reducers: {
        setTotal: (state, action) => {
            state.total = action.payload;
        }
    },
});
export const {
    setTotal,
} = dsSlice.actions;
export default dsSlice.reducer;
