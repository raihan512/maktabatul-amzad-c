import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import BookCard from "../../Shared/BookCard/BookCard";

export default function DealsOfWeek() {
  const { language } = useContext(ThemeContext);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="w-full ml-5">
      <div>
        <p className="text-lg font-bold mb-5">DEALS OF THE WEEK</p>
        <div className="bg-black">
          <div className="flex">
            <img
              src="https://www.noor-book.com/publice/covers_cache_webp/1/b/a/f/31ae885713baf14fc47c00fff34f704d.jpg.webp"
              className="w-40 md:w-60"
              alt=""
            />
            <div className="p-5">
              <p className="text-red font-bold text-lg uppercase">
                Diwanul Motanabbi
              </p>
              <p className="text-white text-lg uppercase">Borhanuddib</p>
              <p className="text-white text-lg uppercase">Price: $50</p>
              <p className="text-white text-lg uppercase">Deal Price: $30</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <p className="font-bold text-lg pb-2 mb-5 border-b">
          {language === 0
            ? "নতুন বই"
            : language === 2
            ? "منتجات جديدة"
            : "New Products"}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
      </div>
    </div>
  );
}
