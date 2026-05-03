import { useState } from "react";
import ProductPagination from "../pages/Home/ProductPagination";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

const CardsSection = ({ productsToshow, page }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { productsTotal, limit } = useSelector((state) => state.products);
  const totalPages = Math.ceil(productsTotal / limit);

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
        setCurrentPage={setCurrentPage}
        totalPages={page === "home" ? totalPages : 0}
      />
    </div>
  );
};

export default CardsSection;
