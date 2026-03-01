import axios from "axios";

const reqComments = (id, params) => {
    return axios.get(`/api/v1/posts/comments?userID=${id}`,
        {
            params: params
        }
    )
}

const reqCommentsByPostID = (postID, params) => {
    return axios.get(`/api/v1/comments?postID=${postID}`,
        {
            params: params
        }
    );
}

const reqAddComment = (commentData) => {
    return axios.post(`/api/v1/comments`, commentData)
}

const reqEditComment = (commentID, payload) => {
    return axios.put(`/api/v1/comments/${commentID}`, payload)
}

const reqDeleteComment = (id) => {
    return axios.delete(`/api/v1/comments/${id}`)
}

export {
    reqComments,
    reqCommentsByPostID,
    reqAddComment,
    reqEditComment,
    reqDeleteComment
};