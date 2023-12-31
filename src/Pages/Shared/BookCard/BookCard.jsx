import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";
import {} from "./Bookcard.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../Providers/CartProviders";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const BookCard = ({ book }) => {
  // Themecontext
  const { language } = useContext(ThemeContext);
  const { handleAddtoCart } = useContext(CartContext);
  const { title, writer, thumb, price } = book;
  const [selectedWriters, setSelectedWriters] = useState([]);
  // Load this book writers details writers
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-server.onrender.com/api/writers/getwriters",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(writer),
      }
    )
      .then((res) => res.json())
      .then((data) => setSelectedWriters(data));
  }, []);

  return (
    <div className="book-card w-40 h-[320px] overflow-hidden p-2 ease-in duration-300">
      <Link to={`/book/${book._id}`}>
        <img
          src={`${thumb}`}
          className="h-40 md:h-56 bg-slate-200 mb-1.5 ease-out duration-300"
          alt=""
        />
      </Link>
      <div className="book-summary bg-white">
        <h4 className="text-base text-black truncate">{title[language]}</h4>
        <p className="truncate">
          {selectedWriters.map((item, index) => (
            <span key={index}>{item.name[language]}, </span>
          ))}
        </p>

        <div className="flex">
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
          <GrStar className="book-card-star text-sm text-gray" />
        </div>
        <div className="flex">
          <p className="text-base text-red">
            ৳<span>{price?.[language]}</span>
          </p>
        </div>
        <button
          onClick={() => handleAddtoCart(book)}
          className="bg-primary text-sm text-white font-semibold w-full text-center py-1"
        >
          {language == 0
            ? "কার্টে যোগ করুন"
            : language == 1
            ? "Add to cart"
            : language == 2
            ? "أضف إلى السلة"
            : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
