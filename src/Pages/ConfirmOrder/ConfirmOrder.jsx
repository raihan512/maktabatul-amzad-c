import React, { useContext } from "react";
import { CartContext } from "../../Providers/CartProviders";
import { ThemeContext } from "../../Providers/ThemeProvider";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ConfirmOrder() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const { language } = useContext(ThemeContext);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const totlaPrice = cart.reduce(
    (acc, curr) => acc + parseInt(curr.price[1] * curr.quantity),
    0
  );

  const cartString = cart
    .map(
      (item) =>
        `
        ------------ বইঃ${item.title[0]}, দামঃ ${item.price[1]} ,আইটেম ${
          item.quantity
        } টি,
        টোটাল= ${item.quantity * parseInt(item.price[1])} টাকা ------------`
    )
    .join("");
  const onSubmit = async (data) => {
    (data.userAddress = `District - ${data.district}, City - ${data.city}, Zip - ${data.zip}, details - ${data.address}`),
      (data.orders = cartString),
      await emailjs
        .send("service_q6slppb", "template_yc3f2uv", data, "wXgPau5omAtnc_a3Z")
        .then(
          (result) => {
            toast.success("Order successfully Confirmed");
            navigate("/");
            setCart([]);
          },
          (error) => {
            toast.fail("Order failed. Try again");
          }
        );
  };
  return (
    <section className="min-h-screen">
      <div className="container mx-auto px-0.5 sm:px-3 md:px-0 mb-8">
        <div className="md:flex justify-between my-5">
          {/* Cart Summary */}
          <div className="md:w-4/12">
            <p className="text-xl font-semibold mb-5">Order Summary</p>
            <div className="h-[350px] overflow-y-scroll">
              {cart.map((cartitem) => (
                <div key={cartitem._id} className="flex items-center mb-5">
                  <img src={cartitem.thumb} className="w-20 mr-2" alt="" />
                  <div>
                    <p className="font-semibold">{cartitem.title[language]}</p>
                    <p>
                      <span className="mr-2">Price:</span>
                      {cartitem.price[language]}
                    </p>
                    <p>
                      <span className="mr-2">Items:</span>
                      {cartitem.quantity}
                    </p>
                    <p>
                      <span className="mr-2">Total Price:</span>
                      {cartitem.quantity * parseInt(cartitem.price[1])}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-5 border-t border-primary">
              <p>TotalPrice</p>
              <p className="mr-5">{totlaPrice} TK</p>
            </div>
          </div>
          {/* Billing address */}
          <div className="mt-5 md:mt-0 md:w-7/12">
            <p className="text-xl font-semibold mb-5">Billing Address</p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-5">
                <label htmlFor="">Name</label>
                <input
                  className="py-1 px-3 border w-full"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red text-sm">
                    First name is required
                  </p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="">Email</label>
                  <input
                    className="py-1 px-3 border w-full"
                    {...register("mail")}
                  />
                  {errors.mail && (
                    <p role="alert" className="text-red text-sm">
                      {errors.mail.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="">Phone</label>
                  <input
                    className="py-1 px-3 border w-full"
                    {...register("phone", {
                      required: "Phone number is required",
                    })}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                  {errors.phone && (
                    <p role="alert" className="text-red text-sm">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-5 mb-5">
                {/* District */}
                <div>
                  <p>District</p>
                  <select
                    {...register("district", { required: true })}
                    className="py-1 px-3 border capitalize w-full"
                  >
                    <option value="dhaka" className="capitalize">
                      dhaka
                    </option>
                    <option value="rajshahi" className="capitalize">
                      rajshahi
                    </option>
                    <option value="barisal" className="capitalize">
                      barisal
                    </option>
                    <option value="comilla" className="capitalize">
                      comilla
                    </option>
                    <option value="maymensingh" className="capitalize">
                      maymensingh
                    </option>
                    <option value="rangpur" className="capitalize">
                      rangpur
                    </option>
                    <option value="sylhet" className="capitalize">
                      sylhet
                    </option>
                    <option value="khulna" className="capitalize">
                      khulna
                    </option>
                  </select>
                </div>
                {/* City */}
                <div>
                  <label htmlFor="">City</label>
                  <input
                    className="py-1 px-3 border w-full"
                    {...register("city", { required: true })}
                    aria-invalid={errors.city ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert" className="text-red text-sm">
                      City name is required
                    </p>
                  )}
                </div>
                {/* Zip */}
                <div>
                  <label htmlFor="">Zip</label>
                  <input
                    className="py-1 px-3 border w-full"
                    {...register("zip", { required: true })}
                    aria-invalid={errors.zip ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <p role="alert" className="text-red text-sm">
                      ZIP code is required
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="">Address Details</label>
                <input
                  className="py-1 px-3 border w-full"
                  {...register("address", { required: true })}
                  aria-invalid={errors.address ? "true" : "false"}
                />
                {errors.name?.type === "required" && (
                  <p role="alert" className="text-red text-sm">
                    address is required
                  </p>
                )}
              </div>

              <input
                type="submit"
                value="Confirm Order"
                className="py-2 px-8 bg-primary text-white mt-5 cursor-pointer"
              />
              <Toaster />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
