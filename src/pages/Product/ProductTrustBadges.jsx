import { MdOutlineDeliveryDining, MdVerified } from "react-icons/md";

const ProductTrustBadges = ({ shipping, warranty }) => {
  const iconClasses = "text-primary w-6 h-6 lg:w-8 lg:h-8";
  const titleClasses = "text-sm font-bold dark:text-[#DAE2FD] dark-transition";

  return (
    <div className=" p-4 lg:p-6 bg-[#f3f4f5] dark:bg-[#131B2E] rounded-xl border dark:border-white/10 border-indigo-50/50">
      <div className="flex gap-2 lg:gap-4 items-start mb-2 lg:mb-4">
        <MdOutlineDeliveryDining className={iconClasses} />

        <div>
          <p className={titleClasses}>Complimentary Shipping</p>
          <p className="text-xs text-slate-500">{shipping}</p>
        </div>
      </div>
      <div className="flex gap-2 lg:gap-4 items-start">
        <MdVerified className={iconClasses} />

        <div>
          <p className={titleClasses}>{warranty}</p>
          <p className="text-xs text-slate-500">
            Every archive piece is certified for quality and longevity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTrustBadges;
