import StarRating from "./StarRating";

const ProductHeading = ({ title, category, rating, reviews }) => {
  return (
    <div className="w-full flex flex-col gap-0 lg:gap-2">
      <p className="font-semibold uppercase text-[10px] lg:text-xs text-primary dark:text-[#FFB695] dark-transition  font-inter leading-4 tracking-[2.4px]">
        {category}
      </p>
      <h2 className="text-start dark:text-[#DAE2FD] dark-transition font-manrope font-bold lg:font-extrabold text-3xl md:text-4xl lg:text-5xl leading-12 tracking-normal lg:tracking-[-1.2px] text-[#191C1D]">
        {title}
      </h2>
      <div className=" flex items-center gap-2 lg:gap-4">
        <StarRating rating={rating} />
        <div className=" text-[#C5C5D4]/30">|</div>
        <div className=" font-inter font-normal leading-5 text-xs lg:text-sm dark:text-[#FFB695] text-[#757684]">
          {reviews?.length} Reviews
        </div>
      </div>
    </div>
  );
};

export default ProductHeading;
