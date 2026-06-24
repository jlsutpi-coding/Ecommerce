const ProductPageSkeleton = () => {
  const skeletonColor =
    "rounded-lg bg-gray-200 dark:bg-gray-600 animate-pulse dark-transition";
  return (
    <div
      aria-hidden="true"
      className="mt-8 md:mt-16 lg:mt-24  mb-4 md:mb-8 lg:mb-12 lg:mx-12 grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 md:gap-12 lg:gap-16"
    >
      {/* Product Image  */}
      <div className="col-span-1 md:col-span-3 lg:col-span-6 grid grid-cols-6 gap-4">
        {/* Main Image */}
        <div
          className={`col-span-full h-96 md:h-120 lg:h-150 ${skeletonColor} `}
        ></div>
        {Array.from({ length: 3 }).map((item, index) => (
          <div
            key={index}
            className={`col-span-2 aspect-square ${skeletonColor} overflow-hidden`}
          >
            <div className="w-full rounded-lg relative h-full overflow-hidden"></div>
          </div>
        ))}
      </div>
      <div className=" items-start col-span-1 md:col-span-3 lg:col-span-5 flex flex-col gap-6 md:gap-8 lg:gap-10 w-full">
        {/* Product Heading */}
        <div className="w-full flex flex-col gap-1 lg:gap-2">
          <div className={`w-[20%] h-4 ${skeletonColor}`}></div>
          <div className={`w-[80%] h-12 ${skeletonColor}`}></div>
          <div className={` w-[40%] h-6 ${skeletonColor}`}></div>
        </div>
        {/* Product Price and TrustBadge */}
        <div className="w-full flex font-inter flex-col gap-0 lg:gap-2">
          <div
            className={` w-[40%] h-9 md:h-15 lg:h-20
            ${skeletonColor} mb-3 md:mb-6 lg:mb-10`}
          ></div>
          <div className=" p-4 lg:p-6 bg-[#f3f4f5] dark:bg-[#131B2E] gap-2 lg:gap-3 flex-col flex rounded-xl border dark:border-white/10 border-indigo-50/50">
            <div className={`w-[90%] h-8 ${skeletonColor}`}></div>
            <div className={`w-[90%] h-8 ${skeletonColor}`}></div>
          </div>
        </div>
        {/* Product Action buttons */}
        <div className="w-full flex flex-col gap-2 lg:gap-4">
          <div
            className={` w-full h-10 md:h-12 lg:h-15 ${skeletonColor}`}
          ></div>
          <div
            className={` w-full h-10 md:h-12 lg:h-15 ${skeletonColor}`}
          ></div>
        </div>
        {/* Product Description */}
        <div className="mb-4 md:mb-8 lg:mb-12  w-full  lg:max-w-md xl:max-w-lg flex flex-col gap-2 md:gap-4 lg:gap-8">
          <div className={`w-[30%] h-10 ${skeletonColor}`}></div>
          <div>
            <div className=" flex flex-col gap-1">
              {Array.from({ length: 6 }).map((_, index) =>
                index === 5 ? (
                  <div
                    key={index}
                    className={`${skeletonColor} w-[50%] h-2`}
                  ></div>
                ) : (
                  <div
                    key={index}
                    className={`${skeletonColor} w-full h-2`}
                  ></div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageSkeleton;
