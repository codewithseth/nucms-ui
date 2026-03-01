import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import no_avatar from "../../../_timouy/assets/images/pf.png";
import { useSelector } from 'react-redux';

// API request functions
const reqAddComment = async (commentData) => {
    try {
        const response = await axios.post(`/api/v1/comments`, commentData);
        return response.data;
    } catch (error) {
        console.error('Error adding comment:', error);
        throw error;
    }
};

const reqFetchComments = async (postID) => {
    try {
        const response = await axios.get(`/api/v1/comments`, { params: { postID } });
        return response.data;
    } catch (error) {
        console.error('Error fetching comments:', error);
        throw error;
    }
};

// Comment component
const Comment = ({ author, date, text }) => {
    return (
        <div className="p-2 bg-white rounded-lg shadow-md flex items-center space-x-4 mb-4">
            <img
                src={no_avatar}
                alt={author}
                className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1 ms-0">
                <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">{author}</h4>
                    <span className="text-sm text-gray-500">{date}</span>
                </div>
                <p className="mt-2 text-gray-700">{text}</p>
            </div>
        </div>
    );
};

// Comment Form component
const CommentForm = ({ onAddComment }) => {
    const [commentText, setCommentText] = useState('');
    const { user } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;

        const newComment = {
            text: commentText,
            author: user.email,
            postID: 1,
        };

        onAddComment(newComment);
        setCommentText('');
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <textarea
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-[#148ECE]"
                rows="3"
            ></textarea>
            <button
                type="submit"
                className="mt-2 px-4 py-2 bg-[#148ECE] text-white rounded-md hover:bg-[#148ECE]"
            >
                Post Comment
            </button>
        </form>
    );
};

// Main Comment Component
const CustomComment = ({ postID }) => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!postID) {
            console.warn("postID is missing");
            return;
        }

        const fetchComments = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await reqFetchComments(postID);
                setComments(response.data.content || []);
            } catch (error) {
                console.error("Error fetching comments:", error);
                setError('Failed to load comments.');
                setComments([]);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, [postID]);

    const addComment = async (commentData) => {
        try {
            const newComment = await reqAddComment({ ...commentData, postID });
            setComments((prevComments) => [
                { ...newComment, author: commentData.author, text: commentData.text },
                ...prevComments,
            ]);
        } catch (error) {
            console.error("Error creating comment:", error);
            setError('Failed to add comment.');
        }
    };

    return (
        <div className="max-w-xl">
            <CommentForm onAddComment={addComment} />
            {loading ? (
                <p>Loading comments...</p>
            ) : error ? (
                <p className="text-red-500">{error}</p>
            ) : comments.length > 0 ? (
                comments.map((comment) => {
                    const formattedDate = moment(comment.createdAt).format('MMMM DD, YYYY hh:mm A');
                    return (
                        <Comment
                            key={`${comment.id}-${formattedDate}`}
                            author={comment.author}
                            date={formattedDate}
                            text={comment.text}
                        />
                    );
                })
            ) : (
                <p className='mb-1'>No comments yet. Be the first to comment!</p>
            )}
        </div>
    );
};

export default CustomComment;
