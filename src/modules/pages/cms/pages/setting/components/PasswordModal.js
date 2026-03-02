import React from "react";
import { Button } from "flowbite-react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import useUser from "../../users/core/action";
import { useNavigate } from "react-router-dom";
import InputPassword from "../../../../../../_timouy/helpers/form/InputPassword";

const UpdatePassword = ({ id }) => {
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const { changeUserPassword } = useUser();
  const navigate = useNavigate();

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string()
      .min(5, "Password is too short - should be 5 chars minimum.")
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    newPassword: Yup.string()
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const user = {
      ...values,
    };

    try {
      await changeUserPassword(id, user);
      // handleClose();
      resetForm();
      // localStorage.removeItem("token");
      // navigate("/login");
      // window.location.reload();
    } catch (error) {
      console.error("Current password is incorrect. Please try again.", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ ...initialValues, ...id }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ isSubmitting, setFieldValue, values }) => (
        // <Modal show={show} onClose={handleClose}>
        //   <Modal.Header>New Password</Modal.Header>
        //   <Modal.Body>
        <Form>
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-between gap-1">
              <div className="block w-full">
                <InputPassword label="Old Password" name="oldPassword" placeholder="Old Password" type="text" />
              </div>
              <div className="block w-full">
                <InputPassword label="New Password" name="newPassword" placeholder="New Password" type="text" />
              </div>
              <div className="block w-full">
                <InputPassword
                  label="Confirm New Password"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <Button color="light" pill type="submit" className="rounded-lg focus:ring-0 mt-4" disabled={isSubmitting}>
              Save password
            </Button>
          </div>
          {/* <Modal.Footer className="justify-end">
                <Button color="gray" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer> */}
        </Form>
        //   </Modal.Body>
        // </Modal>
      )}
    </Formik>
  );
};

export default UpdatePassword;
