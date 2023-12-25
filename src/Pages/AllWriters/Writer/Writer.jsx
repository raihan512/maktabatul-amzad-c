import { Link } from "react-router-dom";
import {} from "./writer.css";
import { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

const Writer = ({ writer, language }) => {
  const { name, image, writerId } = writer;
  // Load this writer books
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const writerBooks = books.filter((book) => book.writer.includes(writerId));
  console.log(writerBooks);

  return (
    <div className=" p-5 border hover:border-primary writer-card overflow-hidden">
      <Link to={`${writerId}`}>
        <div className="border-b border-red flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            {image ? (
              <img src={image} className="mx-auto" alt="" />
            ) : (
              <FaRegUserCircle className="text-[100px]" />
            )}
          </div>
          <p className="truncate text-lg font-semibold mt-5 text-primary">
            {name[language]}
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="flex items-center text-xl">
            <FaBook className="mr-2 text-red" />
            {writerBooks.length > 1 ? "Books:" : "Book:"} {writerBooks.length}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Writer;
