import React from "react";
import { Button, Modal } from "flowbite-react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import InputForm from "../../../../../../_timouy/helpers/form/InputForm";
import useUser from "../core/action";
import { Label, ToggleSwitch } from "flowbite-react";
import { useState } from "react";

const EditModal = ({ show, handleClose, user }) => {
  const initialValues = {
    id: user?.id,
    username: user?.username,
    roles: user?.roles,
    enabled: user?.enabled,
  };

  const { editUser } = useUser();
  const [switch1, setSwitch1] = useState(initialValues.enabled);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required"),
    roles: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const userData = {
      ...values,
    };

    try {
      await editUser(userData.id, userData);
      handleClose();
      resetForm();
    } catch (error) {
      console.error("Error updating user:", error);
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
      {({ isSubmitting, setFieldValue }) => (
        <Modal show={show} onClose={handleClose}>
          <Modal.Header>Edit user</Modal.Header>
          <Modal.Body>
            <Form>
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="block w-full">
                    <InputForm label="Username" name="username" type="text" placeholder="Username" />
                  </div>
                  <div className="block w-full">
                    <InputForm label="Password" name="password" type="text" placeholder="Set a new password" />
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <div className="block w-full">
                    <InputForm label="Role" name="roles" type="text" placeholder="Role" />
                  </div>
                  <div className="block w-full">
                    <div className="block mb-3">
                      <Label>Status</Label>
                      <ToggleSwitch className="mt-2" checked={switch1} onChange={setSwitch1} />
                    </div>
                  </div>
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
