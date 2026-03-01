import React from "react";
import { Button, Modal } from "flowbite-react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import useCategory from "../core/action";
import InputForm from "../../../../../../_timouy/helpers/form/InputForm";

const EditModal = ({ show, handleClose, category }) => {
    const initialValues = {
        name: category?.name || "",
        khName: category?.khName || "",
        description: category?.description || "",
    };

    const { editCategory } = useCategory();

    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        const categoryData = {
            ...values,
            id: category.id,
        };

        try {
            await editCategory(categoryData);
            handleClose();
        } catch (error) {
            console.error("Error updating category:", error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <Modal show={show} onClose={handleClose}>
                    <Modal.Header>Edit Category</Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="space-y-2">
                                <div>
                                    <InputForm
                                        label="Category"
                                        name="name"
                                        type="text"
                                        placeholder="Category Name"
                                    />
                                </div>
                                <div>
                                    <InputForm
                                        label="Category-kh"
                                        name="khName"
                                        type="text"
                                        placeholder="Category Name"
                                    />
                                </div>
                                <div>
                                    <InputForm
                                        label="Description"
                                        name="description"
                                        type="text"
                                        placeholder="Description"
                                    />
                                </div>
                            </div>
                            <Modal.Footer className="justify-end">
                                <Button type="submit" disabled={isSubmitting}>
                                    Save
                                </Button>
                                <Button color="gray" onClick={handleClose}>
                                    Cancel
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}
        </Formik>
    );
};

export default EditModal;
