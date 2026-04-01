import React, { useEffect } from "react";
import HeroTitleSection from "./HeroTitleSection";
import CardsSection from "./CardsSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import CategorySection from "./CategorySection";

const HomePage = () => {
  const { productsStatus, products } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchProducts());
    }
  }, [productsStatus, dispatch, fetchProducts]);

  if (productsStatus === "pending") return <p>Loading...</p>;
  if (productsStatus === "failed") return <p>Error: {error}</p>;
  console.log(products);
  if (products.length < 1) return null;

  return (
    <div className="pt-32 pb-20 max-w-360 mx-auto px-8">
      <HeroTitleSection />
      <div className="flex flex-col lg:flex-row  gap-12">
        <CategorySection />
        <CardsSection />
      </div>
    </div>
  );
};

export default HomePage;
