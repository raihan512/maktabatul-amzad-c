import { useContext, useEffect, useState } from "react";
import InputField from "../../../Components/InputField";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { json } from "react-router-dom";

const AddBook = () => {
  const { language } = useContext(ThemeContext);
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
    fetch("", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ mainCategory: selectedCategory }),
    })
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, [selectedCategory]);

  const handleChangeCategory = (event) => {
    const value = event.target.value;
    setSelectedCategory(value);
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const price = form.price.value;
    console.log(name, price);

    fetch("https://maktabatul-amzad-server.onrender.com/api/addbook", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <form
          onSubmit={handleAddBook}
          className="grid grid-cols-3 gap-5 w-[60%] mx-auto my-20"
        >
          {/* Inpit Filed */}
          <div className="col-span-3">
            <label htmlFor="bookname-bangla">বইয়ের নাম বাংলায় লেখুন</label>
            <input
              type="text"
              name="name"
              id="bookname-bangla"
              placeholder="যেমনঃ আল-হিদায়াহ"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          {/* Inpit Filed */}
          <div className="col-span-3">
            <label htmlFor="bookname-eng">বইয়ের নাম ইংরেজিতে লেখুন</label>
            <input
              type="text"
              name=""
              id="bookname-eng"
              placeholder="Like: Al-Hidayah"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          {/* Inpit Filed */}
          <div className="col-span-3">
            <label htmlFor="bookname-eng">বইয়ের নাম আরবীতে লেখুন</label>
            <input
              type="text"
              name=""
              id="bookname-eng"
              placeholder="لا يوجد: الهداية"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          {/* ================================Writers name================================ */}
          {/* Inpit Filed */}
          <p className="col-span-3 mx-auto">
            লেখকের নাম বাংলা, ইংরেজি ও আরবীতে লেখুন
          </p>
          <div className="col-span-1">
            <input
              type="text"
              name=""
              placeholder="বাংলা"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name=""
              placeholder="English"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name=""
              placeholder="جدا"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          {/* ================================Publishers name================================ */}
          {/* Inpit Filed */}
          <p className="col-span-3 mx-auto">
            প্রকাশকের নাম বাংলা, ইংরেজি ও আরবীতে লেখুন
          </p>
          <div className="col-span-1">
            <input
              type="text"
              name=""
              placeholder="বাংলা"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name=""
              placeholder="English"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          <div className="col-span-1">
            <input
              type="text"
              name=""
              placeholder="جدا"
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
            />
          </div>
          {/* ================================category name================================ */}
          {/* Inpit Filed */}
          <p className="col-span-3 mx-auto">
            বিষয়ের সিলেক্ট করুন নাম বাংলা, ইংরেজি ও আরবীতে লেখুন
          </p>
          <div className="col-span-1">
            <select
              className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0"
              onChange={handleChangeCategory}
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
          {/* ================================Sub Category name================================ */}
          <div className="col-span-1">
            {/* <select className="w-full border py-1 px-2 border-primary focus:border-red focus-visible:outline-0">
              {subOfCategory.map((subCategory) => (
                <option
                  value={subCategory.subCategoryId}
                  key={subCategory.subCategoryId}
                >
                  {subCategory.name[language]}
                </option>
              ))}
            </select> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddBook;
