import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const CartItem = ({ cart, handleDeleteCartItem }) => {
  const { language } = useContext(ThemeContext);
  const { _id, title, thumb, price, quantity } = cart;
  return (
    <div className="flex justify-between items-center p-2 border-b border-primary">
      <div className="w-3/12">
        <img src={thumb} className="h-28" alt="" />
      </div>
      <div className="w-6/12">
        <p className="line-clamp-1">{title[language]}</p>
        <p>Price: {price[language]} Taka</p>
        <p>Quantity: {quantity}</p>
        <p>
          Total: {quantity} X {price[1]} = {quantity * parseInt(price[1])}
        </p>
      </div>
      <button className="w-3/12" onClick={() => handleDeleteCartItem(_id)}>
        <MdDelete className="ml-auto text-2xl text-red" />
      </button>
    </div>
  );
};

export default CartItem;
