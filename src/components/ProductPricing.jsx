const ProductPricing = ({ product, page }) => {
  const { price, discountPercentage } = product;

  // Calculate discount percentage
  const discountAmount = Math.round(price * discountPercentage) / 100;
  const finalPrice = price - discountAmount;

  return (
    <>
      <div className="flex items-baseline gap-2 ">
        <span
          className={`
            dark-transition dark:text-[#DAE2FD] font-inter  
             ${
               page === "detail"
                 ? " text-2xl lg:text-3xl    text-[#191c1d] font-bold mb-10  "
                 : "lg:text-base text-sm font-medium leading-6 tracking-[0px]   text-[#454652]"
             }  `}
        >
          ${finalPrice.toFixed(2)}
        </span>
        <span className=" text-xs lg:text-sm font-normal text-slate-400 line-through dark-transition dark:text-[#464555]">
          ${price.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default ProductPricing;
