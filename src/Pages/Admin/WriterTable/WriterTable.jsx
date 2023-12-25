import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const WriterTable = () => {
  const { language } = useContext(ThemeContext);
  const [allWriters, setAllWriters] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/writers")
      .then((res) => res.json())
      .then((data) => setAllWriters(data));
  }, []);

  console.log(allWriters);

  const handleDelWriter = (id) => {
    fetch(
      `https://maktabatul-amzad-server.onrender.com/api/deletewriter/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("লেখককে ডিলিট করা হয়েছে");
        }
      });
  };
  return (
    <div className="p-5">
      <h2>See All Writers</h2>

      {/* All books table */}
      <div>
        {allWriters.map((writer) => (
          <div
            className="grid grid-cols-7 gap-2 border p-2 border-primary mb-2"
            key={writer?._id}
          >
            <img src={`${writer?.image}`} className="h-28 col-span-1" alt="" />
            <p className="truncate col-span-3">{writer?.name[language]}</p>
            <div className="col-span-2">
              <button className="bg-primary py-2 px-5 text-white">
                <Link to={`/updatewriter/${writer._id}`}>Update writer</Link>
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="bg-red py-2 px-5 text-white"
                onClick={() => handleDelWriter(writer._id)}
              >
                Delete Book
              </button>
              <Toaster />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriterTable;
