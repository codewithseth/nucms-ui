import { Button, FileInput, Label, Modal } from "flowbite-react";
import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";
import { uploadImage } from "../../setting/core/Request";

const UploadSliderModal = ({ show, handleClose, onUploadSuccess }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const tokenStore = localStorage.getItem("token");

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!selectedFile) {
      toast.error("No image selected.");
      setSubmitting(false);
      return;
    }

    setSubmitting(true);

    const uploadPromise = new Promise(async (resolve, reject) => {
      try {
        const uploadResponse = await uploadImage(tokenStore, selectedFile);
        resolve(uploadResponse.data);
      } catch (error) {
        reject(error);
      }
    });

    toast.promise(uploadPromise, {
      loading: "Uploading image...",
      success: "Image has been uploaded successfully!",
      error: "Failed to upload image. Please try again.",
    });

    uploadPromise
      .then(() => {
        resetForm();
        setPreviewUrl(null);
        setSelectedFile(null);
        handleClose();
        onUploadSuccess();
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

  useEffect(() => {
    if (!show) {
      setSelectedFile(null);
      setPreviewUrl(null);
    }
  }, [show]);

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
      {({ isSubmitting, handleSubmit }) => (
        <Modal show={show} onClose={handleClose}>
          <Modal.Header>Upload Slider</Modal.Header>
          <Modal.Body>
            <div className="space-y-1">
              <div>
                <Label>Image</Label>
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
                            SVG, PNG, JPG or GIF (MAX. 970x400px)
                          </p>
                        </>
                      ) : (
                        <img
                          src={previewUrl}
                          alt="Preview"
                          className="rounded-md object-cover"
                          style={{ width: 700, height: 258 }}
                        />
                      )}
                    </div>
                    <FileInput id="dropzone-file" className="hidden" onChange={handleFileChange} />
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
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-end">
            <Button disabled={isSubmitting} onClick={handleSubmit}>
              Upload
            </Button>
            <Button color="gray" onClick={handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Formik>
  );
};

export default UploadSliderModal;
