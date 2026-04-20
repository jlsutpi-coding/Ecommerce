import React from "react";

import { MdFolderOff } from "react-icons/md";
import TopSection from "./TopSection";

const NotFoundPage = () => {
  return (
    <div className=" flex justify-center items-center my-24 mx-6">
      <div className=" max-w-4xl  flex flex-col items-center  grow  mt-40">
        <TopSection />
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default NotFoundPage;
