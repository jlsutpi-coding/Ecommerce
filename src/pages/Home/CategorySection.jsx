import { useDispatch, useSelector } from "react-redux";

import {
  getCategoryType,
  resetFilterByCategory,
  selectCategoriesWithCounts,
  selectTotalProductCount,
} from "../../redux/features/productSlice";

const CategorySection = () => {
  const categories = useSelector(selectCategoriesWithCounts);
  const activeCategory = useSelector(getCategoryType);

  const dispatch = useDispatch();

  // all products counts
  const allProductCounts = useSelector(selectTotalProductCount);

  //

  return (
    <div className="  w-full lg:w-64  shrink-0  ">
      <h2 className=" mb-6 font-bold opacity-40 dark-transition dark:text-[#C7C4D8]  text-[#191C1D]  text-[14px] leading-5 tracking-[1.4px]">
        {" "}
        CATEGORIES
      </h2>
      <button
        onClick={() => dispatch(resetFilterByCategory())}
        className=" w-full group cursor-pointer flex justify-between items-center mb-4  "
      >
        <span
          className={` font-inter ${activeCategory === "all-products" ? "text-primary" : "text-[#191C1D]/60  dark:text-[#C7C4D8] "}  ${activeCategory === null && "opacity-50"} group-hover:text-primary/90 dark-transition  font-semibold text-[16px] leading-6`}
        >
          All Object
        </span>
        <span
          className={` font-inter group-hover:text-primary/90 dark-transition   font-semibold text-[12px] leading-4  ${activeCategory === null && "opacity-50"} ${activeCategory === "all-products" ? "text-primary" : "text-[#191C1D]/60 dark:text-[#C7C4D8]"}`}
        >
          {allProductCounts}
        </span>
      </button>
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              dispatch(filterByCategory(item.slug));
              // getActiveCategory();
            }}
            className={` ${activeCategory === item.slug ? "text-primary" : "text-[#191C1D]/60 dark:text-[#C7C4D8]"} group   dark-transition  w-full cursor-pointer flex justify-between items-center mb-4`}
          >
            <span className="  group-hover:text-primary/90  text-[16px] leading-6 font-normal font-inter">
              {item.name}
            </span>
            <span className=" font-inter leading-4 group-hover:text-primary/90  text-[12px]">
              {item.counts}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategorySection;
