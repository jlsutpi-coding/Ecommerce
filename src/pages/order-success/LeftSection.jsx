import { TbTruckDelivery } from "react-icons/tb";

import OrderSummary from "../../components/OrderSummary";

const LeftSection = ({
  cartItems,
  totalDiscountedPrice,
  totalAmount,
  totalDiscount,
  orderId,
}) => {
  return (
    <div className=" lg:col-span-8 col-span-1  space-y-4 md:space-y-6 lg:space-y-8">
      <OrderSummary
        page="order-success"
        cartItems={cartItems}
        totalAmount={totalAmount}
        totalDiscount={totalDiscount}
        totalDiscountedPrice={totalDiscountedPrice}
        orderId={orderId}
      />
      <div className="bg-[#f8f9fa] dark:bg-[#222a3d] rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 border border-primary/10">
        <div className="shrink-0">
          <TbTruckDelivery
            aria-hidden="true"
            className="text-4xl dark:text-[#FFB695] dark-transition text-[#8e4d2a]"
          />
        </div>
        <div>
          <h4 className="font-manrope font-bold dark:text-[#DAE2FD] text-[#191C1D] dark-transition">
            Expected arrival in 3–5 business days.
          </h4>
          <p className="text-[#454652] dark-transition dark:text-[#C7C4D8] text-sm mt-1 leading-relaxed">
            A unique tracking identifier will be shared via encrypted
            transmission once your package leaves the vault.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
