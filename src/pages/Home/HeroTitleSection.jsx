import React from "react";

const HeroTitleSection = () => {
  return (
    <div className=" flex flex-col gap-4 pt-20 mb-16 ">
      <h1 className=" font-extrabold text-[48px] leading-12 tracking-[-2.4px] text-[#191C1D]">
        Curated Objects
      </h1>
      <div className="max-w-xl">
        <p className="text-[#454652] text-[18px] font-normal leading-7 max-w-128.75">
          A meticulous selection of rare finds and everyday essentials, chosen
          for their enduring quality and design integrity.
        </p>
      </div>
    </div>
  );
};

export default HeroTitleSection;
