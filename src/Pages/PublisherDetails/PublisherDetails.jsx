import { Link, useLoaderData } from "react-router-dom";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

import { useContext } from "react";

const PublisherDetails = () => {
  const { language } = useContext(ThemeContext);
  const publisher = useLoaderData();
  console.log(publisher);
  const { name } = publisher;
  console.log(publisher);
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="my-10">
          {/* Breadcrumb */}
          <div className="flex items-center">
            <Link to="/" className="text-primary">
              {language === 0 ? "হোম" : language === 2 ? "بيت" : "Home"}
            </Link>
            <LiaLongArrowAltRightSolid className="mx-2" />
            <Link to="/writers" className="text-primary">
              {language === 0 ? "লেখক" : language === 2 ? "الكتاب" : "Writers"}
            </Link>
            <LiaLongArrowAltRightSolid className="mx-2" />
            {/* <span>{name[language]}</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PublisherDetails;
