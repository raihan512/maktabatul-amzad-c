import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import { AuthContext } from "../../Providers/AuthProviders";
import DynamicTitle from "../../Hooks/DynamicTitle";
import { CartContext } from "../../Providers/CartProviders";
import { ThemeContext } from "../../Providers/ThemeProvider";
import RelatedBooks from "../Shared/RelatedBooks/RelatedBooks";

const BookDetails = () => {
  const navigate = useNavigate();
  const { language } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const { handleAddtoCart } = useContext(CartContext);
  const bookDetails = useLoaderData();
  const {
    _id,
    writer,
    publisher,
    category,
    subCategory,
    price,
    title,
    thumb,
    status,
    stock,
    desc,
  } = bookDetails;
  DynamicTitle(`Maktabatul Amzad - ${title[1]}`);

  const [selectedWriters, setSelectedWriters] = useState([]);
  // Load this book writers details writers
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-server.onrender.com/api/writers/getwriters",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(writer),
      }
    )
      .then((res) => res.json())
      .then((data) => setSelectedWriters(data));
  }, []);

  // Load this book publisher details
  const [allPublisher, setAllPublisher] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/publishers")
      .then((res) => res.json())
      .then((data) => setAllPublisher(data));
  }, []);

  const selectedPublisher = allPublisher.find(
    (pb) => pb.publisherId === publisher
  );
  // Load this book categories details writers
  const [selectedCategory, setSelectedCategory] = useState([]);
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-server.onrender.com/api/categories/getcategory",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ categoryId: category }),
      }
    )
      .then((res) => res.json())
      .then((data) => setSelectedCategory(data));
  }, []);

  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-server.onrender.com/api/subcategories/getsubCategory",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ subCategoryId: subCategory }),
      }
    )
      .then((res) => res.json())
      .then((data) => setSelectedSubCategory(data));
  }, []);
  const handleAddToCart = () => {};
  return (
    <section className="my-10">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-9">
            {/* Bookdetails top part */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-5">
              <img
                src={thumb}
                className="px-20 sm:px-0 sm:col-span-2 lg:col-span-1"
                alt=""
              />
              <div className="mx-auto sm:col-span-3 lg:col-span-3">
                {/* Book title */}
                <h2 className="text-xl sm:text-2xl font-semibold text-primary">
                  {bookDetails.title[language]}
                </h2>

                <div>
                  {/* Writers */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "লেখকঃ"
                        : language == 2
                        ? "كاتب : "
                        : "Writer:"}
                    </div>
                    <div className="ml-5">
                      {selectedWriters.map((wr) => (
                        <button
                          onClick={() => navigate(`/writers/${wr.writerId}`)}
                          key={wr.writerId}
                          className="hover:text-red"
                        >
                          {wr.name[language]},
                        </button>
                      ))}
                    </div>
                  </div>
                  {/* Publishers */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "প্রকাশকঃ"
                        : language == 2
                        ? "الناشر : "
                        : "Publisher:"}
                    </div>
                    <div className="ml-5">
                      {selectedPublisher?.name[language]}
                    </div>
                  </div>
                  {/* Categories */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "বিষয়ঃ"
                        : language == 2
                        ? "الصنف : "
                        : "Category:"}
                    </div>
                    <div className="ml-5">
                      <Link
                        to={`/categories/${selectedCategory[0]?.categoryId}`}
                        className="font-medium hover:text-red"
                      >
                        {selectedCategory[0]?.name[language]}
                      </Link>
                    </div>
                  </div>
                  {/* SubCategories */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "উপ বিষয়ঃ"
                        : language == 2
                        ? "تصنيف فرعي : "
                        : "Sub Category:"}
                    </div>
                    <div className="ml-5">
                      <Link to="" className="font-medium hover:text-red">
                        {selectedSubCategory[0]?.name[language]}
                      </Link>
                    </div>
                  </div>
                  {/* Price */}
                  <div className="flex">
                    <div className="w-20">
                      {language == 0
                        ? "দামঃ "
                        : language == 2
                        ? "مخزون : "
                        : "Price :"}
                    </div>
                    <div className="ml-5">{price[language]}</div>
                  </div>
                  {/* Status */}
                  <div className="flex">
                    <div className="w-20"></div>
                    <div className="ml-5">
                      {status ? (
                        <>
                          {language == 0
                            ? "স্টকঃ "
                            : language == 2
                            ? "مخزون : "
                            : "Stock :"}
                        </>
                      ) : (
                        <>
                          {language == 0
                            ? "আপকামিং"
                            : language == 2
                            ? "القادمة"
                            : "Upcoming :"}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <PrimaryBtn action={() => handleAddtoCart(bookDetails)}>
                  {language == 0
                    ? "কার্টে যোগ করুন"
                    : language == 2
                    ? "أضف إلى السلة"
                    : "Add to cart"}
                </PrimaryBtn>
              </div>
            </div>
            {/* Bookdetails bottom part */}
            {/* Show description */}
            {desc && (
              <>
                <p className="text-xl font-semibold border-b pb-1 mb-5 mt-10">
                  {language == 0
                    ? "সংক্ষিপ্ত বর্ণনা"
                    : language == 1
                    ? "Brief Description"
                    : language == 2
                    ? "وصف مختصر"
                    : "Brief Description"}
                </p>
                <p className="text-lg">{desc[language]}</p>
              </>
            )}
          </div>
          <div className="col-span-12 md:col-span-3 mr-auto md:ml-auto">
            <RelatedBooks bookCategory={category}></RelatedBooks>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
