import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  if (!user) {
    return (
      <Navigate to="/auth/signin" state={{ from: location }} replace></Navigate>
    );
  }

  return children;
};

export default PrivateRoute;
