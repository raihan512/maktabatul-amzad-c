import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import BookCard from "../../Shared/BookCard/BookCard";

export default function Sidenav() {
  const { language } = useContext(ThemeContext);

  const [categories, setcategories] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="w-[250px] pr-5 border-r hidden md:block">
      <p className="font-bold pb-2 mb-5 border-b">
        {language === 0
          ? "বই  দেখুন"
          : language === 2
          ? "انظر الكتاب"
          : "BROWSE BOOKS"}
      </p>
      {/* Subject */}
      <div className="my-2">
        <p className="font-semibold">
          {language === 0 ? "বিষয়" : language === 2 ? "موضوع" : "SUBJECT"}
        </p>
        <ul>
          {categories.map((category) => (
            <li key={category._id} className="hover:text-red truncate">
              <Link to={`categories/${category.categoryId}`}>
                {category?.name[language]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Price */}
      <div className="my-2">
        <p className="font-semibold">
          {language === 0 ? "দাম" : language === 2 ? "سعر" : "PRICE"}
        </p>
        <ul>
          <li>
            <p>$ 50-100</p>
            <p>$ 101-300</p>
            <p>$ 301-500</p>
            <p>$ 501-1000</p>
            <p>$ 1001-2000</p>
            <p>$ 2001-3000</p>
            <p>$ 3000+</p>
          </li>
        </ul>
      </div>
      {/* Special Books */}
      <div className="my-2">
        <p className="font-semibold">
          {language === 0
            ? "বিশেষ বই"
            : language === 2
            ? "كتب خاصة"
            : "SPECIAL BOOKS"}
        </p>
        <div className="">
          {books.slice(0, 2).map((book) => (
            <BookCard book={book} key={book._id}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
}
