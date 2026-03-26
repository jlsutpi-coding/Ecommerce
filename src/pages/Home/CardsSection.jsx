import ProductCard from "./ProductCard";

const CardsSection = ({ products }) => {
  return (
    <div className=" cursor-pointer shrink grid grid-cols-3 gap-x-8 gap-y-12 min-w-228 ">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardsSection;
