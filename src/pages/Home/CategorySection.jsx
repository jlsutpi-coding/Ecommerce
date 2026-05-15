import { useDispatch, useSelector } from "react-redux";

import {
  filterByCategory,
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

  if (!categories || categories.length === 0) {
    return null;
  }

  const isAllActive =
    activeCategory === "all-products" || activeCategory === null;

  return (
    <div className="  w-full lg:w-64   ">
      <h2 className=" mb-2 md:mb-4  lg:mb-6 font-bold opacity-40 dark-transition dark:text-[#C7C4D8]  text-[#191C1D]  text-[12px] lg:text-[14px] leading-5 tracking-[1.4px]">
        {" "}
        CATEGORIES
      </h2>
      <button
        onClick={() => dispatch(resetFilterByCategory())}
        className=" w-full group cursor-pointer flex justify-between items-center mb-4  "
      >
        <span
          className={` font-inter ${isAllActive ? "text-primary" : "text-[#191C1D]/60  dark:text-[#C7C4D8] "}   group-hover:text-primary/90 dark-transition  font-semibold text-[16px] leading-6`}
        >
          All Object
        </span>
        <span
          className={` font-inter group-hover:text-primary/90 dark-transition   font-semibold text-[10px] lg:text-[12px] leading-4  ${activeCategory === null && "opacity-50"} ${activeCategory === "all-products" ? "text-primary" : "text-[#191C1D]/60 dark:text-[#C7C4D8]"}`}
        >
          {allProductCounts}
        </span>
      </button>
      {categories.map((item) => {
        const isActive = activeCategory === item.slug;

        return (
          <button
            key={item.slug}
            onClick={() => {
              dispatch(filterByCategory(item.slug));
            }}
            className={` ${isActive ? "text-primary" : "text-[#191C1D]/60 dark:text-[#C7C4D8]"} group   dark-transition  w-full cursor-pointer flex justify-between items-center mb-2 lg:mb-4`}
          >
            <span className="  group-hover:text-primary/90  text-[12px] md:text-[14px] lg:text-[16px] leading-6 font-normal font-inter">
              {item.name}
            </span>
            <span className=" font-inter leading-4 group-hover:text-primary/90  text-[10px] lg:text-[12px]">
              {item.counts}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategorySection;
