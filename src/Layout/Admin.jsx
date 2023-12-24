import { Outlet } from "react-router-dom";
import AdminNav from "../Pages/Admin/AdminNav/AdminNav";
import Header from "../Pages/Shared/Header/Header";

const Admin = () => {
  return (
    <>
      <Header></Header>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <AdminNav></AdminNav>
        </div>
        <div className="col-span-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Admin;
