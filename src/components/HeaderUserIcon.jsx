import { useContext, useEffect, useRef, useState } from "react";

import { Link } from "react-router";

import { FaRegUserCircle } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import HeaderIconButton from "./HeaderIconButton";
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
    const handleEscapeClick = (event) => {
      if (event.key === "Escape" && isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("keydown", handleEscapeClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscapeClick);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    // Add your logout logic
    console.log("User logged out");
    // Clear auth tokens, user data, etc.
  };

  const iconBtnClass =
    "w-5 h-5  lg:w-7 lg:h-7 group-hover:text-primary dark-transition";

  const btnClass =
    "w-full flex items-center justify-center gap-1 lg:gap-2 text-sm lg:text-sm font-bold text-[#454652]  group-hover:text-primary dark-transition py-2.5 lg:py-3.5 dark:text-[#C0C1FF]";
  return (
    <div ref={dropdownRef} className=" relative rounded-lg">
      <HeaderIconButton
        onBtnClick={() => setIsDropdownOpen(!isDropdownOpen)}
        icon={
          <FaRegUserCircle className="w-5 h-5 lg:w-7  lg:h-7   dark:text-[#C0C1FF] text-[#454652] dark-transition group-hover:text-primary" />
        }
      ></HeaderIconButton>
      <div
        className={`absolute right-0 w-40 lg:w-50 shadow-lg top-15 dark:bg-gray-800 bg-[#f8f9fa] rounded-lg overflow-hidden transition-all dark-transition transform origin-top-right ${
          isDropdownOpen
            ? "scale-100 opacity-100"
            : "scale-100 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex items-center flex-col w-full">
          <li className="group flex justify-center border-b border-gray-300 dark:border-gray-500 w-full">
            <HeaderIconButton
              link={"/watchlist"}
              btnClass={btnClass}
              icon={
                <IoMdHeartEmpty
                  className={`${iconBtnClass} dark:text-[#C0C1FF]`}
                />
              }
            >
              Watchlist
            </HeaderIconButton>
          </li>

          <li className="flex w-full group justify-center items-center  border-b  border-gray-300 dark:border-gray-500">
            <HeaderIconButton
              btnClass={btnClass}
              onBtnClick={onSetTheme}
              icon={
                theme === "dark" ? (
                  <MdOutlineDarkMode
                    className={`${iconBtnClass} dark:text-[#FFB695]`}
                  />
                ) : (
                  <MdOutlineLightMode className={`${iconBtnClass}`} />
                )
              }
            >
              {theme === "dark" ? "Dark Mode" : "Light Mode"}
            </HeaderIconButton>
          </li>
          <li className="group w-full">
            <HeaderIconButton
              onBtnClick={handleLogout}
              icon={<FiLogOut className={`${iconBtnClass}`} />}
              btnClass={btnClass}
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
