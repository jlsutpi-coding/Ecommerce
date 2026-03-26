import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  console.log(product);
  const { category, title, price, id, image } = product;
  return (
    <Link className="" to={`/product/${id}`}>
      <div className=" group  w-70.5 h-112.25 flex flex-col gap-5  rounded-lg  ">
        <div className="w-full h-88.25 bg-[#F3F4F5]  overflow-hidden rounded-lg">
          <img
            src={image}
            className="w-full group-hover:scale-105 transition-all duration-300 h-full object-contain"
            alt=""
          />
        </div>
        <div className=" p-2 flex flex-col gap-[4.5px] ">
          <div className=" font-inter text-priamry tracking-[1px] leading-3.75 font-semibold text-[10px] opacity-60">
            {category.toUpperCase()}
          </div>
          <h2 className=" font-bold text-[18px] leading-7 text-[#191C1D] tracking-[0px]">
            {title.length > 20 ? title.substring(0, 20) + "..." : title}
          </h2>
          <div className="font-inter text-[16px] font-medium leading-6 tracking-[0px] text-[#454652] ">
            $ {price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
