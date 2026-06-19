import React from "react";

import ProductPricing from "./ProductPricing";
import { truncateText } from "../utils/textUtils";

const ProductInfo = ({ category, title, product }) => {
  return (
    <div className=" p-2 flex flex-col w-full justify-center align-start  gap-1 lg:gap-1.25">
      <span className="font-inter bg-linear-to-r from-red-600 to-red-700 dark:from-red-700 dark:to-red-800 rounded-full w-fit text-white dark:text-[#DAE2FD]  px-1  lg:px-2 py-0.5 tracking-[1px] leading-2 lg:leading-3.75 font-medium lg:font-semibold text-[8px] lg:text-[10px] dark:bg-red-800">
        {category.toUpperCase()}
      </span>

      <h2 className=" font-bold text-sm lg:text-lg leading-6 lg:leading-7 text-[#191C1D] dark:text-[#DAE2FD] dark-transition tracking-normal">
        {truncateText(title)}
      </h2>
      <ProductPricing product={product} page={"home"} />
    </div>
  );
};

export default ProductInfo;
