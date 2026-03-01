import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import useCategory from "../core/action";
import CreateCategoryModal from "./CreateModal";
import EditModal from "./EditModal";
import AlertDelete from "../../../../../../_timouy/helpers/alert/AlertDelete";
import CustomSearch from "../../../../../../_timouy/helpers/form/CustomSearch";
import MyPagination from "../../../../../../_timouy/helpers/components/Pagination";
import Loader from "../../../../../../_timouy/components/Loader";

export const Category = () => {
    const { getCategories, deleteCategory: reqDeleteCategory, handlePage, handleFilter, handleSearch } = useCategory();
    const { categories, params, totalPages, loading } = useSelector(state => state.category);
    const { page } = params;

    const [modals, setModals] = useState({
        showModal: false,
        showEditModal: false,
        showDeleteModal: false,
    });
    const [selectedCategory, setSelectedCategory] = useState(null);

    const toggleModal = (modalName, category = null) => {
        setSelectedCategory(category);
        setModals((prev) => ({ ...prev, [modalName]: !prev[modalName] }));
    };

    const confirmDelete = async () => {
        try {
            await reqDeleteCategory(selectedCategory.id);
            toggleModal("showDeleteModal");
            getCategories();
        } catch (error) {
            console.error("Error deleting category:", error);
        }
    };

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line
    }, [params]);

    const renderedCategory = categories
        .filter((category) => !category.parent)
        .map((parentCategory) => (
            <React.Fragment key={parentCategory.id}>
                <TableBody
                    title={parentCategory.name}
                    date={parentCategory.createdAt}
                    handleEdit={() => toggleModal("showEditModal", parentCategory)}
                    handleDelete={() => toggleModal("showDeleteModal", parentCategory)}
                />
                {categories
                    .filter((category) => category.parent === parentCategory.id)
                    .map((childCategory) => (
                        <TableBody
                            key={childCategory.id}
                            title={`-> ${childCategory.name}`}
                            date={childCategory.createdAt}
                            handleEdit={() => toggleModal("showEditModal", childCategory)}
                            handleDelete={() => toggleModal("showDeleteModal", childCategory)}
                        />
                    ))}
            </React.Fragment>
        ));

    return (
        <div className="cms-category overflow-x-auto mb-5">
            <h1 className="font-semibold">Category</h1>
            <h1>Create, edit, and manage the categories on your site.</h1>
            <div className="flex justify-between items-center p-4 bg-gray-50 mt-5 mb-2">
                <CustomSearch placeholder="Search title" params={params} onChange={(e) => handleSearch(e.target.value)} />
            </div>
            <div className="overflow-x-auto">
                <Table className="min-w-full divide-y divide-gray-200">
                    <TableHead handleOpenModal={() => toggleModal("showModal")} />
                    {loading ? (
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell colSpan="4" className="text-center font-semibold py-4">
                                    <div className="flex justify-center items-center">
                                        <Loader />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ) : categories.length > 0 ? (
                        <Table.Body className="divide-y">{renderedCategory}</Table.Body>
                    ) : (
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell colSpan="4" className="text-center font-semibold py-4">
                                    No categories found.
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    )}
                </Table>
            </div>
            <MyPagination
                currentPage={page + 1}
                totalPages={totalPages}
                onPageChange={handlePage}
                params={params}
                handleFilter={handleFilter}
            />
            <CreateCategoryModal
                show={modals.showModal}
                handleClose={() => toggleModal("showModal")}
            />
            <EditModal
                show={modals.showEditModal}
                handleClose={() => toggleModal("showEditModal")}
                category={selectedCategory}
            />
            <AlertDelete
                title={`Are you sure you want to delete the category "${selectedCategory?.name}"?`}
                openModal={modals.showDeleteModal}
                closeModal={() => toggleModal("showDeleteModal")}
                confirmDelete={confirmDelete}
            />
        </div>
    );
};
