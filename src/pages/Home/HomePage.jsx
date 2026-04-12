import React, { useEffect } from "react";
import HeroTitleSection from "./HeroTitleSection";
import CardsSection from "../../components/CardsSection";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/productSlice";
import CategorySection from "./CategorySection";

const HomePage = () => {
  const { filteredItems, productsStatus, productsError, products } =
    useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (productsStatus === "idle") {
      console.log("Hi");
      dispatch(fetchProducts());
      console.log(products);
    }
  }, [productsStatus, dispatch]);

  if (productsStatus === "pending") return <p>Loading...</p>;
  if (productsStatus === "failed") return <p>productsError: {productsError}</p>;

  if (productsStatus === "succeeded" && products.length === 0) {
    return (
      <p className="mt-40 text-center">No products available at the moment.</p>
    );
  }

  const productsToshow = filteredItems.length > 0 ? filteredItems : products;
  console.log(productsToshow.length, productsStatus);

  return (
    <div className="pt-32 pb-20 max-w-360 mx-auto px-8">
      <HeroTitleSection />
      <div className="flex flex-col lg:flex-row  gap-12">
        <CategorySection />
        <CardsSection productsToshow={productsToshow} />
      </div>
    </div>
  );
};

export default HomePage;
