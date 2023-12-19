import { createContext, useContext, useEffect, useState } from "react";
import getStoredData from "../CartManagement/CartManagement";
import { AuthContext } from "./AuthProviders";

export const CartContext = createContext([]);

const CartProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/orders?email=${user?.email}`;
  const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   const fetData = () => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setOrders(data));
  //   };
  //   fetData();
  // }, [orders]);

  const handleAddtoCart = (book) => {
    // setCount(count + 1);
    const { _id, title, thumb, price } = book;

    let quantity = 1;

    let bookExist = orders.find((cartItem) => cartItem.bookId === _id);
    if (bookExist) {
      quantity = bookExist.quantity + 1;
    } else {
      const addBookToCart = {
        user: user.email,
        bookId: book._id,
        title,
        price,
        thumb,
        quantity,
      };
      fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addBookToCart),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  const cartInfo = { handleAddtoCart, orders };
  return (
    <CartContext.Provider value={cartInfo}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
