import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router";

import { LiaShoppingBagSolid } from "react-icons/lia";

import { setIsSearching, setSearchQuery } from "../redux/features/searchSlice";

import HeaderIconButton from "./HeaderIconButton";
import InputSearch from "./InputSearch";
import HeaderUserIcon from "./HeaderUserIcon";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { cartItems } = useSelector((state) => state.carts);
  const { watchlistItems } = useSelector((state) => state.watchlists);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(setSearchQuery(inputValue));
      dispatch(setIsSearching(true));
      navigate(`search?q=${encodeURIComponent(inputValue)}`);
      setInputValue("");
    }
  };

  return (
    <nav className="dark-transition px-12 fixed top-0 w-full z-50 bg-[#f8f9fa]/80 dark:bg-[#0B1326]/70 dark:shadow-[0_40px_64px_-12px_rgba(218,226,253,0.06)]  backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]  h-21   flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <h1 className=" dark:text-[#DAE2FD] font-extrabold font-manrope leading-8 tracking-[-1.2px] dark-transition  text-[24px]">
            Indigo
          </h1>
        </Link>
      </div>
      <div className=" items-center flex gap-3  justify-start ">
        <InputSearch />

        <HeaderIconButton
          icon={
            <LiaShoppingBagSolid className="w-7 h-7 dark:text-[#C0C1FF] text-[#454652] dark-transition group-hover:text-primary " />
          }
          cartItems={cartItems}
          link={"/cart"}
        />

        <HeaderUserIcon />
      </div>
    </nav>
  );
};

export default Header;
