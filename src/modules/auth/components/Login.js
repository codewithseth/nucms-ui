import React from "react";
import InputForm from "../../../_timouy/helpers/form/InputForm";
import { useSelector, useDispatch } from "react-redux";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import useAuth from "../core/action";
import { Button } from "flowbite-react";
import InputPassword from "../../../_timouy/helpers/form/InputPassword";
import { ReactComponent as Loading } from "../../../_timouy/assets/svg/loading.svg";
import { Link } from "react-router-dom";
import logo from "../../../_timouy/assets/svg/logo.svg";
import auth from "../../../_timouy/assets/svg/auth.svg";
import { setRememberMe } from "../core/reducer";

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const rememberMe = useSelector((state) => state.auth.rememberMe);
  const { onLogin } = useAuth();

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().email("Invalid email").required("The email field is required."),
    password: Yup.string()
      .required("The password field is required."),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await onLogin(values);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  };

  const handleRememberMeChange = (event) => {
    dispatch(setRememberMe(event.target.checked));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
              <div className="md:h-full bg-[#F0F6FF] rounded-xl lg:p-7 p-8">
                <Link to="/">
                  <img src={logo} alt="-_-" className="w-12 mb-2" />
                  <p className="font-semibold text-lg">Welcome to Timouy</p>
                  <p>Create your own website.</p>
                  <img src={auth} className="object-contain w-96 m-auto hidden md:block" alt="login" />
                </Link>
              </div>
              <div className="md:max-w-md w-full px-4 py-4 m-auto">
                <div className="mb-12">
                  <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
                  <p className="text-xs text-slate-500 mt-4">
                    Don't have an account?
                    <Link to="/register" className="uppercase text-[#2596BE] ms-1">
                      Sign Up
                    </Link>
                  </p>
                </div>

                <div className="w-auto">
                  <InputForm
                    label="Email"
                    name="username"
                    type="text"
                    placeholder="Enter your email"
                    disabled={loading}
                  />
                  <InputPassword
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    disabled={loading}
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 mt-3">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-[#2596BE] focus:ring-cyan-500 border-gray-300 rounded"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <Link to="/forgot-password" className="text-[#2596BE] font-semibold text-sm hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <div className="mt-5">
                  {loading ? (
                    <Button disabled type="button" className="w-full">
                      <Loading /> Please wait...
                    </Button>
                  ) : (
                    <Button type={"submit"} className="w-full">
                      Login
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
