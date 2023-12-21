import { useContext, useEffect, useState } from "react";
import InputField from "../../../Components/InputField";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { json } from "react-router-dom";
import { data } from "autoprefixer";
import { useForm } from "react-hook-form";

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
          } = data;
          const newBook = {
            title: [bookbangla, bookenglish, bookarabic],
            thumb: imageUrl,
            category: category,
            subCategory: subcategory,
            publisher: publisher,
            publisherCountry: ["বাংলাদেশ", "Bangladesh", "بنغلاديش"],
            price: ["২০০", "200", "۲۰۰"],
            pages: ["২০", "20", "۲۰"],
            editor: ["editor02"],
            writer: [writer],
            desc: [
              "স্বপ্ন-ষড়যন্ত্র-দাসত্ব-দুর্ভিক্ষ-রাজত্ব—কী দারুণ এক সত্য আখ্যান! বাধা-বিপত্তির দেয়াল পেরিয়ে মঞ্জিলে পৌঁছার এই অসাধারণ গল্প কোটি হৃদয়কে উজ্জীবিত করছে শত সহস্র বছর ধরে। হতাশার পাহাড় মাড়িয়ে আশার আলো জ্বালিয়ে দেওয়ার এ গল্প আজকের প্রজন্মকেও স্পর্শ করে খুব। লালসার সমুদ্রে এ যেন পবিত্র একফোঁটা স্বচ্ছ জলবিন্দু! ইউসুফ আলাইহিস সালাম আমাদের বিজয়ী মহানায়ক, বিশ্বাসীদের নকিব। সূরা ইউসুফ আমাদের প্রত্যাশিত জীবনের এক অনন্য রিফ্লেকশন।",
              "Dream-conspiracy-slavery-famine-reign—what a great true story! This extraordinary story of crossing the walls of obstacles and reaching the destination has been enlivening millions of hearts for hundreds of thousands of years. This story of breaking the mountain of despair and lighting the light of hope touches today's generation too. In the sea of lust, this is like a holy drop of clear water! Yusuf Alaihis Salam is our victorious hero, Naqeeb of the believers. Surah Yusuf is a unique reflection of our expected life.",
              "حلم، مؤامرة، عبودية، مجاعة، حكم، يا لها من قصة حقيقية عظيمة! هذه القصة الاستثنائية لعبور أسوار العوائق والوصول إلى الوجهة قد ساهمت في إحياء ملايين القلوب لمئات الآلاف من السنين. إن قصة كسر جبل اليأس وإضاءة نور الأمل تمس جيل اليوم أيضًا. في بحر الشهوة، هذا مثل قطرة ماء صافية مقدسة! يوسف عليه السلام هو بطلنا المنتصر نقيب المؤمنين. سورة يوسف هي انعكاس فريد لحياتنا المتوقعة.",
            ],
          };

          // addbook
          fetch("https://maktabatul-amzad-server.onrender.com/api/addbook", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newBook),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));
        }
      });
  };
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-3 gap-5 w-[60%] mx-auto my-20"
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
          </div>

          <div className="col-span-3">
            <button type="submit">Add Book</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
