import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const { language } = useContext(ThemeContext);
  // Load all categories
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="my-10">
          {/* Main subjects */}
          <div>
            <p className="ml-2">
              {language === 0
                ? `বিষয়`
                : language === 2
                ? `موضوع `
                : `Categories`}
            </p>
            <div className="flex flex-wrap">
              {categories.map((category) => (
                <Link
                  to={`${category.categoryId}`}
                  key={category.categoryId}
                  className={`py-2 px-5 m-2  text-sm border border-primary bg-primary text-white hover:bg-transparent hover:text-primary`}
                >
                  {category?.name[language]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCategories;
