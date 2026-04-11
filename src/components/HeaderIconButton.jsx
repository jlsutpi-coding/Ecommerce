import { Link } from "react-router";

const HeaderIconButton = ({ link, icon, cartItems }) => {
  return (
    <Link to={link}>
      <button className=" cursor-pointer relative">
        {icon}
        {cartItems.length ? (
          <span className=" text-white text-[10px]  bg-primary rounded-full h-4 w-4 absolute top-0 r-0">
            {cartItems.length}
          </span>
        ) : null}
      </button>
    </Link>
  );
};

export default HeaderIconButton;
