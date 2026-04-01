import { MdOutlineDeliveryDining, MdVerified } from "react-icons/md";

const ProductTrustBadges = ({ shipping, warranty }) => {
  return (
    <div className=" p-6 bg-[#f3f4f5] rounded-xl border border-indigo-50/50">
      <div className="flex gap-4 items-start mb-4">
        <MdOutlineDeliveryDining className="text-primary w-8 h-8" />

        <div>
          <p className="text-sm font-bold">Complimentary Shipping</p>
          <p className="text-xs text-slate-500">{shipping}</p>
        </div>
      </div>
      <div className="flex gap-4 items-start">
        <MdVerified className="text-primary w-8 h-8" />

        <div>
          <p className="text-sm font-bold">{warranty}</p>
          <p className="text-xs text-slate-500">
            Every archive piece is certified for quality and longevity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTrustBadges;
