import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Table } from "flowbite-react";
import { useSelector } from "react-redux";
import usePost from "../core/action";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import CreatePostModal from "./CreateModal";
import EditPostModal from "./EditModal";
import AlertDelete from "../../../../../../_timouy/helpers/alert/AlertDelete";
import CustomSearch from "../../../../../../_timouy/helpers/form/CustomSearch";
import Loader from "../../../../../../_timouy/components/Loader";
import MyPagination from "../../../../../../_timouy/helpers/components/Pagination";

export const Post = () => {
  const { getPosts, deletePost: reqDeletePost, handlePage, handleFilter, handleSearch } = usePost();
  const { posts, params, loading } = useSelector((state) => state.post);
  const { page, totalPages } = params;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [modals, setModals] = useState({
    showModal: false,
    showEditModal: false,
    showDeleteModal: false,
  });
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleModal = (modalName, post = null) => {
    setSelectedPost(post);
    setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
  };
  const confirmDelete = async () => {
    try {
      await reqDeletePost(selectedPost.id);
      toggleModal("showDeleteModal");
      getPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleChange = (value) => {
    handlePage(value);
  };

  useEffect(() => {
    getPosts();
  }, [params]);

  const filteredPosts = posts.filter((post) => {
    const postDate = new Date(post.createdAt);
    return (!startDate || postDate >= startDate) && (!endDate || postDate <= endDate);
  });

  const BASE_URL = process.env.REACT_APP_IMAGE_URL;
  return (
    <div className="cms-post overflow-x-auto">
      <h1 className="font-semibold">Posts</h1>
      <p>Create, edit, and manage the posts on your site.</p>

      <div className="flex justify-between items-center p-4 bg-gray-50 mt-5 mb-2">
        <div className="flex items-center space-x-4">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Start Date"
            isClearable
            dateFormat="yyyy/MM/dd"
            className="border border-gray-300 rounded-md p-2"
          />
          <span className="text-gray-500">to</span>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="End Date"
            isClearable
            dateFormat="yyyy/MM/dd"
            className="border border-gray-300 rounded-md p-2"
          />
        </div>
        <CustomSearch placeholder="Search title" params={params} onChange={(e) => handleSearch(e.target.value)} />
      </div>
      <div className="overflow-x-auto">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHead handleOpenModal={() => toggleModal("showModal")} />
          {loading ? (
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan="4" className="text-center font-semibold">
                  <Loader />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          ) : filteredPosts.length ? (
            <TableBody
              posts={filteredPosts}
              handleEdit={(post) => toggleModal("showEditModal", post)}
              handleDelete={(post) => toggleModal("showDeleteModal", post)}
              url={BASE_URL}
            />
          ) : (
            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan="4" className="text-center font-semibold">
                  No posts found.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          )}
        </Table>
      </div>
      <MyPagination
        currentPage={page + 1}
        totalPages={totalPages}
        onPageChange={handleChange}
        params={params}
        handleFilter={handleFilter}
      />
      <CreatePostModal show={modals.showModal} handleClose={() => toggleModal("showModal")} />
      <EditPostModal show={modals.showEditModal} handleClose={() => toggleModal("showEditModal")} post={selectedPost} />
      <AlertDelete
        title={`Are you sure you want to delete the post "${selectedPost?.title}"?`}
        openModal={modals.showDeleteModal}
        closeModal={() => toggleModal("showDeleteModal")}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};
