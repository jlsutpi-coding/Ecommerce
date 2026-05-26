import { useDispatch, useSelector } from "react-redux";

import { CiHeart } from "react-icons/ci";

import { addToCart } from "../../redux/features/cartSlice";
import {
  addToWatchlist,
  checkIsInWatchlist,
  removeFromWatchlist,
} from "../../redux/features/watchlistSlice";

import BtnPrimary from "../../components/BtnPrimary";

const ProductActions = ({ product }) => {
  const dispatch = useDispatch();
  const { watchlistItems } = useSelector((state) => state.watchlists);
  const isInWatchlist = checkIsInWatchlist(watchlistItems, product.id);

  const onAddToCartClick = () => {
    dispatch(addToCart(product));
  };

  const onAddToWatchlistClick = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(product.id));
    } else {
      dispatch(addToWatchlist(product));
    }
  };

  return (
    <div className="w-full flex flex-col gap-2 lg:gap-4">
      <BtnPrimary
        additional={
          "shadow-xl hover:shadow-2xl leading-7 tracking-[0.45px] w-full"
        }
        text_size="text-lg"
        onBtnClick={onAddToCartClick}
      >
        Add To Cart
      </BtnPrimary>

      <BtnPrimary
        bg_color={isInWatchlist ? "bg-red-500/20" : "bg-[#C5C5D4]/20"}
        additional="shadow-xl border active:scale-[0.98] border-[#C5C5D4]/20 hover:bg-[#f3f4f5] dark:border-white/10 dark:hover:bg-slate-800"
        onBtnClick={onAddToWatchlistClick}
      >
        <CiHeart
          className={`w-6 h-6 lg:w-8 lg:h-8 ${isInWatchlist ? "text-red-500 fill-red-500" : "text-[#191C1D]"} dark:text-white`}
        />
        <span
          className={`font-bold text-lg text-[#191C1D] dark:text-white leading-7`}
        >
          {isInWatchlist ? "Saved to Wishlist" : "Wishlist"}
        </span>
      </BtnPrimary>
    </div>
  );
};

export default ProductActions;
