import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import HeroTitleSection from "./HeroTitleSection";
import CardsSection from "../../components/CardsSection";
import CategorySection from "./CategorySection";
import ProductPagination from "./ProductPagination";

const HomePage = () => {
  const { filteredItems, productsStatus, productsError, products } =
    useSelector((state) => state.products);

  if (productsStatus === "failed") return <p>productsError: {productsError}</p>;

  if (productsStatus === "successed" && products.length === 0) {
    return (
      <p className="mt-40 text-center h-screen dark-transition dark:bg-[#0B1326]">
        No products available at the moment.
      </p>
    );
  }

  const productsToshow = filteredItems.length > 0 ? filteredItems : products;

  return (
    <div className="pt-32 px-8 pb-20 max-w-360 mx-auto ">
      <HeroTitleSection />
      <div className="flex flex-col lg:flex-row  gap-12 mb-10">
        <CategorySection />
        <CardsSection productsToshow={productsToshow} page={"home"} />
      </div>
    </div>
  );
};

export default HomePage;
