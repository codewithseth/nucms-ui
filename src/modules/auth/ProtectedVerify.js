import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedVerify = ({ children }) => {
  const canAccessVerifyEmail = useSelector((state) => state.auth.canAccessVerifyEmail);

  if (!canAccessVerifyEmail) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default ProtectedVerify;
