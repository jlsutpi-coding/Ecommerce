import React from "react";

import { FaRegUserCircle } from "react-icons/fa";

import HeaderIconButton from "./HeaderIconButton";

const HeaderUserIcon = () => {
  return (
    <div>
      <HeaderIconButton
        icon={
          <FaRegUserCircle className="w-7  h-7   dark:text-[#C0C1FF] dark-transition group-hover:text-primary" />
        }
      ></HeaderIconButton>
    </div>
  );
};

export default HeaderUserIcon;
