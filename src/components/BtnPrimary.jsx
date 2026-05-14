const BtnPrimary = ({
  bg_color = "bg-primary",
  text_color = "text-white",
  additional = "",
  children,
  onBtnClick,
  disabled = false,
  font_family = "font-manrope",
  text_size = "lg:text-sm text-xs",
}) => {
  return (
    <button
      onClick={onBtnClick}
      disabled={disabled}
      className={`
        w-full flex items-center  justify-center gap-2
        ${font_family} 
        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:brightness-110 active:scale-[0.98]"
        } 
        ${bg_color}  
        ${text_color}
        lg:py-3.5 py-1.5 px-2 lg:px-4 rounded-lg 
        font-semibold  lg:font-bold 
        ${text_size}
        transition-all duration-300 
        ${additional}`}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
