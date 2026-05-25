import { Link } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { LiaShoppingBagSolid } from "react-icons/lia";

import { addToCart } from "../redux/features/cartSlice";
import {
  addToWatchlist,
  checkIsInWatchlist,
  removeFromWatchlist,
} from "../redux/features/watchlistSlice";

import BtnPrimary from "./BtnPrimary";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductCard = ({ product }) => {
  const { category, title, id, thumbnail, discountPercentage } = product;

  const { watchlistItems } = useSelector((state) => state.watchlists);
  const isInWatchlist = checkIsInWatchlist(watchlistItems, id);

  const dispatch = useDispatch();

  const onSaveClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(id));
    } else {
      dispatch(addToWatchlist(product));
    }
  };

  const hanldeAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (product) {
      dispatch(addToCart(product));
    }
  };

  return (
    <Link to={`/products/${id}`} className="w-full block h-full   col-span-1 ">
      <div className=" w-full flex flex-col gap-1 md:gap-2 lg:gap-5  rounded-lg  relative ">
        <div className=" w-full group ">
          <ProductImage
            thumbnail={thumbnail}
            onSaveClick={onSaveClick}
            isInWatchlist={isInWatchlist}
            discountPercentage={discountPercentage}
          />
          <ProductInfo category={category} product={product} title={title} />
        </div>
        <BtnPrimary onBtnClick={hanldeAddToCart} additional={" w-full"}>
          <LiaShoppingBagSolid className=" w-4 h-4  lg:w-5 lg:h-5" />

          <span>Add to Cart</span>
        </BtnPrimary>
      </div>
    </Link>
  );
};

export default ProductCard;
