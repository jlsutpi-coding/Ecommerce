import React, { useEffect, useState } from "react";
import HeroTitleSection from "./HeroTitleSection";
import CardsSection from "./CardsSection";
import CategorySection from "./CategorySection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";

const HomePage = () => {
  const { products, status, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);
  console.log(products, " form redux");

  return (
    <div className="pt-32 pb-20 max-w-360 mx-auto px-8">
      <HeroTitleSection />
      <div className="flex flex-col lg:flex-row  gap-12">
        <CategorySection products={products} />
        <CardsSection products={products} />
      </div>
    </div>
  );
};

export default HomePage;
