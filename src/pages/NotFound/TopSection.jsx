import React from "react";
import { MdFolderOff } from "react-icons/md";

const TopSection = () => {
  return (
    <div className=" relative">
      <div className=" absolute rounded-full -top-12 -left-12 w-24 h-24 opacity-50 bg-[#F3F4F5] ">
        {" "}
      </div>
      <div className=" w-32 h-32  rounded-xl bg-[#3F51B5]/10 absolute  -bottom-8 -right-20 rotate-12"></div>
      <div>
        <span className="text-[12rem] font-extrabold  leading-64 tracking-[-12.4px] text-[#D9DADB] font-manrope opacity-40">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className=" w-48 h-64  rotate-3 shadow-2xl overflow-hidden border border-[#c5c5d4]/10  flex flex-col gap-3 p-4 rounded-lg bg-white">
            <div className=" flex justify-center items-center grow bg-[#F3F4F5]">
              <MdFolderOff className="w-8 h-8 text-[#D9DADB]" />
            </div>
            <div className=" flex flex-col gap-2">
              <div className=" w-[80%] h-2 rounded-sm bg-[#D9DADB]"></div>
              <div className=" w-[50%] h-2 rounded-sm bg-[#D9DADB]/50"></div>
              <div className=" w-[60%] h-2 rounded-sm bg-[#D9DADB]/30"></div>
            </div>
            <div>
              <div className=" mt-1.75 w-[20%] bg-[#24389C]/20 h-2 rounded-sm"></div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default TopSection;
