import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="col-span-1  flex flex-col gap-5  animate-pulse rounded-lg overflow-hidden">
      <div>
        <div className=" h-75 w-full flex items-center justify-center  bg-gray-400 rounded-lg dark:bg-gray-700 ">
          <svg
            className="w-20 h-20 text-gray-200 dark:text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <div className="p-2 flex flex-col gap-[4.5px]">
          <div className="  w-[20%] bg-gray-200 rounded-lg h-4"></div>
          <div className="  w-[40%] bg-gray-300 rounded-lg h-4"></div>
          <div className=" flex gap-1">
            <div className="  w-12 bg-gray-300 rounded-lg h-4"></div>
            <div className="  w-12 bg-gray-300 rounded-lg h-4"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center  gap-2  py-3.5 px-4 rounded-lg  font-bold bg-gray-500 text-white">
        <div className="w-4 h-4 bg-gray-300 rounded"></div>
        <div className="w-24 h-4 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
