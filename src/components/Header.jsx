import React from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  return (
    <nav className="  h-21  bg-[#F8F9FA] flex justify-between items-center">
      <div>
        <h1 className=" font-extrabold leading-8 tracking-[-1.2px]  text-[24px]">
          Indigo
        </h1>
      </div>
      <div className=" flex justify-around">
        <div>
          <input type="text" placeholder="search" />
        </div>
        <button className=" relative">
          <LiaShoppingBagSolid className="w-7 h-7" />
        </button>
      </div>
    </nav>
  );
};

export default Header;
