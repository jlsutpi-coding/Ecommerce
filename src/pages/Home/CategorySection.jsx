import { useDispatch, useSelector } from "react-redux";

import CategorySectionSkeleton from "./CategorySectionSkeleton";

const CategorySection = () => {
  const dispatch = useDispatch();
  const { categories, categoriesStatus } = useSelector(
    (state) => state.products,
  );

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
            // onClick={() => dispatch(resetFilterByCategory())}
            className="w-full group cursor-pointer flex justify-between items-center mb-2 lg:mb-4"
          >
            <span
              className={`font-inter text-[#191C1D]/60 dark:text-[#C7C4D8] group-hover:text-primary/90 dark-transition font-semibold text-base leading-6`}
              //  ${
              //      isAllActive
              //        ? "text-primary"
              //        : "text-[#191C1D]/60 dark:text-[#C7C4D8]"
              //    }`}
            >
              All Object
            </span>
            <span
            // className={`font-inter group-hover:text-primary/90 dark-transition font-semibold text-xs lg:text-sm leading-4
            //    ${activeCategory === null && "opacity-50"} ${
            //      activeCategory === "all-products"
            //        ? "text-primary"
            //        : "text-[#191C1D]/60 dark:text-[#C7C4D8]"
            //    }`}
            >
              {/* {allProductCounts} */}
            </span>
          </button>
          {categories.map((item, index) => {
            // const isActive = activeCategory === item.slug;

            if (index < 4) {
              return (
                <button
                  key={item.slug}
                  onClick={() => {
                    dispatch(filterByCategory(item.slug));
                  }}
                  className="text-[#191C1D]/60 dark:text-[#C7C4D8] group dark-transition  w-full cursor-pointer flex justify-between items-center mb-2 lg:mb-4"
                  // className={`${isActive ? "text-primary" : "text-[#191C1D]/60 dark:text-[#C7C4D8]"} }
                >
                  <span className="group-hover:text-primary/90  text-xs md:text-sm lg:text-base leading-6 font-normal font-inter">
                    {item.name}
                  </span>
                  <span className="font-inter leading-4 group-hover:text-primary/90  text-[10px] lg:text-xs">
                    {item.counts}
                  </span>
                </button>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default CategorySection;
