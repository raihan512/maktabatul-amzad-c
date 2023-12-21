import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const RelatedBooks = ({ bookCategory }) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-server.onrender.com/api/books/getcategory",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ category: bookCategory }),
      }
    )
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  // console.log(bookCategory);
  console.log(books);
  return (
    <div>
      {books.map((book) => (
        <BookCard book={book} key={book._id}></BookCard>
      ))}
    </div>
  );
};

export default RelatedBooks;
