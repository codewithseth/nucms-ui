import React from "react";
import VerifyEmail from "./components/VerifyEmail";
import ProtectedVerify from "./ProtectedVerify";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

const AuthPage = ({ page }) => {
    switch (page) {
        case "login":
            return <Login />;
        case "register":
            return <Signup />;
        case "forgot-password":
            return <ForgotPassword />;
        case "reset-password":
            return <ResetPassword />;
        case "verify-email":
            return (
                <ProtectedVerify>
                    <VerifyEmail />
                </ProtectedVerify>
            );
        default:
            return <Login />;
    }
};

export default AuthPage;
