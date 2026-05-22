import { memo } from "react";

const PriceDisplay = memo(({ discountedTotal, price, className = "" }) => {
  return (
    <div
      className={`${className} flex-col-reverse lg:flex-row items-end gap-0 lg:gap-2`}
    >
      <p className="text-primary text-lg lg:text-[24px] font-semibold dark-transition dark:text-[#C0C1FF] lg:leading-8  font-inter">
        ${discountedTotal.toFixed(2)}
      </p>
      <p className=" line-through text-[14px] font-normal leading-5 text-[#454652] dark-transition dark:text-[#C7C4D8] opacity-60 font-inter">
        ${price.toFixed(2)}
      </p>
    </div>
  );
});

export default PriceDisplay;
