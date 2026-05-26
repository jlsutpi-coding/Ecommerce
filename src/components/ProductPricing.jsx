const ProductPricing = ({ product, page }) => {
  const { price, discountPercentage } = product;

  // Calculate discount percentage
  const discountAmount = Math.round(price * discountPercentage) / 100;
  const finalPrice = price - discountAmount;

  return (
    <>
      <div className="flex items-baseline gap-2">
        <span
          aria-label="Discounted price"
          className={`
            dark-transition dark:text-[#DAE2FD] font-inter  
             ${
               page === "detail"
                 ? "text-3xl tracking-normal leading-9 text-[#191c1d] font-bold mb-3 md:mb-6 lg:mb-10"
                 : "lg:text-base text-sm font-medium leading-6 tracking-normal   text-[#454652]"
             }  `}
        >
          ${finalPrice.toFixed(2)}
        </span>
        <span
          aria-label="Original price"
          className={`text-slate-400 line-through dark-transition dark:text-[#464555] font-normal ${page === "detail" ? " text-lg" : " text-xs lg:text-sm "}`}
        >
          ${price.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default ProductPricing;
