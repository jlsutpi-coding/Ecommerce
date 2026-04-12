import { Link } from "react-router";

import { FiMail } from "react-icons/fi";
import { IoShareSocial } from "react-icons/io5";

const Footer = () => {
  const footerLinks = [
    "Terms of Service",
    "Privacy Policy",
    "Shipping & Returns",
    "Contact",
  ];
  return (
    <div className="   py-16 px-12 bg-[#F3F4F5] flex items-center justify-between  ">
      <div>
        <h4 className=" font-bold text-[18px] leading-7 font-manrope text-[#191C1D]">
          {" "}
          Indigo
        </h4>
        <span className=" font-inter font-normal text-[14px] leading-5 tracking-[0.34px] text-[#191C1D]/50">
          Curating the intersection of utility and <br /> beauty <br /> for the
          modern aesthetic.
        </span>
      </div>
      <ul className=" flex justify-center items-center gap-8 ">
        {footerLinks.map((item, index) => {
          return (
            <Link
              key={index}
              className=" hover:underline underline-offset-5 decoration-1 decoration-[#191C1D]/50"
            >
              <li className=" font-inter font-normal text-[14px] leading-5 tracking-[0.35px] text-[#191C1D]/50">
                {item}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className=" flex flex-col gap-4 items-end ">
        <div className=" flex  items-center gap-4">
          <button className=" cursor-pointer rounded-full p-2 shadow-sm hover:scale-105 transition-transform bg-white text-[#191C1D] ">
            <IoShareSocial className="text-xl" />
          </button>
          <button className=" cursor-pointer rounded-full p-2 shadow-sm hover:scale-105 transition-transform bg-white text-[#191C1D] ">
            <FiMail className=" text-xl" />
          </button>
        </div>
        <div>
          <span className=" font-inter font-normal text-[14px] leading-5 tracking-[0.35px] text-[#191C1D]/50">
            &copy; 2024 Indigo Archive. All rights reserved.
          </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
