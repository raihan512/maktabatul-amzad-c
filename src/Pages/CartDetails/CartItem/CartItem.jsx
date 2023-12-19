import { MdDelete } from "react-icons/md";

const CartItem = ({ order, handleDeleteOrderItem }) => {
  const { _id, title, thumb, price } = order;
  return (
    <div className="flex justify-between items-center p-2 border-b border-primary">
      <div className="w-3/12">
        <img src={thumb} className="h-28" alt="" />
      </div>
      <div className="w-6/12">
        <p className="line-clamp-1">{title[1]}</p>
        <p>Price: ${price}</p>
        <p>Quantity: 2</p>
      </div>
      <button className="w-3/12" onClick={() => handleDeleteOrderItem(_id)}>
        <MdDelete className="ml-auto text-2xl text-red" />
      </button>
    </div>
  );
};

export default CartItem;
