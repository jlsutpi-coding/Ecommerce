const HeroTitleSection = () => {
  return (
    <div className="  flex flex-col  gap-1 md:gap-2 lg:gap-4  mb-5 md:mb-10 lg:mb-16 ">
      <h1 className=" dark:text-[#DAE2FD] dark-transition font-extrabold font-manrope text-[28px] md:text-[38px]  lg:text-[48px] leading-12 tracking-[-2.4px] text-[#191C1D]">
        Curated Objects
      </h1>
      <div className="max-w-xl">
        <p className="text-[#454652] dark-transition dark:text-[#C7C4D8] font-manrope text-[14px] lg:text-[18px] font-normal leading-5 lg:leading-7 max-w-128.75">
          A meticulous selection of rare finds and everyday essentials, chosen
          for their enduring quality and design integrity.
        </p>
      </div>
    </div>
  );
};

export default HeroTitleSection;
