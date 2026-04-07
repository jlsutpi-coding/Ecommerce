const BtnPrimary = ({
  bg_color,
  text_color,
  aditionnal,
  children,
  onBtnClick,
}) => {
  return (
    <button
      onClick={() => onBtnClick()}
      className={` w-full flex items-center justify-center cursor-pointer gap-2 ${bg_color} hover:${bg_color}/90 ${text_color} py-3 px-4 rounded-lg font-headline font-bold text-sm transition-all duration-300  active:scale-[0.98] ${aditionnal}`}
    >
      {children}
    </button>
  );
};

export default BtnPrimary;
