const ProductDescription = ({ description }) => {
  return (
    <div className=" mb-12  w-114 flex flex-col gap-8 pt-8">
      <div className="">
        <span className="  text-primary font-inter text-[14px] leading-5 tracking-[1.4px]">
          DESCRIPTION
        </span>
      </div>
      <p className=" font-inter font-normal leading-6.5 text-[#454652] text-[16px]">
        {description}
      </p>
    </div>
  );
};

export default ProductDescription;
