import React, { useMemo } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";

const ProductPagination = ({ currentPage, setCurrentPage }) => {
  const { productsTotal, limit } = useSelector((state) => state.products);

  const totalPages = Math.ceil(productsTotal / limit);

  return (
    <div className=" flex  justify-center items-center gap-2 pt-10">
      <button className=" rounded-lg  hover:bg-[#e7e8e9]  w-10 h-10 flex items-center justify-center cursor-pointer">
        <IoIosArrowBack className=" text-[#191C1D]/40" />
      </button>
      <button className="  cursor-pointer w-10 h-10 rounded-lg hover:bg-[#e7e8e9] transition-colors text-sm font-medium bg-primary text-white">
        1
      </button>
      <button className="  cursor-pointer w-10 h-10 rounded-lg hover:bg-[#e7e8e9] transition-colors text-sm font-medium  text-[#191C1D]">
        2
      </button>
      <button className="  cursor-pointer w-10 h-10 rounded-lg hover:bg-[#e7e8e9] transition-colors text-sm font-medium  text-[#191C1D]">
        3
      </button>

      <span className="px-2 text-[#191c1d]/20">...</span>
      <button className="  cursor-pointer w-10 h-10 rounded-lg hover:bg-[#e7e8e9] transition-colors text-sm font-medium  text-[#191C1D]">
        12
      </button>

      <button className=" rounded-lg hover:bg-[#e7e8e9]  w-10 h-10 flex items-center justify-center cursor-pointer">
        <IoIosArrowForward className=" text-[#191C1D]/40 " />
      </button>
    </div>
  );
};

export default ProductPagination;
