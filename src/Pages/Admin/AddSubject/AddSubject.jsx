import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { useNavigate } from "react-router-dom";

const AddSubject = () => {
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
    const { bncategory, encategory, arcategory } = data;

    const newCategory = {
      name: [bncategory, encategory, arcategory],
      categoryId: `category${Math.ceil(Math.random() * 1000)}`,
    };

    // addSubSubject
    fetch("https://maktabatul-amzad-server.onrender.com/api/addsubject", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCategory),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("ক্যাটেগরি সফলভাবে যুক্ত করা হয়েছে");
          navigate("/admin/categorylist");
        } else {
          toast.fail("ক্যাটেগরি যুক্ত করা সম্ভব হয়নি");
        }
      });
  };
  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <input
            className="border w-full border-primary p-2"
            placeholder="ক্যাটেগরির নাম বাংলায়"
            {...register("bncategory", { required: true })}
          />
          {errors.bncategory && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
        </div>
        <div className="mb-5">
          <input
            className="border w-full border-primary p-2"
            placeholder="ক্যাটেগরির নাম ইংরেজীতে"
            {...register("encategory", { required: true })}
          />
          {errors.encategory && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
        </div>
        <div className="mb-5">
          <input
            className="border w-full border-primary p-2"
            placeholder="ক্যাটেগরির নাম আরবীতে"
            {...register("arcategory", { required: true })}
          />
          {errors.arcategory && <span>এই ঘরটি অবশ্যই পুরন করতে হবে</span>}
        </div>
        <div>
          <input
            type="submit"
            value="ক্যাটেগরি অ্যাড করুন"
            className="text-white bg-primary py-2 px-5 cursor-pointer"
          />
          <Toaster />
        </div>
      </form>
    </div>
  );
};

export default AddSubject;
