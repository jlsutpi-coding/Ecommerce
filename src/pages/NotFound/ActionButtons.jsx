import React from "react";
import BtnPrimary from "../../components/BtnPrimary";
import { Link } from "react-router";

const ActionButtons = () => {
  return (
    <div className=" flex justify-center items-center gap-6">
      <Link to={"/"}>
        <BtnPrimary aditionnal={"px-10 py-4"}>
          <span className=" ">Back to Home</span>
        </BtnPrimary>
      </Link>
      <Link to={"/"}>
        <button className=" active:scale-[0.98] cursor-pointer  text-primary px-10 py-4 rounded-lg font-inter font-semibold text-[16px] leading-6 border border-[#c5c5d4]/20 hover:bg-[#f3f4f5] ">
          Browse New Arrivals
        </button>
      </Link>
    </div>
  );
};

export default ActionButtons;
