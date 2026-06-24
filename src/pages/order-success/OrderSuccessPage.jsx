import { useLocation, useNavigate } from "react-router";

import Breadcrumb from "../../components/Breadcrumb";
import LeftSection from "./LeftSection";
import OrderSuccessHeader from "./OrderSuccessHeader";
import RightSection from "./RightSection";
import { useState } from "react";
import { useEffect } from "react";

const OrderSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(() => {
    let data = location.state?.orderData;

    if (data) return data;
    const stored = localStorage.getItem("orderDetails");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (!orderData) {
      navigate("/");
    }
  }, [orderData]);

  return (
    <main className=" max-w-screen-2xl pt-22 lg:pt-32  px-4 md:px-6 lg:px-8 xl:px-12 bg-white dark:bg-[#0B1326] dark-transition pb-10 lg:pb-20 mx-auto">
      <Breadcrumb />
      <OrderSuccessHeader />
      <div className="grid lg:grid-cols-12 gap-4  lg:gap-12 items-start">
        <LeftSection
          cartItems={orderData.cartItems}
          totalAmount={orderData.totalAmount}
          totalDiscount={orderData.totalDiscount}
          totalDiscountedPrice={orderData.totalDiscountedPrice}
          orderId={orderData.orderId}
        />
        <RightSection
          fullname={orderData.fullname}
          email={orderData.email}
          shippingAddress={orderData.shippingAddress}
        />
      </div>
    </main>
  );
};

export default OrderSuccessPage;
