import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const CardsSection = () => {
  const [porducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        console.log(data, "data");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  console.log(porducts);
  return (
    <div className=" cursor-pointer shrink grid grid-cols-3 gap-x-8 gap-y-12 min-w-228 ">
      {porducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default CardsSection;
