import { CiHeart } from "react-icons/ci";

const ProductActions = () => {
  return (
    <div className=" flex flex-col gap-4 ">
      <button className=" shadow-xl hover:shadow-2xl active:scale-95 transition-all w-114 bg-primary py-5 px-8 leading-7 tracking-[0.45px] rounded-lg font-manrope text-white font-bold text-[18px] ">
        Add To Cart
      </button>
      <button className=" hover:bg-[#f3f4f5] transition-colors duration-200 flex items-center justify-center border-[#C5C5D4]/20 border font-manrope gap-3 w-114  py-5  leading-7 tracking-[0.45px] rounded-lg   font-bold text-[18px] ">
        <CiHeart className=" w-5  text-[#191C1D]" />
        <span className="font-bold text-[18px] text-[#191C1D] leading-7">
          Wishlist
        </span>
      </button>
    </div>
  );
};

export default ProductActions;
