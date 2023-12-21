import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import BookCard from "../Shared/BookCard/BookCard";

const WriterDetails = () => {
  const { language } = useContext(ThemeContext);
  const writer = useLoaderData();
  const { name, writerId, desc, image } = writer;

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const writerBooks = books.filter((book) => book.writer.includes(writerId));

  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="my-10">
          {/* Title */}
          <div className="border-b border-primary">
            <div className="flex justify-between items-center">
              <p className="text-xl font-semibold text-primary">
                {language === 0
                  ? `${name[0]} এর বইসমুহ`
                  : language === 2
                  ? `كتب ${name[2]}`
                  : `Books of ${name[1]}`}
              </p>
              {/* Breadcrumb */}
              <div className="flex items-center">
                <Link to="/" className="text-primary">
                  {language === 0 ? "হোম" : language === 2 ? "بيت" : "Home"}
                </Link>
                <LiaLongArrowAltRightSolid className="mx-2" />
                <Link to="/writers" className="text-primary">
                  {language === 0
                    ? "লেখক"
                    : language === 2
                    ? "الكتاب"
                    : "Writers"}
                </Link>
                <LiaLongArrowAltRightSolid className="mx-2" />
                <span>{name[language]}</span>
              </div>
            </div>
          </div>
          {/* Writer life */}
          <div className="my-5 grid grid-cols-12 gap-5">
            <img src={image} className="col-span-2" alt="" />
            <div className="col-span-10">
              <p className="font-semibold text-gray mb-3">
                <small>
                  {language === 0
                    ? "লেখকের জীবনী"
                    : language === 2
                    ? "السيرة الذاتية للمؤلف"
                    : "Biography of the author"}
                </small>
              </p>
              <p className="col-span-10">{desc[language]}</p>
            </div>
          </div>
          {/* Writer's books */}
          <div className="my-10">
            <p className="text-2xl font-bold text-primary">
              {language === 0
                ? `${name[0]} এর বইসমুহ`
                : language === 2
                ? `كتب ${name[2]}`
                : `Books of ${name[1]}`}
            </p>
            <div className="grid grid-cols-6 gap-5 my-5">
              {writerBooks.map((writerBook) => (
                <BookCard book={writerBook} key={writerBook._id}></BookCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriterDetails;
