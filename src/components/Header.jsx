import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiDark, CiHeart, CiLight, CiSearch } from "react-icons/ci";

import { searchFromCart } from "../features/productSlice";
import HeaderIconButton from "./HeaderIconButton";
import { setIsSearching, setSearchQery } from "../features/searchSlice";
import InputSearch from "./InputSearch";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { cartItems } = useSelector((state) => state.carts);
  const { watchlistItems } = useSelector((state) => state.watchlists);

  const { theme, setThemeMode } = useContext(ThemeContext);
  console.log(theme);

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

  const onSetTheme = (theme) => {
    setThemeMode(theme === "dark" ? "light" : "dark");
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
        <InputSearch />

        <HeaderIconButton
          icon={<CiHeart className="w-7 group-hover:text-primary h-7" />}
          cartItems={watchlistItems}
          link={"/watchlist"}
        />
        <HeaderIconButton
          icon={
            <LiaShoppingBagSolid className="w-7 group-hover:text-primary h-7" />
          }
          cartItems={cartItems}
          link={"/cart"}
        />
        <button
          onClick={() => onSetTheme(theme)}
          className=" cursor-pointer group"
        >
          {theme === "dark" ? (
            <CiDark className="w-7 group-hover:text-primary h-7" />
          ) : (
            <CiLight className="w-7 group-hover:text-primary h-7" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Header;
