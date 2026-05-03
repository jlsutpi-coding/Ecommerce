import React, { useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const ProductPagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const pageNumbers = useMemo(() => {
    const pages = [];
    const maxVisible = 5;
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show fist page
      pages.push(1);

      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjsut for edges
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

  console.log(pageNumbers);

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
  return (
    <div className=" flex  justify-center items-center gap-2 pt-10">
      {/* Previous Button */}
      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={` rounded-lg    w-10 h-10 flex items-center justify-center cursor-pointer ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-[#e7e8e9]"}`}
      >
        <IoIosArrowBack className=" text-[#191C1D]/40" />
      </button>
      {pageNumbers.map((page, index) => {
        console.log(page);
        return (
          <React.Fragment key={index}>
            {page === "..." ? (
              <span className="px-2 text-[#191c1d]/20">...</span>
            ) : (
              <button
                onClick={() => handlePageChange(page)}
                className={` ${currentPage === page ? "bg-primary text-white" : "text-[#191C1D]"}  cursor-pointer w-10 h-10 rounded-lg hover:bg-[#e7e8e9] transition-colors text-sm font-medium  `}
              >
                {page}
              </button>
            )}
          </React.Fragment>
        );
      })}
      {/* Next button */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={` rounded-lg   w-10 h-10 flex items-center justify-center cursor-pointer ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-[#e7e8e9]"}`}
      >
        <IoIosArrowForward className=" text-[#191C1D]/40 " />
      </button>
    </div>
  );
};

export default ProductPagination;
