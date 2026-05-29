const ProductDescription = ({ description }) => {
  return (
    <div className=" mb-4 md:mb-8 lg:mb-12  w-full  lg:max-w-md xl:max-w-lg flex flex-col gap-2 md:gap-4 lg:gap-8">
      <div>
        <span className="text-primary font-inter text-sm leading-5 tracking-[1.4px]">
          DESCRIPTION
        </span>
      </div>
      <p className="font-inter font-normal leading-6.5 text-[#454652] dark:text-[#C7C4D8] dark-transition text-base">
        {description}
      </p>
    </div>
  );
};

export default ProductDescription;
