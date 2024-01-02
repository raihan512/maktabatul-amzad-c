import { createContext, useContext, useEffect, useState } from "react";
import getStoredData from "../CartManagement/CartManagement";
import { AuthContext } from "./AuthProviders";
import toast from "react-hot-toast";
import { ThemeContext } from "./ThemeProvider";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const { language } = useContext(ThemeContext);

  const [cart, setCart] = useState([]);

  const handleAddtoCart = (book) => {
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img className="w-10" src={book?.thumb} alt="" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {book?.title[language]}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {language === 0 ? "দাম" : language === 2 ? "السعر" : "Price"}{" "}
                  {book?.price[language]}
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none  p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ),
      { position: "top-right" }
    );
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
