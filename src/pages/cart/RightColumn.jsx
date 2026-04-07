import { FaArrowRight } from "react-icons/fa";

import { useSelector } from "react-redux";

const RightColumn = () => {
  const carts = useSelector((state) => state.carts);

  return (
    <div className="col-span-4 bg-[#F3F4F5] rounded-xl flex flex-col p-8 gap-8 ">
      <div className=" flex flex-col gap-8 ">
        <div className="flex flex-col gap-6">
          <h2 className=" font-manrope leading-8 text-[24px] font-bold">
            Order Summary
          </h2>
          <div className=" flex flex-col gap-4 ">
            <div className=" flex justify-between items-center">
              <p className=" font-normal text-[16px] leading-6 font-inter text-[#454652]">
                Subtotal
              </p>
              <p className=" font-inter font-semibold text-[16px]  text-[#191C1D] leading-6">
                ${carts?.totalAmount}
              </p>
            </div>
            <div className=" flex justify-between items-center">
              <p className=" font-normal text-[16px] leading-6 font-inter text-[#454652]">
                Shipping
              </p>
              <p className=" font-inter font-semibold text-[16px]  text-[#24389C] leading-6">
                Free
              </p>
            </div>
            <div className=" flex justify-between items-center">
              <p className=" font-normal text-[16px] leading-6 font-inter text-[#454652]">
                Discounts Applied
              </p>
              <p className=" font-inter font-semibold text-[16px]  text-[#2E7D32] leading-6">
                -${carts?.totalDiscount}
              </p>
            </div>
            <hr className=" text-[#C5C5D4]/30" />
            <div className=" mt-4 flex justify-between items-center">
              <p className=" text-[18px] text-[#191C1D] font-bold font-manrope leading-7">
                Total
              </p>
              <p className="text-[24px] text-primary font-semibold font-inter leading-8">
                ${carts.totalDiscountedPrice}
              </p>
            </div>
          </div>
        </div>
        <div>
          <label
            htmlFor=""
            className=" uppercase font-inter font-semibold text-[12px] leading-4 tracking-[1.2px]"
          >
            Promo Code
          </label>
          <div className=" flex items-center gap-2 ">
            <input
              type="text"
              className=" rounded-lg grow px-4 py-3 font-inter focus-visible:ring-1 focus-visible:ring-[#F3F4F5] focus:outline-none bg-[#E1E3E4]"
            />
            <button className=" bg-primary rounded-lg text-white font-inter font-semibold text-[12px] leading-4  tracking-[-0.3px] px-4 py-3.5 ">
              Apply
            </button>
          </div>
        </div>
        <div>
          <button className="   px-4 py-3.5 rounded-lg  w-full flex justify-center gap-2 items-center bg-primary grow text-white">
            <span className=" font-manrope text-[18px] leading-7 font-bold">
              Proceed Checkout
            </span>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
