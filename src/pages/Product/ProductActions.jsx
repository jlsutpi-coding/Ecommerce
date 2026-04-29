import { useDispatch, useSelector } from "react-redux";

import { CiHeart } from "react-icons/ci";

import BtnPrimary from "../../components/BtnPrimary";
import { addToCart } from "../../redux/features/cartSlice";
import { addToWatchlist } from "../../redux/features/watchlistSlice";

const ProductActions = ({ product }) => {
  const dispatch = useDispatch();

  const onAddToCartClick = (product) => {
    dispatch(addToCart(product));
  };

  const onAddToWatchlistClick = (product) => {
    dispatch(addToWatchlist(product));
  };

  const { watchlistItems } = useSelector((state) => state.watchlists);
  return (
    <div className=" flex flex-col gap-4 ">
      <BtnPrimary
        aditionnal={
          "shadow-xl hover:shadow-2xl font-manrope text-white font-bold text-[18px] py-5 px-8 leading-7 tracking-[0.45px] w-full"
        }
        onBtnClick={() => onAddToCartClick(product)}
      >
        Add To Cart
      </BtnPrimary>
      <button
        onClick={() => onAddToWatchlistClick(product)}
        className="dark-transition shadow-xl flex items-center justify-center gap-3 w-full py-5 rounded-lg font-bold text-[18px] leading-7 tracking-[0.45px] font-manrope border active:scale-[0.98]
    /* Light Mode */
    border-[#C5C5D4]/20 hover:bg-[#f3f4f5] 
    /* Dark Mode */
    dark:border-white/10 dark:hover:bg-slate-800"
      >
        <CiHeart className="w-5 text-[#191C1D] dark:text-white" />
        <span className="font-bold text-[18px] text-[#191C1D] dark:text-white leading-7">
          Wishlist
        </span>
      </button>
    </div>
  );
};

export default ProductActions;
