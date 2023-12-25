import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const PublisherTable = () => {
  const { language } = useContext(ThemeContext);
  const [allPublishers, setAllPublishers] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/publishers")
      .then((res) => res.json())
      .then((data) => setAllPublishers(data));
  }, []);

  const handleDelPublisher = (id) => {
    fetch(
      `https://maktabatul-amzad-server.onrender.com/api/deletepublisher/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("পাবলিশারকে ডিলিট করা হয়েছে");
        }
      });
  };
  return (
    <div className="p-5">
      <h2>See All Publishers</h2>

      {/* All books table */}
      <div>
        {allPublishers.map((publisher) => (
          <div
            className="grid grid-cols-7 gap-2 border p-2 border-primary mb-2"
            key={publisher?._id}
          >
            <p className="truncate col-span-3">{publisher?.name[language]}</p>
            <div className="col-span-2">
              <button className="bg-primary py-2 px-5 text-white">
                <Link to={`/updatewriter/${publisher?._id}`}>
                  Update Publisher
                </Link>
              </button>
            </div>
            <div className="col-span-2">
              <button
                className="bg-red py-2 px-5 text-white"
                onClick={() => handleDelPublisher(publisher?._id)}
              >
                Delete Publisher
              </button>
              <Toaster />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublisherTable;
