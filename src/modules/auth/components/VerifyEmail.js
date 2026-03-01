import { Button } from "flowbite-react";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { ReactComponent as Loading } from "../../../_timouy/assets/svg/loading.svg";
import InputForm from "../../../_timouy/helpers/form/InputForm";
import useAuth from "../core/action";
import logo from "../../../_timouy/assets/svg/logo.svg"
import { Link } from "react-router-dom";
import auth from "../../../_timouy/assets/svg/auth.svg"
import ResentOtp from "./ResendOTP";

const VerifyEmail = () => {
    const [loading, setLoading] = useState(false);
    const { OnCodeVerify } = useAuth();

    const initialValues = {
        email: "",
        verifiedCode: "",
    };

    const validationSchema = Yup.object().shape({
        verifiedCode: Yup.string().required("The verification code is required"),
    });

    const handleSubmit = (values) => {
        setLoading(true);
        OnCodeVerify(values)
        setLoading(false);
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <div className="font-[sans-serif]">
                    <div className="min-h-screen flex flex-col items-center justify-center">
                        <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md">
                            <div className="md:h-full bg-[#F0F6FF] rounded-xl lg:p-7 p-8">
                                <Link to="/">
                                    <img src={logo} alt='-_-' className='w-12 mb-2' />
                                    <p className='font-semibold text-lg'>Welcome to Timouy</p>
                                    <p>Create your own website.</p>
                                    <img src={auth} className="object-contain w-96 m-auto hidden md:block" alt="verify" />
                                </Link>
                            </div>
                            <div className="md:max-w-md w-full px-4 py-4 m-auto">
                                <div>
                                    <div className="flex justify-center">
                                        <span className="text-3xl font-medium mb-3">Verify Email</span>
                                    </div>
                                    <div className="w-full">
                                        <InputForm
                                            label="Please check your email for an OTP Code."
                                            name="verifiedCode"
                                            type="number"
                                            placeholder="Enter code here"
                                            disabled={loading}
                                        />
                                    </div>
                                </div>
                                <ResentOtp />
                                {loading ? (
                                    <Button disabled type="button" className="w-full">
                                        <Loading /> Loading...
                                    </Button>
                                ) : (
                                    <Button type="submit" className="w-full">Submit</Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </Formik>
    );
};

export default VerifyEmail;


// import React, { useRef, useState } from 'react';

// const VerifyEmail = ({ length, onSubmit }) => {
//     const [otp, setOtp] = useState(new Array(length).fill(''));
//     const inputsRef = useRef([]);

//     const handleChange = (event, index) => {
//         const value = event.target.value;
//         if (!value || /^\d$/.test(value)) {
//             const newOtp = [...otp];
//             newOtp[index] = value;
//             setOtp(newOtp);

//             if (value && index < length - 1) {
//                 inputsRef.current[index + 1]?.focus();
//             }
//         }
//     };

//     const handleBackspace = (event, index) => {
//         if (event.key === 'Backspace' && !otp[index] && index > 0) {
//             const newOtp = [...otp];
//             newOtp[index - 1] = '';
//             setOtp(newOtp);
//             inputsRef.current[index - 1]?.focus();
//         }
//     };

//     const handleSubmit = () => {
//         const otpString = otp.join('');
//         onSubmit(otpString);
//     };

//     const isButtonDisabled = otp.some((value) => value === '');

//     return (
//         <>
//             <div className="flex space-x-2">
//                 {otp.map((_, index) => (
//                     <input
//                         key={index}
//                         ref={(ref) => (inputsRef.current[index] = ref)}
//                         type="text"
//                         maxLength={1}
//                         value={otp[index]}
//                         onChange={(e) => handleChange(e, index)}
//                         onKeyDown={(e) => handleBackspace(e, index)}
//                         className="w-12 h-12 text-center border-2 rounded-md text-xl font-bold"
//                     />
//                 ))}
//             </div>

//             <div className="mt-4">
//                 <button
//                     className={`w-full py-2 rounded-md text-white font-semibold ${isButtonDisabled ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
//                     type="submit"
//                     onClick={handleSubmit}
//                     disabled={isButtonDisabled}
//                 >
//                     Confirm
//                 </button>
//             </div>
//         </>
//     );
// };

// export default VerifyEmail;
