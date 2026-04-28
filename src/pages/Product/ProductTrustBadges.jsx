import { MdOutlineDeliveryDining, MdVerified } from "react-icons/md";

const ProductTrustBadges = ({ shipping, warranty }) => {
  return (
    <div className=" p-6 bg-[#f3f4f5] dark:bg-[#131B2E] rounded-xl border dark:border-white/10 border-indigo-50/50">
      <div className="flex gap-4 items-start mb-4">
        <MdOutlineDeliveryDining className="text-primary w-8 h-8" />

        <div>
          <p className="text-sm dark:text-[#DAE2FD] dark-transition font-bold">
            Complimentary Shipping
          </p>
          <p className="text-xs text-slate-500">{shipping}</p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <MdVerified className="text-primary w-8 h-8" />

        <div>
          <p className="text-sm font-bold dark:text-[#DAE2FD] dark-transition">
            {warranty}
          </p>
          <p className="text-xs text-slate-500">
            Every archive piece is certified for quality and longevity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTrustBadges;
