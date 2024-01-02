import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import CartItem from "./CartItem/CartItem";
import PrimaryBtn from "../../Components/Buttons/PrimaryBtn";
import { CartContext } from "../../Providers/CartProviders";

const CartDetails = () => {
  const { user } = useContext(AuthContext);
  const { cart, handleDeleteCartItem } = useContext(CartContext);

  const totlaPrice = cart.reduce(
    (acc, curr) => acc + parseInt(curr.price[1] * curr.quantity),
    0
  );
  const grandTotal = totlaPrice + 50 + 0;
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <h3 className="text-2xl md:text-4xl lg:text-4xl font-bold text-primary text-center mt-5 mb-10">
          My cart details
        </h3>

        <div className="grid grid-cols-1 border border-primary border-b-0">
          {cart?.map((cartItem) => (
            <CartItem
              key={cartItem?._id}
              cart={cartItem}
              handleDeleteCartItem={handleDeleteCartItem}
            ></CartItem>
          ))}
        </div>

        <div className="my-5 md:w-6/12 lg:4/12 ml-auto">
          <div className="my-2 flex justify-between">
            <p>Total Price</p>
            <p>{totlaPrice} TK</p>
          </div>
          <div className="my-2 flex justify-between">
            <p>Delivery Charge</p>
            <p>50 TK</p>
          </div>
          <div className="my-2 flex justify-between">
            <p>Discount</p>
            <p>0 TK</p>
          </div>
          <div className="my-2 flex justify-between border-t border-primary">
            <p>Grand Total</p>
            <p>{grandTotal} TK</p>
          </div>
          <PrimaryBtn>Confirm Order</PrimaryBtn>
        </div>
      </div>
    </section>
  );
};

export default CartDetails;
