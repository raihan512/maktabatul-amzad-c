import { Outlet } from "react-router-dom";
import AdminNav from "../Pages/Admin/AdminNav/AdminNav";
import Header from "../Pages/Shared/Header/Header";
import HeaderTop from "../Pages/Shared/HeaderTop/HeaderTop";

const Admin = () => {
  return (
    <>
      <HeaderTop></HeaderTop>
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
