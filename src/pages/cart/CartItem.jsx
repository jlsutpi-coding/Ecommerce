import { Link } from "react-router";

import { CgTrash } from "react-icons/cg";
import { IoMdAdd, IoMdRemove } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addQuantity, subStractQuantity } from "../../features/cartSlice";

const CartItem = ({ cart, onOpenModal }) => {
  const dispatch = useDispatch();

  const onAddBtnClick = (id) => {
    dispatch(addQuantity(id));
  };

  const onSubstractClick = (id) => {
    dispatch(subStractQuantity(id));
  };

  const onDelete = (id) => {
    onOpenModal(id);
  };

  return (
    <div className="flex gap-8 bg-white dark:bg-[#171F33] dark-transition rounded-xl shadow-sm  p-6">
      <div className=" h-60 rounded-lg  overflow-hidden shrink-0">
        <Link to={`/products/${cart.id}`}>
          <img
            src={cart.thumbnail}
            className=" w-full h-full   transition-transform duration-500 hover:scale-105 object-contain  "
            alt=""
          />
        </Link>
      </div>

      <div className=" grow flex-col flex justify-between py-2 ">
        <div className="  w-full flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold mb-1 font-manrope dark-transition dark:text-[#DAE2FD]">
              {cart.title}
            </h3>
            <p className=" font-inter dark-transition dark:text-[#FFB695] ">
              {cart.category}
            </p>
          </div>

          <button
            onClick={() => {
              onDelete(cart.id);
            }}
            className="  p-2 text-[#454652]   dark:text-[#DAE2FD] bg-[#F3F4F5] dark:bg-[#171F33] dark:border dark:border-[#464555]/20 dark:hover:bg-[#F3F4F5]/20 rounded-full hover:text-[#ba1a1a] dark:hover:text-[#FFB695] dark-transition cursor-pointer"
          >
            <CgTrash className="text-[20px]" />
          </button>
        </div>
        <div className=" mt-4  flex gap-4   items-center justify-start">
          <p className=" bg-[#3F51B5] rounded-full font-inter text-[#CACFFF] text-[12px] leading-4 py-1 px-3">
            {cart.discountPercentage} %OFF
          </p>
          <div className=" flex items-end gap-2">
            <p className=" text-primary text-[24px] font-semibold dark-transition dark:text-[#C0C1FF] leading-8  font-inter">
              ${cart.discountedTotal.toFixed(2)}
            </p>
            <p className=" line-through text-[14px] font-normal leading-5 text-[#454652] dark-transition  dark:text-[#C7C4D8] opacity-60 font-inter">
              ${cart?.price.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center border border-[#c5c5d4]/20 dark-transition dark:bg-[#131B2E] rounded-full p-1 bg-[#f3f4f5]">
            <button
              onClick={() => {
                onSubstractClick(cart.id);
              }}
              className="w-8 h-8 flex items-center justify-center hover:bg-[#e1e3e4]   dark:text-[#C7C4D8] dark:hover:bg-[#171F33]  rounded-full dark-transition"
            >
              <IoMdRemove />
            </button>
            <span className="w-10 text-center font-bold text-sm dark-transition dark:text-[#C7C4D8]">
              {cart?.quantity}
            </span>
            <button
              onClick={() => {
                onAddBtnClick(cart?.id);
              }}
              className="w-8 h-8 flex items-center justify-center   hover:bg-[#e1e3e4] dark:text-[#C7C4D8] dark:hover:bg-[#171F33] rounded-full dark-transition"
            >
              <IoMdAdd />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
