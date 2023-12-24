import { useContext, useEffect, useState } from "react";
import InputField from "../../../Components/InputField";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { json } from "react-router-dom";
import { data } from "autoprefixer";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const AddBook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { language } = useContext(ThemeContext);
  const imageHostingToken = "e1f8cb2a3ec0064d89280dcbe819c1b7";
  const [selectedCategory, setSelectedCategory] = useState("category1");

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // Get sub categories for selectedCategory
  const [subCategories, setSubCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://maktabatul-amzad-server.onrender.com/api/subcategories/getsubCategory",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ mainCategory: selectedCategory }),
      }
    )
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, [selectedCategory]);

  const handleChangeCategory = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
  };

  const [publishers, setPublishers] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/publishers")
      .then((res) => res.json())
      .then((data) => setPublishers(data));
  }, []);
  const [writers, setWriters] = useState([]);
  useEffect(() => {
    fetch("https://maktabatul-amzad-server.onrender.com/api/writers")
      .then((res) => res.json())
      .then((data) => setWriters(data));
  }, []);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(
      "https://api.imgbb.com/1/upload?key=e1f8cb2a3ec0064d89280dcbe819c1b7",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgRes) => {
        if (imgRes.success) {
          const imageUrl = imgRes.data.display_url;
          const {
            bookbangla,
            bookenglish,
            bookarabic,
            writer,
            publisher,
            category,
            subcategory,
            bndesc,
            endesc,
            ardesc,
            bnprice,
            enprice,
            arprice,
            bnpage,
            enpage,
            arpage,
          } = data;
          const newBook = {
            title: [bookbangla, bookenglish, bookarabic],
            thumb: imageUrl,
            category: category,
            subCategory: subcategory,
            publisher: publisher,
            publisherCountry: ["বাংলাদেশ", "Bangladesh", "بنغلاديش"],
            price: [bnprice, enprice, arprice],
            pages: [bnpage, enpage, arpage],
            editor: ["editor02"],
            writer: [writer],
            desc: [bndesc, endesc, ardesc],
          };

          console.log(newBook);

          // addbook
          fetch("https://maktabatul-amzad-server.onrender.com/api/addbook", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newBook),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("বইটি সফলভাবে যুক্ত করা হয়েছে");
              } else {
                toast.fail("বইটি যুক্ত করা সম্ভব হয়নি");
              }
            });
        }
      });
  };
  return (
    <section className="min-h-screen">
      <div className="px-0.5 sm:px-3 md:px-0">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-5 p-5"
        >
          <div className="col-span-3 grid grid-cols-4 gap-5">
            <div className="col-span-2">
              {/* Inpit Filed */}
              <div>
                <label>বইয়ের নাম বাংলায় লেখুন</label>
                <input
                  type="text"
                  placeholder="যেমনঃ আল-হিদায়াহ"
                  {...register("bookbangla", { required: true })}
                  className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
                />
              </div>
              {/* Inpit Filed */}
              <div>
                <label>বইয়ের নাম ইংরেজিতে লেখুন</label>
                <input
                  type="text"
                  placeholder="Like: Al-Hidayah"
                  {...register("bookenglish", { required: true })}
                  className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
                />
              </div>
              {/* Inpit Filed */}
              <div>
                <label>বইয়ের নাম আরবীতে লেখুন</label>
                <input
                  type="text"
                  {...register("bookarabic", { required: true })}
                  placeholder="لا يوجد: الهداية"
                  className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
                />
              </div>
            </div>
            <div className="border border-primary focus-within:border-red w-80">
              <div className="p-2">
                <label htmlFor="">ছবি যুক্ত করুন</label>

                <input
                  type="file"
                  src=""
                  {...register("image")}
                  className="mt-12 ml-12"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-4 gap-5">
            {/* ================================Writers name================================ */}
            <div className="col-span-2">
              <label htmlFor="">লেখকের নাম নির্বাচন করুন</label>
              <select
                name=""
                {...register("writer")}
                className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
              >
                {writers.map((writer) => (
                  <option key={writer.writerId} value={writer.writerId}>
                    {writer.name[language]}
                  </option>
                ))}
              </select>
            </div>

            {/* ================================Publishers name================================ */}
            <div className="col-span-2">
              <label htmlFor="">পাবলিশারের নাম নির্বাচন করুন</label>
              <select
                name=""
                {...register("publisher")}
                className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
              >
                {publishers.map((publisher) => (
                  <option
                    key={publisher.publisherId}
                    value={publisher.publisherId}
                  >
                    {publisher.name[language]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="col-span-3 grid grid-cols-4 gap-5">
            {/* ================================category name================================ */}
            <div className="col-span-2">
              <div>
                <label htmlFor="">বিষয় নির্বাচন করুন</label>
                <select
                  className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
                  onChange={handleChangeCategory}
                  {...register("category")}
                >
                  {categories.map((category) => (
                    <option
                      value={category.categoryId}
                      key={category.categoryId}
                      onSelect={() => console.log("ok")}
                    >
                      {category.name[language]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* ================================Sub Category name================================ */}
            <div className="col-span-2">
              <div>
                <label htmlFor="">উপ-বিষয় নির্বাচন করুন</label>
                <select
                  className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
                  {...register("subcategory")}
                >
                  {subCategories.map((subCategory) => (
                    <option
                      value={subCategory.subCategoryId}
                      key={subCategory.subCategoryId}
                    >
                      {subCategory.name[language]}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* ================================Description================================ */}
            <div className="col-span-4">
              <div className="grid grid-cols-3 gap-2">
                <textarea
                  {...register("bndesc", { required: true })}
                  placeholder="বাংলায় বইয়ের ব্যাপারে লিখুন"
                  className="p-2 w-full border h-40 border-primary focus:border-red focus-visible:outline-0"
                ></textarea>
                <textarea
                  {...register("endesc", { required: true })}
                  placeholder="ইংরেজীতে বইয়ের ব্যাপারে লিখুন"
                  className="p-2 w-full border h-40 border-primary focus:border-red focus-visible:outline-0"
                ></textarea>
                <textarea
                  {...register("ardesc", { required: true })}
                  placeholder="আরবীতে বইয়ের ব্যাপারে লিখুন"
                  className="p-2 w-full border h-40 border-primary focus:border-red focus-visible:outline-0"
                ></textarea>
              </div>
            </div>
            {/* ================================pages================================ */}
            <div className="col-span-4">
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  {...register("bnpage", { required: true })}
                  placeholder="বাংলায় বইয়ের পৃষ্ঠা সংখ্যা লিখুন"
                  className="p-2 border border-primary focus:border-red focus-visible::outline-0"
                />
                <input
                  type="text"
                  {...register("enpage", { required: true })}
                  placeholder="ইংরেজীতে বইয়ের পৃষ্ঠা সংখ্যা লিখুন"
                  className="p-2 border border-primary focus:border-red focus-visible::outline-0"
                />
                <input
                  type="text"
                  {...register("arpage", { required: true })}
                  placeholder="আরবীতে বইয়ের পৃষ্ঠা সংখ্যা লিখুন"
                  className="p-2 border border-primary focus:border-red focus-visible::outline-0"
                />
              </div>
            </div>
            {/* ================================Price================================ */}
            <div className="col-span-4">
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  placeholder="বাংলায় বইয়ের দাম লিখুন"
                  {...register("bnprice", { required: true })}
                  className="p-2 border border-primary focus:border-red focus-visible::outline-0"
                />
                <input
                  type="text"
                  placeholder="ইংরেজীতে বইয়ের দাম লিখুন"
                  {...register("enprice", { required: true })}
                  className="p-2 border border-primary focus:border-red focus-visible::outline-0"
                />
                <input
                  type="text"
                  placeholder="আরবীতে বইয়ের দাম লিখুন"
                  {...register("arprice", { required: true })}
                  className="p-2 border border-primary focus:border-red focus-visible::outline-0"
                />
              </div>
            </div>
          </div>

          <div className="col-span-3">
            <button type="submit" className="bg-primary text-white py-2.5 px-8">
              বইটি যুক্ত করুন
            </button>
            <Toaster />
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
