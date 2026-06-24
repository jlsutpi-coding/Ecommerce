import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1;

  const iconClasses = "w-4 text-[#FFB700]";

  return (
    <div className=" flex items-center ">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <MdOutlineStar key={index} className={iconClasses} />;
        } else if (index === fullStars && halfStar) {
          return <MdOutlineStarHalf key={index} className={iconClasses} />;
        } else {
          return <IoMdStarOutline key={index} className={iconClasses} />;
        }
      })}
      <span className="text-xs lg:text-sm dark:text-[#FFB695] font-inter font-semibold leading-5 pl-2 text-[#191C1D]">
        {rating}
      </span>
    </div>
  );
};

export default StarRating;
