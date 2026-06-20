import { MdArrowForwardIos } from "react-icons/md";
import { Link, useLocation } from "react-router";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const routeNames = {
    cart: "Cart",
    wishlist: "Wishlist",
    products: "Products",
    search: "Search",
  };
  const unclickableRoutes = ["products"];
  const textClasses =
    "text-[#191C1D]/60 dark:text-[#C7C4D8]/60 font-inter text-[10px] md:text-xs lg:text-sm leading-3.75 tracking-[2px]";

  return (
    <nav className=" text-sm mb-4 lg:mb-8" aria-label="Breadcrumb">
      <ol className=" flex items-center gap-2 lg:gap-4">
        <li className=" flex items-center">
          <Link to={"/"} className={`${textClasses}  hover:text-primary`}>
            Home
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;

          const isLast = index === pathnames.length - 1;

          // Check if this specific path slice should be unclickable
          const isUnclickable = unclickableRoutes.includes(name);

          const displayName =
            routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1);

          return (
            <li className="flex items-center gap-2 lg:gap-4" key={routeTo}>
              <MdArrowForwardIos
                className=" w-2 h-2 text-[#191C1D]/60 dark:text-[#C7C4D8]/60"
                aria-hidden="true"
              />
              {isLast || isUnclickable ? (
                <span className={`${textClasses}`} aria-current="page">
                  {displayName}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className={`${textClasses}  hover:text-primary`}
                >
                  {displayName}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
