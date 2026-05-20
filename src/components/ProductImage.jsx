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
    <div className="bg-[#F3F4F5] w-full  h-45 lg:h-75 relative dark:bg-[#171F33] dark-transition overflow-hidden rounded-lg ">
      <ImageUrl item={thumbnail} />
      <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4  opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-2  group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <button
          aria-label={
            isInWatchlist ? "Remove from watchlist" : "Add to watchlist"
          }
          aria-pressed={isInWatchlist}
          onClick={onSaveClick}
          className={`transition-all duration-300  w-5 h-5 lg:w-10 lg:h-10 flex items-center justify-center  rounded-full ${isInWatchlist ? "dark:text-red-500  " : "hover:text-red-500 "} hover:scale-110 dark:bg-red-500/10 bg-red-500/10 dark:text-red-300 text-red-400  cursor-pointer   `}
        >
          {isInWatchlist ? (
            <IoMdHeart className="w-4 h-4  lg:w-6 lg:h-6" />
          ) : (
            <IoMdHeartEmpty className="w-4 h-4 lg:w-6 lg:h-6" />
          )}
        </button>
      </div>
      {discountPercentage > 10 && (
        <span className="absolute top-2 left-2 z-20 bg-linear-to-r from-red-500 to-red-600 text-white  px-1 py-0.5 lg:px-2 lg:py-1 text-[10px] lg:text-xs rounded-md font-semibold shadow-md">
          -{Math.round(discountPercentage)}%
        </span>
      )}
    </div>
  );
};

export default ProductImage;
