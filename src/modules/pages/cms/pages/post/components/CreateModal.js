import React, { useEffect, useState } from "react";
import { Button, FileInput, Label, Modal } from "flowbite-react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import usePost from "../core/action";
import InputForm from "../../../../../../_timouy/helpers/form/InputForm";
import CustomSelect from "../../../../../../_timouy/helpers/form/CustomSelect";
import { useSelector } from "react-redux";
import useCategory from "../../category/core/action";
import { uploadImage } from "../../setting/core/Request";
import CKEditorField from "../../../../../../_timouy/components/CkEditor";
import { toast } from "sonner";

const CreatePostModal = ({ show, handleClose }) => {
    const [previewUrl, setPreviewUrl] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    const { categories } = useSelector((state) => state.category);
    const { getCategories } = useCategory();
    const tokenStore = localStorage.getItem("token");

    const initialValues = {
        title: "",
        content: "",
        categoryId: null,
    };

    const { createPost } = usePost();

    useEffect(() => {
        getCategories();
        // eslint-disable-next-line
    }, []);

    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Required"),
        categoryId: Yup.number().required("Required"),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        const postPromise = new Promise(async (resolve, reject) => {
            try {
                let imageUrl = null;

                if (selectedFile) {
                    const uploadResponse = await uploadImage(tokenStore, selectedFile);
                    imageUrl = uploadResponse.data;
                }

                const postData = {
                    ...values,
                    image: imageUrl,
                };
                await createPost(postData);
                resolve(postData);
            } catch (error) {
                reject(error);
            }
        });

        toast.promise(postPromise, {
            loading: 'Please wait...',
            success: (data) => `${data.title} post has been created successfully!`,
            error: 'Failed to create post. Please try again.',
        });

        postPromise
            .then(() => {
                handleClose();
                resetForm({});
                setPreviewUrl(null);
                setSelectedFile(null);
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
    };

    return (
        <Formik
            initialValues={{ ...initialValues }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            {({ isSubmitting }) => (
                <Modal show={show} onClose={handleClose}>
                    <Modal.Header>New Post</Modal.Header>
                    <Modal.Body>
                        <Form>
                            <div className="space-y-1">
                                <CustomSelect
                                    label="Content"
                                    name="categoryId"
                                    placeholder="Please select a content"
                                    required
                                >
                                    <option value="">Please select a content</option>
                                    {categories.map((category) => (
                                        <option key={category.id} value={category.id}>
                                            {category.name}
                                        </option>
                                    ))}
                                </CustomSelect>
                                <InputForm
                                    label="Title"
                                    name="title"
                                    type="text"
                                    placeholder="Post title"
                                    required
                                />
                                <div className="mt-2">
                                    <Label>Thumbnail</Label>
                                    <div className="flex w-full items-center justify-center mt-1">
                                        <Label
                                            htmlFor="dropzone-file"
                                            className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                        >
                                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                                {!previewUrl ? (
                                                    <>
                                                        <svg
                                                            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                                                            aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 20 16"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                            />
                                                        </svg>
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                            <span className="font-semibold">Click to upload</span> or drag and drop
                                                        </p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                                            SVG, PNG, JPG or GIF (MAX. 800x400px)
                                                        </p>
                                                    </>
                                                ) : (
                                                    <img src={previewUrl} alt="Preview" className="rounded-md object-cover" style={{ width: 700, height: 258 }} />
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
                                <div>
                                    <Label htmlFor="content">Content</Label>
                                    <Field name="content" component={CKEditorField} />
                                </div>
                            </div>
                            <Modal.Footer className="justify-end">
                                <Button disabled={isSubmitting} type="submit">
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

export default CreatePostModal;
