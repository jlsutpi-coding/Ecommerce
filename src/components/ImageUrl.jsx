import { useState } from "react";

const ImageUrl = ({
  src,
  alt = "product image",
  containerClasses,
  imgClasses = "hover:scale-105 transition-transform",
}) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  if (isError) {
    return (
      <div
        className={` ${containerClasses} bg-gray-200 dark:bg-gray-700  flex items-center justify-center`}
      >
        <div className="text-center">
          <svg
            className="w-12 h-12  mx-auto text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="mt-2 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
            Image not available
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className={containerClasses}>
      {isLoading && (
        <div className=" w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 animate-pulse">
          <svg
            className="w-10 h-10 lg:w-16 lg:h-16 text-gray-900"
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
      )}
      <img
        src={src}
        alt={alt}
        className={`${
          isLoading ? "opacity-0" : "opacity-100"
        }  w-full h-full rounded-lg  object-contain ${imgClasses}`}
        onError={() => {
          setIsError(true);
          setIsLoading(false);
        }}
        onLoad={() => {
          setIsLoading(false);
        }}
        loading="lazy"
      />
    </div>
  );
};

export default ImageUrl;
