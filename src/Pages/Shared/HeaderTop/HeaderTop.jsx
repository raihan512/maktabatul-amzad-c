import { useContext, useEffect, useRef, useState } from "react";
import {
  BsFillTelephoneFill,
  BsEnvelopeFill,
  BsCartCheckFill,
  BsGlobe,
  BsFillPersonFill,
} from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

import { Link, json } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const HeaderTop = () => {
  const accountMenuRef = useRef();
  const [accountIsOpen, setAccountIsOpen] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target !== accountMenuRef.current) {
      setAccountIsOpen(false);
    }
  });

  const languageMenuRef = useRef();
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  window.addEventListener("click", (e) => {
    if (e.target !== languageMenuRef.current) {
      setLanguageMenuOpen(false);
    }
  });

  // Themcontext
  const { handleLanguage, setLanguage, language } = useContext(ThemeContext);

  // Authcontext
  const { signoutUser, user } = useContext(AuthContext);
  const handleLogout = () => {
    signoutUser()
      .then(() => localStorage.removeItem("maktabatul-amzad-token"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="py-2 bg-black text-gray text-sm">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
        <div className="flex justify-center md:justify-between">
          {/* Headertop left area start */}
          <div className="hidden md:flex">
            <a href="tel:+8801734768772" className="flex items-center mr-5">
              {" "}
              <BsFillTelephoneFill className="mr-1" />
              (880) 1734768772
            </a>
            <a href="mailto:amjad@gmail.com" className="flex items-center mr-5">
              {" "}
              <BsEnvelopeFill className="mr-1" />
              amjad@gmail.com
            </a>
          </div>
          {/* Headertop left area end */}
          {/* Headertop right area start */}
          <div className="flex items-center">
            <div className="flex items-center mr-1 sm:mr-5 relative">
              <BsCartCheckFill className="mr-1" /> Cart (
              <span className="text-red">0 item</span>)
              <div className="cart-menu absolute top-5 right-0 hidden hover:block">
                <h1>Hello</h1>
              </div>
            </div>
            {/* Language Menu Start */}
            <div
              className="flex items-center mr-1 sm:mr-5 relative cursor-pointer"
              ref={languageMenuRef}
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <BsGlobe className="mr-1" /> Language
              {languageMenuOpen && (
                <div className="absolute top-6 left-0 z-50">
                  <div className="bg-red flex flex-col">
                    <p
                      className="py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      onClick={() => handleLanguage(0)}
                    >
                      Bangla
                    </p>
                    <p
                      className="py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      onClick={() => handleLanguage(1)}
                    >
                      English
                    </p>
                    <p
                      className="py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                      onClick={() => handleLanguage(2)}
                    >
                      Arabic
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* Language Menu End */}
            <div
              className="flex items-center relative cursor-pointer"
              ref={accountMenuRef}
              onClick={() => setAccountIsOpen(!accountIsOpen)}
            >
              {/* Account Menu */}
              {user ? (
                <>
                  <BsFillPersonFill className="mr-1" /> Account
                  {accountIsOpen && (
                    <div className="absolute top-6 right-0 z-50 ">
                      <div className="bg-red flex flex-col">
                        {user.email === "raihangazi1024@gmail.com" && (
                          <Link
                            className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                            to="admin"
                          >
                            Admin
                          </Link>
                        )}

                        <Link
                          className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                          to="/auth/profile"
                        >
                          My Profile
                        </Link>
                        <Link
                          className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                          to="signin"
                        >
                          BookMark
                        </Link>
                        <Link
                          className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white"
                          to="/cartdetails"
                        >
                          My Cart
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="text-base text-black py-2 pl-8 pr-20 hover:bg-gray hover:text-white border-t"
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/auth/signin" className="flex items-center">
                  <CiLogin className="mr-1" /> Login
                </Link>
              )}
            </div>
          </div>
          {/* Headertop right area end */}
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
