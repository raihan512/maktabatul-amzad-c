import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  //   let location = useLocation();
  if (loading)
    return (
      <>
        <p>Loading...</p>
      </>
    );

  if (user?.email !== "raihangazi1024@gmail.com") {
    return <Navigate to="/allbooks"></Navigate>;
  }

  return children;
};

export default AdminRoute;
