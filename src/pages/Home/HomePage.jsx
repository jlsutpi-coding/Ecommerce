import React, { useEffect, useState } from "react";
import HeroTitleSection from "./HeroTitleSection";
import CardsSection from "./CardsSection";
import CategorySection from "./CategorySection";

const HomePage = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="px-8 mx-auto">
      <HeroTitleSection />
      <div className="flex justify-center gap-12">
        <CategorySection products={products} />
        <CardsSection products={products} />
      </div>
    </div>
  );
};

export default HomePage;
