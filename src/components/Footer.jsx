import { Link } from "react-router";

import { FiMail } from "react-icons/fi";
import { IoShareSocial } from "react-icons/io5";

const Footer = () => {
  const footerLinks = [
    { name: "Terms of Service", path: "/terms" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Shipping & Returns", path: "/shipping-returns" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="dark-transition py-6 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12 bg-[#F3F4F5] dark:bg-[#060E20] flex-col lg:flex-row flex items-center justify-center lg:justify-between">
      <div className="text-center lg:text-start ">
        <h4 className="font-bold text-[18px] leading-7 dark-transition font-manrope text-[#191C1D] dark:text-[#DAE2FD]">
          Indigo
        </h4>
        <span className="font-inter font-normal text-xs lg:text-[14px] leading-5 tracking-[0.34px] dark-transition text-[#191C1D]/50 dark:text-[#C7C4D8]">
          Curating the intersection of utility and <br /> beauty <br /> for the
          modern aesthetic.
        </span>
      </div>
      <ul className="flex flex-col lg:flex-row mt-6 gap-3 justify-center items-center lg:gap-8">
        {footerLinks.map((item) => {
          return (
            <Link
              key={item.name}
              to={item.path}
              className="hover:underline underline-offset-5 decoration-1 dark-transition decoration-[#191C1D]/50 dark:decoration-[#C7C4D8]/50"
            >
              <li className="font-inter font-normal text-[12px] lg:text-[14px] leading-5 tracking-[0.35px] text-[#191C1D]/50 dark-transition dark:text-[#C7C4D8]">
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="flex flex-col gap-4 items-center mt-6 lg:items-end">
        <div className="flex  items-center gap-4">
          <button className="cursor-pointer rounded-full dark:border transition-all duration-300 dark:border-[#464555]/20 p-2 shadow-sm hover:scale-105 bg-white dark:bg-[#060E20] dark:text-[#C7C4D8] text-[#191C1D]">
            <IoShareSocial className=" text-lg lg:text-xl" />
          </button>
          <button className="cursor-pointer rounded-full dark:border dark:border-[#464555]/20 p-2 shadow-sm hover:scale-105 transition-all duration-300 bg-white text-[#191C1D] dark:bg-[#060E20] dark:text-[#C7C4D8]">
            <FiMail className="text-lg lg:text-xl" />
          </button>
        </div>
        <div>
          <span className="font-inter font-normal text-[12px] lg:text-[14px] leading-5 tracking-[0.35px] dark-transition text-[#191C1D]/50 dark:text-[#C0C1FF]">
            &copy; 2024 Indigo Archive. All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
