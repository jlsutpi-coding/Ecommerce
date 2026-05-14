import React from "react";

import ProductSkeleton from "./ProductSkeleton";

const ProductsSkeleton = ({ page }) => {
  return (
    <div
      className={`${
        page === "home"
          ? " grid-cols-2 md:grid-cols-2 xl:grid-cols-3"
          : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      } mb-10 items-start  grid gap-x-8 gap-y-12`}
    >
      {Array.from({ length: 20 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProductsSkeleton;
