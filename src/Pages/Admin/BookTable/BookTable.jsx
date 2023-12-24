import { useContext, useState } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const BookTable = () => {
  const { language } = useContext(ThemeContext);
  const [allBooks, setAllBooks] = useState([]);
  fetch("https://maktabatul-amzad-server.onrender.com/api/books")
    .then((res) => res.json())
    .then((data) => setAllBooks(data));

  const handleDelBook = (id) => {
    console.log(id);
    fetch(`https://maktabatul-amzad-server.onrender.com/api/deletebook/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("বইটি ডিলিট করা হয়েছে");
        }
      });
  };
  return (
    <section className="container mx-auto my-40">
      <div>
        <h2>See All books</h2>

        {/* All books table */}
        <div>
          {allBooks.map((book) => (
            <div
              className="grid grid-cols-7 gap-2 border p-2 border-primary mb-2"
              key={book?._id}
            >
              <img src={`${book?.thumb}`} className="h-28" alt="" />
              <p className="truncate col-span-3">{book.title[language]}</p>
              <p>{book?.price[language]}</p>
              <div>
                <button className="bg-primary py-2 px-5 text-white">
                  <Link to={`/updatebook/${book._id}`}>Update Book</Link>
                </button>
              </div>
              <div>
                <button
                  className="bg-red py-2 px-5 text-white"
                  onClick={() => handleDelBook(book._id)}
                >
                  Delete Book
                </button>
                <Toaster />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookTable;
