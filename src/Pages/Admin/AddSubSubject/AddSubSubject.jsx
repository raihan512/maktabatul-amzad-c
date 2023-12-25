import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { useNavigate } from "react-router-dom";

const AddSubSubject = () => {
  const navigate = useNavigate("");
  const { language } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const onSubmit = (data) => {
    const { bnsubcategory, ensubcategory, arsubcategory, category } = data;

    const newSubCategory = {
      name: [bnsubcategory, ensubcategory, arsubcategory],
      mainCategory: category,
      subCategoryId: `${category}sub${Math.ceil(Math.random() * 1000)}`,
    };

    // addSubSubject
    fetch("https://maktabatul-amzad-server.onrender.com/api/addsubsubject", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newSubCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("সাব ক্যাটেগরি সফলভাবে যুক্ত করা হয়েছে");
          navigate("/admin/subcategorylist");
        } else {
          toast.fail("সাব ক্যাটেগরি যুক্ত করা সম্ভব হয়নি");
        }
      });
  };
  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-5 gap-5">
          <div className="col-span-3">
            <div className="mb-5">
              <input
                className="border w-full border-primary p-2"
                placeholder="সাব ক্যাটেগরির নাম বাংলায়"
                {...register("bnsubcategory", { required: true })}
              />
              {errors.bnsubcategory && (
                <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>
              )}
            </div>
            <div className="mb-5">
              <input
                className="border w-full border-primary p-2"
                placeholder="সাব ক্যাটেগরির নাম ইংরেজীতে"
                {...register("ensubcategory", { required: true })}
              />
              {errors.ensubcategory && (
                <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>
              )}
            </div>
            <div className="mb-5">
              <input
                className="border w-full border-primary p-2"
                placeholder="সাব ক্যাটেগরির নাম আরবীতে"
                {...register("arsubcategory", { required: true })}
              />
              {errors.arsubcategory && (
                <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>
              )}
            </div>
          </div>
          <div className="col-span-2">
            <label htmlFor="">বিষয় নির্বাচন করুন</label>
            <select
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
              {...register("category", { required: true })}
            >
              {categories.map((category) => (
                <option value={category.categoryId} key={category.categoryId}>
                  {category.name[language]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <input
            type="submit"
            value="সাব ক্যাটেগরি অ্যাড করুন"
            className="text-white bg-primary py-2 px-5 cursor-pointer"
          />
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default AddSubSubject;
