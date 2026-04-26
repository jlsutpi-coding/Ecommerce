const ProductPricing = ({ product, page }) => {
  const { price, discountPercentage } = product;

  // Calculate discount percentage
  const discountAmount = Math.round(price * discountPercentage) / 100;
  const finalPrice = price - discountAmount;

  return (
    <>
      <div className="flex items-baseline gap-2 ">
        <span
          className={` ${page === "detail" ? "text-3xl text-[#191c1d] font-bold mb-10  " : "font-inter text-[16px] font-medium leading-6 tracking-[0px] transition-colors duration-300 dark:text-[#DAE2FD]  text-[#454652]"}   `}
        >
          ${finalPrice.toFixed(2)}
        </span>
        <span className="text-sm font-normal text-slate-400 line-through transition-colors duration-300 dark:text-[#464555]">
          ${price.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default ProductPricing;
