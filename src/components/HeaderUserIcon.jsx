import React, { useContext, useEffect, useRef, useState } from "react";

import { FaRegUserCircle } from "react-icons/fa";

import HeaderIconButton from "./HeaderIconButton";
import { Link } from "react-router";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";

const HeaderUserIcon = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const onSetTheme = () => {
    setThemeMode(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isDropdownOpen]);

  const handleLogout = () => {
    // Add your logout logic
    console.log("User logged out");
    // Clear auth tokens, user data, etc.
  };

  return (
    <div ref={dropdownRef} className=" relative rounded-lg">
      <HeaderIconButton
        onBtnClick={() => setIsDropdownOpen(!isDropdownOpen)}
        icon={
          <FaRegUserCircle className="w-7  h-7   dark:text-[#C0C1FF] text-[#454652] dark-transition group-hover:text-primary" />
        }
      ></HeaderIconButton>
      <div
        className={`absolute right-0 w-50 shadow-lg top-15 dark:bg-gray-800 bg-[#f8f9fa] rounded-lg overflow-hidden transition-all duration-200 transform origin-top-right ${
          isDropdownOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 pointer-events-none"
        }`}
      >
        <ul className=" flex items-center flex-col w-full">
          <li className=" group flex justify-center border-b   border-gray-300 dark:border-gray-500  w-full  ">
            <HeaderIconButton
              link={"/watchlist"}
              btnClass=" w-full flex gap-2 items-center  justify-center dark-transition dark:text-[#C0C1FF] group-hover:text-primary text-sm font-bold text-[#454652]   py-3.5"
              icon={
                <IoMdHeartEmpty className="w-7 h-7 dark-transition  dark:text-[#C0C1FF] group-hover:text-primary  " />
              }
            >
              Watchlist
            </HeaderIconButton>
          </li>

          <li className="flex w-full group justify-center items-center  border-b  border-gray-300 dark:border-gray-500 ">
            <HeaderIconButton
              btnClass={
                " flex text-sm font-bold text-[#454652] gap-2 items-center justify-center group-hover:text-primary  dark-transition  w-full py-3.5 dark:text-[#C0C1FF]   "
              }
              onBtnClick={onSetTheme}
              icon={
                theme === "dark" ? (
                  <MdOutlineDarkMode className="w-7 group-hover:text-primary  dark-transition dark:text-[#FFB695]  h-7" />
                ) : (
                  <MdOutlineLightMode className="w-7  group-hover:text-primary h-7" />
                )
              }
            >
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </HeaderIconButton>
          </li>
          <li className=" group w-full  ">
            <HeaderIconButton
              onBtnClick={handleLogout}
              icon={
                <FiLogOut className=" w-7 h-7 group-hover:text-primary dark-transition " />
              }
              btnClass={
                "w-full flex items-center justify-center gap-2 text-sm font-bold text-[#454652]  group-hover:text-primary dark-transition py-3.5 dark:text-[#C0C1FF]"
              }
            >
              Log out
            </HeaderIconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderUserIcon;
