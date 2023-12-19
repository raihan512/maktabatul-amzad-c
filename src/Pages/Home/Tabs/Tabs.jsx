import { useRef, useState } from "react";
import Slider from "react-slick";
import BookCard from "../../Shared/BookCard/BookCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const sliderBtns = useRef(null);

  const [allBooks, setAllBooks] = useState([]);
  const upcomingBooks = allBooks.filter((book) => book.status === "upcoming");

  fetch("http://localhost:5000/books")
    .then((res) => res.json())
    .then((data) => setAllBooks(data));

  var settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 100,
    slidesToShow: 7,
    slidesToScroll: 1,
    easing: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="mb-12">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
        <div className="relative overflow-hidden pb-3">
          {/* Tabbar start */}
          <div className="flex border-b-2 border-gray pb-2">
            <button
              onClick={() => setActiveTab("tab-1")}
              className={`${
                activeTab === "tab-1" ? "border-b-2 text-red" : "no"
              } text-xs sm:text-sm md:text-base font-semibold pb-2 -mb-[10px] border-black mr-2.5 md:mr-4 uppercase`}
            >
              New Books
            </button>
            <button
              onClick={() => setActiveTab("tab-2")}
              className={`${
                activeTab === "tab-2" ? "border-b-2 text-red" : "no"
              } text-xs sm:text-sm md:text-base font-semibold pb-2 -mb-[10px] border-black mr-2.5 md:mr-4 uppercase`}
            >
              Best Seller
            </button>
            <button
              onClick={() => setActiveTab("tab-3")}
              className={`${
                activeTab === "tab-3" ? "border-b-2 text-red" : "no"
              } text-xs sm:text-sm md:text-base font-semibold pb-2 -mb-[10px] border-black uppercase`}
            >
              Comming Soon
            </button>
          </div>
          {/* Tabbar end */}
          {/* Tabs Start */}
          <div className="">
            {activeTab === "tab-1" && (
              <div className="my-8">
                <Slider ref={sliderBtns} {...settings}>
                  {allBooks.map((book) => (
                    <div key={book._id} className="flex justify-center">
                      <BookCard book={book}></BookCard>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            {activeTab === "tab-2" && (
              <div className="my-8">
                <Slider ref={sliderBtns} {...settings}>
                  {allBooks.map((book) => (
                    <div key={book._id} className="flex justify-center">
                      <BookCard book={book}></BookCard>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            {activeTab === "tab-3" && (
              <div className="my-8">
                <Slider ref={sliderBtns} {...settings}>
                  {upcomingBooks.map((book) => (
                    <div key={book._id} className="flex justify-center">
                      <BookCard book={book}></BookCard>
                    </div>
                  ))}
                </Slider>
              </div>
            )}
            {/* Slider buttons */}
            <div className="absolute bottom-8 w-full flex justify-end">
              <button
                onClick={() => sliderBtns.current.slickPrev()}
                className="p-1 ml-2 bg-gray hover:bg-red"
              >
                <IoIosArrowBack className="text-white text-base hover:text-black" />
              </button>
              <button
                onClick={() => sliderBtns.current.slickNext()}
                className="p-1 ml-2 bg-gray hover:bg-red"
              >
                <IoIosArrowForward className="text-white text-base hover:text-black" />
              </button>
            </div>
          </div>
          {/* Tabs End */}
        </div>
      </div>
    </section>
  );
};

export default Tabs;
