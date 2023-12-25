import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const CategoryTable = () => {
  const { language } = useContext(ThemeContext);
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/categories")
      .then((res) => res.json())
      .then((data) => setAllCategories(data));
  }, []);

  const handleDelCategory = (id) => {
    fetch(
      `https://maktabatul-amzad-server.onrender.com/api/deletecategory/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("ক্যাটেগরি ডিলিট করা হয়েছে");
        }
      });
  };
  return (
    <div className="p-5">
      <h2>See All Category</h2>

      {/* All Categories table */}
      <div>
        {allCategories.map((category) => (
          <div
            className="grid grid-cols-7 gap-2 border p-2 border-primary mb-2"
            key={category?._id}
          >
            <p className="truncate col-span-3">{category?.name[language]}</p>
            <div className="col-span-2">
              <button className="bg-primary py-2 px-5 text-white">
                <Link to={`/updatecategory/${category?._id}`}>
                  Update Category
                </Link>
              </button>
            </div>
            <div className="col-span-1">
              <button
                className="bg-red py-2 px-5 text-white"
                onClick={() => handleDelCategory(category?._id)}
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

export default CategoryTable;
