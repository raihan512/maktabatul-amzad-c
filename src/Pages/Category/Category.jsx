import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "../Shared/BookCard/BookCard";

const Category = () => {
  const category = useLoaderData();
  const [loadBy, setLoadBy] = useState([`${category[0].categoryId}`]);
  const [url, setUrl] = useState(
    "https://maktabatul-amzad-server.onrender.com/api/books/category"
  );
  //   Load all sub categories
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/subcategory")
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, []);
  //   Show sub categories based on this category
  const selectedSubCategories = subCategories.filter(
    (subCategory) => subCategory.mainCategory === category[0].categoryId
  );

  //   load and show books based on category and subCategory
  const [books, setBooks] = useState([]);
  const handleChangeLoadBy = (subCategoryId) => {
    setUrl(
      "https://maktabatul-amzad-server.onrender.com/api/books/subcategory"
    );
    setLoadBy([subCategoryId]);
  };
  useEffect(() => {
    fetch(`${url}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(loadBy),
    })
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, [loadBy]);

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="my-10">
          {/* Showing sub Category */}
          <div className="flex flex-wrap items-center">
            {selectedSubCategories.map((selectedCategory) => (
              <button
                onClick={() =>
                  handleChangeLoadBy(selectedCategory.subCategoryId)
                }
                className="bg-primary text-white m-2 py-2 px-6 hover:bg-transparent hover:text-primary border border-primary"
                key={selectedCategory.subCategoryId}
              >
                {selectedCategory.name[0]}
              </button>
            ))}
          </div>
          {/* Showing Books Based on Sub category */}
          <div className="grid grid-cols-5 gap-5">
            {books.map((book) => (
              <BookCard key={book._id} book={book}></BookCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
