import React from "react";
import HeroTitleSection from "./HeroTitleSection";
import CardsSection from "./CardsSection";
import CategorySection from "./CategorySection";

const HomePage = () => {
  return (
    <div className="px-8 mx-auto">
      <HeroTitleSection />
      <div className="flex justify-center gap-12">
        <CategorySection />
        <CardsSection />
      </div>
    </div>
  );
};

export default HomePage;
