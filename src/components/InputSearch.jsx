import { useState } from "react";

import { useNavigate, useSearchParams } from "react-router";

import { CiSearch } from "react-icons/ci";
import { useEffect } from "react";

const InputSearch = ({ page }) => {
  const [searchParam] = useSearchParams();
  const currentQuery = searchParam.get("q") || "";

  const [inputValue, setInputValue] = useState(currentQuery);
  const [prevQuery, setPrevQuery] = useState(currentQuery);
  const navigate = useNavigate();

  // Inline sync during render
  if (currentQuery !== prevQuery) {
    setPrevQuery(currentQuery);
    setInputValue(currentQuery);
  }
  const onSearchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    navigate(`/search?q=${encodeURIComponent(inputValue)}`, {
      state: { timestamp: Date.now() },
    });
  };
  return (
    <form
      id={`search-form`}
      name="search-form"
      onSubmit={onSearchSubmit}
      className={` ${page !== "not-found" ? " lg:flex" : ""} group relative  flex items-center transition-all duration-300`}
    >
      <label
        htmlFor={`search-input`}
        className=" absolute left-4 text-[#757684] group-focus-within:text-primary cursor-pointer   dark:group-focus-within:text-[#C0C1FF] dark-transition"
      >
        <CiSearch className=" w-3 h-3 lg:w-4 lg:h-4" />
      </label>

      <input
        type="text"
        id={`search-input`}
        name="search-input-name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={` ${
          page !== "not-found"
            ? "w-48  text-[10px] lg:text-sm  pr-2 lg:pr-4 pl-10 py-1.5 lg:py-2"
            : "w-full pr-6 pl-12 py-4.5 text-base"
        } 
        duration-300 border-none focus:ring-1 dark:focus:ring-[#C0C1FF] transition-all outline-none placeholder:text-[#757684]/60 dark:text-[#dae2fd]  dark:placeholder:text-[#918fa1] rounded-lg focus:ring-primary bg-[#e1e3e4] dark:bg-[#131B2E] focus:bg-white dark:focus:bg-[#131B2E]/40 font-inter font-normal`}
        placeholder="Search the archive"
      />
    </form>
  );
};

export default InputSearch;
