import React from "react";

import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import ImageUrl from "./ImageUrl";

const ProductImage = ({
  onSaveClick,
  isInWatchlist,
  thumbnail,
  discountPercentage,
}) => {
  return (
    <div className="bg-[#F3F4F5] w-full h-75 relative dark:bg-[#171F33] dark-transition overflow-hidden rounded-lg ">
      <ImageUrl item={thumbnail} />
      <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <button
          onClick={onSaveClick}
          className={` transition-all duration-300  w-10 h-10 flex items-center justify-center  rounded-full ${isInWatchlist ? "dark:text-red-500  " : "hover:text-red-500 "} hover:scale-110 dark:bg-red-500/10 bg-red-500/10 dark:text-red-300 text-red-400  cursor-pointer   `}
        >
          {isInWatchlist ? (
            <IoMdHeart className=" w-6 h-6" />
          ) : (
            <IoMdHeartEmpty className=" w-6 h-6" />
          )}
        </button>
      </div>
      {discountPercentage > 10 && (
        <span className="absolute top-2 left-2 z-20 bg-red-500 text-white px-2 py-1 text-xs rounded">
          -{Math.round(discountPercentage)}%
        </span>
      )}
    </div>
  );
};

export default ProductImage;
