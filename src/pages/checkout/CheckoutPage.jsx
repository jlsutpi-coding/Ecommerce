import { useSelector } from "react-redux";

import Breadcrumb from "../../components/Breadcrumb";
import OrderSummary from "../../components/OrderSummary";
import CheckoutHeader from "./CheckoutHeader";
import ShippingPayment from "./ShippingPayment";

const CheckoutPage = () => {
  const { cartItems, totalDiscountedPrice, totalAmount, totalDiscount } =
    useSelector((state) => state.cart);
  return (
    <main className=" w-[90%] lg:w-[70%] pt-22 lg:pt-32 dark:bg-[#0B1326] dark-transition pb-10 lg:pb-20 mx-auto">
      <Breadcrumb />
      <CheckoutHeader />
      <OrderSummary
        cartItems={cartItems}
        totalAmount={totalAmount}
        totalDiscount={totalDiscount}
        totalDiscountedPrice={totalDiscountedPrice}
      />
      <ShippingPayment
        cartItems={cartItems}
        totalAmount={totalAmount}
        totalDiscount={totalDiscount}
        totalDiscountedPrice={totalDiscountedPrice}
      />
    </main>
  );
};

export default CheckoutPage;
