import axios from "axios"

const reqLogin = ({ username, password }) => {
    return axios.post("/api/v1/users/login", null, {
        auth: {
            username,
            password,
        }
    })
}

const reqRegister = ({ username, password, email, enabled = true, roles = "USER" }) => {
    return axios.post("/api/v1/auth/register", {
        username,
        email,
        password,
        enabled,
        roles
    });
}

//get code
const reqEmailVerify = (email) => {
    return axios.post(`/api/v1/auth/verify?email=${email}`);
};

//verify code
const reqCodeVerify = (email, verifiedCode) => {
    return axios.post(`/api/v1/auth/check-verify`, {
        email,
        verifiedCode,
    });
};

const reqForgotPassword = (email) => {
    return axios.post(`/api/v1/auth/forgot-password?email=${email}`)
}

const reqResetPassword = (token, newPassword) => {
    return axios.put(`/api/v1/auth/reset-password?token=${token}&password=${newPassword}`)
}

export {
    reqLogin,
    reqRegister,
    reqEmailVerify,
    reqCodeVerify,
    reqForgotPassword,
    reqResetPassword
}