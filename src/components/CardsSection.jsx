import ProductCard from "./ProductCard";

const CardsSection = ({ productsToshow, page }) => {
  console.log(productsToshow);
  return (
    <div
      className={` ${page === "home" ? " grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-4"} items-start grid gap-x-8 gap-y-12 `}
    >
      {productsToshow?.slice(0, 20).map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardsSection;
