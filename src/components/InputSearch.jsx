import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setIsSearching, setSearchQery } from "../features/searchSlice";

const InputSearch = ({ page }) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const navigte = useNavigate();

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQery(inputValue));
    dispatch(setIsSearching(true));
    if (inputValue.trim()) {
      navigte(`/search?q=${encodeURIComponent(inputValue)}`);
    }
  };
  return (
    <form
      id="search-form"
      name="search-form"
      onSubmit={onSearchSubmit}
      className={` ${page !== "not-found" ? "hidden lg:flex" : ""} group relative  flex items-center transition-all duration-300`}
    >
      <CiSearch className=" absolute left-4 text-[#757684] group-focus-within:text-primary   dark:group-focus-within:text-[#C0C1FF] dark-transition" />
      <input
        type="text"
        id="serch-input"
        name="search-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={` ${page !== "not-found" ? "w-48  text-sm pr-4 pl-10 py-2" : "w-full pr-6 pl-12 py-4.5 text-[16px] "} duration-300 border-none focus:ring-1 dark:focus:ring-[#C0C1FF] transition-all outline-none placeholder:text-[#757684]/60 dark:text-[#dae2fd]  dark:placeholder:text-[#918fa1] rounded-lg focus:ring-primary bg-[#e1e3e4] dark:bg-[#131B2E] focus:bg-white dark:focus:bg-[#131B2E]/40 font-inter font-normal `}
        placeholder="Search the archive"
      />
    </form>
  );
};

export default InputSearch;
