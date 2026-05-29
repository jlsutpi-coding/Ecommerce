const BtnPrimary = ({
  children,
  onBtnClick,
  disabled = false,
  type = "button",
  bg_color = "bg-primary",
  text_color = "text-white",
  hover = "hover:brightness-110",
  font_family = "font-manrope",
  text_size = "lg:text-sm text-xs",
  additional = "",
}) => {
  return (
    <button
      type={type}
      onClick={!disabled ? onBtnClick : undefined}
      disabled={disabled}
      className={`
        dark-transition
        w-full flex items-center  justify-center gap-2
        lg:py-3.5 py-1.5 px-2 lg:px-4 rounded-lg 
        font-semibold  lg:font-bold 
        transition-all duration-300 
        ${font_family} 
        ${
          disabled
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer active:scale-[0.98]"
        } 
        ${bg_color}  
        ${text_color}
        ${hover}
        ${text_size}
        ${additional}`}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
