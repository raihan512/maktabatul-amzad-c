import { createContext, useContext, useEffect, useState } from "react";
import getStoredData from "../CartManagement/CartManagement";
import { AuthContext } from "./AuthProviders";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);

  const demo = [
    {
      _id: "65814c5c1b86d8edca1267ee",
      title: ["ইমাম আবু জাফর ত্হাভী", "Aqidatut tohavi", "عقيدة الطحاوي"],
      writer: ["writer02"],
      translator: [],
      editor: ["editor02"],
      publisher: "publisher01",
      publisherCountry: ["বাংলাদেশ", "Bangladesh", "بنغلاديش"],
      category: "category2",
      subCategory: "category2sub1",
      thumb:
        "https://www.noor-book.com/publice/covers_cache_webp/1/b/a/f/31ae885713baf14fc47c00fff34f704d.jpg.webp",
      price: ["২০০", "200", "۲۰۰"],
      pages: ["২০", "20", "۲۰"],
      stock: 20,
      status: false,
      desc: [
        "স্বপ্ন-ষড়যন্ত্র-দাসত্ব-দুর্ভিক্ষ-রাজত্ব—কী দারুণ এক সত্য আখ্যান! বাধা-বিপত্তির দেয়াল পেরিয়ে মঞ্জিলে পৌঁছার এই অসাধারণ গল্প কোটি হৃদয়কে উজ্জীবিত করছে শত সহস্র বছর ধরে। হতাশার পাহাড় মাড়িয়ে আশার আলো জ্বালিয়ে দেওয়ার এ গল্প আজকের প্রজন্মকেও স্পর্শ করে খুব। লালসার সমুদ্রে এ যেন পবিত্র একফোঁটা স্বচ্ছ জলবিন্দু! ইউসুফ আলাইহিস সালাম আমাদের বিজয়ী মহানায়ক, বিশ্বাসীদের নকিব। সূরা ইউসুফ আমাদের প্রত্যাশিত জীবনের এক অনন্য রিফ্লেকশন।",
        "Dream-conspiracy-slavery-famine-reign—what a great true story! This extraordinary story of crossing the walls of obstacles and reaching the destination has been enlivening millions of hearts for hundreds of thousands of years. This story of breaking the mountain of despair and lighting the light of hope touches today's generation too. In the sea of lust, this is like a holy drop of clear water! Yusuf Alaihis Salam is our victorious hero, Naqeeb of the believers. Surah Yusuf is a unique reflection of our expected life.",
        "حلم، مؤامرة، عبودية، مجاعة، حكم، يا لها من قصة حقيقية عظيمة! هذه القصة الاستثنائية لعبور أسوار العوائق والوصول إلى الوجهة قد ساهمت في إحياء ملايين القلوب لمئات الآلاف من السنين. إن قصة كسر جبل اليأس وإضاءة نور الأمل تمس جيل اليوم أيضًا. في بحر الشهوة، هذا مثل قطرة ماء صافية مقدسة! يوسف عليه السلام هو بطلنا المنتصر نقيب المؤمنين. سورة يوسف هي انعكاس فريد لحياتنا المتوقعة.",
      ],
      quantity: 4,
    },
    {
      _id: "65814c5c1b86d8edca1267f0",
      title: ["আল-হিদায়াহ", "Al-hidayah", "الهداية"],
      writer: ["writer01", "writer04"],
      translator: [],
      editor: ["editor01"],
      publisher: "publisher01",
      publisherCountry: ["বাংলাদেশ", "Bangladesh", "بنغلاديش"],
      category: "category10",
      subCategory: "category3sub1",
      thumb:
        "https://www.noor-book.com/publice/covers_cache_webp/1/a/2/1/bb6449e969a2117cdc260159f9db1aa0.jpg.webp",
      price: ["২০০০", "2000", "۲۰۰۰"],
      pages: ["২০০", "200", "۲۰۰"],
      stock: 20,
      status: true,
      desc: [
        "স্বপ্ন-ষড়যন্ত্র-দাসত্ব-দুর্ভিক্ষ-রাজত্ব—কী দারুণ এক সত্য আখ্যান! বাধা-বিপত্তির দেয়াল পেরিয়ে মঞ্জিলে পৌঁছার এই অসাধারণ গল্প কোটি হৃদয়কে উজ্জীবিত করছে শত সহস্র বছর ধরে। হতাশার পাহাড় মাড়িয়ে আশার আলো জ্বালিয়ে দেওয়ার এ গল্প আজকের প্রজন্মকেও স্পর্শ করে খুব। লালসার সমুদ্রে এ যেন পবিত্র একফোঁটা স্বচ্ছ জলবিন্দু! ইউসুফ আলাইহিস সালাম আমাদের বিজয়ী মহানায়ক, বিশ্বাসীদের নকিব। সূরা ইউসুফ আমাদের প্রত্যাশিত জীবনের এক অনন্য রিফ্লেকশন।",
        "Dream-conspiracy-slavery-famine-reign—what a great true story! This extraordinary story of crossing the walls of obstacles and reaching the destination has been enlivening millions of hearts for hundreds of thousands of years. This story of breaking the mountain of despair and lighting the light of hope touches today's generation too. In the sea of lust, this is like a holy drop of clear water! Yusuf Alaihis Salam is our victorious hero, Naqeeb of the believers. Surah Yusuf is a unique reflection of our expected life.",
        "حلم، مؤامرة، عبودية، مجاعة، حكم، يا لها من قصة حقيقية عظيمة! هذه القصة الاستثنائية لعبور أسوار العوائق والوصول إلى الوجهة قد ساهمت في إحياء ملايين القلوب لمئات الآلاف من السنين. إن قصة كسر جبل اليأس وإضاءة نور الأمل تمس جيل اليوم أيضًا. في بحر الشهوة، هذا مثل قطرة ماء صافية مقدسة! يوسف عليه السلام هو بطلنا المنتصر نقيب المؤمنين. سورة يوسف هي انعكاس فريد لحياتنا المتوقعة.",
      ],
      quantity: 3,
    },
    {
      _id: "65814c5c1b86d8edca1267ef",
      title: ["দিওয়ানে মতানাব্বি", "Diwanul Motanabbi", "الديوان للمتنبي"],
      writer: ["writer03"],
      translator: [],
      editor: ["editor03"],
      publisher: "publisher01",
      publisherCountry: ["বাংলাদেশ", "Bangladesh", "بنغلاديش"],
      category: "category2",
      subCategory: "category2sub2",
      thumb:
        "https://www.noor-book.com/publice/covers_cache_webp/1/b/a/f/31ae885713baf14fc47c00fff34f704d.jpg.webp",
      price: ["২০০", "250", "۲٥۰"],
      pages: ["৮০", "80", "۸۰"],
      stock: 20,
      status: true,
      desc: [
        "স্বপ্ন-ষড়যন্ত্র-দাসত্ব-দুর্ভিক্ষ-রাজত্ব—কী দারুণ এক সত্য আখ্যান! বাধা-বিপত্তির দেয়াল পেরিয়ে মঞ্জিলে পৌঁছার এই অসাধারণ গল্প কোটি হৃদয়কে উজ্জীবিত করছে শত সহস্র বছর ধরে। হতাশার পাহাড় মাড়িয়ে আশার আলো জ্বালিয়ে দেওয়ার এ গল্প আজকের প্রজন্মকেও স্পর্শ করে খুব। লালসার সমুদ্রে এ যেন পবিত্র একফোঁটা স্বচ্ছ জলবিন্দু! ইউসুফ আলাইহিস সালাম আমাদের বিজয়ী মহানায়ক, বিশ্বাসীদের নকিব। সূরা ইউসুফ আমাদের প্রত্যাশিত জীবনের এক অনন্য রিফ্লেকশন।",
        "Dream-conspiracy-slavery-famine-reign—what a great true story! This extraordinary story of crossing the walls of obstacles and reaching the destination has been enlivening millions of hearts for hundreds of thousands of years. This story of breaking the mountain of despair and lighting the light of hope touches today's generation too. In the sea of lust, this is like a holy drop of clear water! Yusuf Alaihis Salam is our victorious hero, Naqeeb of the believers. Surah Yusuf is a unique reflection of our expected life.",
        "حلم، مؤامرة، عبودية، مجاعة، حكم، يا لها من قصة حقيقية عظيمة! هذه القصة الاستثنائية لعبور أسوار العوائق والوصول إلى الوجهة قد ساهمت في إحياء ملايين القلوب لمئات الآلاف من السنين. إن قصة كسر جبل اليأس وإضاءة نور الأمل تمس جيل اليوم أيضًا. في بحر الشهوة، هذا مثل قطرة ماء صافية مقدسة! يوسف عليه السلام هو بطلنا المنتصر نقيب المؤمنين. سورة يوسف هي انعكاس فريد لحياتنا المتوقعة.",
      ],
      quantity: 1,
    },
    {
      _id: "65814c5c1b86d8edca1267f1",
      title: ["ইমাম আবু জাফর ত্হাভী", "Aqidatut tohavi", "عقيدة الطحاوي"],
      writer: ["writer02"],
      translator: [],
      editor: ["editor02"],
      publisher: "publisher01",
      publisherCountry: ["বাংলাদেশ", "Bangladesh", "بنغلاديش"],
      category: "category9",
      subCategory: "category3sub2",
      thumb:
        "https://www.noor-book.com/publice/covers_cache_webp/1/b/a/f/31ae885713baf14fc47c00fff34f704d.jpg.webp",
      price: ["২০০", "200", "۲۰۰"],
      pages: ["২০", "20", "۲۰"],
      stock: 20,
      status: true,
      desc: [
        "স্বপ্ন-ষড়যন্ত্র-দাসত্ব-দুর্ভিক্ষ-রাজত্ব—কী দারুণ এক সত্য আখ্যান! বাধা-বিপত্তির দেয়াল পেরিয়ে মঞ্জিলে পৌঁছার এই অসাধারণ গল্প কোটি হৃদয়কে উজ্জীবিত করছে শত সহস্র বছর ধরে। হতাশার পাহাড় মাড়িয়ে আশার আলো জ্বালিয়ে দেওয়ার এ গল্প আজকের প্রজন্মকেও স্পর্শ করে খুব। লালসার সমুদ্রে এ যেন পবিত্র একফোঁটা স্বচ্ছ জলবিন্দু! ইউসুফ আলাইহিস সালাম আমাদের বিজয়ী মহানায়ক, বিশ্বাসীদের নকিব। সূরা ইউসুফ আমাদের প্রত্যাশিত জীবনের এক অনন্য রিফ্লেকশন।",
        "Dream-conspiracy-slavery-famine-reign—what a great true story! This extraordinary story of crossing the walls of obstacles and reaching the destination has been enlivening millions of hearts for hundreds of thousands of years. This story of breaking the mountain of despair and lighting the light of hope touches today's generation too. In the sea of lust, this is like a holy drop of clear water! Yusuf Alaihis Salam is our victorious hero, Naqeeb of the believers. Surah Yusuf is a unique reflection of our expected life.",
        "حلم، مؤامرة، عبودية، مجاعة، حكم، يا لها من قصة حقيقية عظيمة! هذه القصة الاستثنائية لعبور أسوار العوائق والوصول إلى الوجهة قد ساهمت في إحياء ملايين القلوب لمئات الآلاف من السنين. إن قصة كسر جبل اليأس وإضاءة نور الأمل تمس جيل اليوم أيضًا. في بحر الشهوة، هذا مثل قطرة ماء صافية مقدسة! يوسف عليه السلام هو بطلنا المنتصر نقيب المؤمنين. سورة يوسف هي انعكاس فريد لحياتنا المتوقعة.",
      ],
      quantity: 1,
    },
    {
      _id: "65814c5c1b86d8edca1267f3",
      title: ["আল-হিদায়াহ", "Al-hidayah", "الهداية"],
      writer: ["writer02", "writer03"],
      translator: [],
      editor: ["editor02", "editor03", "editor01"],
      publisher: "publisher01",
      publisherCountry: ["বাংলাদেশ", "Bangladesh", "بنغلاديش"],
      category: "category7",
      subCategory: "category3sub3",
      thumb:
        "https://www.noor-book.com/publice/covers_cache_webp/1/a/2/1/bb6449e969a2117cdc260159f9db1aa0.jpg.webp",
      price: ["২০০০", "2000", "۲۰۰۰"],
      pages: ["২০০", "200", "۲۰۰"],
      stock: 20,
      status: true,
      desc: [
        "স্বপ্ন-ষড়যন্ত্র-দাসত্ব-দুর্ভিক্ষ-রাজত্ব—কী দারুণ এক সত্য আখ্যান! বাধা-বিপত্তির দেয়াল পেরিয়ে মঞ্জিলে পৌঁছার এই অসাধারণ গল্প কোটি হৃদয়কে উজ্জীবিত করছে শত সহস্র বছর ধরে। হতাশার পাহাড় মাড়িয়ে আশার আলো জ্বালিয়ে দেওয়ার এ গল্প আজকের প্রজন্মকেও স্পর্শ করে খুব। লালসার সমুদ্রে এ যেন পবিত্র একফোঁটা স্বচ্ছ জলবিন্দু! ইউসুফ আলাইহিস সালাম আমাদের বিজয়ী মহানায়ক, বিশ্বাসীদের নকিব। সূরা ইউসুফ আমাদের প্রত্যাশিত জীবনের এক অনন্য রিফ্লেকশন।",
        "Dream-conspiracy-slavery-famine-reign—what a great true story! This extraordinary story of crossing the walls of obstacles and reaching the destination has been enlivening millions of hearts for hundreds of thousands of years. This story of breaking the mountain of despair and lighting the light of hope touches today's generation too. In the sea of lust, this is like a holy drop of clear water! Yusuf Alaihis Salam is our victorious hero, Naqeeb of the believers. Surah Yusuf is a unique reflection of our expected life.",
        "حلم، مؤامرة، عبودية، مجاعة، حكم، يا لها من قصة حقيقية عظيمة! هذه القصة الاستثنائية لعبور أسوار العوائق والوصول إلى الوجهة قد ساهمت في إحياء ملايين القلوب لمئات الآلاف من السنين. إن قصة كسر جبل اليأس وإضاءة نور الأمل تمس جيل اليوم أيضًا. في بحر الشهوة، هذا مثل قطرة ماء صافية مقدسة! يوسف عليه السلام هو بطلنا المنتصر نقيب المؤمنين. سورة يوسف هي انعكاس فريد لحياتنا المتوقعة.",
      ],
      quantity: 1,
    },
  ];
  const [cart, setCart] = useState(demo);
  console.log(cart);

  const handleAddtoCart = (book) => {
    const { _id, title, thumb, price } = book;
    const existCart = cart.find((cartItem) => cartItem._id === book._id);
    if (existCart) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item._id === book._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it with quantity 1
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  const handleDeleteCartItem = (bookId) => {
    const remainingcart = cart.filter((cartItem) => cartItem._id !== bookId);
    setCart(remainingcart);
  };

  const cartInfo = { handleAddtoCart, cart, handleDeleteCartItem };

  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
