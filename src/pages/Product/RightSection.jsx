import { MdOutlineDeliveryDining, MdVerified } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

import StarRating from "./StarRating";

const RightSection = ({ product }) => {
  const {
    category,
    title,
    price,
    rating,
    description,
    reviews,
    discountPercentage,
    warrantyInformation,
    shippingInformation,
  } = product;

  // Calculate discount percentage
  const discountAmount = Math.round(price * discountPercentage) / 100;
  const finalPrice = price - discountAmount;
  return (
    <>
      <div className="lg:col-span-5 flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 pb-6 ">
          <p className="font-semibold uppercase text-[12px] text-primary  font-inter leading-4 tracking-[2.4px]">
            {category}
          </p>
          <h2 className="text-start font-manrope font-extrabold text-[48px] leading-12 tracking-[-1.2px] text-[#191C1D]">
            {title}
          </h2>
          <div className=" flex items-center gap-4">
            <StarRating rating={rating} />
            <div className=" text-[#C5C5D4]/30">|</div>
            <div className=" font-inter font-normal leading-5 text-[14px] text-[#757684]">
              {reviews.length} Reviews
            </div>
          </div>
        </div>
        <div className="flex font-inter flex-col gap-2 mb-8">
          <div className="text-3xl font-bold text-[#191c1d] mb-10 flex items-baseline gap-2">
            <span>${finalPrice.toFixed(2)}</span>
            <span className="text-sm font-normal text-slate-400 line-through">
              ${price.toFixed(2)}
            </span>
          </div>

          <div className=" p-6 bg-[#f3f4f5] rounded-xl border border-indigo-50/50">
            <div className="flex gap-4 items-start mb-4">
              <MdOutlineDeliveryDining className="text-primary w-8 h-8" />

              <div>
                <p className="text-sm font-bold">Complimentary Shipping</p>
                <p className="text-xs text-slate-500">{shippingInformation}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <MdVerified className="text-primary w-8 h-8" />

              <div>
                <p className="text-sm font-bold">{warrantyInformation}</p>
                <p className="text-xs text-slate-500">
                  Every archive piece is certified for quality and longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-4 ">
          <button className=" shadow-xl hover:shadow-2xl active:scale-95 transition-all w-114 bg-primary py-5 px-8 leading-7 tracking-[0.45px] rounded-lg font-manrope text-white font-bold text-[18px] ">
            Add To Cart
          </button>
          <button className=" hover:bg-[#f3f4f5] transition-colors duration-200 flex items-center justify-center border-[#C5C5D4]/20 border font-manrope gap-3 w-114  py-5  leading-7 tracking-[0.45px] rounded-lg   font-bold text-[18px] ">
            <CiHeart className=" w-5  text-[#191C1D]" />
            <span className="font-bold text-[18px] text-[#191C1D] leading-7">
              Wishlist
            </span>
          </button>
        </div>

        <div className=" mb-12  w-114 flex flex-col gap-8 pt-8">
          <div className="">
            <span className="  text-primary font-inter text-[14px] leading-5 tracking-[1.4px]">
              DESCRIPTION
            </span>
          </div>
          <p className=" font-inter font-normal leading-6.5 text-[#454652] text-[16px]">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};

export default RightSection;
