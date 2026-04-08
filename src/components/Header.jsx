import { Link } from "react-router";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { searchFromCart } from "../features/productSlice";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { cartItems } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  return (
    <nav className=" px-8 fixed top-0 w-full z-50 bg-[#f8f9fa]/80  backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]  h-21   flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <h1 className=" font-extrabold font-manrope leading-8 tracking-[-1.2px]  text-[24px]">
            Indigo
          </h1>
        </Link>
      </div>
      <div className=" items-center flex gap-3  justify-start ">
        <div className="hidden lg:flex items-center px-4 py-2 bg-[#e1e3e4]/10 hover:bg-[#e1e3e4]/15 focus-within:ring-1 focus-within:ring-[#191c1d]/20 transition-all rounded-lg gap-3">
          <CiSearch className="text-[#191c1d] text-base shrink-0" />

          <input
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                dispatch(searchFromCart(inputValue));
              }
            }}
            className="bg-transparent border-none outline-none text-sm font-label w-48 placeholder:text-[#191c1d]/50 text-[#191c1d]"
            placeholder="Search archive..."
            type="text"
            aria-label="Search archive"
          />
        </div>
        <Link to={"/cart"}>
          <button className=" cursor-pointer relative">
            <LiaShoppingBagSolid className="w-7 h-7" />
            {cartItems.length ? (
              <span className=" text-white text-[10px]  bg-primary rounded-full h-4 w-4 absolute top-0 r-0">
                {cartItems.length}
              </span>
            ) : null}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
