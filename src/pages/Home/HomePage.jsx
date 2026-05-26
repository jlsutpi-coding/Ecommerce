import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import CardsSection from "../../components/CardsSection";
import CategorySection from "./CategorySection";
import TitleSection from "../../components/TitleSection";

const HomePage = () => {
  const { filteredItems, products } = useSelector((state) => state.products);

  const productsToshow = filteredItems?.length > 0 ? filteredItems : products;

  return (
    <div className="pt-22 lg:pt-32 md:px-6 px-4 lg:px-8 xl:px-12 pb-10 lg:pb-20 max-w-screen-2xl mx-auto">
      <TitleSection
        title="Curated Objects"
        description="A meticulous selection of rare finds and everyday essentials, chosen for their enduring quality and design integrity."
      />
      <div className="flex flex-col lg:flex-row  gap-4 md:gap-8 lg:gap-12 lg:mb-10">
        <CategorySection />
        <CardsSection productsToshow={productsToshow} page={"home"} />
      </div>
    </div>
  );
};

export default HomePage;
