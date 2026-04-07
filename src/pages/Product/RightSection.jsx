import StarRating from "./StarRating";
import ProductPricing from "../../components/ProductPricing";
import ProductActions from "./ProductActions";
import ProductDescription from "./ProductDescription";
import ProductTrustBadges from "./ProductTrustBadges";

const RightSection = ({ product }) => {
  const {
    id,
    category,
    title,
    rating,
    description,
    reviews,
    warrantyInformation,
    shippingInformation,
  } = product;

  return (
    <>
      <div className="lg:col-span-5 flex flex-col gap-4 ">
        <div className="flex flex-col gap-2 pb-6 ">
          <p className="font-semibold uppercase text-[12px] text-primary  font-inter leading-4 tracking-[2.4px]">
            {category}
          </p>
          <h2 className="text-start font-manrope font-extrabold text-[48px] leading-12 tracking-[-1.2px] text-[#191C1D]">
            {title}
          </h2>
          <div className=" flex items-center gap-4">
            <StarRating rating={rating} />
            <div className=" text-[#C5C5D4]/30">|</div>
            <div className=" font-inter font-normal leading-5 text-[14px] text-[#757684]">
              {reviews.length} Reviews
            </div>
          </div>
        </div>

        <div className="flex font-inter flex-col gap-2 mb-8">
          <ProductPricing product={product} page={"detail"} />
          <ProductTrustBadges
            shipping={shippingInformation}
            warranty={warrantyInformation}
          />
        </div>

        <ProductActions product={product} />

        <ProductDescription description={description} />
      </div>
    </>
  );
};

export default RightSection;
