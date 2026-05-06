import React from "react";

import ProductPricing from "./ProductPricing";

const ProductInfo = ({ category, title, product }) => {
  return (
    <div className=" p-2 flex flex-col w-full justify-center align-start gap-[4.5px] ">
      <span className="font-inter bg-red-600 rounded-full w-fit text-white dark:text-[#DAE2FD]  px-2 py-0.5 tracking-[1px] leading-3.75 font-semibold text-[10px] dark:bg-red-800">
        {category.toUpperCase()}
      </span>

      <h2 className=" font-bold text-[18px] leading-7 text-[#191C1D] dark:text-[#DAE2FD] dark-transition tracking-[0px]">
        {title?.length > 20 ? title.substring(0, 20) + "..." : title}
      </h2>
      <ProductPricing product={product} page={"home"} />
    </div>
  );
};

export default ProductInfo;
