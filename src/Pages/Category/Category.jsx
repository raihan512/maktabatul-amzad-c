import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../Shared/BookCard/BookCard";

const Category = () => {
  const category = useLoaderData();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-server.onrender.com/api/subcategories/getsubCategory",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ mainCategory: category.categoryId }),
      }
    )
      .then((res) => res.json())
      .then((data) => setSelectedSubCategories(data));
  }, []);

  const selectedBooks = books.filter((book) =>
    book.category.includes(category.categoryId)
  );
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="my-10">
          {/* Showing sub Category */}
          <div className="flex flex-wrap items-center">
            {selectedSubCategories.map((selectedCategory) => (
              <button
                className="bg-primary text-white m-2 py-2 px-6 hover:bg-transparent hover:text-primary border border-primary"
                key={selectedCategory.subCategoryId}
              >
                {selectedCategory?.name[0]}
              </button>
            ))}
          </div>
          {/* Showing Books Based on Sub category */}
          <div className="grid grid-cols-5 gap-5">
            {selectedBooks.map((book) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
