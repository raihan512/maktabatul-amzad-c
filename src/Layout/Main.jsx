import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import HeaderTop from "../Pages/Shared/HeaderTop/HeaderTop";
import Footer from "../Pages/Shared/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";

const Main = () => {
  const { language } = useContext(ThemeContext);
  return (
    <>
      <HeaderTop></HeaderTop>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
