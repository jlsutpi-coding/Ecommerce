import { useContext, useMemo } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { PaginationContext } from "../../context/PaginationContext";

const ProductPagination = ({ totalPages, productsTotal }) => {
  const { currentPage, setCurrentPage } = useContext(PaginationContext);
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust for edges
      if (currentPage <= 3) {
        end = 4;
      }
      if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }
      if (start > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          pages.push(i);
        }
      }
      // Add dots if needed after middle pages
      if (end < totalPages - 1) {
        pages.push("...");
      }
      pages.push(totalPages);
    }
    return pages;
  }, [currentPage, totalPages]);

  // Don't show pagination if 1 page or no products

  if (totalPages <= 1 || productsTotal === 0) {
    return null;
  }

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const arrowIconClass = "text-[#191C1D]/40 dark:text-[#DAE2FD]/70";
  const buttonBaseClass =
    "rounded-lg w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center transition-colors cursor-pointer hover:bg-[#e7e8e9] dark:hover:bg-black/20 disabled:opacity-50 disabled:cursor-not-allowed";
  return (
    <div className="flex justify-center items-center gap-1 lg:gap-2 pt-4 md:pt-8 lg:pt-10">
      {/* Previous Button */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label="Previous page"
        disabled={currentPage === 1}
        className={buttonBaseClass}
      >
        <IoIosArrowBack className={arrowIconClass} />
      </button>
      {pageNumbers.map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-2 text-[#191c1d]/20 dark:text-[#DAE2FD]/50">
              ...
            </span>
          ) : (
            <button
              onClick={() => handlePageChange(page)}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
              className={`${
                currentPage === page
                  ? "bg-primary text-white"
                  : "text-[#191C1D] dark:text-[#DAE2FD] dark:hover:bg-black/20 hover:bg-[#e7e8e9]"
              }  cursor-pointer w-8 h-8 lg:w-10 lg:h-10 rounded-lg  transition-colors text-xs lg:text-sm font-medium  `}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}
      {/* Next button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={buttonBaseClass}
      >
        <IoIosArrowForward className={arrowIconClass} />
      </button>
    </div>
  );
};

export default ProductPagination;
