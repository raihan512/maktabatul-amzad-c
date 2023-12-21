import React, { useContext, useEffect, useState } from "react";
import BookCard from "../Shared/BookCard/BookCard";
import DynamicTitle from "../../Hooks/DynamicTitle";

const Allbooks = () => {
  DynamicTitle("Maktabatul Amzad - Books");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <section>
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {books.map((book) => (
            <BookCard key={book._id} book={book}></BookCard>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center items-center mt-10">
          <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
            Prev
          </button>
          <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
            1
          </button>
          <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
            2
          </button>
          <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
            3
          </button>
          <button className="py-1 px-3 mx-2 border transition-all hover:border-primary hover:bg-primary hover:text-white">
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Allbooks;
