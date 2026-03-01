import { Button } from "flowbite-react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { ReactComponent as Loading } from "../../../_timouy/assets/svg/loading.svg";
import InputForm from "../../../_timouy/helpers/form/InputForm";
import logo from "../../../_timouy/assets/svg/logo.svg";
import { Link } from "react-router-dom";
import auth from "../../../_timouy/assets/svg/auth.svg";
import { reqForgotPassword } from "../core/request";
import { toast } from "sonner";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("The email field is required."),
  });
  console.log(initialValues);
  const handleSubmit = async (values) => {
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await reqForgotPassword(values.email);
      if (response.status === 200) {
        toast.success("Please check your email.");
        localStorage.setItem("reset", response.data.data);
      } else {
        toast.error("Something went wrong, please try again.");
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Form>
        <div className="font-[sans-serif]">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
              <div className="md:h-full bg-[#F0F6FF] rounded-xl lg:p-7 p-8">
                <Link to="/">
                  <img src={logo} alt="logo" className="w-12 mb-2" />
                  <p className="font-semibold text-lg">Welcome to Timouy</p>
                  <p>Create your own website.</p>
                  <img src={auth} className="object-contain w-96 m-auto hidden md:block" alt="verify" />
                </Link>
              </div>
              <div className="md:max-w-md w-full px-4 py-4 m-auto">
                <div>
                  <div className="mb-12">
                    <h3 className="text-gray-800 text-3xl font-extrabold">Forgot Password</h3>
                    <p className="text-xs text-slate-500 mt-4">
                      Remember the password?
                      <Link to="/login" className="uppercase text-[#2596BE] ms-1">
                        Sign in now
                      </Link>
                    </p>
                  </div>
                  <div className="w-full">
                    <InputForm
                      label="Email"
                      name="email"
                      type="text"
                      placeholder="Enter Your Email"
                      disabled={loading}
                    />
                  </div>
                </div>

                {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-sm mt-2">{successMessage}</p>}

                {loading ? (
                  <Button disabled type="button" className="w-full">
                    <Loading /> Loading...
                  </Button>
                ) : (
                  <Button type="submit" className="w-full">
                    Send
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default ForgotPassword;
