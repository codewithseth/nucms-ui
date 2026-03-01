import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    token: localStorage.getItem("token"),
    canAccessVerifyEmail: false,
    loading: false,
    loginError: null,
    registerError: null,
    rememberMe: localStorage.getItem("rememberMe") === 'true',
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload));
        },
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
        },
        setCanAccessVerifyEmail: (state, action) => {
            state.canAccessVerifyEmail = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setLoginError: (state, action) => {
            state.loginError = action.payload;
        },
        clearLoginError: (state) => {
            state.loginError = null;
        },
        setRegisterError: (state, action) => {
            state.registerError = action.payload;
        },
        clearRegisterError: (state) => {
            state.registerError = null;
        },
        setRememberMe: (state, action) => {
            state.rememberMe = action.payload;
            localStorage.setItem("rememberMe", action.payload);
        },
        clearUserData: (state) => {
            state.user = null;
            state.token = null;
            state.rememberMe = false;
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            localStorage.removeItem("rememberMe");
        },
    },
});

export const {
    setUser,
    setToken,
    setCanAccessVerifyEmail,
    setLoading,
    setLoginError,
    clearLoginError,
    setRegisterError,
    clearRegisterError,
    setRememberMe,
    clearUserData,
} = authSlice.actions;

export default authSlice.reducer;
