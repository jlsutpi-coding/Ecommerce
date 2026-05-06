import { Link } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { LiaShoppingBagSolid } from "react-icons/lia";

import { addToCart } from "../redux/features/cartSlice";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../redux/features/watchListSlice";

import BtnPrimary from "./BtnPrimary";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductCard = ({ product }) => {
  const { category, title, id, thumbnail, discountPercentage } = product;

  const { watchlistItems } = useSelector((state) => state.watchlists);
  const isInWatchlist = watchlistItems.some((item) => item.id === id);

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
    <Link to={`/products/${id}`}>
      <div className="   col-span-1  flex flex-col gap-5  rounded-lg  relative ">
        <div className=" w-full group ">
          <ProductImage
            thumbnail={thumbnail}
            onSaveClick={onSaveClick}
            isInWatchlist={isInWatchlist}
            discountPercentage={discountPercentage}
          />
          <ProductInfo category={category} product={product} title={title} />
        </div>
        <BtnPrimary onBtnClick={hanldeAddToCart} aditionnal={" w-full"}>
          <LiaShoppingBagSolid className="w-5 h-5" />

          <span>Add to Cart</span>
        </BtnPrimary>
      </div>
    </Link>
  );
};

export default ProductCard;
