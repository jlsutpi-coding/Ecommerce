import { Link } from "react-router";

import BtnPrimary from "../../components/BtnPrimary";

const ActionButtons = () => {
  return (
    <div className=" flex justify-center items-center gap-6">
      <Link to={"/"}>
        <BtnPrimary additional={"px-10 py-4"}>Back to Home</BtnPrimary>
      </Link>
      <Link to={"/"}>
        <BtnPrimary
          bg_color={"bg-[#C5C5D4]/20"}
          hover=" hover:bg-[#f3f4f5] dark:hover:bg-slate-800"
          text_color="text-primary dark:text-white"
          additional="shadow-lg border px-10 py-4 border-[#C5C5D4]/20 dark:border-white/10"
        >
          Browse New Arrivals
        </BtnPrimary>
      </Link>
    </div>
  );
};

export default ActionButtons;
