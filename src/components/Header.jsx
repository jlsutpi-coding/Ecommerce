import { useState } from "react";

import { Link, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiHeart, CiSearch } from "react-icons/ci";

import { searchFromCart } from "../features/productSlice";
import HeaderIconButton from "./HeaderIconButton";
import { setIsSearching, setSearchQery } from "../features/searchSlice";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { cartItems } = useSelector((state) => state.carts);
  const { watchlistItems } = useSelector((state) => state.watchlists);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(setSearchQery(inputValue));
      dispatch(setIsSearching(true));
      navigate(`search?q=${encodeURIComponent(inputValue)}`);
      setInputValue("");
    }
  };
  return (
    <nav className=" px-12 fixed top-0 w-full z-50 bg-[#f8f9fa]/80  backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]  h-21   flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <h1 className=" font-extrabold font-manrope leading-8 tracking-[-1.2px]  text-[24px]">
            Indigo
          </h1>
        </Link>
      </div>
      <div className=" items-center flex gap-3  justify-start ">
        <form
          onSubmit={handleSearch}
          className="hidden lg:flex items-center px-4 py-2 bg-[#e1e3e4]/10 hover:bg-[#e1e3e4]/15 focus-within:ring-1 focus-within:ring-[#191c1d]/20 transition-all rounded-lg gap-3"
        >
          <CiSearch className="text-[#191c1d] text-base shrink-0" />

          <input
            id="search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            className="bg-transparent border-none outline-none text-sm font-label w-48 placeholder:text-[#191c1d]/50 text-[#191c1d]"
            placeholder="Search archive..."
            type="text"
            aria-label="Search archive"
          />
        </form>

        <HeaderIconButton
          icon={<CiHeart className="w-7 h-7" />}
          cartItems={watchlistItems}
          link={"/watchlist"}
        />
        <HeaderIconButton
          icon={<LiaShoppingBagSolid className="w-7 h-7" />}
          cartItems={cartItems}
          link={"/cart"}
        />
      </div>
    </nav>
  );
};

export default Header;
