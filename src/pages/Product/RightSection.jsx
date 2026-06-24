import StarRating from "./StarRating";
import ProductPricing from "../../components/ProductPricing";
import ProductActions from "./ProductActions";
import ProductDescription from "./ProductDescription";
import ProductTrustBadges from "./ProductTrustBadges";
import ProductHeading from "./ProductHeading";

const RightSection = ({ product }) => {
  const {
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
      <div className="col-span-1 md:col-span-3 lg:col-span-5 flex flex-col  gap-6 md:gap-8 lg:gap-10 w-full">
        <ProductHeading
          reviews={reviews}
          title={title}
          category={category}
          rating={rating}
        />
        <div className="w-full flex font-inter flex-col gap-0 lg:gap-2">
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
