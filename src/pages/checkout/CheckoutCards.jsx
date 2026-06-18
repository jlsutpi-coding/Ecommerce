import { useSelector } from "react-redux";
import CheckoutCard from "./CheckoutCard";

const CheckoutCards = () => {
  const { cartItems, totalDiscountedPrice } = useSelector(
    (state) => state.cart,
  );
  const total = totalDiscountedPrice ?? 0;
  const sameKeyClass =
    "font-normal text-sm lg:text-base leading-6 font-inter text-[#454652] dark-transition dark:text-[#C7C4D8]";

  return (
    <div className="rounded-xl mb-10 bg-[#f8f9fa] dark:bg-[#0B1326] overflow-hidden">
      <div role="list">
        {cartItems?.length === 0 ? (
          <p className="p-4 text-center">Your cart is empty.</p>
        ) : (
          cartItems?.map((cart) => <CheckoutCard key={cart.id} cart={cart} />)
        )}
      </div>
      <div className=" flex flex-col p-3 md:p-4 lg:p-6 gap-4">
        <div className="flex justify-between">
          <p className={sameKeyClass}>Subtotal</p>
          <p className={sameKeyClass}> ${total.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className={sameKeyClass}>Shipping</p>
          <p className={sameKeyClass}>Complimentary</p>
        </div>
        <div className="h-px bg-[#464555]/20 my-2"></div>
        <div className="flex justify-between items-baseline">
          <p className="text-base lg:text-lg text-[#191C1D] dark-transition dark:text-[#DAE2FD] font-bold font-manrope leading-7">
            Total
          </p>
          <p className="text-xl lg:text-2xl text-primary dark-transition dark:text-[#DAE2FD] font-semibold font-inter leading-8">
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCards;
