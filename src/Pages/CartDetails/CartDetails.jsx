import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import CartItem from "./CartItem/CartItem";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import { CartContext } from "../../Providers/CartProviders";

const CartDetails = () => {
  const { user } = useContext(AuthContext);
  const { orders } = useContext(CartContext);
  console.log(orders.length);
  // const [orders, setOrders] = useState([]);
  // useEffect(() => {
  //   fetch(`http://localhost:5000/orders?email=${user.email}`, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem(
  //         "maktabatul-amzad-token"
  //       )}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setOrders(data));
  // }, []);

  // const handleDeleteOrderItem = (id) => {
  //   fetch(`http://localhost:5000/orders/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount > 0) {
  //         const remainingOrders = orders.filter((order) => order._id !== id);
  //         setOrders(remainingOrders);
  //       }
  //     });
  // };

  // const totlaPrice = orders.reduce((init, order) => init + order.price, 0);
  // const grandTotal = totlaPrice + 50 + 0;
  return (
    <section className="min-h-screen">
      {/* <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8"> */}
      <h3 className="text-2xl md:text-4xl lg:text-4xl font-bold text-primary text-center mt-5 mb-10">
        My cart details
      </h3>
      {/*
        <div className="grid grid-cols-1 border border-primary border-b-0">
          {orders.map((order) => (
            <CartItem
              key={order._id}
              order={order}
              handleDeleteOrderItem={handleDeleteOrderItem}
            ></CartItem>
          ))}
        </div> */}

      {/* <div className="my-5 md:w-6/12 lg:4/12 ml-auto">
          <div className="my-2 flex justify-between">
            <p>Total Price</p>
            <p>{totlaPrice}$</p>
          </div>
          <div className="my-2 flex justify-between">
            <p>Delivery Charge</p>
            <p>50$</p>
          </div>
          <div className="my-2 flex justify-between">
            <p>Discount</p>
            <p>0$</p>
          </div>
          <div className="my-2 flex justify-between border-t border-primary">
            <p>Grand Total</p>
            <p>{grandTotal}</p>
          </div>
          <PrimaryBtn>Proceed To Ceckout</PrimaryBtn> */}
      {/* </div>
      </div> */}
    </section>
  );
};

export default CartDetails;
