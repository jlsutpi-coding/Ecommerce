import OrderSummaryCard from "./OrderSummaryCard";

const OrderSummary = ({
  page,
  orderId = "",
  cartItems = [],
  totalDiscountedPrice = 0,
  totalAmount = 0,
  totalDiscount = 0,
}) => {
  const subTotalPrice = totalAmount ?? 0;
  const totalPrice = totalDiscountedPrice ?? 0;
  const totalDiscountPrice = totalDiscount ?? 0;
  const labelClass =
    "font-normal text-sm lg:text-base leading-6 font-inter text-[#454652] dark-transition dark:text-[#C7C4D8]";

  const valueClasses =
    "dark:text-[#FFB695] dark-transition text-[#8e4d2a] font-normal text-sm lg:text-base leading-6 font-inter dark-transition";

  return (
    <div className="rounded-xl mb-10 bg-[#f8f9fa] dark:bg-[#222a3d]  overflow-hidden">
      <div role="list" className="[&>*:first-child]:rounded-t-xl ">
        {page && page === "order-success" && (
          <div className=" flex px-8  py-6 justify-between">
            <h2 className="font-manrope dark:text-[#dae2fd] font-bold text-xl text-on-surface">
              Order Summary
            </h2>
            <p className="font-inter text-[#191C1D] dark:text-[#C7C4D8] text-sm">
              Order#{orderId}
            </p>
          </div>
        )}
        {cartItems?.length === 0 ? (
          <p className="p-4 text-center">Your cart is empty.</p>
        ) : (
          cartItems?.map((cart) => (
            <OrderSummaryCard key={cart.id} cart={cart} />
          ))
        )}
      </div>
      <div className=" flex flex-col p-3 md:p-4 lg:p-6 gap-4">
        <div className="flex justify-between">
          <p className={labelClass}>Subtotal</p>
          <p className={labelClass}> ${subTotalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className={labelClass}>Discount</p>
          <p className={valueClasses}> - ${totalDiscountPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className={labelClass}>Shipping</p>
          <p className={valueClasses}>Complimentary</p>
        </div>

        <div className="h-px bg-[#464555]/20 my-2"></div>
        <div className="flex justify-between items-baseline">
          <p className="text-base lg:text-lg text-[#191C1D] dark-transition dark:text-[#DAE2FD] font-bold font-manrope leading-7">
            Total
          </p>
          <p className="text-xl lg:text-2xl text-primary dark-transition dark:text-[#DAE2FD] font-semibold font-inter leading-8">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
