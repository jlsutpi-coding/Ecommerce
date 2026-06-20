import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategorySectionSkeleton from "./CategorySectionSkeleton";
import {
  clearSelectedProduct,
  fetchProductsByCategory,
  setSelectedCategory,
} from "../../redux/features/productSlice";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const CategorySection = () => {
  const [showAllCategories, setShowAllCategories] = useState(false);

  const dispatch = useDispatch();
  const { categories, categoriesStatus, selectedCategory } = useSelector(
    (state) => state.products,
  );

  const onSelectedCategory = (slug) => {
    dispatch(fetchProductsByCategory(slug));
    dispatch(setSelectedCategory(slug));
  };

  const visibleCategories = showAllCategories
    ? categories
    : categories.slice(0, 5);

  return (
    <div>
      {categoriesStatus === "pending" ? (
        <CategorySectionSkeleton />
      ) : (
        <div className="w-full lg:w-64">
          <h2 className="mb-2 md:mb-4 lg:mb-6 font-bold opacity-40 dark-transition dark:text-[#C7C4D8] text-[#191C1D] text-xs lg:text-sm leading-5 tracking-[1.4px]">
            CATEGORIES
          </h2>
          <button
            onClick={() => dispatch(clearSelectedProduct())}
            className="w-fit group cursor-pointer flex justify-between items-center mb-2 lg:mb-4"
          >
            <span
              className={` ${
                selectedCategory === null
                  ? "text-primary"
                  : "text-[#191C1D]/60 dark:text-[#C7C4D8]/60"
              } font-inter group-hover:text-primary/90 dark-transition font-semibold text-base leading-6
                `}
            >
              All Objects
            </span>
          </button>
          {visibleCategories.map((item) => {
            const isActive = selectedCategory === item.slug;

            return (
              <button
                key={item.slug}
                onClick={() => {
                  onSelectedCategory(item.slug);
                }}
                className={`${isActive ? "text-primary" : "text-[#191C1D]/60 dark:text-[#C7C4D8]/60"} group dark-transition  w-fit cursor-pointer flex justify-between items-center mb-2 lg:mb-4`}
              >
                <span className="group-hover:text-primary/90  text-xs md:text-sm lg:text-base leading-6 font-normal font-inter">
                  {item.name}
                </span>
                <span className="font-inter leading-4 group-hover:text-primary/90  text-[10px] lg:text-xs">
                  {item.counts}
                </span>
              </button>
            );
          })}
          <button
            onClick={() => {
              setShowAllCategories(!showAllCategories);
            }}
            className=" my-4 text-xs font-bold uppercase tracking-widest text-primary/60 hover:text-primary transition-colors flex items-center gap-1 group"
          >
            {showAllCategories ? (
              <>
                <span>Show less </span>
                <MdOutlineKeyboardArrowUp className=" text-sm transition-transform group-hover:translate-y-0.5" />
              </>
            ) : (
              <>
                <span>Show all categories</span>
                <MdOutlineKeyboardArrowDown className=" text-sm transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategorySection;
