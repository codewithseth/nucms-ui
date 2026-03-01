import React, { useState } from "react";
import { Button, FileInput, Label, Modal } from "flowbite-react";
import { Formik, Form, Field } from "formik";
import usePost from "../core/action";
import InputForm from "../../../../../../_timouy/helpers/form/InputForm";
import CustomSelect from "../../../../../../_timouy/helpers/form/CustomSelect";
import { useSelector } from "react-redux";
import CKEditorField from "../../../../../../_timouy/components/CkEditor";
import { uploadImage } from "../../setting/core/Request";
import NotFound from "../../../../../../_timouy/assets/images/place-holder/no-thumbnail.jpg";

const EditPostModal = ({ show, handleClose, post }) => {
    const url = process.env.REACT_APP_IMAGE_URL;
    const [previewUrl, setPreviewUrl] = useState(post?.image ? url + post.image : null);
    const [selectedFile, setSelectedFile] = useState(null);

    const { categories } = useSelector((state) => state.category);
    const initialValues = {
        title: post?.title || "",
        content: post?.content || "",
        categoryId: post?.categoryId || "",
        image: post?.image || "",
    };

    const { editPost } = usePost();

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();
            setSelectedFile(e.target.files[0]);
            reader.onload = () => setPreviewUrl(reader.result);
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        let imageUrl = post?.image ? post.image : previewUrl;

        if (selectedFile) {
            try {
                const uploadResponse = await uploadImage(localStorage.getItem("token"), selectedFile);
                imageUrl = uploadResponse.data;
            } catch (error) {
                console.error("Error uploading image:", error);
            }
        }

        const postData = {
            ...values,
            id: post.id,
            image: imageUrl || "",
        };

        try {
            await editPost(postData);
            handleClose();
        } catch (error) {
            console.error("Error updating post:", error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <Modal show={show} onClose={handleClose}>
                    <Modal.Header>Edit Post</Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="space-y-1">
                                {/* CustomSelect for category */}
                                <CustomSelect
                                    label="Content"
                                    name="categoryId"
                                    placeholder="Please select a content"
                                >
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </CustomSelect>

                                {/* InputForm for title */}
                                <InputForm
                                    label="Title"
                                    name="title"
                                    type="text"
                                    placeholder="Title Name"
                                />

                                {/* File input for thumbnail */}
                                <div className="mt-2">
                                    <Label>Thumbnail</Label>
                                    <div className="flex w-full items-center justify-center mt-1">
                                        <Label
                                            htmlFor="dropzone-file"
                                            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                                {previewUrl ? (
                                                    <img
                                                        src={previewUrl}
                                                        alt="Preview"
                                                        className="rounded-md object-cover"
                                                        style={{ width: 700, height: 258 }}
                                                    />
                                                ) : (
                                                    <img
                                                        src={post?.image ? url + post.image : NotFound}
                                                        alt="Profile Avatar"
                                                        className="rounded-md object-cover"
                                                        style={{ width: 700, height: 258 }}
                                                    />
                                                )}
                                            </div>
                                            <FileInput
                                                id="dropzone-file"
                                                className="hidden"
                                                onChange={handleFileChange}
                                            />
                                        </Label>
                                    </div>
                                    {previewUrl && (
                                        <div className="mt-2 flex justify-end">
                                            <Button color="red" onClick={handleRemoveImage}>
                                                Remove Image
                                            </Button>
                                        </div>
                                    )}
                                </div>

                                {/* CKEditorField for content */}
                                <div>
                                    <Label htmlFor="content">Content</Label>
                                    <Field name="content" component={CKEditorField} />
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

export default EditPostModal;
