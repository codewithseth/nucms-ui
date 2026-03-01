import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    images: [],
    slideShow: []
};

const mediaSlice = createSlice({
    name: 'media',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setImages: (state, action) => {
            state.images = action.payload;
            state.loading = false;
        },
        setSlideShow: (state, action) => {
            state.slideShow = action.payload;
            state.loading = false;
        },
        removeImage: (state, action) => {
            state.images = state.images.filter(image => image.fileName !== action.payload);
        }
    },
});

export const { setImages, setLoading, removeImage, setSlideShow } = mediaSlice.actions;
export default mediaSlice.reducer;
