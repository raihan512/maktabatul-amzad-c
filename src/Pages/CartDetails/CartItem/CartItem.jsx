import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import toast from "react-hot-toast";

const CartItem = ({ cart, handleDeleteCartItem }) => {
  const { language } = useContext(ThemeContext);
  let { _id, title, thumb, price, quantity } = cart;

  const [item, setItem] = useState(quantity);

  const handleAddQuantity = (quantity) => {
    setItem(item + 1);
  };
  const handleLessQuantity = (quantity) => {
    if (item > 1) {
      setItem(item - 1);
    }
  };

  return (
    <div className="flex justify-between items-center p-2 border-b border-primary">
      <div className="w-3/12">
        <img src={thumb} className="h-28" alt="" />
      </div>
      <div className="w-4/12">
        <p className="line-clamp-1">{title[language]}</p>
      </div>
      <div className="w-1/12">
        <div className="flex items-center">
          <CiSquarePlus
            className="text-3xl cursor-pointer"
            onClick={() => handleAddQuantity(item)}
          />
          <p className="text-xl font-semibold mx-3">{item}</p>
          <CiSquareMinus
            className="text-3xl cursor-pointer"
            onClick={() => handleLessQuantity(item)}
          />
        </div>
      </div>
      <div className="w-1/12"></div>
      <div className="w-2/12">
        <p>
          Total: {item} X {price[1]} = {item * parseInt(price[1])}
        </p>
      </div>
      <button className="w-1/12" onClick={() => handleDeleteCartItem(_id)}>
        <MdDelete className="ml-auto text-2xl text-red" />
      </button>
    </div>
  );
};

export default CartItem;
