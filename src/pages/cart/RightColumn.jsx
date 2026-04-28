import { FaArrowRight } from "react-icons/fa";

import { useSelector } from "react-redux";
import BtnPrimary from "../../components/BtnPrimary";

const RightColumn = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <div className="col-span-4 bg-[#F3F4F5] dark-transition dark:bg-[#131B2E] rounded-xl flex flex-col p-8 gap-8 ">
      <div className=" flex flex-col gap-8 ">
        <div className="flex flex-col gap-6">
          <h2 className=" dark:text-[#DAE2FD] dark-transition font-manrope leading-8 text-[24px] font-bold">
            Order Summary
          </h2>
          <div className=" flex flex-col gap-4 ">
            <div className=" flex justify-between items-center">
              <p className=" font-normal dark-transition dark:text-[#C7C4D8] text-[16px] leading-6 font-inter text-[#454652]">
                Subtotal
              </p>
              <p className=" font-inter font-semibold text-[16px] dark-transition dark:text-[#DAE2FD]  text-[#191C1D] leading-6">
                ${carts?.totalAmount}
              </p>
            </div>
            <div className=" flex justify-between items-center">
              <p className=" dark-transition dark:text-[#C7C4D8] font-normal text-[16px] leading-6 font-inter text-[#454652]">
                Shipping
              </p>
              <p className=" font-inter font-semibold text-[16px] dark-transition  text-[#24389C] dark:text-[#FFB695] leading-6">
                Free
              </p>
            </div>
            <div className=" flex justify-between items-center">
              <p className=" dark-transition dark:text-[#C7C4D8] font-normal text-[16px] leading-6 font-inter text-[#454652]">
                Discounts Applied
              </p>
              <p className=" font-inter font-semibold text-[16px] dark-transition  dark:text-[#FFB695]  text-[#2E7D32] leading-6">
                -${carts?.totalDiscount}
              </p>
            </div>
            <hr className=" text-[#C5C5D4]/30" />
            <div className=" mt-4 flex justify-between items-center">
              <p className=" text-[18px] text-[#191C1D] dark-transition dark:text-[#DAE2FD] font-bold font-manrope leading-7">
                Total
              </p>
              <p className="text-[24px] text-primary dark-transition dark:text-[#DAE2FD] font-semibold font-inter leading-8">
                ${carts.totalDiscountedPrice}
              </p>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" uppercase dark-transition dark:text-[#C7C4D8] font-inter font-semibold text-[12px] leading-4 tracking-[1.2px]"
          >
            Promo Code
          </label>
          <div className=" flex items-center gap-2 ">
            <input
              type="text"
              className=" rounded-lg grow px-4 py-3 font-inter dark-transition dark:focus:ring-[#C0C1FF] dark:text-[#6B7280] dark:bg-[#171F33]  focus-visible:ring-1 focus-visible:ring-[#F3F4F5] focus:outline-none bg-[#E1E3E4]"
            />
            <BtnPrimary font_family="font-inter" text_size="text-[12px]">
              Apply
            </BtnPrimary>
          </div>
        </div>
        <div>
          <BtnPrimary aditionnal={"grow"}>
            <span className=" font-manrope text-[18px] leading-7 font-bold">
              Proceed Checkout
            </span>
            <FaArrowRight />
          </BtnPrimary>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
