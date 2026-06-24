const ProductSkeleton = () => {
  return (
    <div
      aria-hidden="true"
      role="status"
      className="col-span-1 flex flex-col gap-1 md:gap-2 lg:gap-5 animate-pulse rounded-lg overflow-hidden h-full"
    >
      <div className="w-full flex flex-col gap-1 md:gap-2 lg:gap-5 rounded-lg relative">
        {/* Image section - matches ProductImage */}
        <div className="w-full group relative">
          <div className="relative w-full overflow-hidden rounded-lg bg-gray-300 dark:bg-gray-700">
            <div className="h-45 lg:h-75 w-full flex items-center justify-center bg-gray-400 rounded-lg dark:bg-gray-700">
              <svg
                className="w-10 h-10 lg:w-16 lg:h-16 text-gray-200 dark:text-gray-600"
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

            {/* Save/Watchlist button skeleton */}
            <div className="absolute bottom-2 right-2">
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-gray-400 dark:bg-gray-600"></div>
            </div>

            {/* Discount badge skeleton */}
            <div className="absolute top-2 left-2">
              <div className="w-10 h-6 lg:w-12 lg:h-7 rounded-md bg-red-400 dark:bg-red-800"></div>
            </div>
          </div>

          {/* Product Info section - matches ProductInfo */}
          <div className="p-2 flex flex-col gap-1 lg:gap-1.5 mt-2">
            {/* Category */}
            <div className="lg:w-[20%] w-[30%] bg-gray-200 rounded-lg h-3 lg:h-4 dark:bg-gray-700"></div>

            {/* Title */}
            <div className="w-[70%] bg-gray-300 rounded-lg h-4 lg:h-5 dark:bg-gray-600"></div>

            {/* Rating stars and reviews */}
            <div className="flex gap-1 items-center">
              <div className="w-20 bg-gray-200 rounded-lg h-3 lg:h-4 dark:bg-gray-700"></div>
              <div className="w-8 bg-gray-200 rounded-lg h-3 lg:h-4 dark:bg-gray-700"></div>
            </div>

            {/* Price and discount */}
            <div className="flex gap-2 items-baseline">
              <div className="w-16 bg-gray-300 rounded-lg h-4 lg:h-5 dark:bg-gray-600"></div>
              <div className="w-12 bg-gray-200 rounded-lg h-3 lg:h-4 dark:bg-gray-700"></div>
            </div>
          </div>
        </div>

        {/* Add to Cart button skeleton - matches BtnPrimary */}
        <div className="w-full flex items-center justify-center gap-1 lg:gap-2 lg:py-3.5 py-1.5 px-2 font-bold lg:px-4 rounded-lg bg-gray-400 dark:bg-gray-600">
          <div className="w-4 h-4 lg:w-5 lg:h-5 bg-gray-500 dark:bg-gray-500 rounded"></div>
          <div className="w-24 h-3 lg:h-4 bg-gray-500 dark:bg-gray-500 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
