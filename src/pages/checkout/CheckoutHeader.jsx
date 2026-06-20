import { useSelector } from "react-redux";

import TitleSection from "../../components/TitleSection";

const CheckoutHeader = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <div className="flex justify-between items-baseline">
      <TitleSection title="Your Selection" />
      <div>
        <span className="font-inter text-xs uppercase dark:text-[#c7c4d8] dark-transition tracking-widest">
          {cartItems.length < 10 ? "0" + cartItems.length : cartItems.length}
          Items
        </span>
      </div>
    </div>
  );
};

export default CheckoutHeader;
