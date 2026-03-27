import React from "react";
import { IoMdStarOutline } from "react-icons/io";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating?.rate);
  const halfStar = rating?.rate % 1;

  return (
    <div className=" flex items-center ">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return <MdOutlineStar key={index} className=" w-4 text-[#FFB700]" />;
        } else if (index === fullStars && halfStar) {
          return (
            <MdOutlineStarHalf key={index} className=" w-4 text-[#FFB700]" />
          );
        } else {
          return (
            <IoMdStarOutline key={index} className=" w-4 text-[#FFB700]" />
          );
        }
      })}
      <span className="text-[14px] font-inter font-semibold leading-5 pl-2 text-[#191C1D]">
        {rating?.rate}
      </span>
    </div>
  );
};

export default StarRating;
