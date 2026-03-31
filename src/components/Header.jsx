import { Link } from "react-router";

import { LiaShoppingBagSolid } from "react-icons/lia";

const Header = () => {
  return (
    <nav className=" px-8 fixed top-0 w-full z-50 bg-[#f8f9fa]/80  backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.05)]  h-21   flex justify-between items-center">
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
