import { useState } from "react";
import ProductPagination from "../pages/Home/ProductPagination";
import ProductCard from "./ProductCard";

const CardsSection = ({ productsToshow, page }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        className={` ${page === "home" ? " grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-4"} mb-10 items-start grid gap-x-8 gap-y-12 `}
      >
        {productsToshow?.slice(0, 20).map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      <ProductPagination
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
      />
    </div>
  );
};

export default CardsSection;
