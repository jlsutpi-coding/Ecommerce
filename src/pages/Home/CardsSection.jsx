import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const CardsSection = () => {
  const { filteredItems, products } = useSelector((state) => state.products);

  if (!products || !filteredItems)
    return <p> No prodcuts available at the moment.</p>;

  const productsToshow = filteredItems.length > 0 ? filteredItems : products;

  return (
    <div className=" cursor-pointer flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 ">
      {productsToshow.slice(0, 20).map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardsSection;
