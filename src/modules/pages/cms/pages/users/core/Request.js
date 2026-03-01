import axios from "axios";

const reqUserInfo= () => {
    return axios.get(`/api/v1/auth/userInfo`)
}

// const reqUser = () => {
//     return axios.get("/api/v1/users")
// }

const reqUserDetail = (id) => {
    return axios.get(`/api/v1/users/${id}`)
}

const reqAddUser = (payload) => {
    return axios.post("/api/v1/users", payload)
}

const reqEditUser = (id, payload) => {
    return axios.put(`/api/v1/users/${id}`, payload)
}

const reqDeleteUser = (id) => {
    return axios.delete(`/api/v1/users/${id}`)
}

const changePassword = (id, payload) => {
    return axios.patch(`/api/v1/users/${id}/password`, payload)
}

export { reqAddUser, reqDeleteUser, reqEditUser, reqUserDetail, reqUserInfo, changePassword }