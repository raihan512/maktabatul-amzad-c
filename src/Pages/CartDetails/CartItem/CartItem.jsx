import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import toast from "react-hot-toast";
import { CartContext } from "../../../Providers/CartProviders";

const CartItem = ({
  cart,
  handleDeleteItem,
  quantityChanged,
  setQuantityChanged,
}) => {
  const { cart: storedCart, setCart } = useContext(CartContext);
  const { language } = useContext(ThemeContext);
  let { _id, title, thumb, price, quantity } = cart;

  const [item, setItem] = useState(quantity);

  const handleAddQuantity = () => {
    const selectedItem = storedCart.find((cartItem) => cartItem._id === _id);
    selectedItem.quantity += 1;
    setItem(item + 1);
    setCart(storedCart);
    setQuantityChanged(quantityChanged + 1);
  };
  const handleLessQuantity = () => {
    if (item > 1) {
      const selectedItem = storedCart.find((cartItem) => cartItem._id === _id);
      selectedItem.quantity -= 1;
      setItem(item - 1);
      setCart(storedCart);
      setQuantityChanged(quantityChanged + 1);
    }
  };
  return (
    <div className="md:grid grid-cols-12 gap-5 p-2 border-b border-primary">
      <div className="col-span-2">
        <img src={thumb} className="h-20" alt="" />
      </div>
      <div className="col-span-3">
        <p className="line-clamp-1">{title[language]}</p>
        <p>Price: {price[language]} TAKA</p>
      </div>
      <div className="col-span-2">
        <div className="flex items-center">
          <CiSquarePlus
            className="text-3xl cursor-pointer"
            onClick={handleAddQuantity}
          />
          <p className="text-xl font-semibold mx-3">{quantity}</p>
          <CiSquareMinus
            className="text-3xl cursor-pointer"
            onClick={handleLessQuantity}
          />
        </div>
      </div>
      <div className="col-span-3">
        <p className="font-semibold">
          Total: {item} X {price[1]} = {item * parseInt(price[1])}
        </p>
      </div>
      <div className="col-span-2 text-right">
        <button className="" onClick={() => handleDeleteItem(_id)}>
          <MdDelete className="text-2xl text-red" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
