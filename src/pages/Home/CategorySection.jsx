import { useSelector } from "react-redux";
import { selectCategoriesWithCounts } from "../../features/productSlice";

const CategorySection = () => {
  const categories = useSelector(selectCategoriesWithCounts);

  // all products counts
  const allProductCounts = categories.reduce((acc, cat) => {
    return acc + cat.counts;
  }, 0);

  return (
    <div className="  w-full lg:w-64 shrink-0  ">
      <h2 className=" mb-6 font-bold opacity-40  text-[#191C1D]  text-[14px] leading-5 tracking-[1.4px]">
        {" "}
        CATEGORIES
      </h2>
      <div className=" cursor-pointer flex justify-between items-center mb-4  ">
        <span className=" font-inter text-primary font-semibold text-[16px] leading-6">
          All Object
        </span>
        <span className=" font-inter  font-semibold text-[12px] leading-4 text-primary">
          {allProductCounts}
        </span>
      </div>
      {categories.map((item, index) => {
        return (
          <button
            key={index}
            className=" group  w-full cursor-pointer flex justify-between items-center mb-4"
          >
            <span className=" text-[#191C1D]/60 group-hover:text-primary  text-[16px] leading-6 font-normal font-inter">
              {item.name}
            </span>
            <span className=" font-inter leading-4 group-hover:text-primary text-[#191C1D]/60 text-[12px]">
              {item.counts}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategorySection;
