import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const CardsSection = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className=" cursor-pointer flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 ">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardsSection;
