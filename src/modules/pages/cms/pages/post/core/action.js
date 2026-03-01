import { useDispatch, useSelector } from "react-redux";
import { reqPosts, reqCreatePost, reqDeletePost, reqEditPost, reqPostById, reqPostByCategory, getDashboardData } from "./request";
import { setDash, setLoading, setParams, setPostDetail, setPosts, setPostsByCategory, setPostsByCategoryPub, setPostsPub } from "./reducer";
import { toast } from "sonner";

const usePost = () => {
    const dispatch = useDispatch();
    const { params } = useSelector((state) => state.post);
    const user = JSON.parse(localStorage.getItem('user'));
    const userID = user ? user.id : null;

    const getPosts = async (reFetch = true) => {
        dispatch(setLoading(true));
        try {
            const res = await reqPosts(userID, { ...params });
            if (!reFetch) {
                res.data.data = [res.data.data]
            }
            dispatch(setPosts({
                posts: res.data.data.content,
                page: res.data.data.pageable.pageNumber,
                totalPages: res.data.data.totalPages,
                total: res.data.data.totalElements
            }));
        } catch (error) {
            console.error("Error fetching posts:", error);
            dispatch(setLoading(false));
        }
    };

    const getPostsPub = async (id) => {
        dispatch(setLoading(true));
        try {
            const res = await reqPosts(id, { ...params });
            dispatch(setPostsPub({
                postsPub: res.data.data.content,
                totalPages: res.data.data.totalPages
            }));
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    const getPostsByCategory = async (id) => {
        dispatch(setLoading(true));
        try {
            const res = await reqPostByCategory(id);
            dispatch(setPostsByCategory({
                postsByCategory: res.data.data,
            }));
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    const getPostsByCategoryPub = async (id) => {
        dispatch(setLoading(true));
        try {
            const res = await reqPostByCategory(id);
            dispatch(setPostsByCategoryPub({
                postsByCategory: res.data.data,
            }));
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    const getPostById = async (id) => {
        dispatch(setLoading(true));
        try {
            const res = await reqPostById(id);
            dispatch(setPostDetail(res.data.data));
        } catch (error) {
            console.error("Error fetching post by id:", error);
        } finally {
            dispatch(setLoading(false));
        }
    };


    const createPost = async (postData) => {
        try {
            await reqCreatePost(postData);
            getPosts();
        } catch (error) {
            console.error("Error creating category:", error);
            toast.error("Error creating post");
            throw error;
        }
    };

    const editPost = async (newPost) => {
        try {
            await reqEditPost(newPost.id, newPost);
            toast.success("Post updated successfully");
            getPosts();
        } catch (error) {
            console.error("Error updating post:", error);
            toast.error("Error updating post");
        }
    };

    const deletePost = async (id) => {
        return reqDeletePost(id)
            .then((res) => {
                toast.success("Post deleted successfully");
                getPosts();
            })
            .catch((error) => {
                toast.error("Failed to delete user")
            });
    }

    const handleFilter = (key, value) => {
        dispatch(setParams({ [key]: value }));
    };

    const handlePage = (page) => {
        dispatch(setParams({ page: page - 1 }));
    };

    const handleSearch = (text) => {
        dispatch(setParams({ page: 0, q: text }));
    };

    const getDashboard = async (reFetch = true) => {
        dispatch(setLoading(true));
        try {
            const res = await getDashboardData(userID, { ...params });
            if (!reFetch) {
                res.data.data = [res.data.data]
            }
            dispatch(setDash(res.data.data));
        } catch (error) {
            console.error("Error fetching data:", error);
            dispatch(setLoading(false));
        }
    };

    return {
        getPosts,
        getPostsPub,
        getPostsByCategory,
        getPostsByCategoryPub,
        getPostById,
        createPost,
        editPost,
        deletePost,
        handlePage,
        handleFilter,
        handleSearch,
        getDashboard
    };

};

export default usePost;
