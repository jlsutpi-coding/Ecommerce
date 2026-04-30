import { Link } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

import { addToCart } from "../redux/features/cartSlice";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../redux/features/watchListSlice";

import BtnPrimary from "./BtnPrimary";
import ProductPricing from "./ProductPricing";

const ProductCard = ({ product }) => {
  const { category, title, id, thumbnail } = product;

  const { watchlistItems } = useSelector((state) => state.watchlists);
  const isActive = watchlistItems.some((item) => item.id === id);

  const dispatch = useDispatch();

  const btnAddToCart = () => {
    dispatch(addToCart(product));
  };

  const onSaveClick = (e) => {
    e.preventDefault();
    if (isActive) {
      dispatch(removeFromWatchlist(id));
    } else {
      dispatch(addToWatchlist(product));
    }
  };

  return (
    <Link to={`/products/${id}`}>
      <div className="   col-span-1  flex flex-col gap-5  rounded-lg  relative ">
        <div className="group w-full ">
          <div className="bg-[#F3F4F5] relative dark:bg-[#171F33] dark-transition overflow-hidden rounded-lg ">
            <img
              src={thumbnail}
              className="w-full h-full object-contain group-hover:scale-105 duration-300 transition-transform "
              alt={title}
            />
            <div className="absolute bottom-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <button
                onClick={(e) => {
                  onSaveClick(e);
                }}
                className={` transition-all duration-300  w-10 h-10 flex items-center justify-center backdrop:blur-md rounded-full ${isActive ? "dark:text-red-500  " : "hover:text-red-500 "} hover:scale-110 dark:bg-red-500/10 bg-red-500/10 dark:text-red-300 text-red-400  cursor-pointer   `}
              >
                {isActive ? (
                  <IoMdHeart className=" w-6 h-6" />
                ) : (
                  <IoMdHeartEmpty className=" w-6 h-6" />
                )}
              </button>
            </div>
          </div>
          {product.discountPercentage > 10 && (
            <span className="absolute top-2 left-2 z-20 bg-red-500 text-white px-2 py-1 text-xs rounded">
              -{Math.round(product.discountPercentage)}%
            </span>
          )}
          <div className=" p-2 flex flex-col gap-[4.5px] ">
            <div className=" font-inter text-priamry tracking-[1px] dark:text-[#FFB695] dark-transition leading-3.75 font-semibold text-[10px] opacity-60">
              {category.toUpperCase()}
            </div>
            <h2 className=" font-bold text-[18px] leading-7 text-[#191C1D] dark:text-[#DAE2FD] dark-transition tracking-[0px]">
              {title.length > 20 ? title.substring(0, 20) + "..." : title}
            </h2>
            <ProductPricing product={product} page={"home"} />
          </div>
        </div>
        <BtnPrimary
          onBtnClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            btnAddToCart();
          }}
          aditionnal={" w-full"}
        >
          <LiaShoppingBagSolid className="w-5 h-5" />

          <span>Add to Cart</span>
        </BtnPrimary>
      </div>
    </Link>
  );
};

export default ProductCard;
