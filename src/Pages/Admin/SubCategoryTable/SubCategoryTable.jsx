import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
const SubCategoryTable = () => {
  const { language } = useContext(ThemeContext);
  const [allSubCategories, setAllSubCategories] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/subcategories")
      .then((res) => res.json())
      .then((data) => setAllSubCategories(data));
  }, []);

  const handleDelSubCatgeories = (id) => {
    fetch(
      `https://maktabatul-amzad-server.onrender.com/api/deletesubcategory/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("সাব ক্যাটাগরি ডিলিট করা হয়েছে");
        }
      });
  };
  return (
    <div className="p-5">
      <h2>See All Writers</h2>

      {/* All Sub Categories table */}
      <div>
        {allSubCategories.map((subCategory) => (
          <div
            className="grid grid-cols-7 gap-2 border p-2 border-primary mb-2"
            key={subCategory?._id}
          >
            <p className="truncate col-span-3">{subCategory?.name[language]}</p>
            <div className="col-span-2">
              <button className="bg-primary py-2 px-5 text-white">
                <Link to={`/updatewriter/${subCategory?._id}`}>
                  Update SubCategory
                </Link>
              </button>
            </div>
            <div className="col-span-2">
              <button
                className="bg-red py-2 px-5 text-white"
                onClick={() => handleDelSubCatgeories(subCategory?._id)}
              >
                Delete Sub Category
              </button>
              <Toaster />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryTable;
