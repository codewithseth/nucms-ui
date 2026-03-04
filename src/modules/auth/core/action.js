import { useDispatch } from "react-redux";
import { reqLogin, reqRegister, reqEmailVerify, reqCodeVerify } from "./request";
import { useNavigate } from "react-router-dom";
import {
  clearLoginError,
  clearRegisterError,
  setCanAccessVerifyEmail,
  setLoading,
  setLoginError,
  setToken,
  setUser,
  setRegisterError,
} from "./reducer";
import { toast } from "sonner";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoading = (isLoading) => {
    dispatch(setLoading(isLoading));
  };

  const handleError = (action, message) => {
    dispatch(action(message));
    handleLoading(false);
  };

  const onLogin = (payload) => {
    handleLoading(true);
    dispatch(clearLoginError());
    reqLogin(payload)
      .then((res) => {
        const data = res.data.data;
        dispatch(setToken(data.token));
        dispatch(setUser(data.userInfo));
        handleLoading(false);
        navigate("/user-dashboard"); // Redirect to dashboard after login
      })
      .catch((err) => {
        handleError(setLoginError, err.response.data.message);
        toast.error(err.response.data.message);
      });
  };

  const onRegister = async (payload) => {
    handleLoading(true);
    dispatch(clearRegisterError());
    try {
      const res = await reqRegister(payload);
      localStorage.setItem("registeredEmail", res.data.data.email);
      localStorage.setItem("registeredPassword", payload.password); // Store password temporarily for auto-login
      dispatch(setCanAccessVerifyEmail(true));
      navigate("/verify-email");
      toast.success("OTP Code has been sent!");
      await reqEmailVerify(res.data.data.email);
    } catch (err) {
      const errorMessage = err.response?.status === 409 ? "This email is already in use" : "Registration failed";
      handleError(setRegisterError, errorMessage);
      toast.error(errorMessage);
    } finally {
      handleLoading(false);
    }
  };

  const OnCodeVerify = (values) => {
    const email = localStorage.getItem("registeredEmail");
    const password = localStorage.getItem("registeredPassword"); // Get stored password
    handleLoading(true);

    reqCodeVerify(email, values.verifiedCode)
      .then(async () => {
        // After successful verification, auto-login
        try {
          const loginRes = await reqLogin({ username: email, password });
          const data = loginRes.data.data;
          dispatch(setToken(data.token));
          dispatch(setUser(data.userInfo));

          // Clean up
          localStorage.removeItem("registeredEmail");
          localStorage.removeItem("registeredPassword");

          handleLoading(false);
          toast.success("Email has been successfully verified! Welcome to Timouy!");
          navigate("/dashboard"); // Navigate directly to dashboard
        } catch (loginErr) {
          // If auto-login fails, redirect to login page
          localStorage.removeItem("registeredEmail");
          localStorage.removeItem("registeredPassword");
          handleLoading(false);
          toast.success("Email verified! Please login now.");
          navigate("/login");
        }
      })
      .catch(() => {
        handleLoading(false);
        toast.error("Incorrect code. Please try again.");
      });
  };

  const onResendOpt = () => {
    const email = localStorage.getItem("registeredEmail");
    handleLoading(true);
    toast.success("OTP code has been sent!");
    reqEmailVerify(email)
      .then(() => {
        handleLoading(false);
      })
      .catch((err) => {
        handleLoading(false);
        toast.error("Failed to resend verification email.");
      });
  };

  return {
    onLogin,
    onRegister,
    OnCodeVerify,
    onResendOpt,
  };
};

export default useAuth;
