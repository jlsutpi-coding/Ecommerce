import { memo } from "react";

import { FaArrowRight } from "react-icons/fa";

import { useSelector } from "react-redux";

import BtnPrimary from "../../components/BtnPrimary";

const RightColumn = memo(() => {
  const carts = useSelector((state) => state.carts);

  const sameKeyClass =
    "font-normal text-sm lg:text-base leading-6 font-inter text-[#454652] dark-transition dark:text-[#C7C4D8]";

  const sameValueClass =
    "font-inter font-semibold text-sm lg:text-base dark-transition leading-6";

  if (!carts) {
    return <>Loading order summary</>;
  }
  return (
    <div className="col-span-full  lg:col-span-4 bg-[#F3F4F5] dark-transition dark:bg-[#131B2E] rounded-xl p-6 lg:p-8">
      <div className="flex flex-col gap-6 lg:gap-8">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="dark:text-[#DAE2FD] dark-transition font-manrope leading-8 text-xl lg:text-[24px] font-bold">
            Order Summary
          </h2>
          <div className="flex flex-col gap-4 ">
            <div className="flex justify-between items-center">
              <p className={sameKeyClass}>Subtotal</p>
              <p
                className={`${sameValueClass} dark:text-[#DAE2FD] text-[#191C1D]`}
              >
                ${carts?.totalAmount}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className={sameKeyClass}>Shipping</p>
              <p
                className={`${sameValueClass} text-[#24389C] dark:text-[#FFB695]`}
              >
                Free
              </p>
            </div>

            {carts?.totalDiscount > 0 && (
              <div className="flex justify-between items-center">
                <p className={sameKeyClass}>Discounts Applied</p>
                <p
                  className={`${sameValueClass} dark:text-[#FFB695] text-[#2E7D32]`}
                >
                  -${carts?.totalDiscount}
                </p>
              </div>
            )}
            <hr className="text-[#C5C5D4]/30" />
            <div className="mt-0 lg:mt-4 flex justify-between items-center">
              <p className="text-base lg:text-lg text-[#191C1D] dark-transition dark:text-[#DAE2FD] font-bold font-manrope leading-7">
                Total
              </p>
              <p className="text-xl lg:text-2xl text-primary dark-transition dark:text-[#DAE2FD] font-semibold font-inter leading-8">
                ${carts.totalDiscountedPrice}
              </p>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor="promo-code"
            className="uppercase dark-transition dark:text-[#C7C4D8] font-inter font-semibold text-xs leading-4 tracking-[1.2px]"
          >
            Promo Code
          </label>
          <div className="flex items-center gap-2">
            <input
              id="promo-code"
              type="text"
              className="rounded-lg grow px-2 lg:px-4 py-1.5 lg:py-3 font-inter dark-transition dark:focus:ring-[#C0C1FF] dark:text-[#6B7280] dark:bg-[#171F33] focus:outline-none bg-[#E1E3E4]"
            />
            <BtnPrimary font_family="font-inter" text_size="text-xs">
              Apply
            </BtnPrimary>
          </div>
        </div>
        <div>
          <BtnPrimary aditionnal={"grow"}>
            <span className="font-manrope text-base lg:text-lg leading-7 font-bold">
              Proceed Checkout
            </span>
            <FaArrowRight />
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
});

export default RightColumn;
