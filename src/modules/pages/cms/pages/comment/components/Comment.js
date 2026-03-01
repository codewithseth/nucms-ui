import { Link } from "react-router-dom";
import TableBody from "../../comment/components/TableBody";
import useComment from "../core/action";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import no_comment from "../../../../../../_timouy/assets/images/no-comment.png";
import AlertDelete from "../../../../../../_timouy/helpers/alert/AlertDelete";
import { reqDeleteComment } from "../core/request";
import { toast } from "sonner";
import Loader from "../../../../../../_timouy/components/Loader";

export const Comment = () => {
    const { comments, loading } = useSelector((state) => state.comment);
    const { getComments } = useComment();
    const [modals, setModals] = useState({
        showDeleteModal: false,
    });
    const [selectedComment, setSelectedComment] = useState(null);

    const toggleModal = (modalName, comment = null) => {
        setSelectedComment(comment);
        setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    useEffect(() => {
        getComments();
        // eslint-disable-next-line
    }, []);

    const confirmDelete = async () => {
        if (!selectedComment) return;
        try {
            await reqDeleteComment(selectedComment.id);
            toggleModal("showDeleteModal");
            toast.success("Comment deleted successfully")
            getComments();
        } catch (error) {
            console.error("Error deleting comment:", error);
        }
    };

    const allComments = comments.flatMap((cmt) => cmt.comments);

    const renderedComments = comments.map((cmt) =>
        cmt.comments.map((comment) => {
            const formattedDate = moment(comment.createdAt).format('MMMM DD, YYYY hh:mm A');
            return (
                <TableBody
                    key={comment.id}
                    user={comment.author}
                    date={formattedDate}
                    title={cmt.title}
                    comment={comment.text}
                    status={comment.status}
                    handleDelete={() => toggleModal("showDeleteModal", comment)}
                />
            );
        })
    );

    return (
        <>
            <div className="cms-post overflow-x-auto">
                <div className="mb-5">
                    <h1 className="font-semibold">Comment</h1>
                    <h1>View, reply to, and manage all the comments across your site.</h1>
                </div>
                <div className="p-4 bg-gray-50 mt-5 mb-2">
                    <div className="w-1/2 flex justify-between items-center">
                        <Link to="/all">All</Link>
                        <Link to="/approved">Approved</Link>
                        <Link to="/spam">Spam</Link>
                        <Link to="/trash">Trash</Link>
                    </div>
                </div>
                {loading ? (
                    <div className="text-center"><Loader /></div>
                ) : allComments.length > 0 ? (
                    <div>{renderedComments}</div>
                ) : (
                    <div className="flex flex-col justify-center text-center items-center mt-20">
                        <img src={no_comment} className="w-24" alt="No comments" />
                        <div className="font-semibold mt-2 text-xl">No comments.</div>
                    </div>
                )}

            </div>
            <AlertDelete
                title={`Are you sure you want to delete this comment?`}
                openModal={modals.showDeleteModal}
                closeModal={() => toggleModal("showDeleteModal")}
                confirmDelete={confirmDelete}
            />
        </>
    );
};
