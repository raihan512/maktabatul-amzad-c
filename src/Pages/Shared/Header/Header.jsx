import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const Header = () => {
  const { language } = useContext(ThemeContext);
  const mobileMenuRef = useRef();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target !== mobileMenuRef.current) {
      setIsMobileMenuOpen(false);
    }
  });

  const menuItems = (
    <>
      <Link
        to="/"
        className="text-base text-white py-2 pl-5 pr-20 md:py-0 md:px-2 hover:bg-primary md:hover:text-gray"
      >
        {language === 0 ? "হোম" : language === 2 ? "بيت" : "Home"}
      </Link>
      <Link
        to="/allbooks"
        className="text-base text-white py-2 pl-5 pr-20 md:py-0 md:px-2 hover:bg-primary md:hover:text-gray"
      >
        {language === 0 ? "বই" : language === 2 ? "كتب" : "Books"}
      </Link>
      <Link
        to="/writers"
        className="text-base text-white py-2 pl-5 pr-20 md:py-0 md:px-2 hover:bg-primary md:hover:text-gray"
      >
        {language === 0 ? "লেখক" : language === 2 ? "كاتب" : "Writers"}
      </Link>
      <Link
        to="/categories"
        className="text-base text-white py-2 pl-5 pr-20 md:py-0 md:px-2 hover:bg-primary md:hover:text-gray"
      >
        {language === 0 ? "বিষয়" : language === 2 ? "موضوع" : "Categories"}
      </Link>
      <Link
        to="/about"
        className="text-base text-white py-2 pl-5 pr-20 md:py-0 md:px-2 hover:bg-primary md:hover:text-gray"
      >
        {language === 0 ? "আমাদের সম্পরকে" : language === 2 ? "عن" : "About"}
      </Link>
      <Link
        to="/contact"
        className="text-base text-white py-2 pl-5 pr-20 md:py-0 md:px-2 hover:bg-primary md:hover:text-gray"
      >
        {language === 0 ? "যোগাযোগ" : language === 2 ? "اتصال" : "contact"}
      </Link>
    </>
  );
  return (
    <header className="bg-primary py-4 sticky top-0 left-0 z-40">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
        <div className="flex justify-between items-center">
          {/* header logo start */}
          <div className="w-4/12 md:w-3/12 lg:w-2/12">
            <Link to="/">
              <img
                src="https://i.ibb.co/0sPhz6P/logo.png"
                className="w-11/12 md:w-6/12"
                alt=""
              />
            </Link>
          </div>
          {/* header logo end */}
          {/* header menu start */}
          <div className="hidden md:block md:w-6/12 lg:w-7/12">
            <div className="flex lg:justify-center">{menuItems}</div>
          </div>
          {/* header menu end */}
          {/* header searchbar start */}
          <div className="relative w-7/12 md:w-3/12 lg:w-2/12 h-8 bg-white">
            <input
              className="absolute top-0 left-0 h-full w-full pl-2 md:pl-5 focus:outline-none"
              placeholder={`${
                language === 0
                  ? "বই খুজুন..."
                  : language === 2
                  ? "كتاب البحث..."
                  : "Search book..."
              }`}
            />
            <button className="absolute top-2 right-3 cursor hover:text-red">
              <FaSearch />
            </button>
          </div>
          {/* header searchbar end */}
          {/* <mobile Menu Start */}
          <div className="block md:hidden w-1/12">
            <div className="relative flex justify-end">
              <span
                className="text-xl text-black cursor-pointer"
                ref={mobileMenuRef}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                &#x2630;
              </span>
              {isMobileMenuOpen && (
                <div className="absolute top-11 sm:top-12 right-0 z-40">
                  <div className="bg-red flex flex-col">{menuItems}</div>
                </div>
              )}
            </div>
          </div>
          {/* <mobile Menu End */}
        </div>
      </div>
    </header>
  );
};

export default Header;
