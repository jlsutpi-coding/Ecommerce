import { Link } from "react-router";
import ProductPricing from "./ProductPricing";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import BtnPrimary from "./BtnPrimary";

const ProductCard = ({ product }) => {
  const { category, title, id, thumbnail } = product;

  const dispatch = useDispatch();
  const btnAddToCart = () => {
    dispatch(addToCart(product));
  };
  return (
    <Link className="" to={`/products/${id}`}>
      <div className="  col-span-1  flex flex-col gap-5  rounded-lg  relative ">
        <div className="group w-full ">
          <div className=" bg-[#F3F4F5]  overflow-hidden rounded-lg">
            <img
              src={thumbnail}
              className="w-full group-hover:scale-105 transition-all duration-300 h-full object-contain"
              alt=""
            />
            {product.discountPercentage > 10 && (
              <span className="absolute top-2 left-2 z-20 bg-red-500 text-white px-2 py-1 text-xs rounded">
                -{Math.round(product.discountPercentage)}%
              </span>
            )}
          </div>
          <div className=" p-2 flex flex-col gap-[4.5px] ">
            <div className=" font-inter text-priamry tracking-[1px] dark:text-[#FFB695] leading-3.75 font-semibold text-[10px] opacity-60">
              {category.toUpperCase()}
            </div>
            <h2 className=" font-bold text-[18px] leading-7 text-[#191C1D] dark:text-[#DAE2FD] tracking-[0px]">
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
