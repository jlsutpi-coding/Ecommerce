import { Link } from "react-router";

import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  return (
    <nav className=" px-8  h-21  bg-[#F8F9FA] flex justify-between items-center">
      <div>
        <Link to={"/"}>
          <h1 className=" font-extrabold font-manrope leading-8 tracking-[-1.2px]  text-[24px]">
            Indigo
          </h1>
        </Link>
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
