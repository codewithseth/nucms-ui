import { useDispatch, useSelector } from "react-redux";
import { reqAddComment, reqComments, reqCommentsByPostID } from "./request";
import { setComments, setCommentsByPostID, setLoading } from "./reducer";
import { toast } from "sonner";

const useComment = () => {
  const dispatch = useDispatch();
  const { params } = useSelector((state) => state.comment);
  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user ? user.id : null;

  const getComments = async () => {
    dispatch(setLoading(true));
    try {
      const res = await reqComments(userID, { ...params });
      dispatch(
        setComments({
          comments: res.data.data.content,
          totalPages: res.data.data.totalPages,
        }),
      );
    } catch (error) {
      console.error("Error fetching posts:", error);
      dispatch(setLoading(false));
    }
  };

  const getCommentsByPostID = async (postID) => {
    dispatch(setLoading(true));
    try {
      const res = await reqCommentsByPostID(postID, { ...params });
      dispatch(
        setCommentsByPostID({
          commentsByPostID: res.data.data.content,
          totalPages: res.data.data.totalPages,
        }),
      );
    } catch (error) {
      console.error("Error fetching posts:", error);
      dispatch(setLoading(false));
    }
  };

  const addComment = async (commentData) => {
    try {
      await reqAddComment(commentData);
      getComments();
    } catch (error) {
      console.error("Error creating Comment:", error);
      toast.error("Error creating comment");
      throw error;
    }
  };

  return {
    getComments,
    getCommentsByPostID,
    addComment,
  };
};

export default useComment;
