import { memo } from "react";

import { Link } from "react-router";

import { useDispatch } from "react-redux";

import { CgTrash } from "react-icons/cg";
import { IoMdAdd, IoMdRemove } from "react-icons/io";

import { addQuantity, subtractQuantity } from "../../redux/features/cartSlice";

import ImageUrl from "../../components/ImageUrl";
import PriceDisplay from "./PriceDisplay";

const CartItem = memo(({ cart, onOpenModal }) => {
  const {
    id,
    title,
    thumbnail,
    category,
    discountPercentage,
    discountedTotal,
    price,
    quantity,
  } = cart;

  const dispatch = useDispatch();

  const onAddBtnClick = () => {
    dispatch(addQuantity(id));
  };

  const onSubtractClick = () => {
    dispatch(subtractQuantity(id));
  };

  const onDelete = () => {
    onOpenModal(id);
  };

  return (
    <div className="flex md:gap-6 lg:gap-8 bg-white dark:bg-[#171F33] dark-transition rounded-xl shadow-sm p-3 md:p-4 lg:p-6">
      <Link to={`/products/${id}`} className=" shrink-0 w-fit">
        <ImageUrl
          src={thumbnail}
          alt={title}
          containerClasses="w-full rounded-lg relative h-45 lg:h-60 overflow-hidden"
        />
      </Link>

      <div className=" grow flex-col flex justify-between py-2 ">
        <div className="w-full flex justify-between items-start">
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 font-manrope dark-transition dark:text-[#DAE2FD]">
              {title}
            </h3>
            <p className="font-inter dark-transition dark:text-[#FFB695] ">
              {category}
            </p>
          </div>

          <button
            onClick={onDelete}
            aria-label="Delete item"
            className=" p-1 lg:p-2 text-[#454652] dark:text-[#DAE2FD] bg-[#F3F4F5] dark:bg-[#171F33] dark:border dark:border-[#464555]/20 dark:hover:bg-[#F3F4F5]/20 rounded-full hover:text-[#ba1a1a] dark:hover:text-[#FFB695] dark-transition cursor-pointer"
          >
            <CgTrash className="text-xl" />
          </button>
        </div>
        <div className="mt-2 lg:mt-4 flex flex-row lg:gap-4 items-end lg:items-center justify-between lg:justify-start">
          <p className=" bg-[#3F51B5] rounded-full font-inter text-[#CACFFF] text-[10px] lg:text-xs  lg:leading-4 py-1 px-2 lg:px-3">
            {discountPercentage} %OFF
          </p>
          <PriceDisplay
            className="hidden lg:flex"
            discountedTotal={discountedTotal}
            price={price}
          />
        </div>
        <div className=" flex items-end justify-between mt-4 lg:mt-6">
          <div className="flex items-center border border-[#c5c5d4]/20 dark-transition dark:bg-[#131B2E] rounded-full p-1 bg-[#f3f4f5]">
            <button
              disabled={quantity <= 1}
              onClick={onSubtractClick}
              aria-label="Decrease quantity"
              className={`w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center hover:bg-[#e1e3e4]   dark:text-[#C7C4D8] dark:hover:bg-[#171F33]  rounded-full dark-transition ${
                quantity <= 1 ? "opacity-40 cursor-not-allowed" : ""
              }`}
            >
              <IoMdRemove />
            </button>
            <span className="w-10 text-center font-bold text-sm dark-transition dark:text-[#C7C4D8]">
              {quantity}
            </span>
            <button
              onClick={onAddBtnClick}
              aria-label="Increase quantity"
              className=" w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center   hover:bg-[#e1e3e4] dark:text-[#C7C4D8] dark:hover:bg-[#171F33] rounded-full dark-transition"
            >
              <IoMdAdd />
            </button>
          </div>
          <PriceDisplay
            className="lg:hidden flex"
            discountedTotal={discountedTotal}
            price={price}
          />
        </div>
      </div>
    </div>
  );
});

export default CartItem;
