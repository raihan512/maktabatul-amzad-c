import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../Providers/ThemeProvider";
import Writer from "./Writer/Writer";

const AllWriters = () => {
  const { language } = useContext(ThemeContext);
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/writers")
      .then((res) => res.json())
      .then((data) => setWriters(data));
  }, []);
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="my-10">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center">
            {language === 0
              ? "আমাদের লেখকবৃন্দ"
              : language === 2
              ? "كتابنا"
              : "Our writers"}
          </h2>
          {/* Writers container */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 my-5">
            {writers.map((writer) => (
              <Writer
                writer={writer}
                key={writer.writerId}
                language={language}
              ></Writer>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllWriters;
