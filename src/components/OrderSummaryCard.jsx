import { Link } from "react-router";

import PriceDisplay from "./PriceDisplay";
import ImageUrl from "./ImageUrl";

const OrderSummaryCard = ({ cart }) => {
  const {
    id,
    title,
    thumbnail,
    category,
    discountPercentage,
    discountedTotal,
    price,
    quantity,
  } = cart;

  return (
    <div className="flex m-0.5 gap-2 md:gap-6 lg:gap-8  dark-transition  dark:bg-[#131b2e] shadow-sm p-3 md:p-4 lg:p-6">
      <Link to={`/products/${id}`} className="shrink-0  ">
        <ImageUrl
          src={thumbnail}
          alt={title}
          containerClasses="w-30 lg:w-50 rounded-lg relative h-35 overflow-hidden"
        />
      </Link>

      <div className=" grow flex flex-col   py-2">
        <div className="w-full flex justify-between items-start">
          <div>
            <h3 className="text-lg lg:text-xl font-bold mb-1 font-manrope dark-transition dark:text-[#DAE2FD]">
              {title}
            </h3>
            <p className="font-inter dark-transition dark:text-[#FFB695] ">
              {category}
            </p>
            <p className="font-inter dark-transition mt-2 dark:text-[#DAE2FD] ">
              Quantity : {quantity}
            </p>
          </div>
        </div>
        <div className="mt-2 lg:mt-4 flex flex-row items-center justify-between">
          <span className=" bg-[#3F51B5] rounded-full font-inter text-[#CACFFF] text-[10px] lg:text-xs  lg:leading-4 py-1 px-2 lg:px-3">
            {discountPercentage} %OFF
          </span>
          <PriceDisplay discountedTotal={discountedTotal} price={price} />
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
