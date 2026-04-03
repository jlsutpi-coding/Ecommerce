import { Link } from "react-router";

import { LiaShoppingBagSolid } from "react-icons/lia";
import { useSelector } from "react-redux";

const Header = () => {
  const { cartItems } = useSelector((state) => state.carts);
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
        <Link to={"/cart"}>
          <button className=" cursor-pointer relative">
            <LiaShoppingBagSolid className="w-7 h-7" />
            {cartItems.length ? (
              <span className=" text-white text-[10px]  bg-primary rounded-full h-4 w-4 absolute top-0 r-0">
                {cartItems.length}
              </span>
            ) : null}
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
