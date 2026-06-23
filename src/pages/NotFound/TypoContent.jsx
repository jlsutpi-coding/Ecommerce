const TypoContent = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <h2 className="font-manrope  dark:text-[#DAE2FD] text-[#191C1D] dark-transition text-3xl md:text-4xl xl:text-5xl font-extrabold leading-12 tracking-[-1.2px]">
        Lost in the Archive?
      </h2>
      <p className="text-center font-normal font-inter text-lg text-[#565C84]/80 leading-7.25">
        The page you're looking for might have been moved, renamed, or is <br />
        temporarily unavailable.
      </p>
    </div>
  );
};

export default TypoContent;
