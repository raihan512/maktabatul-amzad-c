import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import { AuthContext } from "../../Providers/AuthProviders";
import DynamicTitle from "../../Hooks/DynamicTitle";
import { CartContext } from "../../Providers/CartProviders";
import { ThemeContext } from "../../Providers/ThemeProvider";

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
    fetch("http://localhost:3000/api/writer/getwriters", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(writer),
    })
      .then((res) => res.json())
      .then((data) => setSelectedWriters(data));
  }, []);

  // Load this book publisher details
  const [selectedPublisher, setSelectedPublisher] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/publisher/selectedpublisher", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify([`${publisher}`]),
    })
      .then((res) => res.json())
      .then((data) => setSelectedPublisher(data));
  }, []);
  // Load this book categories details writers
  const [selectedCategory, setSelectedCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/categories/selectedcategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify([`${category}`]),
    })
      .then((res) => res.json())
      .then((data) => setSelectedCategory(data));
  }, []);
  // Load this book sub categories details writers
  // const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/subcategory/selectedsubcategory", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(subCategory),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setSelectedSubCategory(data));
  // }, []);
  const [selectedSubCategory, setSelectedSubCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/subcategory/selectedsubcategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify([`${subCategory}`]),
    })
      .then((res) => res.json())
      .then((data) => setSelectedSubCategory(data));
  }, []);
  const handleAddToCart = () => {};
  return (
    <section className="my-10">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
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
            {/* Writers */}
            <p className="text-md md:text-xl my-1 sm:my-5">
              {language == 0
                ? "লেখকঃ"
                : language == 1
                ? "Writer:"
                : language == 2
                ? "كاتب : "
                : "Writer:"}
              <span className="font-medium ml-5">
                {selectedWriters.map((wr) => (
                  <button
                    onClick={() => navigate(`/writers/${wr.writerId}`)}
                    key={wr.writerId}
                    className="hover:text-red"
                  >
                    {wr.name[language]},
                  </button>
                ))}
              </span>
            </p>
            {/* Publishers */}
            <p className="text-md md:text-xl my-1 sm:my-5">
              {language == 0
                ? "প্রকাশকঃ"
                : language == 1
                ? "Publisher:"
                : language == 2
                ? "الناشر : "
                : "Publisher:"}
              <span className="font-medium ml-5">
                {selectedPublisher.map((pb) => (
                  <Link
                    to={`${pb.publisherId}`}
                    key={pb.publisherId}
                    className="hover:text-red"
                  >
                    {pb.name[language]}
                  </Link>
                ))}
              </span>
            </p>
            {/* Categories */}
            <p className="text-md md:text-lg mb-1 sm:mb-3">
              {language == 0
                ? "বিষয়ঃ"
                : language == 1
                ? "Category:"
                : language == 2
                ? "الصنف : "
                : "Category:"}
              <Link to="" className="ml-5 font-medium hover:text-red">
                {selectedCategory[0]?.name[language]}
              </Link>
            </p>
            {/*Sub Categories */}
            <p className="text-md md:text-lg mb-1 sm:mb-3">
              {language == 0
                ? "উপ বিষয়ঃ"
                : language == 1
                ? "Sub Category:"
                : language == 2
                ? "تصنيف فرعي : "
                : "Sub Category:"}
              <Link to="" className="ml-5 font-medium hover:text-red">
                {selectedSubCategory[0]?.name[language]}
              </Link>
            </p>
            {/* Show Price */}
            <p className="text-md md:text-lg mb-1 sm:mb-3">
              {language == 0
                ? "দামঃ "
                : language == 1
                ? "Price :"
                : language == 2
                ? "مخزون : "
                : "Price :"}
              <span className="ml-5 font-medium">৳ {price[language]}</span>
            </p>
            {/* Stock -- if status is true then show stock other wise show upcoming */}
            <p className="text-md md:text-lg mb-1 sm:mb-3">
              {status ? (
                <>
                  {language == 0
                    ? "স্টকঃ "
                    : language == 1
                    ? "Stock : "
                    : language == 2
                    ? "مخزون : "
                    : "Stock :"}
                </>
              ) : (
                <>
                  {language == 0
                    ? "আপকামিং"
                    : language == 1
                    ? "Upcoming"
                    : language == 2
                    ? "القادمة"
                    : "Upcoming :"}
                </>
              )}
              <span className="ml-5 font-medium">
                {/* if status is true and stock is greater than 0 then show stock in otherwise show stock out */}
                {status && stock > 0 ? (
                  <>
                    {language == 0
                      ? "স্টক ইন"
                      : language == 1
                      ? "Stock In"
                      : language == 2
                      ? "المخزون في"
                      : "Stock In :"}
                  </>
                ) : (
                  <>
                    {language == 0
                      ? "স্টক আউট"
                      : language == 1
                      ? "Stock Out"
                      : language == 2
                      ? "المخزن نفذ"
                      : "Stock Out :"}
                  </>
                )}
              </span>
            </p>

            <PrimaryBtn action={() => handleAddtoCart(bookDetails)}>
              {language == 0
                ? "কার্টে যোগ করুন"
                : language == 1
                ? "Add to cart"
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
            <p className="text-lg md:text-xl font-semibold border-b pb-1 mb-5 mt-10">
              {language == 0
                ? "সংক্ষিপ্ত বর্ণনা"
                : language == 1
                ? "Brief Description"
                : language == 2
                ? "وصف مختصر"
                : "Brief Description"}
            </p>
            <p className="text-sm sm:text-md">{desc[language]}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default BookDetails;
