import { Button } from "flowbite-react";
import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { ReactComponent as Loading } from "../../../_timouy/assets/svg/loading.svg";
import { ReactComponent as Google } from "../../../_timouy/assets/svg/google.svg";
import InputForm from "../../../_timouy/helpers/form/InputForm";
import InputPassword from "../../../_timouy/helpers/form/InputPassword";
import { useSelector, useDispatch } from "react-redux";
import useAuth from "../core/action";
import logo from "../../../_timouy/assets/svg/logo.svg";
import auth from "../../../_timouy/assets/svg/auth.svg";
import { setRememberMe } from "../core/reducer";

const Signup = () => {
    const dispatch = useDispatch();
    const { onRegister } = useAuth();
    const loading = useSelector((state) => state.auth.loading);
    const rememberMe = useSelector((state) => state.auth.rememberMe);

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(3, "Username must be at least 3 characters long")
            .required("The username field is required"),
        email: Yup.string().email("Please enter a valid email").required("The email field is required."),
        password: Yup.string()
            .min(5)
            .matches(passwordRules, { message: "Please create a stronger password" })
            .required("The password field is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], "Password must match")
            .required("The confirmPassword field is required"),
    });

    const handleRememberMeChange = (event) => {
        dispatch(setRememberMe(event.target.checked));
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onRegister}
        >
            <Form>
                <div className="min-h-screen flex flex-col items-center justify-center">
                    <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                        <div className="md:h-full bg-[#F0F6FF] rounded-xl lg:p-7 p-8">
                            <Link to="/">
                                <img src={logo} alt='-_-' className='w-12 mb-2' />
                                <p className='font-semibold text-lg'>Welcome to Timouy</p>
                                <p>Create your own website.</p>
                                <img src={auth} className="object-contain w-96 m-auto hidden md:block" alt="signup" />
                            </Link>
                        </div>

                        <div className="md:max-w-md w-full px-4 py-4 m-auto">
                            <div className="mb-12">
                                <h3 className="text-gray-800 text-3xl font-extrabold">Sign up</h3>
                                <p className="text-xs text-slate-500 mt-4">
                                    Already got an account?
                                    <Link to="/login" className="uppercase text-[#2596BE] ms-1">
                                        Sign in now
                                    </Link>
                                </p>
                            </div>

                            <div className='w-auto'>
                                <InputForm
                                    label="Username"
                                    name="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    disabled={loading}
                                />
                                <InputForm
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter your Email"
                                    disabled={loading}
                                />
                                <InputPassword
                                    label="Password"
                                    name="password"
                                    placeholder="Enter your Password"
                                    disabled={loading}
                                />
                                <InputPassword
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    placeholder="Enter your Confirm Password"
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
                                    <Button type={"submit"} className="w-full">Create account</Button>
                                )}
                            </div>
                            {/* <div className="relative my-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-white text-gray-500">OR</span>
                                </div>
                            </div>
                            <Button className="google-btn w-full">
                                <p>SIGN IN WITH</p> <Google className="w-4 h-4" />
                            </Button> */}
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default Signup;
