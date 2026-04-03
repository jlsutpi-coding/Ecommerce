import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.carts);
  return (
    <main className="pt-32 px-12 bg-[#f8f9fa] pb-20 max-w-screen-2xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-manrope font-extrabold tracking-tight mb-2">
          Shopping Bag
        </h1>
        <p className="font-inter font-[16px] leading-4 text-[#454652]">
          Review your selected pieces from the Archive.
        </p>
      </header>

      <div className="  grid grid-cols-12 gap-12">
        <div className=" col-span-8  space-y-8">
          {cartItems?.map((cart) => {
            return <CartItem key={cart.id} cart={cart} />;
          })}
        </div>
        <div className="col-span-4 bg-blue-600 "></div>
      </div>
    </main>
  );
};

export default CartPage;
