import React from "react";

const CategorySection = ({ products }) => {
  const categoryCount = products.reduce((acc, product) => {
    const cat = product.category;
    if (!acc[cat]) {
      acc[cat] = 0;
    }
    acc[cat] += 1;
    return acc;
  }, {});

  const categories = Object.entries(categoryCount);

  return (
    <div className="  min-w-[256px]  ">
      <h2 className=" mb-6 font-bold opacity-40  text-[#191C1D]  text-[14px] leading-5 tracking-[1.4px]">
        {" "}
        CATEGORIES
      </h2>
      <div className=" cursor-pointer flex justify-between items-center mb-4  ">
        <span className=" font-inter text-primary font-semibold text-[16px] leading-6">
          All Object
        </span>
        <span className=" font-inter  font-semibold text-[12px] leading-4 text-primary">
          {products.length}
        </span>
      </div>
      {categories.map(([cat, count], index) => {
        return (
          <button
            key={index}
            className=" group  w-full cursor-pointer flex justify-between items-center mb-4"
          >
            <span className=" text-[#191C1D]/60 group-hover:text-primary  text-[16px] leading-6 font-normal font-inter">
              {cat}
            </span>
            <span className=" font-inter leading-4 group-hover:text-primary text-[#191C1D]/60 text-[12px]">
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategorySection;
