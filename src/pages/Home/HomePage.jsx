import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import HeroTitleSection from "./HeroTitleSection";
import CardsSection from "../../components/CardsSection";
import CategorySection from "./CategorySection";
import ProductPagination from "./ProductPagination";
import { useNavigate } from "react-router";

const HomePage = () => {
  const { filteredItems, productsStatus, productsError, products } =
    useSelector((state) => state.products);

  const productsToshow = filteredItems?.length > 0 ? filteredItems : products;

  return (
    <div className=" pt-22 lg:pt-32 md:px-6 px-4 lg:px-8 pb-20 max-w-360 mx-auto ">
      <HeroTitleSection />
      <div className="flex flex-col lg:flex-row  gap-4 md:gap-8 lg:gap-12 mb-10">
        <CategorySection />
        <CardsSection productsToshow={productsToshow} page={"home"} />
      </div>
    </div>
  );
};

export default HomePage;
