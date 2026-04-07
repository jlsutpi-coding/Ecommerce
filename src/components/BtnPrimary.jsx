const BtnPrimary = ({
  bg_color = "bg-primary",
  text_color = "text-white",
  aditionnal,
  children,
  onBtnClick,
  font_family = "font-manrope",
  text_size = "text-sm",
}) => {
  return (
    <button
      onClick={onBtnClick}
      className={` w-full flex items-center justify-center ${font_family} cursor-pointer gap-2 ${bg_color} hover:brightness-110 ${text_color} py-3.5 px-4 rounded-lg  font-bold ${text_size} transition-all duration-300  active:scale-[0.98] ${aditionnal}`}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
