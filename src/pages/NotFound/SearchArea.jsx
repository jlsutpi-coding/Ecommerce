import { useState } from "react";

import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";
import { setIsSearching, setSearchQery } from "../../features/searchSlice";

import { CiSearch } from "react-icons/ci";

const SearchArea = () => {
  const dispatch = useDispatch();
  const navigte = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchQery(inputValue));
    dispatch(setIsSearching(true));
    if (inputValue.trim()) {
      navigte(`/search?q=${encodeURIComponent(inputValue)}`);
    }
  };
  return (
    <div className="mx-auto">
      <form
        onSubmit={onSearchSubmit}
        className=" group relative  flex items-center transition-all duration-300"
      >
        <CiSearch className=" absolute left-4 text-[#757684] group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="pl-12 w-full border-none focus:ring-1 transition-all outline-none placeholder:text-[#757684]/60 rounded-lg focus:ring-primary bg-[#e1e3e4] focus:bg-white pr-6 py-4.5 font-inter font-normal text-[16px]"
          placeholder="Search the archive"
        />
      </form>
    </div>
  );
};

export default SearchArea;
