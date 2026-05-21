const TitleSection = ({ title, description }) => {
  return (
    <div className=" mb-6 md:mb-9 lg:mb-12">
      <h1 className="font-manrope dark:text-[#DAE2FD] text-[#191C1D] dark-transition  text-3xl md:text-4xl xl:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
        {title}
      </h1>
      <p className="text-[#454652] dark-transition dark:text-[#C7C4D8] font-inter  max-w-xl text-sm md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

export default TitleSection;
