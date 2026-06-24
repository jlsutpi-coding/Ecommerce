import { useSelector } from "react-redux";

import ProductPagination from "../pages/Home/ProductPagination";
import ProductCard from "./ProductCard";
import ProductsSkeleton from "./ProductsSkeleton";

const CardsSection = ({ productsToshow, page }) => {
  const { productsTotal, limit, productsStatus } = useSelector(
    (state) => state.products,
  );

  const totalPages = Math.ceil(productsTotal / limit);

  if (page === "home" && productsStatus === "pending") {
    return (
      <div className=" grow">
        <ProductsSkeleton page={page} />
      </div>
    );
  }
  return (
    <div className=" grow">
      <div
        className={`${
          page === "home"
            ? "grid-cols-2 md:grid-cols-2 lg:grid-cols-3 "
            : "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        } mb-10 items-start grid  gap-x-4 gap-y-4 md:gap-y-8 lg:gap-x-8 lg:gap-y-12`}
      >
        {productsToshow?.slice(0, 20).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {page === "home" && totalPages > 0 && (
        <ProductPagination
          productsTotal={productsTotal}
          totalPages={page === "home" ? totalPages : 0}
        />
      )}
    </div>
  );
};

export default CardsSection;
