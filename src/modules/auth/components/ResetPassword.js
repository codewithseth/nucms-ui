import { Button } from "flowbite-react";
import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { ReactComponent as Loading } from "../../../_timouy/assets/svg/loading.svg";
import logo from "../../../_timouy/assets/svg/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../_timouy/assets/svg/auth.svg";
import InputPassword from "../../../_timouy/helpers/form/InputPassword";
import { reqResetPassword } from "../core/request";
import { toast } from "sonner";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const initialValues = {
    newPassword: "",
    confirmNewPassword: "",
  };

  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.
  const validationSchema = Yup.object().shape({
    newPassword: Yup.string()
      .min(5)
      .matches(passwordRules, { message: "Please create a stronger password" })
      .required("Required"),
    confirmNewPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    setError(null); // Reset error state before making request

    const ab = localStorage.getItem("reset");
    try {
      // Call API to reset password
      await reqResetPassword(ab, values.newPassword);
      toast.success("Password has been reset successfully!");
      // Optionally redirect the user to login after success
      localStorage.removeItem("reset");
      navigate("/login");
    } catch (err) {
      toast.error("Failed to reset password. Please try again.");
      localStorage.removeItem("reset");
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
                  <img src={logo} alt="-_-" className="w-12 mb-2" />
                  <p className="font-semibold text-lg">Welcome to Timouy</p>
                  <p>Create your own website.</p>
                  <img src={auth} className="object-contain w-96 m-auto hidden md:block" alt="verify" />
                </Link>
              </div>
              <div className="md:max-w-md w-full px-4 py-4 m-auto">
                <div>
                  <div className="mb-12">
                    <h3 className="text-gray-800 text-3xl font-extrabold">Reset Password</h3>
                    <p className="text-xs text-slate-500 mt-4">
                      Remember the password?
                      <Link to="/login" className="uppercase text-[#2596BE] ms-1">
                        Sign in now
                      </Link>
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="block w-full">
                      <InputPassword
                        label="New Password"
                        name="newPassword"
                        placeholder="New Password"
                        type="password"
                      />
                    </div>
                    <div className="block w-full">
                      <InputPassword
                        label="Confirm New Password"
                        name="confirmNewPassword"
                        placeholder="Confirm New Password"
                        type="password"
                      />
                    </div>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>} {/* Display error message */}
                </div>
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

export default ResetPassword;
