import React, { useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import useCategory from "../core/action";
import InputForm from "../../../../../../_timouy/helpers/form/InputForm";
import CustomSelect from "../../../../../../_timouy/helpers/form/CustomSelect";
import { useSelector } from "react-redux";

const CreateCategoryModal = ({ show, handleClose }) => {
  const { parentCategories } = useSelector((state) => state.category);
  const { createCategory, getParentCategories } = useCategory();

  useEffect(() => {
    if (show) {
      getParentCategories();
    }
    // eslint-disable-next-line
  }, [show]);

  const initialValues = {
    name: "",
    khName: "",
    description: "",
    parent: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const categoryData = { ...values };

    try {
      await createCategory(categoryData);
      handleClose();
      resetForm({});
    } catch (error) {
      console.error("Error creating category:", error);
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
          <Modal.Header>New Category</Modal.Header>
          <Modal.Body>
            <Form>
              <div className="space-y-2">
                <div>
                  <CustomSelect label="Parent Category" name="parent" placeholder="Please select a parent category">
                    <option value="">Please select a parent category</option>
                    {parentCategories.map((parentCategory) => (
                      <option key={parentCategory.id} value={parentCategory.id}>
                        {parentCategory.name}
                      </option>
                    ))}
                  </CustomSelect>
                </div>
                <div>
                  <InputForm label="Category" name="name" type="text" placeholder="Category Name" required />
                </div>
                <div>
                  <InputForm label="Category-kh" name="khName" type="text" placeholder="Category Name kh" />
                </div>
                <div>
                  <InputForm label="Description" name="description" type="text" placeholder="Description" />
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

export default CreateCategoryModal;
