import { Link } from "react-router-dom";
import {} from "./writer.css";
import { useEffect, useState } from "react";
import { FaBook } from "react-icons/fa6";

const Writer = ({ writer, language }) => {
  const { name, image, writerId } = writer;
  // Load this writer books
  const [writerBooks, setWriterBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/books/writerbooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify([`${writerId}`]),
    })
      .then((res) => res.json())
      .then((data) => setWriterBooks(data));
  }, []);
  return (
    <div className=" p-5 border hover:border-primary writer-card overflow-hidden">
      <Link to={`${writerId}`}>
        <div className="border-b border-red flex flex-col items-center">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img src={image} className="mx-auto" alt="" />
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
