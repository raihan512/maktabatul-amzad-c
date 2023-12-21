import { useRef } from "react";
import { Link } from "react-router-dom";
import { GrStar } from "react-icons/gr";
import Slider from "react-slick";
import {} from "./Banner.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  const sliderBtns = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="my-12">
      <div className="container mx-auto px-0.5  sm:px-3 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-6 xl:grid-cols-4 gap-y-5 gap-8 lg:gap-x-20">
          {/* Hero  left area start */}
          <div className="md:col-span-8 lg:col-span-4 xl:col-span-3 border relative py-5 px-10 lg:px-20 flex flex-col justify-center">
            <Slider ref={sliderBtns} {...settings}>
              {/* Slider item */}
              <div className="">
                <div className="flex items-center justify-center">
                  <div className="w-8/12">
                    <h3 className="hero-title text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold line-clamp-2">
                      Interpretation Of The Great Qur'an Tafsir Ibn Kathir I Ibn
                      Hazm{" "}
                    </h3>
                    <p className="text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                      The Author Book Interpretation of the great qur'an tafsir
                      ibn kathir i ibn hazm and the author of 3 another books
                    </p>
                    <Link
                      className="text-primary text-base lg:text-lg hover:underline"
                      to="https://maktabatul-amzad-server.onrender.com/book/8"
                    >
                      View more
                    </Link>
                  </div>
                  <div className="w-4/12">
                    <div>
                      <img
                        src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                        className="w-full lg:w-9/12 xl:w-7/12 ml-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider item */}
              <div className="">
                <div className="flex items-center justify-center">
                  <div className="w-8/12">
                    <h3 className="hero-title text-lg md:text-xl lg:text-2xl xl:text-4xl font-bold line-clamp-2">
                      Interpretation Of The Great Qur'an Tafsir Ibn Kathir I Ibn
                      Hazm{" "}
                    </h3>
                    <p className="text-base lg:text-lg mt-2 mb-4 line-clamp-2">
                      The Author Book Interpretation of the great qur'an tafsir
                      ibn kathir i ibn hazm and the author of 3 another books
                    </p>
                    <Link
                      className="text-primary text-base lg:text-lg hover:underline"
                      to="https://maktabatul-amzad-server.onrender.com/book/8"
                    >
                      View more
                    </Link>
                  </div>
                  <div className="w-4/12">
                    <div>
                      <img
                        src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                        className="w-full lg:w-9/12 xl:w-7/12 ml-auto"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Slider item */}
            </Slider>
            {/* Slider buttons */}
            <div className="absolute top-3/5 left-0 w-full px-1 lg:px-2 flex justify-between">
              <button
                onClick={() => sliderBtns.current.slickPrev()}
                className="py-4 px-1 bg-gray hover:bg-red"
              >
                <IoIosArrowBack className="text-white text-lg md:text-xl hover:text-black" />
              </button>
              <button
                onClick={() => sliderBtns.current.slickNext()}
                className="py-4 px-1 bg-gray hover:bg-red"
              >
                <IoIosArrowForward className="text-white text-lg md:text-xl hover:text-black" />
              </button>
            </div>
          </div>
          {/* Hero  left area end */}
          {/* Hero  right area start */}
          <div className="md:col-span-4 lg:col-span-2 xl:col-span-1 p-5 bg-black mx-10 md:mx-0">
            <div className="bg-olive py-2 px-4 -ml-10 mr-8 text-center mb-5">
              <p className="text-sm md:text-base lg:text-lg text-white">
                TODAY HIGHLIGHT
              </p>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-dashed border-gray">
              <div className="w-4/12">
                <img
                  src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="w-7/12">
                <p className="text-white text-base line-clamp-2">
                  Interpretation of the Great Qur'an Interpretation of Ibn
                  Katheer{" "}
                </p>
                <Link
                  to=""
                  className="text-gray text-sm hover:text-primary hover:underline truncate"
                >
                  Ibn Kathir
                </Link>
                <div className="flex">
                  <GrStar className="text-sm text-gold" />
                  <GrStar className="text-sm text-gold" />
                  <GrStar className="text-sm text-gold" />
                  <GrStar className="text-sm text-gold" />
                  <GrStar className="text-sm text-gold" />
                </div>
                <div className="flex mt-2">
                  <del className="text-red">
                    <p className="mr-2">
                      $<span>25.00</span>
                    </p>
                  </del>
                  <p className="text-primary">
                    $<span>25.00</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-2">
              <img
                src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                className="w-3/12"
                alt=""
              />
              <img
                src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                className="w-3/12"
                alt=""
              />
              <img
                src="https://www.noor-book.com/publice/covers_cache_webp/1/d/d/5/02f62b4165dd537df60326da06d3724d.jpg.webp"
                className="w-3/12"
                alt=""
              />
            </div>
          </div>
          {/* Hero  right area end */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
