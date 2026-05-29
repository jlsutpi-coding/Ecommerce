import { Link } from "react-router";

const HeaderIconButton = ({
  link,
  icon,
  cartItems,
  onBtnClick,
  btnClass,
  children,
}) => {
  return (
    <Link to={link} className="group">
      <button
        onClick={onBtnClick}
        className={`cursor-pointer  relative ${btnClass}`}
      >
        {icon}
        {children}

        {cartItems?.length ? (
          <span className=" text-white text-[8px] lg:text-[10px]  bg-primary rounded-full w-3 h-3 lg:h-4 lg:w-4 absolute top-0 r-0">
            {cartItems?.length}
          </span>
        ) : null}
      </button>
    </Link>
  );
};

export default HeaderIconButton;
