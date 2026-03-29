import React, { useEffect } from "react";
import { useParams } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { MdOutlineDeliveryDining } from "react-icons/md";
import { CiHeart } from "react-icons/ci";

import {
  clearSelectedProduct,
  fetchProductById,
} from "../../features/productSlice";
import StarRating from "./StarRating";

const ProductPage = () => {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const { selectedProduct, detailStatus, error } = useSelector(
    (state) => state.products,
  );

  useEffect(() => {
    dispatch(fetchProductById(productId));

    return () => dispatch(clearSelectedProduct());
  }, [productId, dispatch]);

  if (detailStatus === "pending") return <>pending</>;
  if (detailStatus === "failed") return <>error</>;

  if (!selectedProduct) return null;

  const { category, title, price, image, rating, description } =
    selectedProduct;

  return (
    <div className=" mt-24 mb-12 mx-12 flex gap-16 items-center">
      <div className=" w-166 h-207.5 rounded-xl">
        <img src={image} className=" w-full h-full object-contain" alt="" />
      </div>
      <div className=" w-114 flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 pb-6 ">
          <p className="font-semibold text-[12px] text-primary  font-inter leading-4 tracking-[2.4px]">
            {category?.toUpperCase()}
          </p>
          <h2 className="text-start font-manrope font-extrabold text-[48px] leading-12 tracking-[-1.2px] text-[#191C1D]">
            {title}
          </h2>
          <div className=" flex items-center gap-4">
            <StarRating rating={rating} />
            <div className=" text-[#C5C5D4]/30">|</div>
            <div className=" font-inter font-normal leading-5 text-[14px] text-[#757684]">
              {rating?.count} Reviews
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-8">
          <p className=" text-[30px] font-manrope font-bold leading-9 text-primary">
            ${price}
          </p>
          <div className=" flex  items-center font-inter">
            <MdOutlineDeliveryDining className="text-[#6C3400] w-10 h-5" />
            <p className="font-medium text-[14px] leading-5 font-manrope  text-[#6C3400]">
              Complimentary Standard Shipping
            </p>
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
    </div>
  );
};

export default ProductPage;
